---
title: Skills
description: How skills extend what the agent can do, the 30 bundled ones, and how to install your own.
---

# Skills

A skill is a Markdown file with structured front-matter that describes a behavior the agent can perform. Skills sit between "the model knows how to write code" and "the model can press buttons" — they encode reusable workflows that the agent can pick up and execute.

## 30 bundled skills

The desktop client ships with 30 skills out of the box, in `resources/bundled-skills/`. They fall into clusters:

### Productivity

- `tasks` — create and manage conversation-scoped todos
- `todo` — legacy todo support
- `scheduler` — schedule prompts to run on a cron-style interval
- `notebook` — persistent text notes inside a workspace
- `work-log` — time-track and summarise daily activity
- `plan-mode` — structured planning before execution

### Automation & tools

- `computer-use` — drive macOS apps (paired with the Computer Use daemon)
- `browser` — drive Chrome via the Ghast Browser Relay extension
- `screenshot` — capture screen or window
- `web-fetch` — HTTP GET/POST, parse HTML/JSON
- `web-search` — web search (Bing, custom engines) with screenshot capture
- `surf` — a higher-level web browsing toolkit
- `file-manager` — browse and open files
- `send-file` — attach a file to an outgoing message

### Memory & introspection

- `memory-management` — create / recall / delete memories
- `self-management` — reflection on conversation context and goals
- `self-reflection` — scheduled self-analysis of user behaviour

### Skill & conversation management

- `skill-hub` — discover and install skills from a marketplace
- `skill-search` — search installed skills
- `conversation-management` — archive, search, rename, fork conversations

### Messaging

- `telegram` — send / receive in Telegram bridges
- `discord` — send / receive in Discord bridges
- `reactions` — emoji reactions on remote messages
- `voice` — voice recording + transcription (Whisper), TTS playback

### Finance & markets

- `market-intel` — crypto / stock market data fetching
- `okx-review` — OKX exchange trade review
- `btc-grid-buy-okb` — BTC / OKB grid trading (automated buy orders)
- `kline-indicator` — candlestick chart analysis

### Social search

- `x-search` — Twitter / X search
- `rednote-search` — Xiaohongshu / Red Note search

## The Skill Picker

In the composer, the skill picker is a grouped browser:

| Group | What's in it |
| --- | --- |
| **Built-in** | The 30 bundled skills above |
| **Personal** | Skills you authored or imported |
| **Claude Code** | Skills discovered in `~/.claude/skills/` |
| **Codex** | Skills discovered in `~/.codex/skills/` |
| **Marketplace** | Skills downloaded from the Ghast skill marketplace via `skill-hub` |
| **Project** | Skills declared in a project workspace's `.ghast/skills/` |
| **Custom** | Anything else added through Settings → Skills |

You can pick a skill explicitly per turn, or enable **Auto-select** to let Ghast decide based on your prompt.

## How a skill is invoked

When a skill is active for a turn:

1. The skill's prompt fragment is prepended to the system prompt.
2. The skill's declared tools are made available to the agent.
3. The agent decides whether and how to use the skill based on your request.

If the agent calls a tool the skill exposes, you'll see a tool call card with the arguments and the result, just like any other tool. Skill execution is not hidden — every step is visible in the chat.

## Installing additional skills

Three ways:

| Way | Steps |
| --- | --- |
| **Marketplace** | Use `skill-hub` in chat ("install the X skill") or browse Settings → Skills → Marketplace |
| **Local file** | Drop a `*.md` file into `<profile>/skills/personal/` and the scanner picks it up |
| **From a neighbour** | If you have Claude Code or Codex skills at `~/.claude/skills/` or `~/.codex/skills/`, they appear automatically |

## Writing your own skill

A skill is a single Markdown file. Front-matter declares its name, description, tool list, and activation hints. The body is the prompt fragment that's prepended when the skill is active.

Authoring is covered in the developer documentation, not this manual.

## Disabling skills

Settings → Skills lists every installed skill. Toggle individual skills off, or use the Skill Picker's per-turn override. Disabled skills don't appear in Auto-select.

## Related pages

- [Chat & Composer](/en/desktop/chat-and-composer)
- [Computer Use](/en/computer-use/overview)
- [Browser Extension](/en/browser-extension/overview)
- [Reference: Bundled Skills List](/en/reference/bundled-skills)
