"""MkDocs hook: the sections (h2 and h3 headings) of every page, written to assets/sections.json, so the
left menu can list them under every page at once (docs/assets/nav-sections.js)."""
import json
import os

_sections = {}


def _items(toc):
    out = []
    for item in toc:
        if item.level > 3:
            continue
        entry = {'title': item.title, 'url': item.url}
        children = _items(item.children) if item.level < 3 else []
        if children:
            entry['children'] = children
        out.append(entry)
    return out


def on_page_content(html, page, config, files):
    # the page title (h1) is the menu entry itself; its sections are the h2 below it and their h3
    top = list(page.toc)
    if len(top) == 1 and top[0].level == 1:
        top = list(top[0].children)
    _sections[page.url] = _items(top)
    return html


def on_post_build(config):
    path = os.path.join(config['site_dir'], 'assets', 'sections.json')
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(_sections, f, ensure_ascii=False)
