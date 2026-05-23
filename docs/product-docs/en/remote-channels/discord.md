---
title: Discord
description: Set up the Discord bridge — create a bot, invite it to a server, map channels.
---

# Discord

The Discord bridge connects Ghast to a Discord bot you own and have invited to a server. Mapped channel messages flow into Ghast conversations; agent replies post back via the bot.

## Setup

### 1. Create a Discord application and bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications) and click **New Application**.
2. Name it and create.
3. In the left sidebar, click **Bot**.
4. Click **Add Bot** if prompted.
5. Under **Token**, click **Reset Token** (or **Copy** if newly created). Save the token.
6. Under **Privileged Gateway Intents**, enable **Message Content Intent** (required to read message text in non-mention contexts).

### 2. Invite the bot to your server

1. In the developer portal, go to **OAuth2 → URL Generator**.
2. Scopes: check **bot** and **applications.commands**.
3. Bot Permissions: at minimum, **Read Messages/View Channels**, **Send Messages**, **Embed Links**, **Attach Files**, **Add Reactions**, **Read Message History**, **Use Slash Commands**.
4. Copy the generated URL, open it in a browser, and authorise the bot into your server.

### 3. Add the token to Ghast

1. Settings → Channels → **Discord**.
2. Paste the bot token, click **Connect**.
3. Once connected, Ghast lists every server and channel the bot can see.

### 4. Map channels

For each channel you want the agent to respond in:

1. Pick a workspace.
2. (Optional) configure prompt overrides and skill defaults.
3. Save.

## Supported content

| Direction | Supported |
| --- | --- |
| Inbound text | Yes |
| Inbound images | Yes (vision-capable models) |
| Inbound voice (Discord voice messages) | Yes (transcribed) |
| Inbound files / embeds | Yes |
| Thread replies | Yes — the agent treats threads as scoped conversations |
| Outbound text | Yes, including Discord's Markdown subset |
| Outbound embeds | Yes (link previews, attachments) |
| Reactions | Both directions |

## Threads

Discord threads are first-class. When the agent replies in a thread, subsequent agent activity stays inside that thread. This is the right shape for "have a long conversation in a sub-thread without cluttering the main channel."

## Slash commands

If you registered application commands during the bot setup, the agent can respond to slash commands as well. Slash commands are useful for one-off, structured requests ("/translate this message").

## Privacy and revocation

- Bot token lives encrypted in the Profile Vault.
- The bot only sees servers it's been invited to.
- Revoke via the Developer Portal (Reset Token) and update in Ghast.
- To remove from a server: server owner removes the bot in Server Settings → Integrations.

## Failure modes

| Symptom | Cause | Action |
| --- | --- | --- |
| Bot connects but doesn't see messages | Message Content Intent not enabled | Developer Portal → Bot → Privileged Gateway Intents |
| Bot can't post in a channel | Missing **Send Messages** permission for the bot's role | Server Settings → Roles |
| Embeds don't render | Missing **Embed Links** permission | Same |
| Slash commands not visible | OAuth2 scope `applications.commands` not granted | Re-invite the bot with both scopes |

## Related pages

- [Remote Channels Overview](/en/remote-channels/overview)
- [Approval Flow](/en/remote-channels/approval-flow)
- [Channel Support Matrix](/en/remote-channels/support-matrix)
