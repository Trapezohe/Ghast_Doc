---
title: User Understanding Model (UUM)
description: A schema-constrained record of how you work — what's in it, what's not, and its priority.
---

# User Understanding Model (UUM)

The UUM is a profile-scoped summary of how you collaborate. Think of it as a structured page of notes the agent keeps about you, not a free-form psychological profile.

Crucially, the UUM is schema-constrained — it can only contain a fixed set of fields — and its priority is *below* explicit current-turn instructions. It's a soft layer of context, not a hard ruleset.

## What the UUM can record

The allowed fields, period:

| Field | What it captures |
| --- | --- |
| `work_state` | Current focus, projects, capacity. "Working on Ghast Desktop launch; light bandwidth this week." |
| `goal_hierarchy` | Long-term goals and how shorter goals roll up. Useful for prioritisation. |
| `values_and_taste` | Stated preferences. "Prefer concise replies", "dislikes corporate jargon", "values reproducibility over speed." |
| `decision_style` | How you make decisions. "Decides quickly, dislikes long pros/cons lists." |
| `boundaries` | What you've said you don't want. "Never auto-post to public X account." |
| `expertise_areas` | What you know well. Agent uses this to calibrate explanation depth. |
| `collaboration_relationship` | The shape of your working relationship with Ghast. "Treats me as a peer." |
| `do_not_push` | Topics or actions to back off on. "Don't suggest LinkedIn outreach unless I ask." |

That's the entire schema. Anything else the model might be tempted to record about you is **not** in the UUM.

## What is *not* in the UUM

By design, the UUM does not have fields for:

- Emotional state
- Mood inference
- Relationship intimacy
- Dependence / attachment levels
- Romantic preferences
- Compliance with the agent

Even if the model "infers" any of these from a conversation, there is no field for it to write to. That's the constraint.

## How UUM content gets written

Two paths:

| Path | Trigger |
| --- | --- |
| **Explicit** | You tell the agent something general about how you work; if it's a fit for a UUM field, it asks ("want me to remember this?") and writes only on confirmation. |
| **Inferred from confirmation** | After repeated explicit feedback in the same direction, the agent may consolidate into a UUM entry — again with explicit confirmation. |

The agent does **not** write to the UUM silently. Every change is logged in Settings → Partner → UUM with a timestamp and a reference to the conversation it came from.

## How UUM content gets used

UUM is included as soft context when the agent assembles a turn's prompt. It informs:

- Tone of replies.
- Defaults for tool selection.
- Whether to surface a follow-up.
- How deep an explanation should go.

It does **not** override:

- Explicit current-turn instructions ("forget what you know about me — answer like I'm new").
- System-level safety boundaries.
- Memory entries with conflicting newer information (the newer signal wins).
- Skill or workspace prompts.

If the UUM and current instructions conflict, the current turn wins.

## Editing and clearing

Settings → Partner → **UUM**:

- View every field with its current value and last-updated timestamp.
- Edit any field directly.
- Clear a field.
- Clear the entire UUM (resets to empty).
- Export to JSON for review.

There is no "view audit log" entry per turn; the agent's tendency to write to UUM is by design slow and conservative, so changes are rare and obvious.

## UUM and Memory

The UUM is a *summary*. The Memory store holds *episodes*. They are different layers:

- A UUM entry: "Prefers concise replies."
- Memory entries that led to it: "User said 'too long, just the answer' on March 5", "User said 'shorter please' on March 12", …

You can have memories the UUM hasn't been updated from yet. You can also clear UUM without clearing the underlying memories — useful if the inference was wrong.

## UUM and 0G Storage sync

If you opt in to memory sync, the UUM is included as part of that snapshot (it's stored adjacent to memories in the database). Same wallet-derived key; same end-to-end encryption.

## Related pages

- [Partner Mode Overview](/en/partner-mode/overview)
- [Scenario Packs](/en/partner-mode/scenario-packs)
- [Initiative & Open Loops](/en/partner-mode/initiative)
- [Hard Boundaries](/en/partner-mode/hard-boundaries)
- [Memory](/en/desktop/memory)
