---
title: Quickstart
description: The shortest path from a fresh install to your first conversation.
---

# Quickstart

This page is the shortest path from a fresh install to your first conversation. Each step links to a deeper page when you need more detail.

## Before you begin

- macOS 11 or newer (Apple Silicon or Intel)
- About 1 GB of free disk space
- An email you can receive a verification code at
- A 0G wallet (optional — Ghast can generate one for you)

If you do not have a 0G wallet yet, Ghast will create one in onboarding and show you the mnemonic. You will need to write it down.

## Step 1 — Install Ghast AI Desktop

Download the signed DMG for your CPU architecture (Apple Silicon or Intel), open it, and drag **Ghast AI** into Applications. Detailed install notes are in [Install Ghast AI Desktop](/en/desktop/install).

## Step 2 — Sign in

Open the app. The first window is the **Sign In** screen.

1. Enter your email and request a verification code, or use Google OAuth.
2. Enter the code you received.
3. The app verifies the session and moves you into **Onboarding**.

Full flow: [Sign In & Activation](/en/desktop/sign-in-and-activation).

## Step 3 — Onboarding

Onboarding asks you to:

1. Pick an interface language (11 available)
2. Set a nickname
3. Pick appearance (system / light / dark)
4. Set up a wallet — one of:
   - **Create a new wallet** — Ghast generates one and shows the mnemonic. Write it down. You will be asked to confirm.
   - **Import from mnemonic**
   - **Import from raw private key**

After the wallet step, the client signs a challenge with your local wallet to bind it to your profile.

## Step 4 — Start chatting

Before the model picker has anything to offer, you need at least one provider configured. The fastest path is the **0G Router**:

1. Open <https://pc.0g.ai/> (the 0G Compute Console) in a browser, sign up, top up a balance, and generate an API key.
2. In Ghast, go to **Settings → Providers → Router** and paste the API key.
3. The Router's models now appear in the model picker.

Then, in the main chat window:

- Type a prompt in the composer at the bottom and press Enter.
- The response streams in. Tool calls (if any) appear as collapsible cards.
- File attachment and voice input are available from the icons in the composer.

## Step 5 — Optional integrations, one at a time

Add these only as you need them. None is required for the desktop chat to work.

| Integration | What it unlocks | Where to go |
| --- | --- | --- |
| **Advanced 0G provider** | A specific on-chain TEE model with capability badges | [Inference Modes](/en/web3/inference-modes) |
| **0G Storage sync** | Encrypted cross-device backup of memories, settings, etc. | [0G Storage Sync](/en/web3/0g-storage-sync) |
| **Chrome extension** | The agent can drive your real Chrome | [Browser Extension](/en/browser-extension/install-and-pair) |
| **Computer Use** | The agent can operate macOS apps | [Computer Use](/en/computer-use/macos-permissions) |
| **Messaging bridge** | The agent responds inside Telegram / Discord / Slack / Feishu / WeChat | [Remote Channels](/en/remote-channels/overview) |
| **MCP servers** | Add external tools to the agent | [MCP Servers](/en/desktop/mcp-servers) |
| **Partner Mode** | Long-term collaboration personality | [Partner Mode](/en/partner-mode/overview) |

## A typical first session

A reasonable first 15 minutes:

1. Install, sign in, create a wallet, complete onboarding.
2. Top up the 0G Compute Console and paste your Router API key into Ghast.
3. Send 2–3 messages to confirm Router chat works.
4. Open Settings → Memory and skim what gets stored.
5. Open Settings → Wallet to view your address (and, if you plan to use Advanced providers, deposit a small amount of OG into your 0G Ledger for later).
6. Close the app, reopen it, and check that your conversation is still there.

If all six steps work, the install is healthy. From there you can move into the integrations table above at your own pace.

## Related pages

- [System Requirements](/en/start-here/system-requirements)
- [Install Ghast AI Desktop](/en/desktop/install)
- [Sign In & Activation](/en/desktop/sign-in-and-activation)
- [Wallet & Key Custody](/en/web3/wallet-and-key-custody)
- [Troubleshooting: Login & Activation](/en/troubleshooting/login-and-activation)
