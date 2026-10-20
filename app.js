import { renderHome, renderReviewScreen, renderVocabularyScreen } from "./components/home.js";
import { renderCounter, renderDishReveal, renderServed } from "./components/reveal.js";
import { renderStudy } from "./components/study.js";
import { DISHES } from "./data/dishes.js";
import { BUILT_IN_WORDS } from "./data/vocabulary.js";
import { rateMissedWord } from "./state/review.js";
import { createFactPicker, createSession, rateCurrentCard } from "./state/session.js";
import { speakJapanese } from "./utils/speech.js";
import { loadProgress, saveProgress } from "./utils/storage.js";
import { validateVocabularyPair } from "./utils/vocabulary.js";

const app = document.querySelector("#app");
const savedState = loadProgress();
const progress = savedState.progress;

let currentView = "home";
let languageOrder = progress.languageOrder;
let session = null;
let currentFact = "";
let servedTimer = null;
let customWords = progress.customWords;
let missedWords = progress.missedWords;
let factCycles = progress.factCycles;
let storageNotice = savedState.storageAvailable
  ? ""
  : "Browser storage is unavailable, so your changes may not be saved between visits.";
let editingWordId = null;
let vocabularyNotice = "";
let reviewState = { words: [], index: 0, flipped: false, complete: false };
let newWordNumber = 1;

function persistProgress() {
  progress.customWords = customWords;
  progress.missedWords = missedWords;
  progress.languageOrder = languageOrder;
  progress.factCycles = factCycles;
  storageNotice = saveProgress(progress)
    ? ""
    : "Your progress could not be saved in this browser. Built-in study is still available.";
}

const nextFact = createFactPicker(Math.random, factCycles, (updatedCycles) => {
  factCycles = updatedCycles;
  persistProgress();
});

function render() {
  if (currentView === "study") {
    app.innerHTML = renderStudy(session);
  } else if (currentView === "vocabulary") {
    app.innerHTML = renderVocabularyScreen({
      customWords,
      builtInWords: BUILT_IN_WORDS,
      missedWords,
      languageOrder,
      editingId: editingWordId,
      notice: vocabularyNotice,
    });
  } else if (currentView === "review") {
    app.innerHTML = renderReviewScreen({
      missedWords,
      customWords,
      languageOrder,
      reviewState,
    });
  } else if (currentView === "reveal") {
    const currentDish = session.dishes[session.dishIndex];
    app.innerHTML = renderDishReveal({
      dish: currentDish.dish,
      earnedIngredients: currentDish.earnedIngredients,
      fact: currentFact,
      isLastDish: session.dishIndex === session.dishes.length - 1,
    });
  } else if (currentView === "served") {
    app.innerHTML = renderServed();
  } else if (currentView === "counter") {
    app.innerHTML = renderCounter(session);
  } else {
    app.innerHTML = renderHome({ languageOrder, customWords, missedWords });
  }
  if (storageNotice) {
    app.insertAdjacentHTML(
      "afterbegin",
      `<p class="notice notice-error" role="status">${storageNotice}</p>`,
    );
  }
  app.focus({ preventScroll: true });
}

function startStudy() {
  languageOrder = app.querySelector("#language-order").value;
  persistProgress();
  try {
    session = createSession({
      dishes: DISHES,
      builtInWords: BUILT_IN_WORDS,
      customWords,
      missedWords,
      languageOrder,
    });
  } catch (error) {
    console.error("Could not start a study session.", error);
    app.insertAdjacentHTML(
      "afterbegin",
      '<p class="notice notice-error" role="alert">The kitchen could not prepare a session. Please try again.</p>',
    );
    return;
  }

  currentView = "study";
  render();
}

async function playJapanesePronunciation(button, status) {
  try {
    const result = await speakJapanese(button.dataset.japanese, {
      onStatus: (message) => {
        if (status) status.textContent = message;
      },
      onError: (error) => console.error("Could not play Japanese pronunciation.", error),
    });
    if (status) {
      status.textContent = result.ok
        ? "Playing Japanese pronunciation."
        : result.message;
    }
  } catch (error) {
    console.error("Could not check Japanese pronunciation support.", error);
    if (status) status.textContent = "The Japanese voice could not be checked. Please try again.";
  }
}

