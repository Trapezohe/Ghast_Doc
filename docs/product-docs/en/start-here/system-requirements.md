---
title: System Requirements
description: Hardware, OS, network, and account prerequisites for running Ghast AI Desktop.
---

# System Requirements

## Operating System

- **macOS 11 (Big Sur) or newer.**
- Both Apple Silicon (M-series) and Intel CPUs are supported.
- Other platforms (Windows, Linux) are not currently shipped. The desktop client is macOS-only at this stage.

Some features are slightly different per CPU:

| Feature | Apple Silicon | Intel |
| --- | --- | --- |
| Whisper STT | CPU or Metal backend | CPU backend |
| Kokoro TTS | Supported | Supported |
| Qwen TTS (MLX) | Supported | Not available |
| Computer Use | Supported | Supported |

## Disk space

- Around **1 GB** for the app itself.
- Plus a small profile directory that grows with use (memories, conversations, attachments). Typical usage stays under a few hundred MB until you accumulate a lot of media.

If you enable local model inference for embeddings or Whisper, model files add another **~150–400 MB** depending on which variants you pull.

## Network

- Outbound HTTPS to `https://evmrpc.0g.ai` (0G chain RPC).
- Outbound HTTPS to `https://router-api.0g.ai/v1/models` (Router provider).
- Outbound HTTPS to `https://indexer-storage-turbo.0g.ai` if 0G Storage sync is enabled.
- Outbound HTTPS to provider endpoints if you enable Advanced 0G providers (they each register their own URL on-chain).
- Outbound connections to Telegram / Discord / Slack / Feishu / WeChat APIs only if you enable those bridges.
- Outbound HTTPS to MCP servers you configure.

If you are behind a corporate proxy, configure it in Settings → Network. The client uses the system proxy by default.

## Permissions

The first launch will not ask for any system permission. Permissions are granted on-demand the first time a feature needs them:

| Permission | When you'll be asked | Why |
| --- | --- | --- |
| **Accessibility** | First time you use Computer Use | The Swift daemon needs the AX API to click and type |
| **Screen Recording** | First time Computer Use takes a `skyshot` | Needed for full-fidelity screenshots of other apps |
| **Microphone** | First time you use voice input | Whisper STT capture |
| **AppleEvents** | First time a Computer Use action uses AppleScript | Mail, Calendar, Music app adapters |
| **Notifications** | First time the agent surfaces a proactive reminder | Partner Mode follow-ups |

You can review and revoke any of these in System Settings → Privacy & Security at any time.

## Account prerequisites

- **An email** that can receive a verification code, or a Google account for OAuth sign-in.
- **A wallet** (created during onboarding or imported). The wallet address is bound to your profile; switching to a different wallet means creating a different profile.

Router mode pays from your **0G Compute Console** balance (set up at <https://pc.0g.ai/>), not from your local wallet — so OG in the wallet isn't required for Router. You need OG in the wallet only when you fund a specific Advanced provider for on-chain inference, or when 0G Storage sync is enabled.

## What is *not* required

To be explicit, you do **not** need any of the following to get started:

- A Chrome installation. Chrome is only needed if you want the browser extension.
- A Telegram / Discord / Slack / Feishu / WeChat account. Those are only needed for the respective bridges.
- Any MCP server. The agent works fine with its bundled tools and skills.
- A code signing certificate or developer account on your machine. The DMG is already signed and notarised.

## Related pages

- [Install Ghast AI Desktop](/en/desktop/install)
- [Quickstart](/en/start-here/quickstart)
- [Security Overview](/en/security/overview)
