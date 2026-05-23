---
title: Initiative & Open Loops
description: When the agent surfaces something on its own — and the rules that constrain it.
---

# Initiative & Open Loops

Most of the time, the agent is reactive: you message, it responds. Initiative is the layer that lets the agent occasionally surface something on its own — a reminder, a follow-up, a review suggestion — under tight constraints.

The constraints are the point. The whole reason this is a separate, named layer with rules is so the agent can't drift into nagging or manipulative engagement loops.

## What it can surface

Three categories of proactive surface:

| Type | Example |
| --- | --- |
| **Open-loop followup** | "You said you'd come back to the migration draft — still want to?" Anchored to a concrete prior commitment in conversation. |
| **Today / context-anchored reminder** | "Mail has a draft you started this morning — want to finish it?" Anchored to Activity Recorder data. |
| **Review prompt** | "I made these three edits to the file — quick review?" After the agent has done structural work. |

Each surface comes with the specific anchor in metadata, visible to you. You can always see *why* the agent is asking.

## What it cannot surface

Hard-no by the runtime, regardless of scenario pack:

- Generic check-ins ("how's it going?")
- "I missed you" / "you've been quiet" pressure
- Unanchored prompts to engage
- Prompts based on inferred emotional state
- Prompts based on passive signals (typing speed, screen dwell, app-switching cadence)
- Anything that uses guilt, debt, or "you owe me a response"

These are wired into the [Hard Boundaries](/en/partner-mode/hard-boundaries) and the surface generator. The agent simply does not produce them.

## How you configure initiative

Settings → Partner → **Initiative**:

| Setting | Effect |
| --- | --- |
| **Master toggle** | Initiative on / off. Off → agent is purely reactive. |
| **Channels** | Where surfaces can appear (main window, sidebar, messaging bridges). Default: main window only. |
| **Open-loop followup** | Enable the open-loop type specifically. Has a sub-toggle: "require explicit open loop" (only surfaces if you said something like "let me get back to this"). |
| **Today reminders** | Enable activity-anchored Today reminders. Requires Activity Recorder. |
| **Frequency caps** | Maximum surfaces per day, per channel. Default low. |
| **Quiet hours** | Time windows where no initiative ever surfaces. |

The defaults are deliberately conservative — initiative is opt-in, and even after opting in, individual channels are off until you turn them on.

## Where surfaces appear

In the main window:

- The Home view shows a "Today" / "Open Loops" panel with the current surfaces.
- Each surface has the anchor visible ("you said this on Tuesday" with a link to the conversation).
- Dismissing a surface is one click.

In messaging bridges:

- Surfaces are scoped per channel. If you've enabled them for a Telegram chat, the agent may post a follow-up there.
- They go through the approval flow (see [Approval Flow](/en/remote-channels/approval-flow)). You can edit-and-send or cancel.

## Auto-apply review

A separate sub-feature: when the agent has done a multi-step task, it can be configured to auto-apply a review pass (re-read its own work, point out issues, suggest fixes) before reporting back. This is reactive, not proactive — it happens inside the turn — but it's part of the Initiative settings because it changes how Ghast "shows up."

## Transparency

Settings → Partner → **Transparency** shows a live readout: which initiative rules are active, recent surfaces, what's queued, what was dismissed. The same info is available to the agent via `/api/partner-mode/status` so the agent itself can answer "what are you set to do right now?" if you ask.

## Related pages

- [Partner Mode Overview](/en/partner-mode/overview)
- [Scenario Packs](/en/partner-mode/scenario-packs)
- [User Understanding Model](/en/partner-mode/uum)
- [Hard Boundaries](/en/partner-mode/hard-boundaries)
- [Activity Recorder](/en/desktop/activity-recorder)
