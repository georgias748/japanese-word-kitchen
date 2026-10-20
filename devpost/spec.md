---
doc: spec
status: approved
---

# Japanese Word Kitchen — Technical Spec

## How This Works, In Plain Language
This app is a tiny browser game and study tool wrapped in a cozy Japanese restaurant scene. The learner starts on a home screen that feels like a restaurant doorway, then picks a study session. The app chooses three dishes, gives the learner a short set of Japanese vocabulary cards for each dish, and each time they rate a word they either earn the next ingredient for that dish or add the word to a missed-words tray.

The important idea is that the app turns vocabulary learning into visible progress: each successful word adds a real ingredient to a dish, and when a dish is complete the app shows the assembled result with a short cultural fact. This matches the PRD's main promise: a calm study loop with a satisfying sense of progress, not just a plain flashcard list. The app keeps all of its data on the same device in browser storage so it stays beginner-friendly and within the proof-of-concept boundary.

This structure is intentionally simple. A browser app with one page and a few UI states is enough to prove the idea without introducing accounts, databases, or a backend. That keeps the project focused on the core learning loop and makes it much easier to build, explain, and demo in a short session.

Implements `prd.md > The Core Journey`, `prd.md > Restaurant home and navigation`, and `scope.md > The POC Boundary`.

## The Core Journey Through the System
The user opens the app on the restaurant home. From there they can start a study session, manage custom vocabulary, or review missed words. The app reads any saved custom words and missed words from local browser storage before it renders the home screen.

When the learner presses **Let's Study**, the app picks three different dishes from the fixed 15-dish menu. For each dish it builds a card set of the correct length (three or four cards) and gives each card a word from either the learner's custom vocabulary or the built-in vocabulary set. It never repeats a vocabulary pair anywhere in the same session, and it fills the remaining slots from the built-in set when needed.

The learner then studies one word at a time on the tabletop. The app shows the dish name and one word; pressing **Flip** reveals the answer and the rating controls. If the learner gives a 3 or 4, the next ingredient picture is added to the dish. If they give a 1 or 2, the word is sent to the missed-words tray and is not shown again in that session. When the dish's cards are done, the app shows a star-pop with the assembled dish illustration and a cultural fact.

The dish reveal uses larger, vivid prepared-food artwork for earned ingredients only, gives the meal a brief star-pop, and gently names ingredients still to add.

After all three dishes, the session ends with the served message and the chef-side counter, where the three aunties show a happy, neutral, or upset expression depending on how many dishes were left unfinished. The app then returns to the home screen, where custom words and missed words are still available on that same device.

Implements `prd.md > The Core Journey`, `prd.md > Dish selection and vocabulary assignment`, `prd.md > Vocabulary cards and ingredient progress`, `prd.md > Session ending`, and `prd.md > Custom vocabulary and device-local progress`.

## Stack
- Language: plain HTML, CSS, and JavaScript
- Runtime: any modern browser; local app, no server required for the core demo
- Storage: browser `localStorage`
- Styling: custom CSS with a hand-painted, cozy cartoon look
- Optional local serving: Python `http.server` or VS Code Live Server for easier browser loading

Why this stack:
- It is the simplest way to match the beginner-friendly learning goal and the project's proof-of-concept boundary.
- It avoids the extra setup cost of React, a build tool, or a backend, which would distract from the learning objective and the demo.
- The app's data model is small and local, so `localStorage` is enough to persist the learner's custom words and missed words between visits without an account system.

Tradeoff accepted: the app is deliberately single-device and front-end only. It will not support cross-device sync or shared user accounts, but that stays faithful to the PRD and keeps the app reliable for a short hackathon build.

Relevant documentation:
- HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Python http.server: https://docs.python.org/3/library/http.server.html

## Where It Runs and How Someone Tries It
This app runs entirely in a browser on the learner's local machine. It does not require a hosted backend, sign-in, or deployment to prove the concept. For the required hackathon submission, a short demo video can be recorded locally while the app runs in a browser.

Local run steps:
1. Open the project folder in VS Code.
2. From the terminal, run: `python3 -m http.server 8000`
3. Open: `http://localhost:8000`
4. Use the app to start a study session, add custom vocabulary, and review missed words.

If using VS Code Live Server, open the folder and start the server from the editor instead; the app still runs locally in the browser.

This meets the requirement that deployment is optional and not a substitute for the demo video or code repository.

## Look and Feel
The app follows the warm, intimate restaurant world described in the PRD and scope. The overall vibe is cozy, hand-painted, and gently elegant rather than overly gamified. The home screen feels like a welcoming restaurant interior, while the study tabletop is simpler and calmer so the word and ingredient progress stay visually clear.

