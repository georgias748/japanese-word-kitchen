---
doc: prd
status: approved
---

# Japanese Word Kitchen — Product Requirements

A cozy Japanese restaurant-inspired vocabulary app where a beginner cooks learned Japanese words into recognizable dishes. Source: `scope.md > The Unique Kernel`, `The Core Loop`, `Inspiration & Identity`, `What "Working" Looks Like`, and `The POC Boundary`.

## The Core Journey

1. The learner arrives at a welcoming restaurant home, where they can manage custom vocabulary, review missed words, or press **Let's Study**. The app includes 12 built-in Japanese-English vocabulary pairs for first use.
2. Before a regular study session, the learner chooses which language appears first on each card: English or Japanese.
3. The app randomly selects three different dishes from the fixed 15-dish menu below. Each dish has three or four predefined ingredient steps; that count is also the number of vocabulary cards for that dish. The app randomly samples distinct custom words for the session first, then fills any remaining card slots from the built-in set. No vocabulary pair appears twice in the same session.
4. At a quiet tabletop, the dish name appears at the very top in Japanese, followed by a dash and its English name. One vocabulary word appears in the middle of the table; a **Flip** button sits at the bottom right. Pressing **Flip** reveals the other language and shows the 1–4 confidence ratings at the same time. A rating of 3 or 4 adds the next real, recognizable key-ingredient picture beside the others on the plate. A rating of 1 or 2 adds no ingredient and places that word in the missed-words tray for later.
5. After a dish's three or four cards are rated, a small star-pop presents a vivid, generously plated assembled dish. Its earned ingredient pictures grow into the plate rather than appearing as tiny scattered pieces; each dish has a predetermined appearance for every possible number of earned ingredients, and missed ingredients remain absent. A gentle note names any ingredients still to add, without shaming the learner. A short cultural fact about the dish appears on decorative paper.
6. After all three dishes, **“Your food has been served!”** appears briefly. The view then shifts to the chef's side of the counter, facing three Japanese aunties. All three smile when all three dishes are complete; they look neutral if exactly one dish is unfinished, and upset if two or three are unfinished.
7. The app returns to restaurant home, ready for another session, vocabulary management, or review. Custom words and missed words remain available on that same device between visits.

Source: `scope.md > The Core Loop` and `What "Working" Looks Like`.

## Screens and Layout

### Restaurant home

- A doorway view into a small, cozy Japanese restaurant, with the busy grandparent couple, counter, personal black-and-white photographs, bonsai, and Japanese cultural details from the approved scope.
- Frame the learner as the chef helping the grandparents prepare dishes and serve customers.
- Give the home illustration a lively mix of natural colors and restaurant details; draw the grandparents and auntie customers with clear necks and small, subtle, recognizable ears.
- A welcoming title treatment and food-themed navigation for **Let's Study**, **Manage words**, and **Review**.
- A visible missed-words section when there are words to revisit.

### Vocabulary management

- Add and manage English-Japanese word pairs from the restaurant home.
- Both language fields are required. An incomplete pair cannot be saved.
- Adding an already-present English-Japanese pair leaves the list unchanged and shows a friendly duplicate message.
- The learner can edit or delete custom words.

### Study tabletop

- A quiet, top-down wooden tabletop that is simpler than the restaurant scene, with an empty plate and restrained table details.
- At the very top, show the dish's Japanese name, a dash, then its English name—without an extra announcement describing the dish.
- Show one vocabulary word in the middle of the table. Put a **Flip** button at the bottom right; pressing it reveals the other language and makes the 1–4 confidence ratings appear at the same time.
- Earned ingredient pictures appear individually, side by side at a generous size on the plate. The art is vivid, prepared as needed for the named dish, and matches the restaurant's cartoon aesthetic.

### Dish reveal and served-at-the-counter ending

- After the three or four cards for a dish are rated, a star-pop presents the whole assembled dish and its cultural fact before the next dish.
- Every dish has a predetermined final illustration for each possible earned-ingredient count. The illustration uses vivid, generously sized prepared-food drawings that fill the plate or bowl. Unearned ingredients are absent, and a gentle note names ingredients still to add.
- Review all 15 dishes and every earned-ingredient count in the [dish illustration gallery](./dish-gallery.html).
- The completed-dish illustration arrives with a brief decorative star-pop; reduced-motion settings must suppress nonessential animation.
- After the third dish, a temporary served message leads into the chef's-eye counter scene with three customers. Their expressions reflect how many of the three dishes are unfinished.
- The ending returns to restaurant home.

