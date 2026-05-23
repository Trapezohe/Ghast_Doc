---
title: Glossary
description: Terms used throughout the Ghast AI documentation.
---

# Glossary

Terms used across the documentation, in plain English.

## A

**ACP (Agent Communication Protocol)** — A protocol for hosting a sub-agent inside a Ghast conversation. The main agent talks to it as a peer. See [ACP](/en/desktop/acp).

**Action log** — Per-profile encrypted log of every Computer Use action that went through the approval gate. Visible in Settings → Computer Use.

**Advanced (provider)** — A specific 0G Compute provider you've enabled and funded directly. Opposite of Router. See [Inference Modes](/en/web3/inference-modes).

**Approval gate** — The UI modal that asks "Allow Ghast to [action] in [AppName]?" for new apps. See [Computer Use Approval Gate](/en/computer-use/approval-gate).

**AX (Accessibility)** — macOS Accessibility API. The Swift daemon uses it to read app UI trees and post events.

## B

**Bot token** — Credential for a messaging-platform bot (Telegram BotFather token, Discord bot token, etc.). Stored encrypted in the Profile Vault.

**Bridge** — A long-running connection between Ghast and a messaging platform (Telegram / Discord / Slack / Feishu / WeChat). See [Remote Channels Overview](/en/remote-channels/overview).

**Browser Relay** — The Chrome extension that lets the desktop agent operate Chrome via CDP. See [Browser Extension Overview](/en/browser-extension/overview).

## C

**CDP (Chrome DevTools Protocol)** — The protocol the Browser Relay uses to drive Chrome.

**Companion (scenario pack)** — A warmer-tone Partner Mode scenario. Not a relationship product. See [Scenario Packs](/en/partner-mode/scenario-packs).

**Composer** — The input area at the bottom of the chat window.

**Computer Use** — The capability to drive macOS apps via the Swift daemon. See [Computer Use Overview](/en/computer-use/overview).

**Consolidation** — Background process that summarises long-tail memory fragments into higher-level facts. See [Memory](/en/desktop/memory).

## D

**Daemon (Computer Use)** — The Swift helper application that drives macOS. Talks to the desktop client over a Unix socket.

**Dry run** — A flag on certain Computer Use actions (Calendar `create_event`, Mail compose) that validates without side effects.

## E

**Embedding** — A vector representation of text used for semantic search. Ghast embeds memories and queries to do KNN recall.

## H

**Hard boundary** — A Partner Mode rule that no scenario pack, channel override, or turn instruction can relax. See [Hard Boundaries](/en/partner-mode/hard-boundaries).

**HKDF-SHA256** — The key derivation function used to derive the 0G Storage encryption key from your wallet private key.

## I

**Initiative** — Partner Mode's engine for occasional proactive surfaces. See [Initiative & Open Loops](/en/partner-mode/initiative).

**Inference contract** — On-chain contract that manages 0G Compute provider registry, sub-accounts, and TEE acknowledgements.

## L

**Ledger (contract)** — The on-chain contract that holds your OG balance. Funding starts here.

## M

**MCP (Model Context Protocol)** — The protocol Ghast uses to connect external tool servers. See [MCP Servers](/en/desktop/mcp-servers).

**Memory** — The vector-indexed store of long-running facts about how you work. See [Memory](/en/desktop/memory).

## O

**OG** — Native token of the 0G network. Used to fund Ledger deposits and provider sub-accounts.

**Open loop** — A commitment from a past conversation that hasn't been closed. Anchors Partner Mode follow-ups.

## P

**Partner Mode** — The long-term collaboration layer with scenario packs, initiative, and the UUM. See [Partner Mode Overview](/en/partner-mode/overview).

**Pointer Registry** — On-chain contract that stores content hashes of 0G Storage backups.

**Privileged actor** — A user explicitly allowed to issue work to the agent in a group channel. See [Approval Flow](/en/remote-channels/approval-flow).

**Profile** — Top-level container in Ghast Desktop. One wallet, one database, one set of settings per profile.

**Profile Vault** — The encrypted, per-profile store for high-value secrets (wallet key, OAuth tokens, bridge credentials). Vault key is in memory only.

## R

**Router (0G)** — A managed routing endpoint operated by 0G. You configure it with an API key generated at the [0G Compute Console](https://pc.0g.ai/); calls are billed against your Console balance. Distinct from Advanced (which uses your local wallet to talk to specific on-chain providers).

## S

**Scenario pack** — Partner Mode preset: `work`, `companion`, or `quiet`. See [Scenario Packs](/en/partner-mode/scenario-packs).

**Skill** — A Markdown-defined agent behaviour. Bundled or user-installed. See [Skills](/en/desktop/skills).

**Skyshot** — Computer Use primitive: an AX tree dump + a screenshot, together. Used as the agent's "look at the screen" action.

**Strict approval** — Computer Use setting: Allow Always behaves like Allow Once. Every modifying action re-prompts.

## T

**TEE (Trusted Execution Environment)** — Hardware-isolated runtime in which 0G Advanced providers run their models. See [TEE & Attestation](/en/web3/tee-and-attestation).

**TEE signer** — On-chain address registered by an Advanced provider, which signs inference responses. You acknowledge a provider's TEE signer before funding.

## U

**UUM (User Understanding Model)** — Schema-constrained record of how you collaborate. Fields: `work_state`, `goal_hierarchy`, `values_and_taste`, `decision_style`, `boundaries`, `expertise_areas`, `collaboration_relationship`, `do_not_push`. See [UUM](/en/partner-mode/uum).

## V

**Vault key** — The AES-256-GCM key that encrypts the Profile Vault. Backend-issued per sign-in, kept in memory only.

## W

**Whisper** — The local speech-to-text engine. Runs on CPU or Apple Silicon Metal.

**Workspace** — Project-scoped context inside a Profile. Workspaces share wallet and memory; they differ in conversation list and channel mappings.

## Related pages

- [Settings Reference](/en/reference/settings-reference)
- [Bundled Skills List](/en/reference/bundled-skills)
- [Supported Models](/en/reference/supported-models)
