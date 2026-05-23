---
title: Settings Overview
description: A map of every panel in the Settings window.
---

# Settings Overview

The Settings window is a separate React entry from the main chat. It opens to a navigation rail with grouped panels — this page is a map of what's in each one.

## Account & wallet

| Panel | What's in it |
| --- | --- |
| **Account** | Current profile, sign in / out, profile switcher, add profile, language fallback |
| **Wallet** | Wallet address, balance, Ledger top-up, refund flows, list of funded Advanced providers |
| **Usage** | Recent inference volume by provider, totals, refundable balances |
| **Data** | 0G Storage sync — master toggle, per-category opt-in (memories, conversations, providers, prompts, skills), schedule, manual Sync Now |

## Models & tools

| Panel | What's in it |
| --- | --- |
| **Providers** | Page-level **Router / Advanced** tabs. Router takes a 0G Compute Console API key (set up at <https://pc.0g.ai/>); Advanced lets you enable, fund, and acknowledge on-chain providers from your wallet. Also: plugin providers, model options dialog, connection test. |
| **MCP** | MCP servers (stdio / URL), test connection, OAuth flows, per-server enable/disable, tool defaults |
| **Plugins** | Installed plugins, enable/disable, plugin-provided settings |
| **Skills** | Installed skills (Built-in, Personal, Claude Code, Codex, Marketplace, Project, Custom), enable/disable, per-skill settings, marketplace browser |
| **Hooks** | Custom webhooks for model completion, tool approvals, etc. |

## Communication

| Panel | What's in it |
| --- | --- |
| **Channels** | Channel mapping for each platform (Telegram / Discord / Slack / Feishu / WeChat) — connect bot tokens / OAuth, map channels to workspaces |
| **Whisper** | STT backend (CPU / Metal), model variant, language |
| **TTS** | Engine (Kokoro / Qwen), voice selection per engine |

## Workspace & memory

| Panel | What's in it |
| --- | --- |
| **Workspace** | Multi-workspace config, active workspace, defaults |
| **Memory** | Search and edit memories, embedding provider, stats, consolidator |
| **Partner** | Partner Mode — enable, scenario pack, initiative settings, emotion state opt-in, channel overrides, transparency status |
| **Chat** | Default model, auto-compact threshold, context window, response defaults |

## System

| Panel | What's in it |
| --- | --- |
| **General** | Startup behavior, default window size |
| **UI** | Theme (system / light / dark), font, font size, layout density, editor appearance |
| **Network** | Proxy, timeouts, network diagnostics |
| **Web Search** | Default search engine, API keys (if any), result count |

## Integrations & monitoring

| Panel | What's in it |
| --- | --- |
| **Computer Use** | Per-app approval matrix (ShieldCheck / ShieldAlert), strict approval toggle, action log, Picture-in-Picture monitor, app picker |
| **Activity** | Local screen-text recorder. On/off, status & metrics, OCR settings (languages, frequency), sampling controls (heartbeat / idle / capture gap), visual-history toggle and storage cap, app blacklist, Recent segments browser, Danger Zone (delete everything). |
| **About** | Version, build, license, check for updates, system info dump |

## What's not in Settings

A few things are deliberately not exposed in Settings, because their right home is elsewhere:

- **Conversation list** — sidebar of the main window.
- **Memory recall on a specific turn** — expand the retrieval card in the chat.
- **One-off skill invocation** — Skill Picker in the composer.
- **Real-time TTS playback toggle** — composer-level voice button.

## Settings persistence

All settings live in the SQLite database in your active profile (with a few UI-only items in `localStorage`). They sync to 0G Storage if you enable the Providers / Skills / Prompts categories (settings themselves are a subset of those snapshots).

## Related pages

- [Profiles & Workspaces](/en/desktop/profiles-and-workspaces)
- [Reference: Settings Reference](/en/reference/settings-reference)
