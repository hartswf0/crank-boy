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
      "plain": "Write a theory of play first, then build.",
      "theory": {
        "work": "Homo Ludens: A Study of the Play-Element in Culture",
        "by": "Johan Huizinga",
        "year": "1938",
        "url": "https://archive.org/details/homoludensstudyo1950huiz"
      }
    },
    {
      "id": "hist",
      "title": "Historicising",
      "full": "SCION: Historicising Speculative Design",
      "file": "docs/scion.md",
      "emblem": "timeline",
      "line": "A research system that reads past futures with Soyoun Jang's Archive of Past Futures method and the Jang and Bolter tetrad, then builds playable counterfutures.",
      "letter": "B",
      "plain": "Study the card’s history first, then build other possible futures.",
      "theory": {
        "work": "Archive of Past Futures",
        "by": "Soyoun Jang",
        "year": "2026",
        "url": "https://soyjang.github.io/archive-of-past-futures/#intro",
        "more": "https://www.soyounjang.com/"
      }
    },
    {
      "id": "studio",
      "title": "Studio 2.0",
      "full": "SCION Game Studio 2.0",
      "file": "docs/scion-game-studio-2.md",
      "emblem": "gear",
      "line": "An autonomous game studio that writes a cognitive theory of play and fun before it designs the experience.",
      "letter": "C",
      "plain": "Write a theory of fun first, then design the game.",
      "theory": {
        "work": "A Theory of Fun for Game Design",
        "by": "Raph Koster",
        "year": "2004",
        "url": "https://archive.org/search.php?query=creator%3A%22Koster%2C+Raph%2C+1971-%22"
      }
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
      "card": "assets/cards/v1.jpg",
      "made": "One Claude conversation. A written theory of play came first, then a one-line build prompt. Checked by rendering at phone and desktop size.",
      "looks": "The drawn classroom on top; the crank wheel and four buttons below."
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
      "card": "assets/cards/case01.jpg",
      "made": "A research case in eight sections: provenance, claims, tetrads, counterfutures, a playable lesson. The lesson engine was playtested by script across 132,379 states, and an independent critic reviewed it before publishing.",
      "looks": "A research document: the real postcard with numbered regions to tap, beside a source record."
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
      "card": "assets/cards/v5.jpg",
      "made": "Built from the Studio 2.0 instruction's theory of play and fun, then redrawn with the Multiplane Animation Studio prompt into the postcard's print style with a three-plane camera.",
      "looks": "The drawn classroom on the left; the story in prose on the right."
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
      "card": "assets/cards/v8.jpg",
      "made": "Built under SCION LUDIC 1.0 and tested against eight kinds of player, such as the optimiser, the refuser and the rule-breaker, before publishing.",
      "looks": "A dark manuscript page in French over the classroom, opening with an instruction card."
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
      "card": "assets/cards/v7.jpg",
      "made": "A multi-agent SCION run that produced eight artifacts and a state graph, published as a guided three-step edition.",
      "looks": "A guided dashboard: three steps, the classroom, and two contradicting sources side by side."
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
      "card": "assets/cards/v6.jpg",
      "made": "Built from the Studio 2.0 instruction's theory of play and fun, then audited by an independent critic. The making page records what the audit found.",
      "looks": "A control desk: the classroom with a crank-speed dial and a queue of paired books."
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
      "key": "scion-anim",
      "group": "Other instructions",
      "title": "SCION Autonomous Animation Studio",
      "file": "docs/scion-animation-studio.md",
      "note": "Production and independent critique for the opening film"
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
      "note": "Second index: the album and the first film"
    },
    {
      "key": "filmprompt",
      "group": "Version 1 session",
      "title": "Film and series prompt",
      "file": "docs/prompts/index-film.md",
      "note": "The opening film, the series, sources and pAELo"
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
  ],
  "influences": [
    {
      "name": "Collin Freeman",
      "idea": "Soft play; with Soyoun Jang, speculative games",
      "url": "https://github.com/colinfizgig"
    },
    {
      "name": "Soyoun Jang",
      "idea": "Historicising speculative design; the Archive of Past Futures",
      "url": "https://www.soyounjang.com/"
    },
    {
      "name": "Cecile Zhang",
      "idea": "The counter archive"
    },
    {
      "name": "Jay David Bolter",
      "idea": "Remediation; the tetrad work with Soyoun Jang; co-author of From Imagetext to Worldtext"
    },
    {
      "name": "Lev Manovich",
      "idea": "Soft Cinema: films edited by software from a database",
      "url": "https://manovich.net/index.php/projects/soft-cinema-zkm"
    },
    {
      "name": "David Shapiro",
      "idea": "Video analysis of Anthropic's Scion",
      "url": "https://www.youtube.com/watch?v=3199TC7Pt_o"
    },
    {
      "name": "Anthropic",
      "idea": "Redesigning source control at Anthropic (Scion), October 2026",
      "url": "https://www.anthropic.com/research/redesigning-source-control"
    },
    {
      "name": "Watson Hartsoe",
      "idea": "Dissertation: redesigning moving images from imagetext to videotext to worldtext",
      "url": "https://hartswf0.github.io/elsewhere/"
    }
  ],
  "series": [
    {
      "id": "school",
      "title": "At school",
      "image": "assets/series/school.jpg",
      "shows": "A teacher feeds books into a machine; wires carry them to the pupils' helmets.",
      "handle": "A boy turns the crank. The machine runs only while he does.",
      "game": "The Crank Boy: six versions, in the album.",
      "status": "built"
    },
    {
      "id": "scrubber",
      "title": "Un frotteur électrique (an electric floor scrubber)",
      "image": "assets/series/scrubber.jpg",
      "shows": "A scrubbing machine with brushes and arms works across a parquet floor.",
      "handle": "A maid steers it from the far end of a long rod.",
      "game": "You steer the scrubber. It cleans only where you push it. The mistress inspects the floor, and the machine takes the credit.",
      "status": "not built"
    },
    {
      "id": "barber",
      "title": "The barber",
      "image": "assets/series/barber.jpg",
      "shows": "Mechanical arms comb and shave customers in barber chairs.",
      "handle": "One man works a panel of levers that runs every arm.",
      "game": "You work the levers. Each arm needs its lever at the right moment, and you see gauges, not faces.",
      "status": "not built"
    },
    {
      "id": "phono-cinema",
      "title": "Correspondence by phonograph and cinema",
      "image": "assets/series/phono-cinema.jpg",
      "shows": "One man talks into a horn; another leans back and watches a woman projected on a screen.",
      "handle": "Someone runs the recordings and the projector.",
      "game": "You run the machine that answers. Mix recorded voices with projected pictures, and decide what the woman on the screen says back.",
      "status": "not built"
    },
    {
      "id": "air-cabs",
      "title": "Air cabs over Paris",
      "image": "assets/series/air-cabs.jpg",
      "shows": "Winged cabs carry passengers over the boulevards and the Opéra.",
      "handle": "Each driver works the wings.",
      "game": "You fly a cab across Paris. Passengers call out routes, the wings tire, and the Opéra is in the way.",
      "status": "not built"
    },
    {
      "id": "firemen",
      "title": "Flying firemen",
      "image": "assets/series/firemen.jpg",
      "shows": "Winged firemen pull a child from a burning building.",
      "handle": "A steam pump in the street feeds the hose the flyers hold.",
      "game": "You run the pump in the street. The flyers can only fight the fire you send water to.",
      "status": "not built"
    },
    {
      "id": "skates",
      "title": "Motor skates",
      "image": "assets/series/skates.jpg",
      "shows": "Couples ride motorised roller skates through a park; one man has fallen.",
      "handle": "The card does not show who winds or mends the motors.",
      "game": "You keep the skates running. Wind them too far and riders fall; not enough and they stop in the road.",
      "status": "not built"
    }
  ],
  "lab": {
    "short": "pAELo",
    "origin": "The Augmented Environments Lab (AEL) at Georgia Tech worked on augmented reality and new media. The lab is officially gone. pAELo is what its people keep doing anyway: the AEL inside the word paleo.",
    "mission": "pAELo makes paleofutures playable. It takes old predictions of the future and turns them into games and films that show who still holds the handle. Every project ships as a page anyone can open, a making-of page anyone can cite, and the prompts anyone can reuse, so it can go into a portfolio, a syllabus, a job application or a paper.",
    "mascot": "Tecti is a tectiform: a roof-shaped sign painted in Ice Age caves, many of them in the Dordogne in France. A roof with two eyes is a lab that is still looking.",
    "names": [
      "Phantom Augmented Environments Lab for Emergent Otherworlds",
      "Possible Augmented Environments Lab for Emergent Ontologies",
      "Para Augmented Environments Lab for Evolving Otherworlds",
      "Promptable Augmented Environments Lab for Electronic Oracles",
      "Promptable Augmented Environments Lab for Ekphrastic Operations",
      "Paradoxical Augmented Environments Library for Extinct Operations",
      "Post Augmented Environments Laboratory for Experimental Observations",
      "Para Augmented Environments Laboratory for Excavated Otherworlds",
      "Phantom Augmented Environments Laboratory for Electronic Oracles",
      "Playful Augmented Environments Laboratory for Experimental Outcomes",
      "Phantom Augmented Environments Laboratory for Enduring Otherworlds",
      "Pre-trained Augmented Environments Lab for Ekphrastic Operations",
      "Pragmatic Augmented Environments Lab for Emergent Operations",
      "Projected Augmented Environments Lab for Erased Originals",
      "Pinhole Augmented Environments Lab for Exposed Otherworlds",
      "Palimpsest Augmented Environments Lab for Erased Overlays",
      "Provisional Augmented Environments Lab for Everyday Oracles",
      "Public Augmented Environments Lab for Experimental Openings",
      "Pocket Augmented Environments Lab for Endless Orbits"
    ],
    "films": [
      {
        "title": "CINEOSIS · handmade",
        "what": "A 21-minute film of hand-authored passages: archive clips with a rigged crash-test dummy named Bola.",
        "url": "https://hartswf0.github.io/bolas/films/cineosis-handmade-film/",
        "video": "https://hartswf0.github.io/bolas/media/films/cineosis-handmade-film.mp4",
        "poster": "https://hartswf0.github.io/bolas/media/thumbs/cineosis-handmade-film.jpg"
      },
      {
        "title": "CINEOSIS lab",
        "what": "The lab's index of films and film instruments.",
        "url": "https://hartswf0.github.io/cineosis-lab/"
      },
      {
        "title": "Two Sallies",
        "what": "Engraved films after Stanisław Lem's Cyberiad, from Lab 7 of Intro to Computational Media.",
        "url": "https://hartswf0.github.io/2700-fa26/LAB%207%20-%20CLASSES/two-sallies/index.html"
      },
      {
        "title": "The Electronic Bard",
        "what": "Lab 7: Trurl's poetry machine, after Lem's Cyberiad.",
        "url": "https://hartswf0.github.io/2700-fa26/LAB%207%20-%20CLASSES/electronic-bard/index.html"
      }
    ]
  },
  "film": {
    "script": "assets/film/script.json",
    "voices": "assets/film/vo/",
    "made_with": "Kokoro (kokoro-onnx), voices af_heart (narrator), am_puck (Crank Boy), ff_siwis (French titles); recorded by registry/voices.py"
  }
};
