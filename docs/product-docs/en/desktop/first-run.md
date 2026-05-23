---
title: First Run & Onboarding
description: What happens the first time you open Ghast AI Desktop.
---

# First Run & Onboarding

The first launch is a guided flow. This page walks through what each screen does and what's persisted at each step.

## Auth window opens first

When you launch the app for the first time, the **Auth** window opens instead of the main chat. Until you complete sign-in and onboarding, no other window is reachable.

The auth window is a separate React entry from the main chat. It has its own dedicated UI for sign-in and onboarding so that the flow can be controlled without dragging in the main app's complexity.

## Step 1 — Sign in

Two paths, both produce a backend session:

| Path | Flow |
| --- | --- |
| **Email** | Enter your email → request a code → enter the code → session authorised |
| **Google OAuth** | Click "Sign in with Google" → complete the OAuth flow in a system browser → return to the app |

After sign-in, the client verifies the session with the backend and proceeds to onboarding.

## Step 2 — Language

Pick the interface language. 11 options are available:

- English (en)
- 简体中文 (zh-CN)
- 繁體中文 (zh-TW)
- 日本語 (ja)
- 한국어 (ko)
- Français (fr)
- Tiếng Việt (vi)
- Русский (ru)
- Español (es)
- Deutsch (de)
- Português (pt)

The selection is persisted and can be changed later in Settings → UI.

## Step 3 — Nickname

A short display name. Used in the UI and shown to remote-channel participants (Telegram / Discord / Slack / Feishu / WeChat) when relevant.

## Step 4 — Appearance

Three modes:

- **System** — follow macOS dark/light setting.
- **Light** — always light.
- **Dark** — always dark.

Stored in `localStorage` under `ghast-theme-preference` and can be changed at any time in Settings → UI.

## Step 5 — Wallet

The most consequential step. You pick one of three paths:

| Path | Result |
| --- | --- |
| **Create a new wallet** | Ghast generates a fresh wallet. The mnemonic is shown once. You must confirm by typing it back. |
| **Import from mnemonic** | Paste a BIP-39 mnemonic. Ghast derives the key. |
| **Import from raw private key** | Paste a hex private key. |

After this, Ghast signs a challenge with the local wallet to bind the wallet address to your profile. From this point on, the profile is anchored to that wallet.

Detailed model: [Wallet & Key Custody](/en/web3/wallet-and-key-custody).

## Step 6 — Activation (if applicable)

Some channels (e.g. internal preview) gate access with an invite code. If your account is on such a channel, an activation screen appears here. Paste the code and confirm.

This step is skipped for accounts that don't need activation.

## What's persisted after onboarding

After the success screen, the following are on disk:

- Profile directory at `~/Library/Application Support/Ghast/profiles/<profileId>/`
- Encrypted wallet at `<profile>/wallet.json`
- Initial settings (language, appearance, nickname)
- A backend session token
- An empty SQLite database ready for conversations and memories

The Auth window closes, and the **Main** chat window opens.

## What you'll see first in Main

The main chat window opens to an empty home view with:

- An empty composer at the bottom (cursor in the input)
- An empty model picker — until you paste a Router API key from <https://pc.0g.ai/> or enable an Advanced provider
- A sidebar with no conversations yet
- "Today / Open Loops" reminders (empty on first run)

To start chatting, configure at least one model provider — typically the **0G Router** (sign up at <https://pc.0g.ai/>, top up a balance, generate an API key, paste it into Settings → Providers → Router). After that the model picker fills in and you can send your first message.

## Re-running onboarding

Onboarding does not have a "re-run" entry point. If you want to rebuild from scratch:

- Create a new profile (Settings → Account → Add Profile), which triggers onboarding for the new profile.
- Or uninstall the app, wipe `~/Library/Application Support/Ghast`, and reinstall.

Switching profiles does not re-run onboarding.

## Related pages

- [Install Ghast AI Desktop](/en/desktop/install)
- [Sign In & Activation](/en/desktop/sign-in-and-activation)
- [Profiles & Workspaces](/en/desktop/profiles-and-workspaces)
- [Wallet & Key Custody](/en/web3/wallet-and-key-custody)