Design direction:
- Palette: warm paper tones, muted golds, deep browns, ink-black accents, and soft, natural colors for ingredients; use sage greens and warm coral accents to give the restaurant scene more life without making the study tabletop busy
- Typography: readable letterforms for study content; decorative, brush-like lettering only for short notes and headings
- Density: spacious and calm on the study table, slightly richer on the restaurant home
- Character illustrations show clear necks and small, subtle, recognizable skin-toned ears; avoid hair-colored side shapes that could be mistaken for ears.
- Aesthetic reference: original cartoon Japanese restaurant atmosphere with Heian-era-inspired paper and ink details, alongside gentle whimsy, natural warmth, expressive hand-drawn animation, and richly observed everyday spaces. The learner cites Studio Ghibli as a broad mood reference; do not reproduce recognizable characters, settings, or specific film imagery.
- Copy tone: friendly, gentle, in-world notes instead of generic browser alerts

The stack supports these choices directly because the styling is custom CSS rather than a framework theme. The app can honor the cozy restaurant look without introducing extra complexity.

## Components

### Restaurant Home Screen
This is the main entry point to the app. It presents navigation for **Let's Study**, **Manage words**, and **Review**, and it shows the missed-words tray when there are words to revisit. Its welcome presents the learner as the chef helping the grandparents prepare and serve food. It also sets the visual tone for the restaurant world.

PRD ref: `prd.md > Restaurant home and navigation` and `prd.md > Missed-word review`.

### Vocabulary Manager
This component lets the learner see, add, edit, and delete custom English-Japanese pairs. It validates input before saving, blocks duplicates, and keeps the custom list on the same device in browser storage.

PRD ref: `prd.md > Vocabulary management` and `prd.md > Custom vocabulary and device-local progress`.

### Study Session Engine
This is the core logic behind a regular three-dish session. It selects three different dishes, calculates the correct number of cards for each dish, samples custom words first, fills the rest from the built-in list, and ensures no pair repeats in the same session.

PRD ref: `prd.md > Dish selection and vocabulary assignment` and `prd.md > States and Boundaries`.

### Tabletop Card Flow
This is the view where the learner sees one dish title and one word at a time. It handles the **Flip** action, reveals the rating controls, offers Japanese speech synthesis for the word, applies the 1–4 scoring, and updates ingredient progress or the missed-words tray.

PRD ref: `prd.md > Vocabulary cards and ingredient progress` and `prd.md > Study tabletop`.

Pronunciation uses the browser's Web Speech API and a Japanese voice installed on the learner's device. It requires no network service or stored audio files and works for custom Japanese text as well as built-in words. If the browser is still loading its voice list, the app waits briefly for the `voiceschanged` event before reporting that no Japanese voice is available. If speech synthesis or a Japanese voice is unavailable, the interface explains the voice requirement.

### Dish Reveal and Cultural Fact View
After a dish is finished, this component shows a brief star-pop, a vivid assembled dish illustration, a gentle note for any ingredients still to add, and a short cultural fact. Original dish-specific vector art uses large prepared-food shapes that fill the plate or bowl and depicts earned ingredients only.

PRD ref: `prd.md > Dish reveal and served-at-the-counter ending` and `prd.md > Cultural facts`.

### End-of-Session Counter Scene
This component shows the served message and then the chef-side counter with the three Japanese aunties. Their expressions reflect the number of unfinished dishes, and the app then returns the learner to home.

PRD ref: `prd.md > Session ending` and `prd.md > The Core Journey`.

### Missed-Word Review Flow
This component reuses the same flip-and-rate interaction as the regular study view, but without adding ingredients to a dish. A rating of 3 or 4 clears the word from the missed tray; 1 or 2 keeps it there.

PRD ref: `prd.md > Missed-word review` and `prd.md > Review section`.

## Data Model
The app stores a small amount of structured data in browser memory and `localStorage`. The data model is intentionally simple and matches the POC boundary.

### Dish definitions
Each dish has:
- `id`
- `japaneseName`
- `englishName`
- `ingredientSequence` (ordered list of ingredient keys or labels)
- `cardCount` (3 or 4)
- `finalIllustrations` (variant set keyed to the number of earned ingredients)
- `culturalFacts` (two or three short fact strings)

Example shape:
```js
{
  id: 'ramen',
  japaneseName: 'ラーメン',
  englishName: 'Ramen',
  ingredientSequence: ['noodles', 'broth', 'chashu', 'green onion'],
  cardCount: 4,
  finalIllustrations: {
    0: 'empty-bowl',
    1: 'one-ingredient',
    2: 'two-ingredients',
    3: 'three-ingredients',
    4: 'full-bowl'
  },
  culturalFacts: ['...']
}
```

### Vocabulary pairs
A vocabulary pair has:
- `id`
- `english`
- `japanese`
- `source` (`builtIn` or `custom`)

The built-in list contains 12 pairs. Custom words are added by the learner and stored separately from the built-in list.

