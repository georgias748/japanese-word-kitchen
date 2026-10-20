import { escapeHtml } from "../utils/render.js";

export function renderVocabularyManager(customWords, builtInWords, editingId = null, notice = "") {
  const editing = customWords.find((word) => word.id === editingId);
  const message = `<p class="in-world-note" role="status" ${notice ? "" : "hidden"}>${escapeHtml(notice)}</p>`;
  return `
    <section class="vocabulary-screen">
      <p class="kicker">Your word notebook</p>
      <h1>Manage your words</h1>
      <p class="screen-intro">Add English-Japanese pairs, edit your list, or remove words you no longer need.</p>
      ${message}
      <form class="vocabulary-form" data-form="vocabulary">
        <label for="word-english">English</label>
        <input id="word-english" name="english" autocomplete="off" required value="${escapeHtml(editing?.english ?? "")}" />
        <label for="word-japanese">Japanese</label>
        <input id="word-japanese" name="japanese" autocomplete="off" required lang="ja" value="${escapeHtml(editing?.japanese ?? "")}" />
        ${editing ? `<input type="hidden" name="editingId" value="${escapeHtml(editing.id)}" />` : ""}
        <div class="form-actions">
          <button class="button button-primary" type="submit">${editing ? "Save changes" : "Add this pair"}</button>
          ${editing ? `<button class="button button-quiet" type="button" data-action="cancel-edit">Cancel</button>` : ""}
        </div>
      </form>
      <div class="pantry-list">
        <h2>Custom words <span>${customWords.length}</span></h2>
        ${
          customWords.length
            ? `<ul>${customWords.map((word) => `
                <li class="word-row">
                  <span><strong>${escapeHtml(word.english)}</strong><span lang="ja">${escapeHtml(word.japanese)}</span></span>
                  <span class="row-actions">
                    <button class="text-button" type="button" data-action="edit-word" data-word-id="${escapeHtml(word.id)}">Edit</button>
                    <button class="text-button text-danger" type="button" data-action="delete-word" data-word-id="${escapeHtml(word.id)}">Remove</button>
                  </span>
                </li>`).join("")}</ul>`
            : `<p class="empty-note">Your word pantry is empty. The built-in cards are ready when you are.</p>`
        }
      </div>
      <p class="temporary-note">Built-in words: ${builtInWords.length}. Custom words are kept in this browser when storage is available.</p>
    </section>`;
}
