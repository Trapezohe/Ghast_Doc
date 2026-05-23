---
title: Channel Support Matrix
description: At-a-glance comparison of what each bridge supports and where each is different.
---

# Channel Support Matrix

This page is a compact, comparable reference. For setup and configuration, see each platform's own page.

## Inbound

| Capability | Telegram | Discord | Slack | Feishu | WeChat |
| --- | --- | --- | --- | --- | --- |
| Text | ✓ | ✓ | ✓ | ✓ | ✓ |
| Images | ✓ | ✓ | ✓ | ✓ | ✓ |
| Voice (transcribed) | ✓ | ✓ | Partial | ✓ | ✓ |
| Files / attachments | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reactions in | ✓ | ✓ | ✓ | ✓ | Limited |
| Thread context | n/a | ✓ | ✓ | n/a | n/a |

## Outbound

| Capability | Telegram | Discord | Slack | Feishu | WeChat |
| --- | --- | --- | --- | --- | --- |
| Plain text | ✓ | ✓ | ✓ | ✓ | ✓ |
| Markdown | ✓ | ✓ (subset) | ✓ (mrkdwn) | n/a | n/a |
| Rich cards / Blocks | n/a | Embeds | Block Kit | Interactive cards | n/a |
| Voice (TTS) | ✓ | ✓ | Partial | ✓ | ✓ |
| File attachments | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reactions out | ✓ | ✓ | ✓ | ✓ | Limited |
| Buttons / interactive | n/a | Buttons via embeds | Block Kit buttons | Card buttons | n/a |

## Auth & install

| Aspect | Telegram | Discord | Slack | Feishu | WeChat |
| --- | --- | --- | --- | --- | --- |
| Bot creation | BotFather | Developer Portal | api.slack.com/apps | open.feishu.cn | None — uses your personal WeChat account |
| Auth | Bot token | Bot token + OAuth2 | OAuth2 (xapp- + xoxb-) | App ID + Secret | QR scan from the WeChat mobile app |
| Self-host required | No | No | No | No | No |
| Privileged scopes | Privacy mode | Message Content Intent | Multiple per-channel scopes | App scopes + admin approval | n/a — same scope as your WeChat account |

## Quirks

| Quirk | Where |
| --- | --- |
| **Privacy mode in groups** — bot only sees commands unless disabled | Telegram |
| **Message Content Intent** — must be enabled to see message text | Discord |
| **QR session can be invalidated** by logging the device out from your phone | WeChat |
| **App must be admin-approved** — every scope change | Feishu |
| **Block Kit nested limits** — actions max 5 buttons, sections max 10 fields | Slack |

## Default approval behaviour

| Behaviour | Default |
| --- | --- |
| Approval on first reply in a new channel | On |
| Approval for long replies (>800 chars) | On |
| Approval for tool calls with `writes: true` | On |
| Approval for non-actor messages in groups | On |
| Auto-send reactions | On |
| Auto-send confirmations ("got it") | On |

All adjustable per channel.

## Related pages

- [Remote Channels Overview](/en/remote-channels/overview)
- [Approval Flow](/en/remote-channels/approval-flow)
- Individual platform setup: [Telegram](/en/remote-channels/telegram) · [Discord](/en/remote-channels/discord) · [Slack](/en/remote-channels/slack) · [Feishu](/en/remote-channels/feishu) · [WeChat](/en/remote-channels/wechat)
