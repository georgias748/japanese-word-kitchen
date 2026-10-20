import { getDishOutcome } from "../state/session.js";
import { auntiesAtCounter } from "./restaurant.js";
import { escapeHtml, finalDishArtwork } from "../utils/render.js";

export function renderDishReveal({ dish, earnedIngredients, fact, isLastDish }) {
  return `
    <section class="reveal-scene">
      <p class="kicker">Dish reveal</p>
      <h1>A little meal takes shape <span aria-hidden="true">✦</span></h1>
      <p class="reveal-subtitle"><span lang="ja">${escapeHtml(dish.japaneseName)}</span> · ${escapeHtml(dish.englishName)}</p>
      ${finalDishArtwork(dish, earnedIngredients)}
      <blockquote class="fact-paper">
        <span class="fact-label">A small food note</span>
        <p>${escapeHtml(fact)}</p>
      </blockquote>
      <button class="button button-primary" type="button" data-action="continue-session">
        ${isLastDish ? "Continue to the counter" : "Next dish"} <span aria-hidden="true">→</span>
      </button>
    </section>`;
}

export function renderServed() {
  return `
    <section class="served-scene" role="status">
      <p class="kicker">From the kitchen</p>
      <h1>Your food has been served!</h1>
      <p>The aunties are just around the counter…</p>
      <div class="steam" aria-hidden="true">〰　〰　〰</div>
    </section>`;
}

export function renderCounter(session) {
  const { unfinishedDishes, mood } = getDishOutcome(session);
  const countWords = ["no", "one", "two", "three"];
  const message = unfinishedDishes === 0
    ? "You missed no food for the aunties. They're happy!"
    : `You missed ${countWords[unfinishedDishes]} ${unfinishedDishes === 1 ? "dish" : "dishes"} for the aunties.`;

  return `
    <section class="counter-scene">
      <p class="kicker">At the counter</p>
      <h1>Three regulars have come for supper</h1>
      <p class="counter-reaction">${message}</p>
      ${auntiesAtCounter(mood)}
      <button class="button button-primary" type="button" data-action="return-home">Back to the restaurant</button>
    </section>`;
}
