import { escapeHtml } from "../utils/render.js";
import { renderPronunciationControl } from "./pronunciation.js";

export function renderReview(missedWords, languageOrder, reviewState) {
  if (reviewState.complete || missedWords.length === 0) {
    return `
      <section class="review-screen">
        <p class="kicker">Missed-word tray</p>
        <h1>${missedWords.length ? "Review finished for now" : "Your missed-word tray is empty"}</h1>
        <p class="screen-intro">${missedWords.length
          ? `${missedWords.length} word${missedWords.length === 1 ? "" : "s"} still waiting for another look.`
          : "Words rated 1 or 2 during study will appear here."}</p>
        <button class="button button-primary" type="button" data-action="return-home">Back to the restaurant</button>
      </section>`;
  }

  const word = reviewState.words[reviewState.index];
  const front = languageOrder === "ja-first" ? word.japanese : word.english;
  const back = languageOrder === "ja-first" ? word.english : word.japanese;
  return `
    <section class="review-screen">
      <p class="kicker">Missed-word tray</p>
      <h1>A quiet second look</h1>
      <p class="review-count">Word ${reviewState.index + 1} of ${reviewState.words.length}</p>
      <article class="review-card">
        <p class="card-label">${reviewState.flipped ? "Answer" : languageOrder === "ja-first" ? "Japanese" : "English"}</p>
        <p class="card-word" ${languageOrder === "ja-first" && !reviewState.flipped ? 'lang="ja"' : ""}>${escapeHtml(reviewState.flipped ? back : front)}</p>
        ${
          reviewState.flipped
            ? `<p class="card-pair">${escapeHtml(word.english)} · <span lang="ja">${escapeHtml(word.japanese)}</span></p>
               ${renderPronunciationControl(word.japanese)}
               <div class="rating-row" aria-label="Rate your confidence">
                 <span class="rating-label">How well did you know it?</span>
                 ${[1, 2, 3, 4].map((rating) => `<button class="rating-button" type="button" data-action="rate-review" data-rating="${rating}" aria-label="Rate ${rating} out of 4">${rating}</button>`).join("")}
               </div>`
            : `<button class="button button-primary" type="button" data-action="flip-review">Flip card</button>`
        }
      </article>
      <p class="screen-intro">A 3 or 4 puts this word away for now. A 1 or 2 leaves it in the tray.</p>
      <button class="button button-quiet" type="button" data-action="return-home">Back to the restaurant</button>
    </section>`;
}
