import assert from "node:assert/strict";
import test from "node:test";
import { speakJapanese } from "../utils/speech.js";

test("Japanese pronunciation selects an installed Japanese voice", async () => {
  let spoken;
  let cancelled = false;

  class Utterance {
    constructor(text) {
      this.text = text;
    }
  }

  const voice = { name: "Japanese voice", lang: "ja_JP" };
  const result = await speakJapanese("  ねこ  ", {
    SpeechSynthesisUtterance: Utterance,
    speechSynthesis: {
      getVoices: () => [{ name: "English voice", lang: "en-US" }, voice],
      cancel: () => { cancelled = true; },
      speak: (utterance) => { spoken = utterance; },
    },
  });

  assert.deepEqual(result, { ok: true, voiceName: "Japanese voice" });
  assert.equal(cancelled, true);
  assert.equal(spoken.text, "ねこ");
  assert.equal(spoken.lang, "ja-JP");
  assert.equal(spoken.voice, voice);
});

test("pronunciation waits for voices that load after the page", async () => {
  let listener;
  let voices = [];
  let spoken;
  const voice = { name: "Late Japanese voice", lang: "ja-JP" };

  class Utterance {
    constructor(text) {
      this.text = text;
    }
  }

  const speechSynthesis = {
    getVoices: () => voices,
    addEventListener: (event, callback) => {
      if (event === "voiceschanged") listener = callback;
    },
    removeEventListener: () => {},
    cancel: () => {},
    speak: (utterance) => { spoken = utterance; },
  };
  const pending = speakJapanese("ねこ", {
    SpeechSynthesisUtterance: Utterance,
    speechSynthesis,
  });
  voices = [voice];
  listener();

  const result = await pending;
  assert.equal(result.voiceName, "Late Japanese voice");
  assert.equal(spoken.text, "ねこ");
});

test("pronunciation clearly reports when no Japanese voice is installed", async () => {
  const result = await speakJapanese("ねこ", {
    SpeechSynthesisUtterance: class {},
    speechSynthesis: {
      getVoices: () => [{ name: "English voice", lang: "en-US" }],
      speak: () => assert.fail("must not speak with a non-Japanese voice"),
    },
  });

  assert.equal(result.ok, false);
  assert.match(result.message, /No Japanese speech voice is available/);
});

test("pronunciation reports unsupported browsers and playback errors", async () => {
  const unsupported = await speakJapanese("ねこ", {
    speechSynthesis: null,
    SpeechSynthesisUtterance: undefined,
  });
  let loggedError;
  let status;
  const playback = await speakJapanese("ねこ", {
    SpeechSynthesisUtterance: class {},
    speechSynthesis: {
      getVoices: () => [{ name: "Japanese voice", lang: "ja-JP" }],
      cancel: () => {},
      speak: (utterance) => utterance.onerror({ error: "voice-unavailable" }),
    },
    onError: (error) => { loggedError = error; },
    onStatus: (message) => { status = message; },
  });

  assert.match(unsupported.message, /not supported/);
  assert.equal(playback.ok, true);
  assert.match(loggedError.message, /voice-unavailable/);
  assert.match(status, /could not play/);
});
