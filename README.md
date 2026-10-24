# The Crank Boy

Six agents read Villemard's postcard *À l'École* (At School, from *En l'an 2000*, about 1910) and each built a game from it. The index page is the classroom: each student is one agent and the version it built.

| | Ludic | Historicising | Studio 2.0 |
|---|---|---|---|
| **Back row: Gemini 4 Argon High, Antigravity** | v8 The Sensory Tether and the Torn Folio | v7 The School of the Year 2000 | v6 Le Contre-Livre |
| **Front row: Claude Opus 5.5, Claude chat** | v1 Lesson One | Case 01: À l'école | v5 The Class Book |

Columns are the starting prompts: `docs/scion-ludic.md`, `docs/scion.md`, `docs/scion-game-studio-2.md`. Open `index.html`; everything is plain HTML with no build step.

The index opens on a film (about 1 min 45 s, with voices): Crank Boy turns a hand-cranked projector, and the screen shows the 1910 cards, the six programs, the three theories behind their instructions, one game being played, and the lab's other films. Then it shows an album: a photo of each game's first screen in the grid above. Select a card to see what you do in that game and play it; select a column to compare the two games built from one instruction. Compare (how each game was made and how it looks), Series (six more En l'an 2000 cards as future games), Sources (Huizinga, Jang, Koster, and the people and works behind the approach) and Lab (pAELo) are tabs.

## The Town and the shorts

[`shorts/index.html`](shorts/index.html) is the project page for the series cards. Each of the seven cards is worked three ways: a short film, a game, and a place in [the Town](shorts/world.html), one playable world where all seven cards hang under a drawn power line from the crank boy's machine. Every film and game uses a different operator from the SCION animation swarms (`docs/operators/`). Each lets in real archive film from the [cineosis-lab](https://github.com/hartswf0/cineosis-lab) shot library, the way CINEOSIS does in the Bolas lab. The doodles over the Town are real Quick, Draw! records (CC BY 4.0) chosen by [Secondhand Motion](https://github.com/hartswf0/secondhand-motion). The three handle-holders can be recast into each other's places: the same performance, a different actor.

- Films: `node shorts/tools/render.mjs <id>`; the Town's cartoon: `node shorts/tools/render.mjs world`.
- Play one district alone: `shorts/world.html?d=<card id>`.
- Methods: [`docs/prompts/shorts.md`](docs/prompts/shorts.md), [`docs/prompts/town.md`](docs/prompts/town.md). Plates: [`shorts/plates.json`](shorts/plates.json). Doodles: `assets/shorts/doodles.json`.
- The art department, new aesthetics for each card: [`shorts/requests.html`](shorts/requests.html), prompt [`docs/prompts/art-department.md`](docs/prompts/art-department.md), call sheets `shorts/requests.json`, re-print test `shorts/tools/stencil.py`.
- Mirrored into Bolas at `bolas/crank-boy/` by `python3 shorts/tools/to_bolas.py <bolas checkout>`.

## For agents

Read [`AGENTS.md`](AGENTS.md). The film and the album draw everything from [`registry/registry.js`](registry/registry.js); agents pass notes in [`registry/notes.js`](registry/notes.js) and follow [`DESIGN.md`](DESIGN.md). The prompt that joins an agent to this protocol is [`docs/prompts/join-the-room.md`](docs/prompts/join-the-room.md). Run `node registry/check.js` before committing.

![At School, Villemard, about 1910](assets/at-school-villemard-1910.png)

## Contents

| Path | What it is |
|---|---|
| `index.html` | Index: versions, the postcard, how to play, theory, how it was made, copyable prompts |
| `play/v1.html` | Version 1, Lesson One. The whole game in one file |
| `play/v5.html` | Version 5, The Class Book. The whole game in one file |
| `making/v5.html` | How version 5 was made: provenance, process, theory, copyable prompts |
| `play/v6.html` | Version 6, Le Contre-Livre (The Counter-Book). The whole game in one file |
| `making/v6.html` | How version 6 was made: provenance, collaborators, critic audit, copyable prompts |
| `play/v7.html` | Version 7, The School of the Year 2000 (Guided chromolithograph edition, 8-artifact summary & state graph) |
| `making/v7.html` | How version 7 was made: provenance, collaborators (Soyoun Jang, Jay David Bolter, Collin Freeman), SCION process & copyable prompts |
| `play/v8.html` | Version 8, The Sensory Tether & The Torn Folio (SCION LUDIC 1.0 mobile-first edition), in one file |
| `making/v8.html` | How version 8 was made: provenance, collaborators (Watson Hartsoe, Jay David Bolter, Collin Freeman, Soyoun Jang), 8-archetype playtest & copyable prompts |
| `scion/school-2000.html` | SCION Case 01 Guided Edition (mirror of `play/v7.html`) |
| `scion/school-2000-process.html` | SCION Case 01 Guided Edition process & copyable prompts (mirror of `making/v7.html`) |
| `docs/scion-game-studio-2.md` | The SCION Game Studio 2.0 instruction used for versions 5 and 6 |
| `docs/multiplane-animation-studio.md` | The drawing-agent prompt used to restyle version 5 |
| `docs/theory.md` | The theory of play, written before any code |
| `docs/scion-ludic.md` | The SCION LUDIC studio instruction the game was made under |
| `docs/prompts.md` | Every prompt used, plus build prompts for versions 2 to 4 |
| `scion/case-01.html` | SCION Case 01: the research case on the same postcard, with a playable lesson from the pupil's seat |
| `scion/process.html` | Case 01 provenance, collaborators, process and copyable prompts |
| `scion/school-2000-engine.js`, `scion/playtest.js` | Case 01 game logic and its exhaustive playtest (`node scion/playtest.js`) |
| `docs/scion.md` | The SCION brief for Case 01 |
| `assets/` | The postcard and favicon |

## Versions

| | Name | Change | Status |
|---|---|---|---|
| 1 | Lesson One | You crank; the teacher feeds the books | Built |
| 2 | The Teacher Cranks | You choose the books; he decides whether they arrive | Not built |
| 3 | Two Seats | One player cranks, one wears the headset | Not built |
| 4 | The Pump | The climate-futures case: a hand pump on a shared pipe | Not built |
| 5 | The Class Book | You are a pupil: choose a helmet or the crank, then decide what the class's own book says | Built |
| 6 | Le Contre-Livre (The Counter-Book) | Three bench rows with a voltage gradient; load conflicting book pairs and pause to whisper so the class writes *Le Contre-Livre* | Built |
| 7 | The School of the Year 2000 (Guided Edition) | 3-step guided play from the front bench comparing Lavisse's 1902 broadcast against an 1884 parish codex across Counterfutures A, B, and C | Built |
| 8 | The Sensory Tether & The Torn Folio | Inhabit Émile or Auguste across 5 lessons; lift your ear-cup between the Master's sweeps to rescue torn Folio 42 | Built |

## Ledger

Documented: the postcard and its layout. Interpretation: that the machine turns books into a signal. Invented: the river Verse, Brécourt, Port-Ancel, every book and page, the wall map, the question, the students' names and answers, the three-row voltage gradient, *Le Contre-Livre*, and the torn *Folio 42* Sensory Tether lessons.

SCION Case 01, Version 6, Version 7, and Version 8 read the same card with Soyoun Jang's historicising method (with Jay David Bolter and Collin Freeman's tetrad work). See [`scion/process.html`](scion/process.html), [`making/v6.html`](making/v6.html), [`making/v7.html`](making/v7.html), and [`making/v8.html`](making/v8.html).

Research context: Soyoun Jang, [Archive of Past Futures](https://soyjang.github.io/archive-of-past-futures/).

Made by Watson Hartsoe, in collaboration with Soyoun Jang, Jay David Bolter, and Collin Freeman, October 2026.
