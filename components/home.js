import { renderVocabularyManager } from "./vocab.js";
import { renderReview } from "./review.js";
import { restaurantInterior } from "./restaurant.js";
function renderLayout(content, {
  active = "study",
  customWords = [],
  missedWords = [],
  languageOrder = "en-first",
} = {}) {
  return `
    <div class="home-layout">
      <aside class="home-sidebar" aria-label="Restaurant navigation">
        <a class="sidebar-brand" href="#" data-action="return-home">
          <span class="brand-stamp" aria-hidden="true">和</span>
          <span><strong>Word Kitchen</strong><small>little study room</small></span>
        </a>
        <p class="sidebar-heading">At your table</p>
        <nav class="sidebar-nav">
          <button class="sidebar-link ${active === "study" ? "is-active" : ""}" type="button" data-action="start-study">
            <span aria-hidden="true">◉</span><span>Let's Study</span>
          </button>
          <button class="sidebar-link ${active === "vocab" ? "is-active" : ""}" type="button" data-action="open-vocabulary">
            <span aria-hidden="true">✎</span><span>Manage words</span>
            <span class="nav-count">${customWords.length}</span>
          </button>
          <button class="sidebar-link ${active === "review" ? "is-active" : ""}" type="button" data-action="open-review">
            <span aria-hidden="true">↺</span><span>Review missed</span>
            <span class="nav-count">${missedWords.length}</span>
          </button>
        </nav>
        <div class="sidebar-language">
          <label for="language-order">Card front</label>
          <select id="language-order" name="language-order">
            <option value="en-first" ${languageOrder === "en-first" ? "selected" : ""}>English first</option>
            <option value="ja-first" ${languageOrder === "ja-first" ? "selected" : ""}>Japanese first</option>
          </select>
        </div>
        <p class="sidebar-quiet">A few words, a warm meal, one small step at a time.</p>
      </aside>
      <div class="home-main">${content}</div>
    </div>`;
}

export function renderHome({ languageOrder = "en-first", customWords = [], missedWords = [] } = {}) {
  const scene = `
    <section class="restaurant-home">
      <div class="restaurant-art">${restaurantInterior()}</div>
      <div class="restaurant-welcome">
        <p class="kicker">いらっしゃいませ · Welcome in</p>
        <h1>Japanese Word Kitchen</h1>
        <p>Come in and help the grandparents run their restaurant. You're the chef: learn words, prepare the dishes, and serve them to the customers.</p>
        <div class="scene-status">
          <span>${DISH_COUNT} dishes on today's menu</span>
          <span>${customWords.length} custom word${customWords.length === 1 ? "" : "s"}</span>
          <span>${missedWords.length} to revisit</span>
        </div>
        <button class="button button-primary scene-study-button" type="button" data-action="start-study">
          Let's Study <span aria-hidden="true">→</span>
        </button>
      </div>
      <p class="home-caption">A quiet table · three dishes · words become ingredients</p>
    </section>`;
  return renderLayout(scene, { active: "study", customWords, missedWords, languageOrder });
}

const DISH_COUNT = 15;

export function renderVocabularyScreen({
  customWords,
  builtInWords,
  missedWords,
  languageOrder,
  editingId = null,
  notice = "",
}) {
  const page = renderVocabularyManager(customWords, builtInWords, editingId, notice);
  return renderLayout(page, { active: "vocab", customWords, missedWords, languageOrder });
}

export function renderReviewScreen({ missedWords, customWords, languageOrder, reviewState }) {
  const page = renderReview(missedWords, languageOrder, reviewState);
  return renderLayout(page, { active: "review", customWords, missedWords, languageOrder });
}