### Missed-word review

- A **Review** section on restaurant home opens the missed words one at a time using the same flip-and-rate interaction.
- Review does not add ingredients or create a dish. Rating 3–4 removes a word from the tray; rating 1–2 keeps it there.

Source: `scope.md > The Core Loop`, `Inspiration & Identity`, and `The POC Boundary`.

## Look and Feel

- An original, cozy, hand-painted cartoon world inspired by the intimate restaurant atmosphere in the scope.
- Heian-period art is an inspiration for the visual mood, including a warm yellow, papyrus-like paper texture and an ink-brush feeling in decorative notes and short messages. The app should use an original interpretation rather than copy a particular artist or artwork.
- The learner also cites Studio Ghibli as a visual inspiration. Translate that reference into broad qualities such as gentle whimsy, natural warmth, expressive hand-drawn animation, and richly observed everyday spaces; create original artwork rather than reproducing recognizable characters, settings, or specific film imagery.
- Keep vocabulary and cultural-fact text clear and easy to read; decorative lettering must not interfere with study.
- Restaurant home is rich but not cluttered. The study tabletop is calmer so the words and ingredients remain the focus.
- Use a livelier mix of natural greens and warm accent colors on the restaurant home, while keeping the study tabletop calm and readable. Give the grandparents and auntie customers visible necks and small, subtle, skin-toned ears.
- Ingredients should be recognizable, generously sized, and colorful parts of the named dish, drawn in the same cartoon style as the restaurant. Build each reveal to fill its serving dish with the ingredients actually earned; omit missed ingredients and name them in a gentle note. Do not use raw ingredient drawings where the dish calls for a prepared food (for example, show battered eggplant tempura, not a whole raw eggplant).
- Feedback and duplicate notices should feel like charming notes from this world, not generic white browser-alert boxes.

## Features and Behavior

### Restaurant home and navigation

- **Let's Study** starts a regular three-dish session.
- **Review** opens the missed-word review when there are words to revisit.
- **Manage words** opens vocabulary management, where the learner can see, add, edit, and delete custom pairs.
- After the served-at-the-counter ending, the app returns here.
- **Acceptance criteria**
  - [ ] On arrival, the home screen offers study and **Manage words**; it also offers review when the missed-word tray is non-empty.
  - [ ] After the session ending, the learner returns to the home screen.

### Dish selection and vocabulary assignment

- Each regular session contains three different dishes selected randomly from the 15-dish menu.
- Each dish has a fixed count of three or four vocabulary cards, matching its predefined count of key ingredient steps.
- Randomly choose distinct custom vocabulary pairs for available card slots. If custom words are insufficient, fill the remaining slots from the 12 built-in pairs. Do not repeat a pair anywhere in the session.
- A pair earns the next ingredient in that dish's predefined ingredient sequence, regardless of whether the word itself is food-related.
- **Acceptance criteria**
  - [ ] Starting study presents three different dishes from the menu.
  - [ ] Each dish receives exactly its predefined number of cards and ingredient steps.
  - [ ] No pair repeats in a session; with no custom words, the 12 built-in pairs can fill the maximum 12-card session.
  - [ ] The card front follows the learner's selected English-first or Japanese-first direction.

### Vocabulary cards and ingredient progress

- Press **Flip** to reveal the other language; show the 1–4 confidence ratings at the same time.
- Ratings 3–4 add the next authentic, predefined key ingredient to the dish.
- Ratings 1–2 add no ingredient and place the word in the missed-words tray; it is not shown again in the current session.
- Show large earned ingredient pictures side by side on the plate as the learner studies. After the dish's cards are complete, use a brief star-pop to present the assembled dish.
- Each dish has a predetermined assembled illustration for every possible number of earned ingredients: four variants for a three-ingredient dish and five for a four-ingredient dish. Use vivid, prepared-food art that fills the plate; missing ingredients are omitted and named in a gentle note.
- After flipping a card, offer **Hear Japanese** to speak the Japanese word with an installed Japanese browser/device voice. The pronunciation works for built-in and custom pairs in either card direction.
- **Acceptance criteria**
  - [ ] The study view shows the Japanese dish name, then a dash and English name at the top; the vocabulary word is centered on the table.
  - [ ] The **Flip** button is at bottom right; pressing it reveals the answer and shows the rating controls at the same time.
  - [ ] A rating of 3 or 4 visibly adds one ingredient; a rating of 1 or 2 does not.
  - [ ] Earned ingredients appear individually side by side on the plate at a generous size during study.
  - [ ] After the last card, a brief star-pop presents the vivid, assembled-dish version for the number of ingredients earned.
  - [ ] Missing ingredients do not appear on the final dish and are named in a gentle note.
  - [ ] Three-ingredient dishes have four final appearance variants (0–3 earned); four-ingredient dishes have five (0–4 earned).
  - [ ] Each ingredient shown belongs among the three or four predefined key ingredients for that dish.
  - [ ] After flipping, the learner can request Japanese pronunciation for built-in and custom words. If speech synthesis or a Japanese voice is unavailable, show a clear explanation rather than failing silently.

