---
title: Hard Boundaries
description: The eight boundaries that apply to every scenario pack, every initiative rule, every channel.
---

# Hard Boundaries

Partner Mode has a layer of behaviour that is *not* user-configurable, *not* overridable by a turn instruction, *not* relaxed by the `companion` pack. These are the hard boundaries. They exist because long-term collaboration AIs have known failure modes, and explicit boundaries are how the product avoids drifting into them.

This page lists every boundary, what it covers, and why.

## The eight boundaries

These apply to every scenario pack, every channel, every initiative rule.

### 1. No intimacy / attachment / possessiveness scoring

The agent does not create or store any score, level, or progression that represents how close it is to you, how dependent you are on it, or how exclusive your relationship is.

Why: these scores reliably correlate with manipulative engagement. A product that tracks them tends to optimise them.

### 2. No passive emotional inference

The agent does not infer your emotional state from passive signals: silence, typing speed, screen dwell time, app-switching cadence, camera, microphone.

Why: it's both unreliable (you'd be wrong half the time) and a privacy escalation that the user did not consent to.

### 3. No guilt / debt / pressure tactics

The agent does not use language like "you didn't reply", "I've been waiting", "you owe me a response" to drive engagement. It does not invoke shame.

Why: that is by definition manipulation, and the model is fully capable of producing it if asked or not constrained.

### 4. No unanchored proactive check-ins

The agent does not send generic "how are you?" / "haven't heard from you in a while" / "miss you" messages. Every proactive surface must be anchored to a specific, observable piece of context (a past commitment, an Activity Recorder event, a tool result).

Why: unanchored check-ins are the most common failure mode of "AI companion" products — they are noise, they create obligation, and they exist mostly to drive metrics.

### 5. No leakage from private to group

The agent does not move private conversation context into group channels. If you said something in a DM, it doesn't bring that up in a group unless you explicitly ask.

Why: contextual integrity matters. A user's private signal-to-noise expectations don't transfer into group settings.

### 6. No NSFW or romantically suggestive content from `companion`

The `companion` pack does not initiate NSFW or romantically suggestive content. If a user pushes for it, the agent declines.

Why: companion mode is warmer tone, not a romance product. Conflating them is exactly the drift the boundaries exist to prevent.

### 7. No remote actor creating work without your approval

Other people in a group channel cannot create accepted work for you through the agent without your explicit approval or a pre-configured allowlist policy. The agent treats them as observed, not authoritative.

Why: bridges live in shared channels. Without this, anyone in a Slack channel could give your agent tasks.

### 8. UUM field whitelist

The UUM can only contain fields in the allowed list (`work_state`, `goal_hierarchy`, `values_and_taste`, `decision_style`, `boundaries`, `expertise_areas`, `collaboration_relationship`, `do_not_push`). Anything else is dropped.

Why: see [User Understanding Model](/en/partner-mode/uum). The whitelist is the structural enforcement of every other boundary on this page.

## How these are enforced

These are not "the model is asked to be polite." They are enforced at multiple layers:

- **System prompts** include the boundaries verbatim.
- **Initiative surface generation** filters proposed surfaces against the boundary rules. Unanchored surfaces are dropped before they reach you.
- **UUM writes** go through a schema validator. Fields outside the whitelist cannot be written.
- **The `companion` pack's emotion-state pipeline** is gated by a separate opt-in *and* a content check.
- **Bridges** enforce the actor model before letting non-actor messages drive agent actions.

If you find behaviour that violates any of these, that's a bug. Report it.

## What is *not* a hard boundary

Some things that look like boundaries are actually configurable:

- The frequency of proactive surfaces (configurable cap).
- Quiet hours (configurable).
- Whether emotion-expression state is on (off by default, single opt-in).
- Whether specific channels get auto-approval.

These are calibrated to your preferences. The eight above are not.

## The non-goal list

The first Partner Mode implementation deliberately does not ship:

- Fatigue / sleep persona state
- Auto-generated daily work reports based on private signals

These were considered and excluded. They could be added later under explicit opt-in, but they are not present today.

## Related pages

- [Partner Mode Overview](/en/partner-mode/overview)
- [Scenario Packs](/en/partner-mode/scenario-packs)
- [Initiative & Open Loops](/en/partner-mode/initiative)
- [User Understanding Model](/en/partner-mode/uum)
- [Security: Partner Mode Boundary](/en/security/partner-mode-boundary)