### Session state
The current session contains:
- `selectedLanguageOrder` (`en-first` or `ja-first`)
- `dishQueue` (three chosen dish IDs)
- `currentDishIndex`
- `currentWord`
- `dishProgress` (which ingredients have been earned per dish)
- `missedWords` (words not mastered in the current session or review rounds)
- `currentSessionWordIds` (to prevent repeats)

### Persistence
- `customWords`: array of custom vocabulary pairs saved to `localStorage`
- `missedWords`: array of pairs saved to `localStorage`
- `selectedLanguageOrder`: optional user preference stored in `localStorage`

This data is read when the app loads and written whenever the learner adds, edits, deletes, or rates a word. The app deliberately does not ship any server-side database because the product's heart is the single-device study journey.

## File Structure
```text
project/
├── index.html                 # app shell and root layout
├── styles.css                 # restaurant, study, and card styling
├── app.js                     # app bootstrapping and state orchestration
├── data/
│   ├── dishes.js              # menu, ingredient sequences, cultural facts
│   └── vocabulary.js          # 12 built-in English/Japanese pairs
├── state/
│   ├── storage.js             # localStorage read/write helpers
│   └── session.js             # current session state transitions
├── components/
│   ├── home.js                # restaurant home and nav
│   ├── vocab.js               # custom vocabulary manager
│   ├── study.js               # tabletop study view and scoring flow
│   ├── reveal.js              # dish reveal, fact, and served scene
│   └── review.js              # missed-word review loop
├── utils/
│   ├── shuffle.js            # randomization helpers
│   ├── validation.js          # blank and duplicate checks
│   ├── render.js              # DOM update helpers
│   └── speech.js              # installed Japanese browser voice
├── devpost/
│   ├── scope.md               # approved scope
│   ├── prd.md                 # approved product requirements
│   ├── spec.md                # approved technical blueprint
│   └── spec.html              # visual review companion
├── README.md                  # local startup instructions
└── .gitignore                 # optional editor and cache exclusions
```

This structure is simple, explicit, and close to the implementation. It keeps the app easy for a beginner to navigate while still making each major behavior easy to locate in code.

## External Services and Dependencies
There are no external platform dependencies required for the core product.

- Browser only: no API keys, no authentication, no cloud database
- Optional local serving: Python standard library or Live Server extension, both local and free
- Optional pronunciation: browser Web Speech API plus an installed Japanese device voice
- No hosted services or backends needed for the proof of concept

Because there are no external services, there are no cost, rate-limit, or outage risks on the critical path. The only real dependency is the browser's `localStorage` API and the learner's device/browser.

## Important Failure Modes
- **Blank or duplicate vocabulary entry** → the app shows a styled in-world notice and keeps the current list unchanged.
- **Not enough custom words for a session** → the app fills remaining slots from the built-in vocabulary set, preserving the no-repeat rule.
- **Local storage unavailable or cleared** → the app still loads the built-in pairs, but custom words and missed words reset to default state instead of crashing.
- **Dish progress is incomplete** → the app still shows the meal with the earned ingredients and a fact, matching the PRD's unfinished-dish behavior.
- **Speech synthesis or a Japanese voice is unavailable** → pronunciation is not played; after briefly waiting for the browser's voice list, the app explains the voice requirement without affecting study.

## What Was Simplified and Why
- **No backend database** instead of a full persistent server — this keeps the app local, beginner-friendly, and within the POC boundary while still matching the requirement that custom words and missed words persist on the same device.
- **No user accounts** instead of a real sign-in flow — the app does not need login to prove the learning loop, and the PRD explicitly says that sign-in and sync are unnecessary.
- **Original dish-specific vector illustrations** instead of generative art or external image assets — this keeps the product visually coherent, easy to build, and consistent with the fixed menu and earned-ingredient rules.
- **Single-device browser storage** instead of cross-device sync — this supports the app's real need without introducing infrastructure cost or setup complexity.

## Decisions and Open Issues
Chosen technical decisions:
- We will build a single-page browser app with vanilla HTML/CSS/JS instead of a framework. The main reason is beginner-friendliness and a lower setup cost; the tradeoff is that there is no reusable framework structure for larger scale, but the app does not need it for a proof of concept.
- We will store custom words and missed words in `localStorage` rather than a server database. This keeps the app self-contained and matches the PRD's device-local persistence requirement.
- We will draw original dish-specific SVG variants from earned ingredients. Larger food shapes, stronger natural color, and a brief star-pop make the prepared dish the focus without adding image services, external licensing work, or a visual generation system.

One genuine uncertainty that was clarified during planning: the learner was unsure whether they needed a framework or a more elaborate stack. We resolved that by choosing plain HTML/CSS/JS with a local browser app, because the project's goal is a tangible, learnable proof of concept rather than framework mastery. This is a small enough build to stay focused on the product and the agent workflow early in the project.

Remaining open issues: none of a consequential kind. The product behavior and app boundaries are clear enough to start building. Any implementation details that emerge during coding will be checked against the PRD and this specification before they change the plan.
