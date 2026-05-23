---
title: Remote Channels Overview
description: One agent across Telegram, Discord, Slack, Feishu, and WeChat — what they share and where each is different.
---

# Remote Channels Overview

The desktop client ships bridges for five messaging platforms so the *same agent* can respond inside the apps your team already uses. This page covers what's shared across all five and where to go for per-platform setup.

## What "bridging" means

A bridge is a long-running connection from Ghast Desktop to the messaging platform. When a mapped channel receives a message, the bridge:

1. Forwards it into a Ghast conversation (creating one if needed).
2. Runs the agent against it, with all the usual context (memories, skills, tools).
3. Posts the agent's response back to the channel in the platform's native format.

The bridge is bidirectional, so reactions from you in the platform can also drive agent behaviour (e.g. a thumbs-up to confirm a draft).

## What's shared across all bridges

| Mechanic | What it does |
| --- | --- |
| **Channel mapping** | Channels are only routed if you've mapped them in Settings → Channels. Unmapped messages are ignored. |
| **Workspace binding** | Each channel maps to one workspace. The agent runs in that workspace's context. |
| **Voice I/O** | Inbound voice is transcribed via Whisper; outbound replies can be synthesised via TTS. |
| **Reactions** | The agent uses emoji reactions for "received / working / done" to avoid spamming long replies. |
| **Per-channel prompts** | Each channel can have its own system prompt, persona, and default skill set. |
| **Per-channel memory scope** | Memories generated in a channel can be tagged with that channel's source for filtering. |
| **Privileged actor** | Group channels can have an explicit "allowed actor" list. Non-actors' messages are observed but don't trigger agent actions. |

## The five platforms

| Platform | Auth | Best for |
| --- | --- | --- |
| **Telegram** | Bot Token (BotFather) | DM and groups, voice messages, fast-iteration use |
| **Discord** | Bot Token + OAuth2 | Server channels, thread replies, embeds, role-based use |
| **Slack** | OAuth2 Bot | Workspace channels, Block Kit, threads, enterprise use |
| **Feishu (Lark)** | Enterprise app OAuth2 | Chinese / international enterprise teams using Feishu, card-based interactions |
| **WeChat** | Personal-account QR login via the official Clawbot endpoint | China-focused workflows where the agent should respond as you in regular DMs and groups |

Each has its own setup page:

- [Telegram](/en/remote-channels/telegram)
- [Discord](/en/remote-channels/discord)
- [Slack](/en/remote-channels/slack)
- [Feishu (Lark)](/en/remote-channels/feishu)
- [WeChat](/en/remote-channels/wechat)

## A typical flow

1. You set up the platform side — a bot or app for Telegram / Discord / Slack / Feishu, or simply a QR scan from your phone for WeChat.
2. In Ghast Desktop, **Settings → Channels → [Platform]** and paste the credentials.
3. The bridge connects and lists available channels / chats.
4. You **map** a specific channel to a workspace.
5. You configure per-channel prompt and skills (optional).
6. Messages start routing.

## Approval flow

For sensitive actions — sending a long reply on your behalf, executing a tool that has side effects, replying to a non-actor's question in a group — the agent does *not* act blindly. The approval flow surfaces a confirmation card in the desktop client and waits for your call.

See [Approval Flow](/en/remote-channels/approval-flow) for the model and what triggers it.

## What bridges *do not* do

- They don't post to channels you haven't mapped.
- They don't archive your remote conversations into Ghast unless you map the channel.
- They don't reveal Ghast memories or wallet info to remote users.
- They don't run independently of the desktop client — if Ghast Desktop isn't running, the bridge isn't running.

## Related pages

- [Telegram](/en/remote-channels/telegram)
- [Discord](/en/remote-channels/discord)
- [Slack](/en/remote-channels/slack)
- [Feishu (Lark)](/en/remote-channels/feishu)
- [WeChat](/en/remote-channels/wechat)
- [Approval Flow](/en/remote-channels/approval-flow)
- [Channel Support Matrix](/en/remote-channels/support-matrix)