### Cultural facts

- Each of the 15 dishes has three short cultural facts where available, with two as the minimum.
- Show one fact after each dish, whether it is complete or unfinished. Select without repeating for that dish until its fact set has been used, then begin that dish's cycle again.
- Display the fact on decorative, paper-like treatment with readable horizontal text.
- **Acceptance criteria**
  - [ ] Each dish reveal is followed by a fact even if the dish is unfinished.
  - [ ] A dish's facts do not repeat until all its available facts have appeared.

### Session ending

- After the third dish and its fact, show **“Your food has been served!”** briefly, then show the chef-side counter view with three Japanese aunties.
- Their shared expression is happy if no dish is unfinished, neutral if exactly one is unfinished, and upset if two or three are unfinished.
- Return to restaurant home after the ending.
- **Acceptance criteria**
  - [ ] The served message appears after the third dish and leads into the counter view.
  - [ ] The customers' expression matches the count of unfinished dishes.
  - [ ] The flow returns to the restaurant home.

### Custom vocabulary and device-local progress

- Require both English and Japanese text to save a custom pair; do not save if either side is blank.
- If the same English-Japanese pair already exists, do not add a second copy and show a friendly in-world notice.
- Custom vocabulary and missed words persist between visits on the same device/browser. There is no sign-in, cross-device sync, or sharing.
- **Acceptance criteria**
  - [ ] An incomplete pair cannot be saved.
  - [ ] Submitting a duplicate pair leaves one copy and shows a styled duplicate notice.
  - [ ] After leaving and returning on the same device/browser, custom words and missed words remain available.
  - [ ] No account or sync feature is required to use the app.

### Missed-word review

- The home-screen Review section lets the learner revisit missed words one at a time by flipping a card and rating confidence.
- A rating of 3–4 removes that pair from the missed tray. A rating of 1–2 leaves it there.
- Missed words are also eligible for future regular sessions, but never repeat within one session.
- **Acceptance criteria**
  - [ ] Review presents missed words with the same flip-and-rate interaction as study.
  - [ ] A 3–4 rating clears a reviewed word from the tray; a 1–2 rating keeps it there.
  - [ ] Review does not add ingredients or alter a dish.

## States and Boundaries

- **First use:** The learner can start with the 12 built-in vocabulary pairs without adding custom words.
- **Too few custom words:** Fill empty session slots with distinct built-in pairs; the built-in set contains enough pairs for the maximum 12-card session.
- **Vocabulary form incomplete:** Do not save; both English and Japanese are required.
- **Duplicate pair:** Do not add a duplicate; show a friendly, styled notice.
- **Study tabletop:** Show the Japanese dish name followed by a dash and English at top, a vocabulary word in the middle, and **Flip** at bottom right. Pressing **Flip** reveals the answer and rating controls together.
- **Missed word:** Add it to the persistent tray, do not award an ingredient, and do not repeat it during the current session.
- **Dish progress:** Show each earned ingredient individually on the plate at a generous size. After all cards for the dish, use a star-pop to present a vivid, prepared-food illustration keyed to earned ingredients; omit missing ingredients and gently name any still to add. Show a fact either way.
- **Session complete:** After three dishes, show the temporary served message and customer reaction, then return home.
- **Between visits:** Keep custom words and missed words on the same device/browser. Do not provide accounts or cross-device sync.

## Product Decisions

