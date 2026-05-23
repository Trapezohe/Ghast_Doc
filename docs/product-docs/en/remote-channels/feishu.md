---
title: Feishu (Lark)
description: Set up the Feishu / Lark bridge — create an enterprise app, install in a workspace, map chats.
---

# Feishu (Lark)

The Feishu bridge connects Ghast to a Feishu enterprise app you've installed in your tenant. Mapped chats route into Ghast conversations; agent replies post back as Feishu messages or interactive cards.

## Setup

### 1. Create a Feishu app

1. Go to [Feishu Open Platform](https://open.feishu.cn/) and sign in with a developer account that belongs to your tenant.
2. Create a new **Self-built app** (`企业自建应用`).
3. Note the **App ID** and **App Secret** in your app's basic info page.

### 2. Configure capabilities

In your app's settings:

- **Permissions & Scopes**: request the scopes for sending messages (`im:message`), reading messages (`im:message:readonly`), uploading files (`im:resource`), and reading chat / user info (`im:chat`, `contact:user.base:readonly`).
- **Events & Callbacks**: enable event subscription, choose the **WebSocket / Long Polling** transport (Ghast uses the SDK's polling), and subscribe to:
  - `im.message.receive_v1`
  - `im.message.reaction.created_v1` / `.deleted_v1` (if you want reactions)

### 3. Publish a version

Feishu apps need an admin to approve a published version before they go live. Submit a version with the requested scopes; the tenant admin approves it from the admin console.

### 4. Add the credentials to Ghast

1. Settings → Channels → **Feishu**.
2. Paste **App ID**, **App Secret**, and any **Verification Token** / **Encrypt Key** the app config requires.
3. Click **Connect**. The bridge fetches the tenant token, validates scopes, and lists available chats.

### 5. Map chats

For each chat (group or DM), pick a workspace and (optionally) prompt and skill overrides. The bot needs to be added to a group to receive messages from it — go to the group → Settings → Bots → Add Bot.

## Supported content

| Direction | Supported |
| --- | --- |
| Inbound text | Yes |
| Inbound images / files | Yes |
| Inbound voice | Yes (transcribed via Whisper if Feishu provides the audio) |
| Outbound text | Yes |
| Outbound interactive cards | Yes (Feishu cards with buttons, fields, dividers) |
| Outbound files | Yes |
| Reactions | Yes (if subscribed) |

## Interactive cards

Feishu's card format is rich — Ghast can build approval cards, status updates with action buttons, and structured data tables, and respond to card-button clicks back from users.

## Privacy and revocation

- App ID / App Secret encrypted in Profile Vault.
- Revoke the app from the Feishu admin console.
- Tenant admin can revoke at any time.

## Failure modes

| Symptom | Cause | Action |
| --- | --- | --- |
| `app_access_token_invalid` | Wrong App ID / Secret | Verify in the developer console |
| No messages received | Event subscription not configured, or app not published | Check **Events & Callbacks**, ensure a version is approved |
| Card buttons don't respond | Callback URL not set, or wrong app secret | Verify event subscription |
| "Permission denied" on send | Missing `im:message` scope | Add scope and republish |

## Related pages

- [Remote Channels Overview](/en/remote-channels/overview)
- [Approval Flow](/en/remote-channels/approval-flow)
- [Channel Support Matrix](/en/remote-channels/support-matrix)
