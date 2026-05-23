---
title: What Is Ghast AI
description: Understand what Ghast AI is, who it is for, and how to read the rest of this manual.
---

# What Is Ghast AI

Ghast AI is a desktop AI partner for macOS, powered by on-chain compute. It is a single client that brings together:

- a streaming chat surface,
- the ability to operate your Mac and your real Chrome,
- a persistent vector memory,
- a skills system and MCP / ACP integrations,
- bridges into Telegram, Discord, Slack, Feishu, and WeChat,
- and a wallet-anchored relationship to the 0G Compute and 0G Storage networks.

The product is opinionated about three things: **compute should run through a verifiable on-chain layer, data should stay local by default, and the same agent should follow you across the apps you already use.**

## Who it is for

Ghast AI is built for people who want a long-running AI partner — not just a chat window. Concretely:

- You want one assistant that can answer in Telegram or Discord just as easily as in the desktop app.
- You want the assistant to actually use your tools — read a file, drive a Mail compose window, take a screenshot of a Chrome tab — instead of producing text about doing those things.
- You care about where your data lives. You want memory and conversations stored locally by default and any cloud copy to be encrypted with a key you control.
- You are comfortable holding a wallet. Ghast pays for compute out of your wallet, and your wallet also derives the key for end-to-end-encrypted cloud sync.

If none of those describe you, a hosted chat product is probably a better fit. If most of them do, the rest of this manual will be useful.

## What you can do with it

The current default surfaces are:

- **Chat** in the desktop main window, with file attachments, voice input, tool toggles, and skill selection.
- **Recall memories** that the agent has accumulated about your work, preferences, and open loops across sessions.
- **Run skills** — 30 are bundled, covering productivity, browser automation, market data, social search, screenshots, voice, and more.
- **Operate macOS** through Computer Use, with a per-app approval gate before any modifying action.
- **Operate Chrome** through the Ghast Browser Relay extension over the Chrome DevTools Protocol.
- **Bridge a chat platform** so the same agent can respond in Telegram / Discord / Slack / Feishu / WeChat.
- **Pick a model** from the 0G Compute network — either through the Router (paste a Compute Console API key) or by funding a specific on-chain TEE provider from your wallet (Advanced).
- **Sync encrypted backups** of your local data to 0G Storage, opt-in per category.

Each of these has its own section in this manual.

## What it is not

To set expectations clearly:

- It is **not a browser extension** with a small "settings page." The desktop app is the primary product surface; the Chrome extension is a relay that lets the agent reach into your browser.
- It is **not a cloud chat service**. Conversations and memories live in a local SQLite database. Cloud sync is opt-in, per-category, and encrypted client-side.
- It is **not a custody product**. Ghast does not hold your wallet keys — they are stored encrypted in your local profile vault, and signing happens locally.
- It is **not an autonomous machine takeover tool**. Computer Use requires explicit macOS Accessibility permission *and* per-app approval before any modifying action.

## Recommended order on first use

1. Install Ghast AI Desktop ([Install](/en/desktop/install)).
2. Sign in with email and complete onboarding ([Sign In & Activation](/en/desktop/sign-in-and-activation)).
3. Create or import a wallet ([Wallet & Key Custody](/en/web3/wallet-and-key-custody)).
4. Sign up at <https://pc.0g.ai/>, top up the 0G Compute Console, generate an API key, and paste it into Ghast → Settings → Providers → Router ([Inference Modes](/en/web3/inference-modes)).
5. Only as needed — fund an Advanced provider, grant Computer Use, install the Chrome extension, connect a messaging bridge.

## Related pages

- [Product Architecture](/en/start-here/architecture)
- [Quickstart](/en/start-here/quickstart)
- [System Requirements](/en/start-here/system-requirements)
- [Security Overview](/en/security/overview)
