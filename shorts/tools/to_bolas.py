#!/usr/bin/env python3
"""Mirror the Town, the films and the games into the Bolas site: python3 shorts/tools/to_bolas.py <bolas checkout>
Copies shorts/ and what it reads into <bolas>/crank-boy/ with the same relative layout, and writes
<bolas>/crank-boy/index.html in the Bolas page frame. Run it again after any change here; it replaces the copy."""
import html, json, os, shutil, sys
root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
bolas = sys.argv[1]
out = os.path.join(bolas, 'crank-boy')
src = open(os.path.join(root, 'registry/registry.js'), encoding='utf-8').read()
R = json.loads(src[src.index('{'):src.rindex('}') + 1])
esc = html.escape

if os.path.isdir(out):
    shutil.rmtree(out)
copy = ['shorts', 'assets/shorts', 'assets/series', 'room', 'docs/operators']
files = ['assets/favicon.svg', 'assets/favicon-180.png', 'registry/registry.js', 'registry/library.js', 'docs/prompts/shorts.md', 'docs/prompts/town.md']
for d in copy:
    shutil.copytree(os.path.join(root, d), os.path.join(out, d), ignore=shutil.ignore_patterns('tools', '*.cues.json'))
for f in files:
    os.makedirs(os.path.dirname(os.path.join(out, f)), exist_ok=True)
    shutil.copyfile(os.path.join(root, f), os.path.join(out, f))

NAV = [('lab/', 'Try it'), ('family/', 'The Family'), ('cineosis/', 'CINEOSIS'), ('found-odyssey/', 'The Found Odyssey'), ('wygwyl/', 'WYGWYL'),
       ('this-side-up/', 'This Side Up'), ('crank-boy/', 'The Crank Boy'), ('films/', 'Films'), ('characters/', 'Characters'), ('process/', 'How it was made')]
nav = ''.join(f'<a href="../{h}"{" aria-current=page" if h == "crank-boy/" else ""}>{n}</a>' for h, n in NAV)
T = R['town']
cards = ''.join(f'''<div class="cb-card"><video controls preload="none" playsinline poster="{esc(s["poster"])}" src="{esc(s["film"])}" aria-label="{esc(s["title"])}"></video>
<b>{esc(s["title"])}</b><span class="line">{esc(s["line"])}</span>
<span class="cb-ops">Film: {esc(s["operator"])} · Game: {esc(s["game"]["op"])} · Proposed sign: {esc(s["reading"]["sign"])}</span>
<span class="cb-links"><a href="{esc(s["game"]["link"])}">Play the game</a> · <a href="shorts/index.html#{esc(s["id"])}">How it was made</a></span></div>''' for s in R['shorts'])
desc = 'Seven En l\'an 2000 cards, each made into a short film, a game and a place in one playable world, with archive film from the cineosis-lab library.'
page = f'''<!doctype html><html lang="en" data-root="../"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>The Crank Boy · CRASH LAB</title><meta name="description" content="{esc(desc)}"><link rel="canonical" href="https://hartswf0.github.io/bolas/crank-boy/">
<meta property="og:site_name" content="CRASH LAB"><meta property="og:title" content="The Crank Boy"><meta property="og:description" content="{esc(desc)}"><meta property="og:type" content="website">
<meta property="og:url" content="https://hartswf0.github.io/bolas/crank-boy/"><meta property="og:image" content="https://hartswf0.github.io/bolas/crank-boy/{esc(T["poster"])}">
<meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#0b0d10">
<link rel="icon" href="../favicon.svg" type="image/svg+xml"><link rel="icon" href="../favicon-32.png" sizes="32x32"><link rel="apple-touch-icon" href="../apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;800;900&family=JetBrains+Mono:wght@400;600&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;1,7..72,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/site.css">
<style>
.cb-hero{{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,2fr);gap:22px;align-items:start;margin:10px 0 26px}}
.cb-hero video,.cb-card video{{display:block;width:100%;height:auto;aspect-ratio:16/9;background:#000;border:1.5px solid currentColor}}
.cb-grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr));gap:24px 18px}}
.cb-card{{display:grid;gap:6px;align-content:start;min-width:0}}
.cb-card b{{font-family:"Big Shoulders Display","Arial Narrow",Impact,sans-serif;font-weight:800;font-size:23px;line-height:1.02;text-transform:uppercase}}
.cb-card .line{{font-size:14.5px;line-height:1.42;opacity:.85}}
.cb-ops{{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:11.5px;line-height:1.5;opacity:.8}}
.cb-links a,.cb-act a{{font-weight:600}}
.cb-act{{display:flex;gap:16px;flex-wrap:wrap;margin-top:12px}}
@media (max-width:760px){{.cb-hero{{grid-template-columns:1fr}}}}
</style></head><body>
<header class="top"><a class="brand" href="../"><img src="../favicon.svg" alt="" width="28" height="28"><span>CRASH LAB</span></a><nav>{nav}</nav></header>
<main class="wrap">
<p class="crumbs"><a href="../">CRASH LAB</a> / The Crank Boy</p>
<h1>The Crank Boy</h1>
<p>{esc(R["shortsAbout"]["line"])}</p>
<div class="cb-hero"><video controls preload="none" playsinline poster="{esc(T["poster"])}" src="{esc(T["film"])}" aria-label="The Town, the cartoon"></video>
<div><h2>The Town</h2><p>{esc(T["line"])}</p>
<div class="cb-act"><a href="shorts/world.html">Play the town</a><a href="shorts/index.html">The project page</a><a href="https://github.com/hartswf0/crank-boy">Source</a></div></div></div>
<section class="sec"><div class="sechead"><h2>Toward CINEOSIS</h2><p>the archive comes into the card</p></div>
<p>CINEOSIS sets the crash-test family inside unaltered archive shots. These shorts take shots from the same cineosis-lab library the other way round, into a surface the card already has: a mirror, a screen, a polished floor, a sky, a fire. Each short is proposed as a candidate passage for one of the 45 signs. That is a reading, not a result: none has yet had the blind review the CINEOSIS handmade passages had.</p></section>
<section class="sec"><div class="sechead"><h2>Seven cards</h2><p>a film, a game and a place in the Town for each</p></div><div class="cb-grid">{cards}</div></section>
</main>
<footer class="foot"><div class="wrap"><p><b>CONSEQUENCE WORKS</b> · Watson Hartsoe · built with Claude</p><p>The Crank Boy is mirrored here from <a href="https://github.com/hartswf0/crank-boy">hartswf0/crank-boy</a>. Cards: En l'an 2000, attributed to Villemard, about 1910. Archive footage comes from the cineosis-lab library and is credited inside each film. Doodles: Quick, Draw! (Google Creative Lab, CC BY 4.0), chosen by Secondhand Motion.</p></div></footer>
</body></html>
'''
open(os.path.join(out, 'index.html'), 'w', encoding='utf-8').write(page)
n = sum(len(fs) for _, _, fs in os.walk(out))
size = sum(os.path.getsize(os.path.join(d, f)) for d, _, fs in os.walk(out) for f in fs)
print(f'crank-boy/: {n} files, {size / 1e6:.1f} MB')
