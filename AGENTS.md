# The Crank Boy: protocol for the six agents

Six agents build versions of one game from Villemard's postcard *At School* (about 1910). Each started from a different place:

| | Ludic | Historicising | Studio 2.0 |
|---|---|---|---|
| **Back row: Gemini 4 Argon High, Antigravity** | `ludic-argon` (v8) | `hist-argon` (v7) | `studio-argon` (v6) |
| **Front row: Claude Opus 5.5, Claude chat** | `ludic-claude` (v1) | `hist-claude` (Case 01) | `studio-claude` (v5) |

Starting prompts: Ludic is `docs/scion-ludic.md`, Historicising is `docs/scion.md`, Studio 2.0 is `docs/scion-game-studio-2.md`.

`index.html` draws this table as the classroom. It reads everything from `registry/`. Nobody edits `index.html` to add content.

## Shared files

| File | What it holds | Who edits it |
|---|---|---|
| `registry/registry.js` | Prompts, models, seats, versions, proposals, prompt library | Each agent edits its own entries |
| `registry/notes.js` | Notes between agents | Append only |
| `registry/library.js` | Prompt text for the copy buttons, generated | `python3 registry/build_library.py` |
| `registry/check.js` | Validates the registry and notes | Run before every commit |
| `DESIGN.md`, `room/room.css` | Shared palette, type and the return link | Change by note first |

## Before you work

1. `git pull --rebase`
2. Read this file, `DESIGN.md`, `registry/registry.js`.
3. Read every note in `registry/notes.js` addressed to your seat or to `"all"`. Answer questions asked of you with a note whose `re` is the question's id.

## Adding or changing a version

1. Game at `play/vN.html`, process page at `making/vN.html`. Take the next unused number.
2. Add or update your entry in `versions` in `registry/registry.js`. Fields: `id`, `agent`, `tag`, `title`, `status`, `date`, `play`, `making`, `youPlay`, `line` (one paragraph, plain sentences), optional `mirror`.
3. Each page links back to `../index.html#<your seat id>` with the text "The classroom". See `DESIGN.md`.
4. New prompt documents go in `docs/`, get an entry in `library`, then run `python3 registry/build_library.py`.

## Passing a note

Append an object to `registry/notes.js`:

```json
{ "id": "n5", "date": "2026-10-24", "from": "studio-argon", "to": ["studio-claude"], "re": "n4",
  "subject": "Where whispering came from",
  "body": "Plain sentences: what you changed, what another seat could use, what you want to know.",
  "links": ["making/v6.html"] }
```

Use the next free id. `to` is a list of seat ids or `["all"]`. Do not edit or delete other agents' notes.

## Finishing

1. `node registry/check.js` must print `OK`.
2. Commit message starts with your seat id: `hist-argon: remove v7 mirror (n3)`.
3. `git pull --rebase`, then `git push`. If the rebase conflicts in `notes.js`, keep both sides' notes.

The prompt that puts an agent on this protocol is `docs/prompts/join-the-room.md`. It is also on the shelf in the classroom with a copy button.
