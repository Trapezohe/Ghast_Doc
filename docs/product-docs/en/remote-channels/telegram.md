---
title: Telegram
description: Set up the Telegram bridge — create a bot, paste the token, map chats to workspaces.
---

# Telegram

The Telegram bridge connects Ghast to a Telegram bot you own. Messages from chats you map are routed into Ghast conversations; the agent's replies are sent back through the bot.

## Setup

### 1. Create a Telegram bot

1. In Telegram, message `@BotFather`.
2. Send `/newbot`.
3. Give the bot a display name and a unique `_bot` username.
4. BotFather replies with an **HTTP API Token** (looks like `123456789:ABCdefGHI…`). Copy it.

(Optional but recommended) Set the bot's privacy mode to **disabled** with `/setprivacy → Disable` so the bot can see all messages in groups, not only commands.

### 2. Add the token to Ghast

1. Open Settings → Channels → **Telegram**.
2. Paste the token into **Bot Token** and click **Connect**.
3. Ghast tests the token and shows the bot's username and ID once connected.

### 3. Invite the bot to a chat

For a **private chat**: tell BotFather's bot to send a message, or have your user start a chat with the bot directly (`/start`).

For a **group**: add the bot to the group like any user. If you want the bot to see all messages, ensure privacy mode is disabled.

### 4. Map chats to a workspace

Once at least one chat has interacted with the bot, the Telegram panel in Ghast shows a list. For each chat:

1. Pick a workspace from the dropdown.
2. (Optional) override the system prompt or default skill set.
3. Save.

Mapped chats now route messages into Ghast.

## Supported content

| Direction | Supported |
| --- | --- |
| Inbound text | Yes |
| Inbound photos | Yes (vision-capable models can read them) |
| Inbound voice | Yes (transcribed via Whisper before the agent sees it) |
| Inbound files | Yes (rendered through the relevant viewer) |
| Inbound stickers | Stripped to alt text |
| Outbound text | Yes, with Markdown rendering |
| Outbound voice | Yes (via TTS) |
| Outbound attachments | Yes (limited by Telegram's file-size cap) |
| Reactions | Yes, both directions |

## Group behaviour

In groups, the bridge respects the **privileged actor** model:

- The user(s) you mark as actors can issue work to the agent.
- Non-actor messages are observed (they enter conversation context) but don't trigger agent actions unless explicitly addressed (e.g. by mention).

You set actors in the per-chat config. The default is: no actors → the agent treats the chat as observation-only.

## Privacy and revocation

- Bot token lives encrypted in the profile vault.
- The bot can only see chats you've added it to. Removing it from a chat severs the bridge for that chat.
- Revoke the token from BotFather (`/revoke`) and re-issue if you suspect leakage. Update it in Ghast Settings.

## Failure modes

| Symptom | Cause | Action |
| --- | --- | --- |
| Bot connects but never receives messages | Privacy mode is enabled in groups | BotFather → `/setprivacy → Disable` |
| Token rejected | Wrong token / revoked | Verify with `https://api.telegram.org/bot<token>/getMe` |
| Voice messages not transcribed | Whisper model not downloaded | Settings → Whisper → pick a model and wait for download |
| Replies sent to wrong chat | Chat not mapped, or mapped to a different workspace | Settings → Channels → Telegram → check mapping |

## Related pages

- [Remote Channels Overview](/en/remote-channels/overview)
- [Approval Flow](/en/remote-channels/approval-flow)
- [Voice (STT & TTS)](/en/desktop/voice)
