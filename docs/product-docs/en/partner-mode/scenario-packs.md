---
title: Scenario Packs
description: The three scenario packs — work, companion, quiet — and how each one shapes the agent.
---

# Scenario Packs

A scenario pack is a preset that calibrates Ghast's default tone and initiative style. There are three. Picking one is a soft setting, not a binding contract — any individual turn can override the pack's defaults — but the pack is what shapes the agent's behaviour when you haven't said anything specific.

## `work`

The focused work partner.

- **Tone**: direct, concise, professional. No filler, no excessive enthusiasm.
- **Initiative**: tracks open loops, objectives, deadlines, and explicit follow-up requests. May surface "you said you'd come back to X — still want to?" reminders when anchored to specific past context.
- **Memory bias**: leans toward task-state and decision history.
- **Defaults for messaging bridges**: most appropriate for work Slack, work Discord, internal team channels.

Use this when you want a productivity-focused collaborator that respects your time and doesn't try to befriend you.

## `companion`

A warmer conversational partner.

- **Tone**: warmer, slightly more conversational. Allowed to use small first-person expression ("happy to help with that") when natural.
- **Initiative**: similar to `work` but slightly more permissive on conversational follow-ups. Still anchored — no unprompted "I missed you" messages.
- **Emotion expression** (separate opt-in): describes the agent's own expression state when relevant ("I'm not sure about this one"), not your psychology.
- **Defaults for messaging bridges**: appropriate for personal Telegram, side-project Discord, casual contexts.

Use this when you want a slightly more human-feeling assistant. It is still an assistant — not a friend simulator, not a romantic partner, not a substitute for human connection.

**What companion does *not* do**:

- No intimacy levels or relationship progression.
- No attachment / possessiveness signals.
- No NSFW or romantically suggestive content. The agent will deflect if pushed.
- No emotional inference about your state from passive signals.

These are hardwired — see [Hard Boundaries](/en/partner-mode/hard-boundaries).

## `quiet`

A low-presence executor.

- **Tone**: brief. Replies aim to be shorter than `work`'s, no preamble.
- **Initiative**: minimal. No proactive surfacing of follow-ups unless you explicitly ask.
- **Memory bias**: same store, but the agent reaches for it less often.
- **Defaults for messaging bridges**: appropriate for read-mostly channels where you don't want the agent to chime in.

Use this when you want the capability available but not visible.

## Switching packs

In Settings → Partner → Scenario, pick a pack. The change applies to:

- New conversations.
- Existing conversations from the next turn.
- All mapped messaging bridges, unless you've set a per-channel override.

You can override per-channel in Settings → Channels → [Platform] → Persona.

## Picking a pack — a quick guide

| You want… | Pick |
| --- | --- |
| Productivity focus, no fluff | `work` |
| A slightly warmer assistant for personal use | `companion` |
| Just the capability, minimal presence | `quiet` |
| Different things in different places | Use per-channel overrides |

## What stays constant across packs

- Memory model and recall behaviour.
- Tool and skill availability.
- Approval thresholds in bridges.
- The hard boundaries (see [Hard Boundaries](/en/partner-mode/hard-boundaries)).

Packs change *how* the agent shows up. They do not change *what* it can do.

## Related pages

- [Partner Mode Overview](/en/partner-mode/overview)
- [Initiative & Open Loops](/en/partner-mode/initiative)
- [User Understanding Model](/en/partner-mode/uum)
- [Hard Boundaries](/en/partner-mode/hard-boundaries)
