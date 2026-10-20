const JAPANESE_LOCALE = /^ja(?:[-_]|$)/i;
const VOICE_LOAD_TIMEOUT_MS = 1500;

function findJapaneseVoice(speechSynthesis) {
  return speechSynthesis.getVoices().find((candidate) => JAPANESE_LOCALE.test(candidate.lang));
}

function waitForJapaneseVoice(speechSynthesis) {
  const availableVoice = findJapaneseVoice(speechSynthesis);
  if (availableVoice || typeof speechSynthesis.addEventListener !== "function") {
    return Promise.resolve(availableVoice);
  }

  return new Promise((resolve) => {
    let timeout;
    const finish = (voice) => {
      speechSynthesis.removeEventListener?.("voiceschanged", onVoicesChanged);
      clearTimeout(timeout);
      resolve(voice);
    };
    const onVoicesChanged = () => {
      const voice = findJapaneseVoice(speechSynthesis);
      if (voice) finish(voice);
    };

    speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
    timeout = setTimeout(() => finish(findJapaneseVoice(speechSynthesis)), VOICE_LOAD_TIMEOUT_MS);
    onVoicesChanged();
  });
}

export async function speakJapanese(
  text,
  {
    speechSynthesis = globalThis.speechSynthesis,
    SpeechSynthesisUtterance = globalThis.SpeechSynthesisUtterance,
    onStatus = () => {},
    onError = (error) => console.error(error),
  } = {},
) {
  if (
    !speechSynthesis
    || typeof speechSynthesis.getVoices !== "function"
    || typeof speechSynthesis.speak !== "function"
    || typeof SpeechSynthesisUtterance !== "function"
  ) {
    return { ok: false, message: "Audio is not supported in this browser." };
  }

  const japaneseText = String(text).trim();
  if (!japaneseText) {
    return { ok: false, message: "There is no Japanese word to pronounce." };
  }

  const voice = await waitForJapaneseVoice(speechSynthesis);
  if (!voice) {
    return {
      ok: false,
      message: "No Japanese speech voice is available. Add a Japanese voice in your device's speech settings, then try again.",
    };
  }

  const utterance = new SpeechSynthesisUtterance(japaneseText);
  utterance.lang = voice.lang.replace("_", "-");
  utterance.voice = voice;
  utterance.onend = () => onStatus("Pronunciation finished.");
  utterance.onerror = (event) => {
    const error = new Error(`Japanese speech playback failed: ${event.error}`);
    onError(error);
    onStatus("The Japanese voice could not play this word. Please try again.");
  };

  try {
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  } catch (error) {
    onError(error);
    return { ok: false, message: "The Japanese voice could not start. Please try again." };
  }

  return { ok: true, voiceName: voice.name };
}
