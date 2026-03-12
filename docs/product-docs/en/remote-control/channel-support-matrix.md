---
title: Channel Support Matrix
description: See which remote channels are treated as formal user paths today and which ones should not be interpreted as default entry points.
---

# Channel Support Matrix

## Overview

This page explains the current status of each remote channel and clarifies which channels ordinary users should treat as formal paths today, versus which ones should not be interpreted as default entry points.

## The current conclusion first

For ordinary users, the matrix should currently be read using these principles:

- Telegram is the standard remote entry point in the manual.
- Channels that exist in code but are not exposed as the current main UI path should not be treated as default user-facing features.
- Planned channels or out-of-scope channels should not be interpreted as something users can configure right now.

## Current matrix

| Channel | Current status | How the manual treats it | What ordinary users should assume |
| --- | --- | --- | --- |
| Telegram | Documented as the formal remote entry point | Main path | Can be configured and used directly through the current manual |
| Discord | Implemented in code | Implemented, but not the current main UI path | Not part of the default user path |
| Slack | Implemented in code | Implemented, but not the current main UI path | Not part of the default user path |
| Google Chat | Planned | Planned | Not a channel users should expect to configure now |
| IRC | Planned | Planned | Not a channel users should expect to configure now |
| WhatsApp | Out of current scope | Not currently supported | Should not be treated as available |
| Signal | Out of current scope | Not currently supported | Should not be treated as available |
| BlueBubbles | Out of current scope | Not currently supported | Should not be treated as available |
| iMessage | Out of current scope | Not currently supported | Should not be treated as available |

## The documentation rule behind this page

To keep the manual stable, remote-channel documentation currently follows two rules:

- User-facing setup guidance is written only for the Telegram main path.
- Channels that exist in code but are not publicly exposed in the current UI are recorded as status only, not as default setup guides.

Among current remote channels, Telegram is Ghast AI's standard remote entry point for ordinary users. Other channels such as Discord and Slack may already exist in code, but they are not part of the current main UI path. Planned or out-of-scope channels should not be interpreted as formal user-facing entry points at this time.

## Related pages

- [Remote Control Model](../core-concepts/remote-control-model.md)
- [Telegram Setup](telegram-setup.md)
- [Remote Channel Status Reference](../reference/remote-channel-status-reference.md)
