import re
from pathlib import Path

root = Path('public/images')
assert root.exists(), 'public/images missing'

# Normalize path segments to our new URL-safe names.
def clean_name(name: str) -> str:
    name = name.strip()
    name = re.sub(r'\s*\.(?=[^.]+$)', '.', name)
    name = name.replace('&', 'and')
    name = re.sub(r'[^A-Za-z0-9._-]+', '-', name)
    name = re.sub(r'-+', '-', name)
    name = name.strip('-')
    return name.lower()


def clean_path(path: str) -> str:
    parts = path.strip('/').split('/')
    cleaned = [clean_name(part) for part in parts]
    return '/' + '/'.join(cleaned)

files = [Path('src/data/menuData.ts'), Path('src/sections/Hero.tsx'), Path('src/sections/Navigation.tsx'), Path('src/sections/Footer.tsx')]
pattern = re.compile(r'(["\'])(?:/imgaes|/images)(/[A-Za-z0-9 &.\-_/]+?)\1')

for file in files:
    text = file.read_text(encoding='utf-8')
    changed = False

    def repl(match):
        quote = match.group(1)
        path = match.group(2)
        normalized = clean_path(path)
        if normalized != path:
            print('Fix', path, '->', normalized, 'in', file)
        return quote + '/images' + normalized + quote

    new_text = pattern.sub(repl, text)
    if new_text != text:
        file.write_text(new_text, encoding='utf-8')
        changed = True
        print('Updated', file)
    if not changed:
        print('No changes in', file)
