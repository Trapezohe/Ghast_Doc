---
title: Remote Channel Status Reference
description: Reference meanings for the current remote-channel UI states and channel-level status fields.
---

# Remote Channel Status Reference

## Current UI state values

| State | Current meaning |
| --- | --- |
| `needs_setup` | Key configuration is still incomplete |
| `configured` | Configuration exists, but the channel may not actually be live yet |
| `live` | The channel is configured and currently available |

## Current channel-level status fields

| Field | Current use |
| --- | --- |
| `configured` | Indicates that the channel has the required configuration |
| `live` | Indicates that the channel is actually connected |
| `botConfigured` | Telegram Bot Token is configured |
| `linkedChatId` | Telegram chat is linked |
| `authTokenConfigured` | Token is configured for non-Telegram pilot channels |

## Related pages

- [Telegram Setup](../remote-control/telegram-setup.md)
- [Channel Support Matrix](../remote-control/channel-support-matrix.md)
