#!/usr/bin/env python3

from __future__ import annotations

import re
import sys
from pathlib import Path


LINK_RE = re.compile(r"!?(?<!\\)\[[^\]]+\]\(([^)]+)\)")


def check_links(root: Path) -> int:
    missing: list[tuple[str, str]] = []
    checked = 0

    dist_root = root / ".vitepress" / "dist"

    for md in root.rglob("*.md"):
        text = md.read_text(encoding="utf-8")
        for raw in LINK_RE.findall(text):
            if raw.startswith(("http://", "https://", "mailto:", "#")):
                continue

            target = raw.split("#", 1)[0].strip()
            if not target:
                continue

            checked += 1

            if target.startswith("/"):
                route = target.rstrip("/")
                candidates = [
                    dist_root / route.lstrip("/") / "index.html",
                    dist_root / f"{route.lstrip('/')}.html",
                    root / route.lstrip("/"),
                ]
                if not any(path.exists() for path in candidates):
                    missing.append((str(md.relative_to(root)), target))
                continue

            resolved = (md.parent / target).resolve()
            if not resolved.exists():
                missing.append((str(md.relative_to(root)), target))

    print(f"checked_links= {checked}")
    print(f"missing_links= {len(missing)}")
    for item in missing[:40]:
        print(item)

    return 1 if missing else 0


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: check-doc-links.py <docs-root>", file=sys.stderr)
        return 2

    root = Path(sys.argv[1]).resolve()
    if not root.exists():
        print(f"docs root not found: {root}", file=sys.stderr)
        return 2

    return check_links(root)


if __name__ == "__main__":
    raise SystemExit(main())
