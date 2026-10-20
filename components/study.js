import { dishArtwork, escapeHtml } from "../utils/render.js";
import { renderPronunciationControl } from "./pronunciation.js";

export function renderStudy(session) {
  const current = session.dishes[session.dishIndex];
  const card = current.cards[current.cardIndex];
  const word = card.word;
  const front = session.languageOrder === "ja-first" ? word.japanese : word.english;
  const answer = session.languageOrder === "ja-first" ? word.english : word.japanese;
  const progress = session.dishes
    .map((dishState) => `
      <span class="progress-dot ${dishState.dish.id === current.dish.id ? "is-current" : ""} ${
        dishState.cardIndex >= dishState.cards.length ? "is-done" : ""
      }" aria-label="${escapeHtml(dishState.dish.englishName)}: ${
        dishState.cardIndex
      } of ${dishState.cards.length} words"></span>`)
    .join("");

  return `
    <section class="study-scene">
      <header class="study-header">
        <button class="button button-quiet" type="button" data-action="leave-study">← Home</button>
        <div class="session-progress" aria-label="Session progress">${progress}</div>
        <span class="round-count">Dish ${session.dishIndex + 1} of 3</span>
      </header>
      <h1 class="dish-heading"><span lang="ja">${escapeHtml(current.dish.japaneseName)}</span> — ${escapeHtml(current.dish.englishName)}</h1>
      <div class="plate-progress">
        ${dishArtwork(current.dish, current.earnedIngredients, "dish-art-small")}
      </div>
      <div class="study-card ${card.flipped ? "is-flipped" : ""}">
        <p class="card-label">${card.flipped ? "Answer" : session.languageOrder === "ja-first" ? "Japanese" : "English"}</p>
        <p class="card-word" ${session.languageOrder === "ja-first" && !card.flipped ? 'lang="ja"' : ""}>${escapeHtml(card.flipped ? answer : front)}</p>
        ${
          card.flipped
            ? `<p class="card-pair">${escapeHtml(session.languageOrder === "ja-first" ? word.japanese : word.english)} · ${escapeHtml(session.languageOrder === "ja-first" ? word.english : word.japanese)}</p>
               ${renderPronunciationControl(word.japanese)}`
            : `<p class="card-hint">Think of the other side, then turn the card.</p>`
        }
        ${
          card.flipped
            ? `<div class="rating-row" aria-label="Rate your confidence">
                <span class="rating-label">How well did you know it?</span>
                ${[1, 2, 3, 4].map((rating) => `<button class="rating-button" type="button" data-action="rate" data-rating="${rating}" aria-label="Rate ${rating} out of 4">${rating}</button>`).join("")}
              </div>`
            : `<button class="button button-primary flip-button" type="button" data-action="flip">Flip card</button>`
        }
      </div>
      <p class="study-footnote">3–4 adds the next ingredient · 1–2 saves this word to your missed tray</p>
    </section>`;
}
