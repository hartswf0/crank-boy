// Check the shared registry before committing: node registry/check.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {} };
for (const f of ['registry.js', 'notes.js', 'library.js']) vm.runInNewContext(fs.readFileSync(path.join(__dirname, f), 'utf8'), ctx, { filename: f });
const R = ctx.window.CRANK, N = ctx.window.CRANK_NOTES, T = ctx.window.CRANK_TEXT;
const errs = [];
const exists = p => !p || p.startsWith('#') || p.startsWith('http') || fs.existsSync(path.join(root, p.split('#')[0]));
const agents = new Set(R.agents.map(a => a.id));
const prompts = new Set(R.prompts.map(p => p.id)), models = new Set(R.models.map(m => m.id));
R.agents.forEach(a => { if (!prompts.has(a.prompt)) errs.push(`agent ${a.id}: unknown prompt ${a.prompt}`); if (!models.has(a.model)) errs.push(`agent ${a.id}: unknown model ${a.model}`); });
const ids = new Set();
R.versions.forEach(v => {
  if (ids.has(v.id)) errs.push(`version ${v.id}: duplicate id`); ids.add(v.id);
  if (!agents.has(v.agent)) errs.push(`version ${v.id}: unknown agent ${v.agent}`);
  for (const k of ['play', 'making', 'mirror']) if (!exists(v[k])) errs.push(`version ${v.id}: ${k} file missing: ${v[k]}`);
  for (const k of ['tag', 'title', 'status', 'youPlay', 'line']) if (!v[k]) errs.push(`version ${v.id}: missing ${k}`);
});
R.proposals.forEach(p => { if (!exists(p.text)) errs.push(`proposal ${p.id}: missing ${p.text}`); });
R.library.forEach(l => {
  if (!exists(l.file)) errs.push(`library ${l.key}: missing ${l.file}`);
  else if (T[l.key] !== fs.readFileSync(path.join(root, l.file), 'utf8').trim()) errs.push(`library ${l.key}: library.js is stale, run python3 registry/build_library.py`);
});
const nids = new Set();
N.forEach(n => {
  if (nids.has(n.id)) errs.push(`note ${n.id}: duplicate id`); nids.add(n.id);
  if (!agents.has(n.from)) errs.push(`note ${n.id}: unknown sender ${n.from}`);
  (n.to || []).forEach(t => { if (t !== 'all' && !agents.has(t)) errs.push(`note ${n.id}: unknown recipient ${t}`); });
  if (n.re && !N.some(m => m.id === n.re)) errs.push(`note ${n.id}: answers unknown note ${n.re}`);
});
if (errs.length) { console.log(errs.join('\n')); process.exit(1); }
console.log(`OK: ${R.versions.length} versions, ${R.agents.length} seats, ${N.length} notes, ${R.library.length} library texts`);
