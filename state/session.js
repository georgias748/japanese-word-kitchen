import { shuffle } from "../utils/shuffle.js";

export function createSession({
  dishes,
  builtInWords,
  customWords = [],
  missedWords = [],
  languageOrder = "en-first",
  random = Math.random,
}) {
  if (dishes.length < 3) {
    throw new Error("A study session needs at least three dishes.");
  }

  const selectedDishes = shuffle(dishes, random).slice(0, 3);
  const candidateWords = [
    ...shuffle(customWords, random),
    ...shuffle(missedWords, random),
    ...shuffle(builtInWords, random),
  ];
  const seenWordIds = new Set();
  const wordPool = candidateWords.filter((word) => {
    if (seenWordIds.has(word.id)) return false;
    seenWordIds.add(word.id);
    return true;
  });
  const requiredCards = selectedDishes.reduce(
    (total, dish) => total + dish.ingredients.length,
    0,
  );

  if (wordPool.length < requiredCards) {
    throw new Error(`A study session needs ${requiredCards} distinct vocabulary pairs.`);
  }

  let nextWord = 0;
  const selected = selectedDishes.map((dish) => {
    const cards = wordPool.slice(nextWord, nextWord + dish.ingredients.length);
    nextWord += dish.ingredients.length;
    return { dish, cards, earnedIngredients: [], cardIndex: 0 };
  });

  return {
    languageOrder,
    dishes: selected.map((item) => ({
      ...item,
      cards: item.cards.map((word) => ({ word, flipped: false, rating: null })),
    })),
    dishIndex: 0,
    missedWords: [],
    phase: "study",
  };
}

export function rateCurrentCard(session, rating) {
  if (!Number.isInteger(rating) || rating < 1 || rating > 4) {
    throw new Error("A card rating must be a whole number from 1 to 4.");
  }

  const currentDish = session.dishes[session.dishIndex];
  if (!currentDish || currentDish.cardIndex >= currentDish.cards.length) {
    throw new Error("There is no current vocabulary card to rate.");
  }

  const card = currentDish.cards[currentDish.cardIndex];
  if (!card.flipped) {
    throw new Error("Flip the vocabulary card before rating it.");
  }

  card.rating = rating;
  if (rating >= 3) {
    const ingredient = currentDish.dish.ingredients[currentDish.earnedIngredients.length];
    if (ingredient) currentDish.earnedIngredients.push(ingredient);
  } else if (!session.missedWords.some((word) => word.id === card.word.id)) {
    session.missedWords.push(card.word);
  }

  currentDish.cardIndex += 1;
  return currentDish.cardIndex === currentDish.cards.length ? "dish-complete" : "card-complete";
}

export function getDishOutcome(session) {
  const unfinishedDishes = session.dishes.filter(
    ({ dish, earnedIngredients }) => earnedIngredients.length < dish.ingredients.length,
  ).length;
  const mood = unfinishedDishes === 0 ? "happy" : unfinishedDishes === 1 ? "neutral" : "upset";

  return { unfinishedDishes, mood };
}

export function createFactPicker(random = Math.random, initialCycles = {}, onChange = () => {}) {
  const seenByDish = new Map(Object.entries(initialCycles));

  return function nextFact(dish) {
    const seen = seenByDish.get(dish.id) ?? [];
    const remaining = dish.facts.filter((fact) => !seen.includes(fact));
    const available = remaining.length > 0 ? remaining : dish.facts;
    const fact = available[Math.floor(random() * available.length)];

    seenByDish.set(dish.id, remaining.length > 0 ? [...seen, fact] : [fact]);
    onChange(Object.fromEntries(seenByDish));
    return fact;
  };
}
