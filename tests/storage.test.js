import assert from "node:assert/strict";
import test from "node:test";
import { DISHES } from "../data/dishes.js";
import { BUILT_IN_WORDS } from "../data/vocabulary.js";
import { createFactPicker, createSession } from "../state/session.js";
import { loadProgress, saveProgress } from "../utils/storage.js";

function createMemoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

const startingProgress = {
  customWords: [{ id: "custom-tea", english: "tea", japanese: "お茶", source: "custom" }],
  missedWords: [{ id: "built-in-water", english: "water", japanese: "水", source: "builtIn" }],
  languageOrder: "ja-first",
  factCycles: { ramen: ["A saved ramen fact"] },
};

test("progress loads and saves custom words, missed words, language, and fact cycles", () => {
  const storage = createMemoryStorage();

  assert.equal(saveProgress(startingProgress, storage), true);
  assert.deepEqual(loadProgress(storage), {
    progress: startingProgress,
    storageAvailable: true,
  });
});

test("missing, malformed, or unavailable browser storage falls back without blocking built-in study", () => {
  const empty = loadProgress(createMemoryStorage());
  assert.equal(empty.storageAvailable, true);
  assert.deepEqual(empty.progress, {
    customWords: [],
    missedWords: [],
    languageOrder: "en-first",
    factCycles: {},
  });

  const malformed = loadProgress(createMemoryStorage({
    "japanese-word-kitchen-progress": "{not json",
  }));
  assert.equal(malformed.storageAvailable, false);

  const unavailable = loadProgress(null);
  assert.equal(unavailable.storageAvailable, false);
  assert.doesNotThrow(() => createSession({
    dishes: DISHES,
    builtInWords: BUILT_IN_WORDS,
    ...unavailable.progress,
  }));
});

test("storage write failures are reported instead of appearing successful", () => {
  const failingStorage = {
    getItem: () => null,
    setItem: () => { throw new Error("quota exceeded"); },
  };

  assert.equal(saveProgress(startingProgress, failingStorage), false);
});

test("fact selection resumes its saved cycle and reports updated cycle state", () => {
  const dish = DISHES[0];
  const savedFacts = dish.facts.slice(0, 1);
  let updatedCycles;
  const nextFact = createFactPicker(() => 0, { [dish.id]: savedFacts }, (cycles) => {
    updatedCycles = cycles;
  });

  const selectedFact = nextFact(dish);
  assert.equal(selectedFact, dish.facts.find((fact) => !savedFacts.includes(fact)));
  assert.deepEqual(updatedCycles[dish.id], [...savedFacts, selectedFact]);
});
