---
title: Bundled Skills List
description: The 30 skills that ship with Ghast AI Desktop, grouped by purpose.
---

# Bundled Skills List

Ghast AI Desktop ships with 30 bundled skills in `resources/bundled-skills/`. Each is a Markdown file with structured front-matter. This page is the full reference list.

## Productivity (6)

| Skill | What it does |
| --- | --- |
| `tasks` | Create / manage conversation-scoped todos. |
| `todo` | Legacy todo support — still works, older interface. |
| `scheduler` | Schedule prompts to run on a cron-style interval. |
| `notebook` | Persistent text notes inside a workspace. |
| `work-log` | Time-track and summarise daily activity. |
| `plan-mode` | Structured planning before execution. |

## Automation & tools (8)

| Skill | What it does |
| --- | --- |
| `computer-use` | Drive macOS apps (paired with the Computer Use daemon). |
| `browser` | Drive Chrome via the Ghast Browser Relay extension. |
| `screenshot` | Capture screen or window. |
| `web-fetch` | HTTP GET/POST, parse HTML/JSON. |
| `web-search` | Web search (Bing, custom engines) with screenshot capture. |
| `surf` | Higher-level web browsing toolkit. |
| `file-manager` | Browse and open files. |
| `send-file` | Attach a file to an outgoing message. |

## Memory & introspection (3)

| Skill | What it does |
| --- | --- |
| `memory-management` | Create / recall / delete memories. |
| `self-management` | Reflection on conversation context and goals. |
| `self-reflection` | Scheduled self-analysis of user behaviour. |

## Skills & conversation management (3)

| Skill | What it does |
| --- | --- |
| `skill-hub` | Discover and install skills from a marketplace. |
| `skill-search` | Search installed skills. |
| `conversation-management` | Archive, search, rename, fork conversations. |

## Messaging (4)

| Skill | What it does |
| --- | --- |
| `telegram` | Send / receive in Telegram bridges. |
| `discord` | Send / receive in Discord bridges. |
| `reactions` | Emoji reactions on remote messages. |
| `voice` | Voice recording + transcription (Whisper), TTS playback. |

## Finance & markets (4)

| Skill | What it does |
| --- | --- |
| `market-intel` | Crypto / stock market data fetching. |
| `okx-review` | OKX exchange trade review. |
| `btc-grid-buy-okb` | BTC / OKB grid trading (automated buy orders). |
| `kline-indicator` | Candlestick chart analysis. |

## Social search (2)

| Skill | What it does |
| --- | --- |
| `x-search` | Twitter / X search. |
| `rednote-search` | Xiaohongshu / Red Note search. |

## Counts

| Group | Count |
| --- | --- |
| Productivity | 6 |
| Automation & tools | 8 |
| Memory & introspection | 3 |
| Skills & conversation management | 3 |
| Messaging | 4 |
| Finance & markets | 4 |
| Social search | 2 |
| **Total** | **30** |

## Not bundled but auto-discovered

Beyond the bundled skills, Ghast scans:

- `<profile>/skills/personal/` — your own skills
- `~/.claude/skills/` — neighbouring Claude Code skills
- `~/.codex/skills/` — neighbouring Codex skills
- A project workspace's `.ghast/skills/` — per-project skills

These appear in the Skill Picker as separate groups (Personal, Claude Code, Codex, Project) and are toggle-able like bundled skills.

## Related pages

- [Skills](/en/desktop/skills)
- [Chat & Composer](/en/desktop/chat-and-composer)
- [Settings Reference](/en/reference/settings-reference)
