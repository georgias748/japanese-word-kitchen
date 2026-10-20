const STORAGE_KEY = "japanese-word-kitchen-progress";
const DEFAULT_PROGRESS = {
  customWords: [],
  missedWords: [],
  languageOrder: "en-first",
  factCycles: {},
};

function getStorage() {
  try {
    return globalThis.localStorage;
  } catch (error) {
    console.error("Browser storage is unavailable.", error);
    return null;
  }
}

function isWordList(value) {
  return Array.isArray(value) && value.every((word) =>
    word &&
    typeof word.id === "string" &&
    typeof word.english === "string" &&
    typeof word.japanese === "string",
  );
}

function isFactCycles(value) {
  return value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.values(value).every((facts) =>
      Array.isArray(facts) && facts.every((fact) => typeof fact === "string"),
    );
}

function isProgress(value) {
  return value &&
    isWordList(value.customWords) &&
    isWordList(value.missedWords) &&
    ["en-first", "ja-first"].includes(value.languageOrder) &&
    isFactCycles(value.factCycles);
}

export function loadProgress(storage = getStorage()) {
  if (!storage) return { progress: { ...DEFAULT_PROGRESS }, storageAvailable: false };

  try {
    const saved = storage.getItem(STORAGE_KEY);
    if (saved === null) return { progress: { ...DEFAULT_PROGRESS }, storageAvailable: true };

    const parsed = JSON.parse(saved);
    if (!isProgress(parsed)) {
      throw new Error("Saved browser progress has an unexpected format.");
    }

    return { progress: parsed, storageAvailable: true };
  } catch (error) {
    console.error("Could not load saved browser progress.", error);
    return { progress: { ...DEFAULT_PROGRESS }, storageAvailable: false };
  }
}

export function saveProgress(progress, storage = getStorage()) {
  if (!storage) return false;

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (error) {
    console.error("Could not save browser progress.", error);
    return false;
  }
}
