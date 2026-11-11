"""Tile every GLB preview into one contact sheet for a quick visual audit."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

src = Path("scripts/3d/previews")
out = Path("scripts/3d/previews/contact-sheet.jpg")
files = sorted(src.glob("*.png"))
if not files:
    raise SystemExit("no previews yet")

cols, tile, pad, label_h = 5, 320, 10, 26
rows = (len(files) + cols - 1) // cols
W = cols * (tile + pad) + pad
H = rows * (tile + pad + label_h) + pad
sheet = Image.new("RGB", (W, H), (246, 241, 231))
draw = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("arial.ttf", 16)
except OSError:
    font = ImageFont.load_default()

for i, path in enumerate(files):
    img = Image.open(path).convert("RGB").resize((tile, tile), Image.LANCZOS)
    x = pad + (i % cols) * (tile + pad)
    y = pad + (i // cols) * (tile + pad + label_h)
    sheet.paste(img, (x, y + label_h))
    draw.text((x + 2, y + 4), path.stem[:38], fill=(40, 34, 26), font=font)

sheet.save(out, quality=90)
print(out, sheet.size)
