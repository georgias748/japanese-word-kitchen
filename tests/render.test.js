import assert from "node:assert/strict";
import test from "node:test";
import { renderHome } from "../components/home.js";
import { renderReview } from "../components/review.js";
import { renderCounter } from "../components/reveal.js";
import { renderStudy } from "../components/study.js";
import { renderVocabularyManager } from "../components/vocab.js";
import { auntiesAtCounter, restaurantInterior } from "../components/restaurant.js";
import { DISHES } from "../data/dishes.js";
import { finalDishArtwork } from "../utils/render.js";

test("restaurant home frames the learner as chef and makes word management clear", () => {
  const home = renderHome();

  assert.match(home, /help the grandparents run their restaurant/);
  assert.match(home, /You're the chef/);
  assert.match(home, />Manage words</);
});

test("word manager lists custom pairs with add, edit, and remove actions", () => {
  const word = { id: "tea", english: "tea", japanese: "お茶" };
  const manager = renderVocabularyManager([word], [], null, "");

  assert.match(manager, /<h1>Manage your words<\/h1>/);
  assert.match(manager, /name="english"/);
  assert.match(manager, /Add this pair/);
  assert.match(manager, /tea/);
  assert.match(manager, /お茶/);
  assert.match(manager, /data-action="edit-word"/);
  assert.match(manager, /data-action="delete-word"/);
});

test("restaurant owners and auntie customers have visible necks and ears", () => {
  const restaurant = restaurantInterior();
  const aunties = auntiesAtCounter("happy");

  assert.equal((restaurant.match(/class="grandparent-neck"/g) ?? []).length, 2);
  assert.equal((restaurant.match(/class="grandparent-ear"/g) ?? []).length, 2);
  assert.equal((aunties.match(/class="auntie-neck"/g) ?? []).length, 3);
  assert.equal((aunties.match(/class="auntie-ear"/g) ?? []).length, 3);
});

test("counter ending says exactly how many dishes were missed for the aunties", () => {
  const messages = [
    "You missed no food for the aunties. They're happy!",
    "You missed one dish for the aunties.",
    "You missed two dishes for the aunties.",
    "You missed three dishes for the aunties.",
  ];

  for (let missedCount = 0; missedCount <= 3; missedCount += 1) {
    const dishes = DISHES.slice(0, 3).map((dish, index) => ({
      dish,
      earnedIngredients: index < missedCount ? [] : [...dish.ingredients],
    }));
    const counter = renderCounter({ dishes });

    assert.ok(counter.includes(messages[missedCount]));
    assert.doesNotMatch(counter, /kind, knowing|unfinished-count/);
  }
});

test("study screen keeps the dish heading without the extra tagline", () => {
  const study = renderStudy({
    dishes: [{
      dish: DISHES[0],
      cards: [{ word: { english: "rice", japanese: "ご飯" }, flipped: false }],
      cardIndex: 0,
      earnedIngredients: [],
    }],
    dishIndex: 0,
    languageOrder: "en-first",
  });

  assert.match(study, /おにぎり/);
  assert.match(study, /Onigiri/);
  assert.doesNotMatch(study, /dish-instruction|one step toward supper/);
});

test("flipped study and review cards offer Japanese pronunciation controls", () => {
  const word = { id: "cat", english: "cat", japanese: "ねこ" };
  const study = renderStudy({
    dishes: [{
      dish: DISHES[0],
      cards: [{ word, flipped: true }],
      cardIndex: 0,
      earnedIngredients: [],
    }],
    dishIndex: 0,
    languageOrder: "en-first",
  });
  const review = renderReview([word], "en-first", {
    words: [word],
    index: 0,
    flipped: true,
    complete: false,
  });

  for (const html of [study, review]) {
    assert.match(html, /data-action="speak-japanese"/);
    assert.match(html, /data-japanese="ねこ"/);
    assert.match(html, /Hear Japanese/);
  }
});

test("final-dish variants show earned ingredients and name only those still to add", () => {
  for (const dish of DISHES) {
    for (let count = 0; count <= dish.ingredients.length; count += 1) {
      const html = finalDishArtwork(dish, dish.ingredients.slice(0, count));
      const imageLabel = html.match(/aria-label="([^"]*)"/)?.[1] ?? "";
      const note = html.match(/class="ingredient-note"[^>]*>([^<]*)</)?.[1] ?? "";

      for (const ingredient of dish.ingredients.slice(0, count)) {
        assert.ok(imageLabel.includes(ingredient.name), `${dish.id} should show earned ${ingredient.name}`);
      }

      for (const ingredient of dish.ingredients.slice(count)) {
        assert.ok(!imageLabel.includes(ingredient.name), `${dish.id} should omit unearned ${ingredient.name}`);
        assert.ok(note.includes(ingredient.name), `${dish.id} should name unearned ${ingredient.name}`);
      }

      assert.equal(html.includes('class="ingredient-note"'), count < dish.ingredients.length);
      assert.ok(html.includes('class="dish-sparkles"'));
    }
  }
});
