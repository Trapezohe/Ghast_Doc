---
title: Docs Changelog
description: Significant updates to this documentation set.
---

# Docs Changelog

Significant content changes to this documentation set. Cosmetic edits, link fixes, and typo corrections are not listed.

## 2026-05-24 — Full rewrite

A complete rewrite of the documentation reflecting Ghast AI's product positioning:

- **Desktop-first** — the macOS Electron client is the primary surface; the previous "Chrome sidebar + Companion" framing is retired.
- **New section: Web3 Infrastructure** — 0G Compute, 0G Storage, wallet & key custody, inference modes, TEE attestation.
- **New section: Computer Use** — overview, macOS permissions, per-app approval gate, app playbooks, safety boundaries.
- **New section: Partner Mode** — overview, scenario packs (`work`, `companion`, `quiet`), initiative engine, User Understanding Model (UUM), hard boundaries.
- **Updated section: Remote Channels** — five-platform coverage (Telegram, Discord, Slack, Feishu, WeChat) replacing the prior Telegram-centric coverage.
- **Updated section: Browser Extension** — repositioned as a small relay rather than the primary product surface.
- **Updated section: Security** — explicit trust boundaries per surface; honest threat-model boundaries; what the stack does and does not protect against.
- **New chapter sidebars and navigation** — Web3 added to the top nav alongside Desktop and Security.

The previous documentation (which described an extension-centric product with an optional "Companion" service) has been retired in favour of the structure above.

## How to read this page

Each entry above is a content-shape change, not a per-file diff. For per-file history, see the documentation repository's commit log.

## Related pages

- [Desktop Changelog](/en/release-notes/desktop-changelog)
- [Extension Changelog](/en/release-notes/extension-changelog)
