import { escapeHtml } from "../utils/render.js";

export function renderPronunciationControl(japanese) {
  return `
    <div class="pronunciation-control">
      <button class="button button-quiet pronunciation-button" type="button"
              data-action="speak-japanese" data-japanese="${escapeHtml(japanese)}">
        <span aria-hidden="true">🔊</span> Hear Japanese
      </button>
      <p class="audio-status" data-audio-status role="status" aria-live="polite">Uses a Japanese voice on your device.</p>
    </div>`;
}
