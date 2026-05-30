import re
from pathlib import Path

root = Path('public/images')
assert root.exists(), 'public/images missing'

def clean_name(name: str) -> str:
    name = name.strip()
    name = re.sub(r'\s*\.(?=[^.]+$)', '.', name)
    name = name.replace('&', 'and')
    name = re.sub(r'[^A-Za-z0-9._-]+', '-', name)
    name = re.sub(r'-+', '-', name)
    name = name.strip('-')
    return name.lower()

# rename files first
for p in sorted(root.rglob('*'), key=lambda p: len(str(p)), reverse=True):
    if p.is_file():
        new_name = clean_name(p.name)
        if new_name != p.name:
            new_path = p.with_name(new_name)
            if new_path.exists():
                print('SKIP exists', p, '->', new_path)
            else:
                p.rename(new_path)
                print('RENAMED file', p, '->', new_path)
                p = new_path

# rename directories after files
for p in sorted(root.rglob('*'), key=lambda p: len(str(p)), reverse=True):
    if p.is_dir():
        new_name = clean_name(p.name)
        if new_name != p.name:
            new_path = p.with_name(new_name)
            if new_path.exists():
                print('SKIP dir exists', p, '->', new_path)
            else:
                p.rename(new_path)
                print('RENAMED dir', p, '->', new_path)

# update code references from /imgaes/ to /images/
files = [Path('src/data/menuData.ts'), Path('src/sections/Hero.tsx'), Path('src/sections/Navigation.tsx'), Path('src/sections/Footer.tsx')]
for file in files:
    text = file.read_text(encoding='utf-8')
    new_text = text.replace('/imgaes/', '/images/')
    if new_text != text:
        file.write_text(new_text, encoding='utf-8')
        print('Updated /imgaes to /images in', file)

# create logo svg placeholder
logo = Path('public/images/olecafe-logo.svg')
if not logo.exists():
    logo.write_text('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" role="img" aria-labelledby="title">
  <title>Ole Cafe Logo</title>
  <rect width="360" height="360" rx="48" fill="#6B2737"/>
  <circle cx="180" cy="180" r="100" fill="#E8D5A3"/>
  <text x="180" y="185" text-anchor="middle" font-family="Inter, sans-serif" font-size="48" font-weight="700" fill="#6B2737">Olé</text>
  <text x="180" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-size="20" fill="#6B2737">Cafe</text>
</svg>''', encoding='utf-8')
    print('Created placeholder logo', logo)
else:
    print('Logo already exists', logo)
