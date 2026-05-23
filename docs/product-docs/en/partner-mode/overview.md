---
title: Partner Mode Overview
description: What Partner Mode is — a long-term collaboration layer with explicit safety boundaries.
---

# Partner Mode Overview

Partner Mode is the long-term collaboration layer in Ghast AI. It calibrates how the agent shows up over time: its tone, when it offers help unprompted, what it remembers about how you work, and how it talks to you across channels.

It is **not** a relationship product. It does not score intimacy, infer your emotional state, or use guilt to drive engagement. The implementation strictly follows the boundaries laid out in [Hard Boundaries](/en/partner-mode/hard-boundaries).

## What Partner Mode adds

When you enable Partner Mode, three things become available:

- **Scenario packs** — `work`, `companion`, `quiet` — that set the agent's default tone and initiative style.
- **An initiative engine** — the agent can occasionally surface follow-ups, open-loop reminders, and review suggestions when anchored to real, observable context.
- **A User Understanding Model (UUM)** — a profile-scoped, schema-constrained record of how you collaborate (preferences, boundaries, decision style) that the agent uses to calibrate its responses.

You can enable any subset. You can also turn the whole thing off and Ghast still works fine as a regular chat assistant.

## Where you find it

Settings → **Partner**. A single master toggle gates everything; nested toggles let you enable each piece.

Across the rest of the app, Partner Mode is visible in:

- Tone adjustments in chat responses.
- Optional "Today" / "Open loops" cards on the home view.
- Per-channel persona hints in messaging bridges.
- Periodic transparency cards that show what Partner Mode is currently doing.

## The three scenario packs

| Pack | When to pick it |
| --- | --- |
| **`work`** | A focused work partner. Tracks open loops, objectives, deadlines, explicit follow-up needs. Conservative tone. |
| **`companion`** | A warmer conversational partner. Optionally pairs with a lightweight emotion-expression state (off by default — separate opt-in). Not an intimacy product. |
| **`quiet`** | Low-presence executor. Minimal initiative, compact replies. Defaults to "do the task, nothing extra." |

Switching packs changes default tone and initiative thresholds. It does not unlock different fundamental capabilities. All packs respect the same hard boundaries.

## What you can configure

- Master enable / disable.
- Scenario pack.
- Initiative — what triggers proactive surfaces, how often.
- Emotion expression — separately opt-in (and only meaningful under `companion`).
- Per-channel overrides — e.g. `work` in Slack, `quiet` in WeChat.
- Privacy controls — what the UUM can write to and read from.
- Transparency view — a live readout of what Partner Mode is currently doing.

## Privacy posture

Partner Mode is local-first. The UUM lives in your SQLite database. It syncs to 0G Storage only if you've opted in to the relevant memory category. The model never sends Partner Mode state to a remote service except as context for inference calls you already initiated.

## When to enable

Reasonable triggers:

- You want the agent to remember how you collaborate without re-explaining every session.
- You want occasional, anchored follow-ups instead of "fire and forget" answers.
- You want different personas for different channels.

If your use is purely one-off questions, you don't need Partner Mode.

## Related pages

- [Scenario Packs](/en/partner-mode/scenario-packs)
- [Initiative & Open Loops](/en/partner-mode/initiative)
- [User Understanding Model](/en/partner-mode/uum)
- [Hard Boundaries](/en/partner-mode/hard-boundaries)
- [Security: Partner Mode Boundary](/en/security/partner-mode-boundary)
