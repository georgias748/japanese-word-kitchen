import assert from "node:assert/strict";
import test from "node:test";
import { DISHES } from "../data/dishes.js";
import { BUILT_IN_WORDS } from "../data/vocabulary.js";
import {
  createFactPicker,
  createSession,
  getDishOutcome,
  rateCurrentCard,
} from "../state/session.js";
import { rateMissedWord } from "../state/review.js";
import { validateVocabularyPair } from "../utils/vocabulary.js";

function stableRandom() {
  let seed = 17;
  return () => {
    seed = (seed * 48271) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function createTestSession() {
  return createSession({
    dishes: DISHES,
    builtInWords: BUILT_IN_WORDS,
    random: stableRandom(),
  });
}

test("a regular session selects three different dishes and assigns enough unique words", () => {
  const session = createTestSession();
  const dishIds = session.dishes.map(({ dish }) => dish.id);
  const wordIds = session.dishes.flatMap(({ cards }) => cards.map(({ word }) => word.id));

  assert.equal(session.dishes.length, 3);
  assert.equal(new Set(dishIds).size, 3);
  assert.equal(wordIds.length, new Set(wordIds).size);
  for (const item of session.dishes) {
    assert.equal(item.cards.length, item.dish.ingredients.length);
    assert.ok(item.cards.length === 3 || item.cards.length === 4);
  }
});

test("the 12 built-in pairs can fill a maximum-size session", () => {
  const fourStepDishes = DISHES.filter((dish) => dish.ingredients.length === 4).slice(0, 3);
  const session = createSession({
    dishes: fourStepDishes,
    builtInWords: BUILT_IN_WORDS,
    random: () => 0,
  });

  assert.equal(session.dishes.reduce((sum, item) => sum + item.cards.length, 0), 12);
});

test("custom words are assigned before built-in words without repeats", () => {
  const custom = [
    { id: "custom-a", english: "lantern", japanese: "提灯", source: "custom" },
    { id: "custom-b", english: "garden", japanese: "庭", source: "custom" },
  ];
  const session = createSession({
    dishes: DISHES,
    customWords: custom,
    builtInWords: BUILT_IN_WORDS,
    random: stableRandom(),
  });
  const assigned = session.dishes.flatMap(({ cards }) => cards.map(({ word }) => word));

  assert.deepEqual(assigned.slice(0, 2).map((word) => word.source), ["custom", "custom"]);
  assert.equal(new Set(assigned.map((word) => word.id)).size, assigned.length);
});

test("missed words can return in a later session without repeating an assigned pair", () => {
  const missed = { id: "mountain", english: "mountain", japanese: "山", source: "builtIn" };
  const session = createSession({
    dishes: DISHES,
    builtInWords: BUILT_IN_WORDS,
    missedWords: [missed],
    random: stableRandom(),
  });
  const assigned = session.dishes.flatMap(({ cards }) => cards.map(({ word }) => word.id));

  assert.equal(assigned.filter((id) => id === missed.id).length, 1);
});

test("rating 3 or 4 earns the next ingredient while rating 1 or 2 records a miss", () => {
  const session = createTestSession();
  const firstDish = session.dishes[0];
  const firstIngredient = firstDish.dish.ingredients[0];

  firstDish.cards[0].flipped = true;
  rateCurrentCard(session, 4);
  assert.equal(firstDish.earnedIngredients[0], firstIngredient);

  firstDish.cards[1].flipped = true;
  const missedWord = firstDish.cards[1].word;
  rateCurrentCard(session, 2);
  assert.ok(session.missedWords.some((word) => word.id === missedWord.id));
  assert.equal(firstDish.earnedIngredients.length, 1);
});

test("ratings require a flipped card and a score from one to four", () => {
  const session = createTestSession();

  assert.throws(() => rateCurrentCard(session, 4), /Flip the vocabulary card/);
  session.dishes[0].cards[0].flipped = true;
  assert.throws(() => rateCurrentCard(session, 5), /from 1 to 4/);
});

test("auntie mood follows the number of unfinished dishes", () => {
  const session = createTestSession();
  const [first, second, third] = session.dishes;

  assert.equal(getDishOutcome(session).mood, "upset");
  first.earnedIngredients = [...first.dish.ingredients];
  assert.equal(getDishOutcome(session).mood, "upset");
  second.earnedIngredients = [...second.dish.ingredients];
  assert.equal(getDishOutcome(session).mood, "neutral");
  third.earnedIngredients = [...third.dish.ingredients];
  assert.deepEqual(getDishOutcome(session), { unfinishedDishes: 0, mood: "happy" });
});

test("cultural facts do not repeat until a dish's fact list has been used", () => {
  const dish = DISHES[0];
  const nextFact = createFactPicker(() => 0);
  const firstCycle = dish.facts.map(() => nextFact(dish));

  assert.equal(new Set(firstCycle).size, dish.facts.length);
  assert.equal(nextFact(dish), firstCycle[0]);
});

test("vocabulary pairs require both languages and reject duplicates", () => {
  const pair = { id: "existing", english: "water", japanese: "水" };

  assert.deepEqual(validateVocabularyPair({ english: " sky ", japanese: "空 " }, [pair]), {
    ok: true,
    pair: { english: "sky", japanese: "空" },
  });
  assert.deepEqual(validateVocabularyPair({ english: "water", japanese: "水" }, [pair]), {
    ok: false,
    reason: "duplicate",
  });
  assert.deepEqual(validateVocabularyPair({ english: "water", japanese: " " }, []), {
    ok: false,
    reason: "missing-language",
  });
  assert.deepEqual(validateVocabularyPair(
    { english: "water", japanese: "水" },
    [pair],
    "existing",
  ), {
    ok: true,
    pair: { english: "water", japanese: "水" },
  });
});

test("review removes a word for ratings 3–4 but keeps it for ratings 1–2", () => {
  const words = [
    { id: "water", english: "water", japanese: "水" },
    { id: "mountain", english: "mountain", japanese: "山" },
  ];

  assert.equal(rateMissedWord(words, "water", 2).missedWords.length, 2);
  assert.deepEqual(rateMissedWord(words, "water", 3).missedWords.map((word) => word.id), ["mountain"]);
});
