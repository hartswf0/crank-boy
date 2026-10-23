window.CRANK = {
  "updated": "2026-10-23",
  "about": "Single source for the album index and its opening film. Six agents, three starting prompts, two models. Edit this file to add or change a version; do not edit index.html for content. JSON only between the first { and the last }.",
  "postcard": {
    "title": "À l'École (At School)",
    "series": "En l'an 2000",
    "attribution": "attributed to Villemard, about 1910",
    "image": "assets/at-school-villemard-1910.png",
    "archive": "https://soyjang.github.io/archive-of-past-futures/"
  },
  "people": [
    {
      "name": "Watson Hartsoe",
      "role": "Turns the crank: wrote and fed the prompts, runs all six agents"
    },
    {
      "name": "Soyoun Jang",
      "role": "Archive of Past Futures; the historicising method"
    },
    {
      "name": "Jay David Bolter",
      "role": "Tetrad work with Soyoun Jang"
    },
    {
      "name": "Collin Freeman",
      "role": "Collaborator on the tetrad and SCION game work"
    }
  ],
  "prompts": [
    {
      "id": "ludic",
      "title": "Ludic",
      "full": "SCION LUDIC: Autonomous Speculative Game Studio",
      "file": "docs/scion-ludic.md",
      "emblem": "die",
      "line": "A game studio that must write a theory of play before it builds anything. Huizinga's Homo Ludens is its starting provocation, and this postcard is its reference experiment.",
      "letter": "A",
      "plain": "Write a theory of play first, then build."
    },
    {
      "id": "hist",
      "title": "Historicising",
      "full": "SCION: Historicising Speculative Design",
      "file": "docs/scion.md",
      "emblem": "timeline",
      "line": "A research system that reads past futures with Soyoun Jang's Archive of Past Futures method and the Jang and Bolter tetrad, then builds playable counterfutures.",
      "letter": "B",
      "plain": "Study the card’s history first, then build other possible futures."
    },
    {
      "id": "studio",
      "title": "Studio 2.0",
      "full": "SCION Game Studio 2.0",
      "file": "docs/scion-game-studio-2.md",
      "emblem": "gear",
      "line": "An autonomous game studio that writes a cognitive theory of play and fun before it designs the experience.",
      "letter": "C",
      "plain": "Write a theory of fun first, then design the game."
    }
  ],
  "models": [
    {
      "id": "argon",
      "name": "Gemini 4 Argon High",
      "harness": "Antigravity",
      "row": "back",
      "maker": "Google",
      "short": "Gemini"
    },
    {
      "id": "claude",
      "name": "Claude Opus 5.5",
      "harness": "Claude chat",
      "row": "front",
      "maker": "Anthropic",
      "short": "Claude"
    }
  ],
  "agents": [
    {
      "id": "ludic-claude",
      "prompt": "ludic",
      "model": "claude",
      "label": "Opus, Ludic"
    },
    {
      "id": "hist-claude",
      "prompt": "hist",
      "model": "claude",
      "label": "Opus, Historicising"
    },
    {
      "id": "studio-claude",
      "prompt": "studio",
      "model": "claude",
      "label": "Opus, Studio 2.0"
    },
    {
      "id": "ludic-argon",
      "prompt": "ludic",
      "model": "argon",
      "label": "Argon, Ludic"
    },
    {
      "id": "hist-argon",
      "prompt": "hist",
      "model": "argon",
      "label": "Argon, Historicising"
    },
    {
      "id": "studio-argon",
      "prompt": "studio",
      "model": "argon",
      "label": "Argon, Studio 2.0"
    }
  ],
  "versions": [
    {
      "id": "v1",
      "agent": "ludic-claude",
      "tag": "1",
      "title": "Lesson One",
      "status": "built",
      "date": "2026-10-23",
      "play": "play/v1.html",
      "making": "#v1-making",
      "youPlay": "The crank boy",
      "line": "You turn the crank that powers the lesson. Stop, and six heads lift. While the machine is silent you can read the page in the hopper, swap the book, pull a wire, or read aloud. At the bell the teacher grades every answer against his own copy, and two sources in the room disagree with it.",
      "card": "assets/cards/v1.jpg"
    },
    {
      "id": "case01",
      "agent": "hist-claude",
      "tag": "C1",
      "title": "SCION Case 01: À l'école",
      "status": "built",
      "date": "2026-10-23",
      "play": "scion/case-01.html",
      "making": "scion/process.html",
      "youPlay": "A pupil on the bench",
      "line": "The research case on the card: its contested provenance, what it claims and what it leaves unchanged, a century of educational media, and playable counterfutures from a pupil's seat. The lesson engine was playtested exhaustively: 132,379 states, no dead ends.",
      "card": "assets/cards/case01.jpg"
    },
    {
      "id": "v5",
      "agent": "studio-claude",
      "tag": "5",
      "title": "The Class Book",
      "status": "built",
      "date": "2026-10-23",
      "play": "play/v5.html",
      "making": "making/v5.html",
      "youPlay": "A pupil, at a seat or the crank",
      "line": "You choose a seat before each lesson, or take the crank. Four lessons are marked against whatever book the teacher fed that day. In the fifth, you decide what the class's own book says.",
      "card": "assets/cards/v5.jpg"
    },
    {
      "id": "v8",
      "agent": "ludic-argon",
      "tag": "8",
      "title": "The Sensory Tether and the Torn Folio",
      "status": "built",
      "date": "2026-10-23",
      "play": "play/v8.html",
      "making": "making/v8.html",
      "youPlay": "Émile in the headset, or Auguste at the crank",
      "line": "Across five lessons, lift your ear-cup between the Master's sweeps to see him tear out Folio 42, drag the flywheel to spit the page onto the floorboards, whisper with Jules, and challenge the Recitation.",
      "card": "assets/cards/v8.jpg"
    },
    {
      "id": "v7",
      "agent": "hist-argon",
      "tag": "7",
      "title": "The School of the Year 2000",
      "status": "built",
      "date": "2026-10-23",
      "play": "play/v7.html",
      "making": "making/v7.html",
      "mirror": "scion/school-2000.html",
      "youPlay": "A pupil on the front bench",
      "line": "Three guided steps from the front bench. Compare Lavisse's 1902 state broadcast against an 1884 parish codex, click any figure in the picture, or run the paths for Counterfutures A, B and C.",
      "card": "assets/cards/v7.jpg"
    },
    {
      "id": "v6",
      "agent": "studio-argon",
      "tag": "6",
      "title": "Le Contre-Livre",
      "status": "built",
      "date": "2026-10-23",
      "play": "play/v6.html",
      "making": "making/v6.html",
      "youPlay": "The hopper and the crank",
      "line": "Three bench rows with a voltage gradient. Load paired Canon and Counter-Text lines into the hopper, change crank speed, and pause to whisper so the class writes Le Contre-Livre before the Inspector arrives.",
      "card": "assets/cards/v6.jpg"
    }
  ],
  "proposals": [
    {
      "id": "v2",
      "from": "ludic-claude",
      "title": "The Teacher Cranks",
      "text": "docs/prompts/v2.md",
      "line": "Authority reversed. You choose the books; the teacher turns the crank and decides whether they arrive."
    },
    {
      "id": "v3",
      "from": "ludic-claude",
      "title": "Two Seats",
      "text": "docs/prompts/v3.md",
      "line": "Two phones. One player cranks and sees the hopper; the other wears the headset. They can talk only while the machine is silent."
    },
    {
      "id": "v4",
      "from": "ludic-claude",
      "title": "The Pump",
      "text": "docs/prompts/v4.md",
      "line": "The climate-futures case: a boy at a hand pump feeding six houses on one pipe."
    }
  ],
  "library": [
    {
      "key": "join",
      "group": "The shared line",
      "title": "Join the room",
      "file": "docs/prompts/join-the-room.md",
      "note": "Paste into any of the six agents before it works on the repo."
    },
    {
      "key": "ludic",
      "group": "Starting prompts",
      "title": "SCION LUDIC",
      "file": "docs/scion-ludic.md",
      "note": "Ludic column: versions 1 and 8"
    },
    {
      "key": "hist",
      "group": "Starting prompts",
      "title": "SCION: Historicising Speculative Design",
      "file": "docs/scion.md",
      "note": "Historicising column: Case 01 and version 7"
    },
    {
      "key": "studio",
      "group": "Starting prompts",
      "title": "SCION Game Studio 2.0",
      "file": "docs/scion-game-studio-2.md",
      "note": "Studio 2.0 column: versions 5 and 6"
    },
    {
      "key": "multiplane",
      "group": "Other instructions",
      "title": "Multiplane Animation Studio",
      "file": "docs/multiplane-animation-studio.md",
      "note": "Used to restyle version 5 and to stage the opening film"
    },
    {
      "key": "void",
      "group": "Other instructions",
      "title": "VOIDBASTARD-TAO",
      "file": "docs/voidbastard-tao.md",
      "note": "Surface rules used for this classroom index"
    },
    {
      "key": "pragmatist",
      "group": "Other instructions",
      "title": "Operational Pragmatist",
      "file": "docs/operational-pragmatist.md",
      "note": "Writing rules for the index copy and the film captions"
    },
    {
      "key": "axis",
      "group": "Other instructions",
      "title": "Axis Inverter",
      "file": "docs/axis-inverter.md",
      "note": "Opening rules for the film: start from what the viewer assumes, then the anomaly"
    },
    {
      "key": "build1",
      "group": "Version 1 session",
      "title": "Build prompt",
      "file": "docs/prompts/build-v1.md",
      "note": "Ended theory mode"
    },
    {
      "key": "commit1",
      "group": "Version 1 session",
      "title": "Commit prompt",
      "file": "docs/prompts/commit-v1.md",
      "note": "First index"
    },
    {
      "key": "room",
      "group": "Version 1 session",
      "title": "Classroom index prompt",
      "file": "docs/prompts/index-room.md",
      "note": "Second index: the seating chart"
    },
    {
      "key": "album",
      "group": "Version 1 session",
      "title": "Album and film prompt",
      "file": "docs/prompts/index-album.md",
      "note": "This page: the opening film and the album"
    },
    {
      "key": "v2",
      "group": "Not built",
      "title": "Version 2: The Teacher Cranks",
      "file": "docs/prompts/v2.md",
      "note": "Build prompt"
    },
    {
      "key": "v3",
      "group": "Not built",
      "title": "Version 3: Two Seats",
      "file": "docs/prompts/v3.md",
      "note": "Build prompt"
    },
    {
      "key": "v4",
      "group": "Not built",
      "title": "Version 4: The Pump",
      "file": "docs/prompts/v4.md",
      "note": "Build prompt"
    },
    {
      "key": "remix",
      "group": "Not built",
      "title": "Remix: change one relationship",
      "file": "docs/prompts/remix.md",
      "note": "Template for a new version"
    }
  ]
};
