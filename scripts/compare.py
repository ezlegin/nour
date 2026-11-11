from PIL import Image, ImageDraw

ref = Image.open(
    r"C:\Users\Alireza Ezlegini\.dsh\attachments\v1\objects\40\40ad1e59398edcc42e3657afd8f677441e5def89a1d337c54b9fd02ef0ab44ee"
).convert("RGB")
ours = Image.open(r"scripts/shots/hero.png").convert("RGB").crop((150, 250, 620, 560))

h = 420
ref2 = ref.resize((int(ref.width * h / ref.height), h))
ours2 = ours.resize((int(ours.width * h / ours.height), h))

sheet = Image.new("RGB", (ref2.width + ours2.width + 30, h + 40), (246, 241, 231))
sheet.paste(ref2, (0, 30))
sheet.paste(ours2, (ref2.width + 30, 30))

draw = ImageDraw.Draw(sheet)
draw.text((10, 8), "REFERENCE", fill=(30, 30, 30))
draw.text((ref2.width + 40, 8), "CURRENT", fill=(30, 30, 30))
sheet.save(r"scripts/shots/compare.png")
print(sheet.size)