function handleAction(button) {
  const action = button.dataset.action;

  if (action === "speak-japanese") {
    const status = app.querySelector("[data-audio-status]");
    if (status) status.textContent = "Checking for a Japanese voice…";
    void playJapanesePronunciation(button, status);
    return;
  }

  if (action === "start-study") {
    startStudy();
    return;
  }

  if (action === "leave-study") {
    session = null;
    currentView = "home";
    render();
    return;
  }

  if (action === "open-vocabulary") {
    editingWordId = null;
    vocabularyNotice = "";
    currentView = "vocabulary";
    render();
    return;
  }

  if (action === "open-review") {
    reviewState = {
      words: [...missedWords],
      index: 0,
      flipped: false,
      complete: false,
    };
    currentView = "review";
    render();
    return;
  }

  if (action === "edit-word") {
    editingWordId = button.dataset.wordId;
    vocabularyNotice = "";
    currentView = "vocabulary";
    render();
    app.querySelector("#word-english")?.focus();
    return;
  }

  if (action === "delete-word") {
    customWords = customWords.filter((word) => word.id !== button.dataset.wordId);
    persistProgress();
    editingWordId = null;
    vocabularyNotice = "That word has been taken out of your pantry.";
    render();
    return;
  }

  if (action === "cancel-edit") {
    editingWordId = null;
    vocabularyNotice = "";
    render();
    return;
  }

  if (action === "flip-review") {
    reviewState.flipped = true;
    render();
    return;
  }

  if (action === "rate-review") {
    const word = reviewState.words[reviewState.index];
    const result = rateMissedWord(missedWords, word.id, Number(button.dataset.rating));
    missedWords = result.missedWords;
    persistProgress();
    reviewState.index += 1;
    reviewState.flipped = false;
    reviewState.complete = reviewState.index >= reviewState.words.length;
    render();
    return;
  }

  if (action === "flip") {
    const currentDish = session.dishes[session.dishIndex];
    currentDish.cards[currentDish.cardIndex].flipped = true;
    render();
    return;
  }

  if (action === "rate") {
    const currentDish = session.dishes[session.dishIndex];
    const currentWord = currentDish.cards[currentDish.cardIndex].word;
    const rating = Number(button.dataset.rating);
    const result = rateCurrentCard(session, rating);
    if (rating <= 2 && !missedWords.some((word) => word.id === currentWord.id)) {
      missedWords = [...missedWords, currentWord];
      persistProgress();
    }
    if (result === "dish-complete") {
      currentFact = nextFact(currentDish.dish);
      currentView = "reveal";
    }
    render();
    return;
  }

  if (action === "continue-session") {
    if (session.dishIndex < session.dishes.length - 1) {
      session.dishIndex += 1;
      currentView = "study";
      render();
      return;
    }

    currentView = "served";
    render();
    clearTimeout(servedTimer);
    servedTimer = setTimeout(() => {
      for (const word of session.missedWords) {
        if (!missedWords.some((missed) => missed.id === word.id)) missedWords.push(word);
      }
      persistProgress();
      currentView = "counter";
      render();
    }, 1200);
    return;
  }

  if (action === "return-home") {
    clearTimeout(servedTimer);
    currentView = "home";
    session = null;
    editingWordId = null;
    vocabularyNotice = "";
    render();
  }
}

app.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (button) handleAction(button);
});

app.addEventListener("change", (event) => {
  if (event.target.matches("#language-order")) {
    languageOrder = event.target.value;
    persistProgress();
    render();
  }
});

app.addEventListener("submit", (event) => {
  const form = event.target.closest('form[data-form="vocabulary"]');
  if (!form) return;
  event.preventDefault();

  const formData = new FormData(form);
  const editingId = formData.get("editingId") || null;
  const existing = customWords.find((word) => word.id === editingId);
  if (editingId && !existing) {
    vocabularyNotice = "That word is no longer in your pantry. Please choose it again.";
    render();
    return;
  }

  const candidate = {
    english: formData.get("english"),
    japanese: formData.get("japanese"),
  };
  const allExisting = [...BUILT_IN_WORDS, ...customWords];
  const validation = validateVocabularyPair(candidate, allExisting, editingId);
  if (!validation.ok) {
    const notice = form.querySelector(".in-world-note");
    const message = validation.reason === "duplicate"
      ? "That pair is already in the pantry. Try a different word."
      : "Please add both the English and Japanese word before saving.";
    if (notice) {
      notice.textContent = message;
      notice.hidden = false;
      notice.setAttribute("role", "alert");
    } else {
      vocabularyNotice = message;
      render();
    }
    return;
  }

  if (existing) {
    const updated = { ...existing, ...validation.pair };
    customWords = customWords.map((word) => word.id === editingId ? updated : word);
    missedWords = missedWords.map((word) => word.id === editingId ? updated : word);
    vocabularyNotice = "Your word pair has been updated.";
  } else {
    customWords = [
      ...customWords,
      {
        id: `custom-${Date.now()}-${newWordNumber++}`,
        ...validation.pair,
        source: "custom",
      },
    ];
    vocabularyNotice = "A new pair has been added to your pantry.";
  }
  persistProgress();
  editingWordId = null;
  render();
});

render();
