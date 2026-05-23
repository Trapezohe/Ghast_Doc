---
title: Approval Flow
description: When the agent stops to ask before posting, and how the approval modal works.
---

# Approval Flow

Bridges talk to real people in real channels, so they're held to a higher bar than the local chat. The approval flow is the moment when the agent stops and surfaces a confirmation card in Ghast Desktop before it does something with downstream effects.

## What triggers an approval

The agent does not stop for every reply. Trivial chat exchanges are auto-sent. Approval triggers fire on:

| Trigger | Why |
| --- | --- |
| **Long reply** | Anything over a configurable size threshold (default 800 chars). |
| **Outbound file or attachment** | Sending media to a channel. |
| **Side effects in tool calls** | A tool the agent uses has `writes: true` or `destructive: true` — e.g. posting to another channel, modifying remote state. |
| **Non-actor message in a group** | A user who isn't on the channel's approved-actor list asked the agent to do something. |
| **First reply in a newly mapped channel** | Treated as a sanity check; subsequent replies in that channel run without prompting. |
| **Auto-apply review hit** | If Partner Mode's auto-apply rules say to pause, the agent does. |

You can tune most of these in Settings → Channels → [Platform] → Approval Rules.

## What the approval card shows

The card appears in the desktop client (not in the remote channel). It contains:

- The channel name and platform.
- The triggering user's identity.
- A preview of the message the agent intends to send.
- A list of any tool calls the agent is about to make (with parameters).
- Three buttons: **Send**, **Edit & Send**, **Cancel**.

While the card is up, the agent stalls. Other channels and conversations continue working — only the one waiting on approval is paused.

## Edit & Send

Sometimes the agent's draft is 90% right. Edit & Send opens an inline editor so you can tweak the message before posting. The edited content is what's sent; the agent doesn't re-generate.

## Timing out

If you don't respond within 30 minutes, the request is treated as Cancel. The agent posts a brief "I held off on this — let me know if you still want me to" reaction in the channel (configurable per channel).

## Logging

Every approval (granted or denied) is logged in Settings → Channels → [Platform] → Approval Log. The log shows:

- Timestamp
- Channel / user
- Action type
- Decision
- Final message content (if sent)

Useful for review or compliance.

## Bypassing approvals

You can lower the approval bar per channel, per platform, or per workspace. Reasonable choices:

- **DMs in Telegram** — bypass approval (you're the only one in the chat).
- **High-trust internal Slack channels** — bypass for short replies, keep for tool calls with side effects.
- **Public-facing channels** — keep all approvals.

Settings → Channels → [Platform] → Approval Rules lets you set thresholds.

## When approval doesn't trigger

A few cases where the agent posts without pausing, even for non-trivial work:

- **Reactions** — emoji reactions are too lightweight to gate.
- **Confirmations and acknowledgements** — "got it, working on it" is auto-sent.
- **Already-approved tool calls** — if the same exact tool call shape has been approved recently, repeat calls within a short window pass through.

These are conveniences. You can disable each in the rules.

## Related pages

- [Remote Channels Overview](/en/remote-channels/overview)
- [Channel Support Matrix](/en/remote-channels/support-matrix)
- [Partner Mode: Initiative & Open Loops](/en/partner-mode/initiative)
