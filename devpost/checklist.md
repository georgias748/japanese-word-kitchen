---
doc: checklist
status: approved
---

# Build Checklist

Build mode: learn

## Slices

- [x] **1. Cook, study, and revisit words in one visit**
  Becomes usable: A local browser app with an illustrated cozy restaurant home and working navigation for study, custom vocabulary, and missed-word review. During a visit, the learner can add, edit, and delete words; study three different dishes with a no-repeat mix of custom and built-in words; see large, vivid earned ingredients assemble into a dish-specific final illustration with an arrival sparkle, a gentle note naming ingredients still to add, and a cultural fact; review missed words without changing dish progress; and see three individually drawn aunties react at the counter. Word lists are temporary until the next slice adds browser saving.
  Why now: This puts every core interaction and its navigation in the first runnable experience, after feedback showed that abstract placeholders and missing home actions did not match the approved design. The kitchen-to-dish kernel remains central; adding words and review now lets the learner try the whole concept before we add persistence.
  PRD ref: `prd.md > The Core Journey`, `prd.md > Restaurant home and navigation`, `prd.md > Vocabulary management`, `prd.md > Dish selection and vocabulary assignment`, `prd.md > Vocabulary cards and ingredient progress`, `prd.md > Cultural facts`, `prd.md > Session ending`, `prd.md > Custom vocabulary and device-local progress`, `prd.md > Missed-word review`
  Spec ref: `spec.md > Stack`, `spec.md > Where It Runs and How Someone Tries It`, `spec.md > Look and Feel`, `spec.md > Components`, `spec.md > Data Model`, `spec.md > File Structure`
  Build: Build the detailed original restaurant doorway scene, including the grandparents with clear necks and small, subtle ears, counter, personal monochrome pictures, bonsai, colorful noren, and Japanese details. Make the home more colorful without losing its cozy palette, frame the learner as the chef helping the grandparents prepare and serve food, and label the existing add/edit/remove vocabulary screen "Manage words." Add the home sidebar and usable in-memory custom-word management and missed-word review. Complete the session with the 15-dish menu, 12 built-in pairs, language direction, custom-first non-repeating assignment, card flip/rating, optional Japanese speech synthesis on flipped study and review cards, larger and more vivid dish-specific earned ingredients, prepared-food final illustrations for every earned count, a generated review gallery linked from the PRD, a brief reduced-motion-aware star-pop, a gentle note naming unearned ingredients, cycling cultural facts, and a counter scene with three distinct seated aunties, clear necks and subtle ears, and plates. Use original local SVG/CSS artwork and the browser's installed Japanese voice; do not add a speech service or recorded audio files.
  Verify (mechanical): Run `node --check` on the JavaScript files and `npm test` for session, rating, vocabulary-validation, review, speech-synthesis, and reaction rules. Parse every SVG state for all dishes and earned-ingredient counts. Confirm the gallery renders 15 dishes and every ingredient-count state and is linked from `prd.md` and `prd.html`. Start the app using `python3 -m http.server 8000`, confirm `curl -fsS http://localhost:8000/` returns the app page, and run study, vocabulary, and review flows in a browser to check their screens and buttons without console errors.
  Learner check: Open `http://localhost:8000`, review the all-dishes gallery linked from the PRD, then open **Manage words**, add a Japanese-English pair, start study, flip the card, and press **Hear Japanese**. Try the pronunciation on a built-in word and a custom word; confirm the rating flow remains usable. Tell me how the voice sounds and whether it works for your own words.
  Commit: `Build the illustrated kitchen and study flows`

- [x] **2. Keep vocabulary and review progress between visits**
  Becomes usable: Custom word pairs, missed words, and the card-language preference remain available after refreshing or reopening the app in the same browser.
  Why now: First the full experience works during one visit; then we add persistence so the learner's own vocabulary and review progress survive leaving the page.
  PRD ref: `prd.md > Custom vocabulary and device-local progress`, `prd.md > Missed-word review`, `prd.md > States and Boundaries`
  Spec ref: `spec.md > Data Model`, `spec.md > Important Failure Modes`, `spec.md > What Was Simplified and Why`
  Build: Add `localStorage` helpers that load custom pairs, missed words, language preference, and cultural-fact cycles at startup and save each relevant edit or rating. Preserve built-in-first availability if browser storage is unavailable, and report that saved progress could not be retained rather than silently claiming it was saved.
  Verify (mechanical): Run `node --check` and `node --test`; in the browser add a word, mark a word missed, reload the page, and confirm both are restored. Verify a 3–4 review removes a missed pair, a 1–2 review keeps it, and built-in study still starts when storage is unavailable.
  Learner check: Add a custom pair, mark a study word for review, reload the app, and check that both are still there. Review the missed word once with a high rating and once with a low rating, and tell me what you notice before final review.
  Commit: `Persist vocabulary and review progress`