- The app title is **Japanese Word Kitchen** for now; it can be changed later.
- A regular session randomly selects three different dishes from a fixed 15-dish menu.
- Each dish has three or four key ingredient steps; its vocabulary-card count matches that number.
- The initial menu is: Onigiri (3), Miso soup (3), Ramen (4), Sushi (4), Chirashi sushi (4), Tempura (3), Udon (3), Soba (3), Okonomiyaki (4), Takoyaki (3), Japanese curry rice (4), Oyakodon (4), Katsudon (4), Gyoza (3), and Mochi (3).
- Ingredients are authentic, recognizable key ingredients for their named dish, not random decoration. Words can be about any topic; each earned word maps to the next ingredient.
- During study, show large earned ingredient pictures side by side on the plate; after a brief star-pop, present vivid prepared-food art. Predetermine a final illustration for every possible number of earned ingredients in each dish (four variants for three-ingredient dishes; five for four-ingredient dishes), omitting unearned ingredients and gently naming what remains to add.
- On the study view, put the Japanese dish name followed by a dash and English at the top; show the vocabulary word in the middle and a **Flip** button at bottom right. Pressing **Flip** reveals the answer and 1–4 ratings together.
- A session samples custom words first and fills any shortage from exactly 12 built-in vocabulary pairs. A pair cannot repeat in a session.
- The learner chooses English-front/Japanese-answer or Japanese-front/English-answer before regular study.
- Confidence ratings 3–4 earn ingredients; 1–2 add the word to the missed tray without repeating it in that session.
- Missed words can be reviewed from home with the same flip-and-rate interaction. A 3–4 review clears a word; 1–2 keeps it in the tray. Missed words may also appear in later regular sessions.
- Three cultural facts per dish are preferred, with two as the minimum; facts cycle without repeating until exhausted.
- A regular session ends with a brief served message and a chef-side view of three Japanese aunties: happy for zero unfinished dishes, neutral for one, and upset for two or three.
- Custom words and missed words persist on the same device/browser between visits. No sign-in, sync, or sharing.
- Visuals take broad inspiration from Heian-period art, warm yellow papyrus-like paper, ink-brush details, gentle whimsy, natural warmth, expressive hand-drawn animation, and an original cozy cartoon restaurant; legibility and authentic ingredients remain important. Studio Ghibli is a broad mood reference only; do not reproduce its characters, settings, or specific film imagery.
- Invalid blank vocabulary pairs cannot be saved, and duplicate pairs are ignored with a friendly, styled message.

## What We're Building

- Japanese Word Kitchen with one restaurant home, vocabulary management, regular study, per-dish reveals, a three-customer session ending, and missed-word review.
- A fixed menu of 15 dishes; randomly select three distinct dishes per session.
- Three or four predefined, authentic key ingredients and the same number of word cards for each dish.
- Japanese–English dish-name heading, centered study word, bottom-right **Flip** button, generous side-by-side ingredient progress, and a brief star-pop into the vivid matching predetermined assembled-dish illustration.
- A 12-pair built-in vocabulary set, custom English-Japanese pairs, two card directions, confidence ratings, and no repeated pair within a session.
- Dish-specific cultural facts, aiming for three and never fewer than two per dish.
- Persistent custom words and missed words on the same device/browser only.
- A readable, original visual treatment inspired by Heian-period art, papyrus-like paper, ink, gentle whimsy, natural warmth, expressive hand-drawn animation, and the cozy cartoon restaurant.

## Deferred From the POC

- User accounts, cross-device synchronization, and vocabulary sharing; the learner explicitly does not want these.
- Advanced spaced repetition, learning analytics, difficulty systems, or progress history.
- Custom dish creation, a broad menu beyond the 15 selected dishes, or other cuisines.
- Restaurant management, ordering, multiplayer, elaborate cooking simulation, and rich sound design.
- Background music, cooking sound effects, and recorded studio audio; optional Japanese word pronunciation uses speech synthesis instead.
- More extensive animation and personalization beyond the demoable dish-building and session-ending moments.

## Possible Later Enhancements

More dishes, vocabulary, and cultural facts could be added after the 15-dish proof of concept works. The visual world could later gain more animation or customization without changing the small study loop.

## Non-Goals

- A full restaurant simulator or ordering experience.
- A general vocabulary app without the kitchen-and-dish identity.
- Food-only vocabulary; custom words may cover any topic.
- Repeating missed words in the same session until answered correctly.
- Accounts, cross-device sync, or sharing.
- Copying a specific artist's or artwork's style.

## Open Questions

- No product-defining questions remain before PRD approval.
- Content preparation for the spec/build should define the exact 12 built-in word pairs, three or more (minimum two) accurate facts for each selected dish, and each dish's three or four authentic key ingredients. These are content details to prepare against the agreed product rules, not unresolved behavior.
