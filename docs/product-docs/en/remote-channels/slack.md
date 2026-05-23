---
title: Slack
description: Set up the Slack bridge — create a Slack app, install to a workspace, map channels.
---

# Slack

The Slack bridge connects Ghast to a Slack app you've installed in your workspace. Messages from mapped channels go into Ghast conversations; agent replies post back via the Slack app.

## Setup

### 1. Create a Slack app

1. Go to [Slack API – Your Apps](https://api.slack.com/apps) and click **Create New App** → **From scratch**.
2. Name it and pick the workspace where you want to install it.

### 2. Configure scopes

In your app's settings, **OAuth & Permissions → Scopes → Bot Token Scopes**:

- `chat:write` — post messages
- `chat:write.public` — post in channels the bot hasn't been invited to (optional)
- `channels:history` — read channel messages
- `channels:read` — list channels
- `groups:history`, `groups:read` — same for private channels
- `im:history`, `im:read`, `im:write` — DMs
- `mpim:history`, `mpim:read`, `mpim:write` — multi-party DMs
- `reactions:read`, `reactions:write` — reactions both directions
- `files:read` — read attachments
- `users:read` — resolve user names

### 3. Enable Socket Mode

1. **Socket Mode → Enable Socket Mode**.
2. Generate an **App-Level Token** with `connections:write` scope. Save it (starts with `xapp-`).
3. **Event Subscriptions → Enable Events** and subscribe to:
   - `message.channels`, `message.groups`, `message.im`, `message.mpim`
   - `reaction_added`, `reaction_removed`

### 4. Install to workspace

1. **Install App → Install to Workspace**.
2. Approve the requested scopes.
3. Slack returns a **Bot User OAuth Token** (starts with `xoxb-`). Save it.

### 5. Add tokens to Ghast

1. Settings → Channels → **Slack**.
2. Paste both the **App-Level Token** (`xapp-…`) and the **Bot User OAuth Token** (`xoxb-…`).
3. Click **Connect**. Ghast lists your channels and DMs.

### 6. Map channels

For each channel, pick a workspace and (optionally) prompt and skill overrides. The bot needs to be invited to non-public channels — `/invite @YourBot`.

## Supported content

| Direction | Supported |
| --- | --- |
| Inbound text | Yes |
| Inbound images / files | Yes |
| Inbound voice (Slack huddles / clips) | Limited — text transcripts when available |
| Threads | Yes — agent replies thread-aware |
| Outbound text | Yes |
| Outbound Block Kit | Yes (buttons, sections, dividers) |
| Reactions | Both directions |

## Block Kit

For multi-step decisions the agent can build interactive cards using Block Kit — buttons, select menus, dividers — and respond to clicks. Useful for approval flows in shared channels.

## Enterprise considerations

- For Enterprise Grid workspaces, install the app at the workspace level. Org-level installs are not currently supported.
- Slack rate limits apply (most APIs are tier-2: ~50/min). Ghast respects rate limits and queues messages internally.

## Privacy and revocation

- Tokens encrypted in Profile Vault.
- Revoke via **OAuth & Permissions → Revoke Tokens** in the Slack API dashboard.
- Workspace admins can also revoke the install at any time.

## Failure modes

| Symptom | Cause | Action |
| --- | --- | --- |
| Connect fails with `not_authed` | Wrong token, wrong order, or token revoked | Regenerate from Slack API dashboard, paste both tokens |
| Bot doesn't post in a channel | Bot not in channel | `/invite @YourBot` in that channel |
| Inbound events arrive empty | Event Subscriptions not enabled | Enable Events and the message scopes |
| Slow replies | Rate limit hit | Wait; Ghast retries with backoff |

## Related pages

- [Remote Channels Overview](/en/remote-channels/overview)
- [Approval Flow](/en/remote-channels/approval-flow)