## Hands-on Checkpoints

- [x] Early usable behavior explored — after slice 1, including the illustrated restaurant, sidebar, and complete study/add/review flows
- [x] Final kick-the-tires exploration and feedback completed — after slice 2, try the whole journey, persistence, review, and awkward form inputs

## Final Review

- [x] Replace the counter ending's vague mood copy with a direct message for the exact number of dishes missed; remove the redundant unfinished-dish count.
- [x] Final review complete — feedback resolved and learner confirms ready

Final kick-the-tires feedback: The learner tried the app journey, awkward word inputs, and saved progress, and reported that everything works well. They requested simpler, direct wording at the aunties' counter. After trying the update, they said it looks much better and confirmed the proof of concept is ready.

## Code Tour and App Map

- [x] Learning activity complete — guided route, focused alternative, prior practice connected, or brief recap
- [x] Optional edit and transfer reflection addressed — offered/declined/already covered/not applicable as appropriate
- [x] `devpost/app-map.html` generated from finished code, checked, and shown, including a project-grounded practice to reuse

Activity and evidence: The learner tried built-in and custom Japanese pronunciation in the live app, said the voice quality was exactly right, and confirmed the playback status no longer exposes the device voice's name. Browser checks also confirmed speech completion and that rating still advances the session. The learner then requested a step-by-step walkthrough of `app.js` and a complete file map; the walkthrough explained startup, saved state, rendering, study setup, button routing, and form events, followed by direct and indirect imports. The learner said they understood everything well. `npm test` passes (25 tests); JavaScript syntax and `git diff --check` pass.
Route and stops: Guided route traced the low-rating action in `app.js > handleAction`, its state save in `app.js > persistProgress`, and restoration in `utils/storage.js > loadProgress`; the map also points to the round-trip check in `tests/storage.test.js`. Full inventory and connections are in `devpost/app-map.html`.
Edit outcome: Offered one optional small wording edit; the learner declined and chose to move on.
Reflection: Skipped at the learner's request to move on.
Activity mode: Guided code walkthrough and offline-friendly app map completed.

- [What changed] — Early hands-on feedback showed that the first illustrations were abstract placeholders, the three aunties were repeated and numbered, and the home lacked the requested custom-word and review navigation. Slice 1 now includes original detailed restaurant and food artwork, distinct aunties, and working in-memory add/review flows; slice 2 is focused on persistence.
- The learner's hands-on review found the assembled food too pale, small, and sparse (especially udon and eggplant tempura). Refined the approved visual behavior: make earned prepared-food art larger and more vivid, briefly animate a star-pop on arrival, and show a gentle note for ingredients not earned while keeping them absent from the plate. Keep original illustrations for this pass; consider public-domain food photos only if the learner still finds the revised art insufficient.
- After pausing, the learner reviewed the current restaurant and requested recognizable ears and necks for the grandparents and aunties, clearer word-management navigation, chef-focused welcome copy, and a livelier home color palette. These refinements clarify existing in-scope behavior and visual direction.
- The learner requested smaller, more discreet ears, removal of the study-screen tagline, and a review sheet showing every dish across all earned-ingredient counts. Refined the ear scale and stroke, removed the extra study copy, and added `dish-gallery.html`; the learner confirmed the dish designs and ears look good.
- The learner asked to try pronunciation on built-in and custom vocabulary and approved the browser's installed Japanese speech voice for this experiment. Update PRD/spec and the PRD HTML companion; background/cooking audio and recordings remain deferred.
- Browser verification found that Japanese voices may arrive after the first pronunciation request. The app now waits briefly for the browser's `voiceschanged` event; built-in and custom-word playback both worked in browser checks. The learner liked the voice quality and asked to hide the voice's name from the playback status; they confirmed the wording change and audio in the live app.
- Slice 1, its early hands-on checkpoint, slice 2, the final kick-the-tires review, final review, code tour, and app map are complete; the remaining work is shipping.
- Slice 2 complete: browser storage saves custom words, missed words as they are rated, language preference, and cultural-fact cycles. Built-in study remains available if storage cannot be used, with a visible notice that progress may not save. `npm test` passes (24 tests), JavaScript syntax checks pass, and browser reload checks confirmed saved words, missed-word ratings, and language preference. The learner tried the updated flow and said it all looked good, with no further feedback. Commit: `2ba89f1` (`Persist vocabulary and review progress`).
- Shipping uses a fresh public GitHub snapshot and static GitHub Pages hosting; the previous local history and learner profile are excluded. The app's saved progress remains browser-local and is not synced between devices.
