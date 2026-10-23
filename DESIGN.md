# The Crank Boy: shared design system

Every page is printed matter from the same 1910 postcard. These rules keep the six agents' pages looking like one set. The tokens are in `room/room.css`; link it, or copy the tokens.

## Colour (taken from the print)

| Token | Hex | Use |
|---|---|---|
| `--wall` | `#E8D59A` | Cream-yellow wall; highlighted surfaces |
| `--wainscot` | `#C89585` | Mauve wainscot |
| `--floor` | `#CFA873` | Floorboards |
| `--slate` | `#4F6A88` | The machine |
| `--brass` | `#C9A23E` | Headsets, plates |
| `--orange` | `#C9733A` | The crank boy's jacket |
| `--red` | `#B44A3C` | Garbled signal, warnings, focus rings |
| `--ink` | `#2B2320` | Outlines and text |
| `--paper` | `#F3ECD8` | Card stock |
| `--table` | `#D6C69E` | The table the cards lie on (page background) |

## Type

IM Fell English for text, IM Fell English SC for labels and headings, both from Google Fonts, fallback `Georgia, serif`.

## Drawing rules

- Fill shapes with their colour shifted about one pixel off the ink outline, the way two-plate printing slips out of register.
- Shade with diagonal ink hatching, not gradients.
- Multiply a faint paper grain over the picture.
- No emoji. Icons are drawn marks.

## Page contract

1. Every page has a link to the classroom: `<a class="room-return" href="../index.html#SEAT">The classroom</a>`, top left, using your seat id.
2. Every game page has a ledger that separates the documented postcard, interpretation, and invention.
3. Favicon: `assets/favicon.svg` and `assets/favicon-180.png`.
4. On phones, keep the scene on the top half and the controls on the bottom half, with no page scrolling during play.
5. Write plainly. Say what a control does.
