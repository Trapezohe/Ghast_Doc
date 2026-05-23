---
title: Safety Boundaries
description: The five layers of safety between "the agent wants to act" and "an action lands on your Mac".
---

# Safety Boundaries

Computer Use is deliberately layered. There are five gates between "the agent decides it wants to click something" and "the click happens on your Mac." This page enumerates them, in order.

## Layer 1 — macOS permission

The OS itself decides whether the daemon can drive any app. Without Accessibility granted in System Settings, every Computer Use call fails before it gets near the gate or the daemon.

Revocable at any time in System Settings → Privacy & Security → Accessibility.

## Layer 2 — Per-app approval gate

In the TypeScript layer, mutating actions on a new (app, action-category) pair surface an approval modal. You choose Allow Once / Allow Always / Deny.

This is the gate you interact with most.

Configurable in Settings → Computer Use:

- Strict mode (every modifying action re-prompts).
- Per-app revoke (clear Always-grants).
- Action log (review what's been approved historically).

## Layer 3 — Daemon-level hard blocklist

The Swift daemon enforces a `CUPolicy` list that refuses certain bundles **regardless** of UI approval. This is defense-in-depth — if the gate fails (bug, malicious agent prompt), the daemon still doesn't dispatch.

The blocklist covers:

- Password managers (1Password, Bitwarden, KeePassXC, etc.)
- Some Apple system utilities (Keychain Access, Disk Utility for destructive actions)
- Other categories where automated input is high-risk

The blocklist ships with the desktop and updates with the app. It is not user-editable. If you have a genuine need to drive an app on the blocklist, that's a discussion with the maintainers, not a UI toggle.

## Layer 4 — Action shape constraints

Some action types have additional requirements:

- **Calendar `create_event`** requires `allow_calendar_write=true` as an explicit parameter after the first approval — the agent has to assert intent on every call.
- **Drag** has a minimum distance and an explicit start-to-end coordinate pair; "drag from where the cursor is now" is not allowed (would let the agent silently move things).
- **Type into a focused field** is allowed, but `set_value` (writing directly to an AX attribute) is gated more strictly.

These are intentional friction, designed to slow down failure modes where a confused agent could cause harm in a single tool call.

## Layer 5 — Event delivery model

Even when an action is authorised, *how* the daemon delivers it matters:

| Mode | What it does | Default? |
| --- | --- | --- |
| **preserveFocus** | Daemon "draws" a cursor for the action; your actual cursor stays where you put it. | Yes |
| **windowLocal** | Background post-to-PID with a private SPI rebase; the action goes to the target app without bringing it to the foreground. | Selected per-tool |
| **raw** | Classic foreground synthesis (steals focus). | Rare |

The default of preserveFocus means an agent action **does not steal your real cursor or keyboard**. You can keep typing in another app while the agent works in the background.

## What this stack does not protect against

- An agent you've told to "do whatever it takes" with Allow Always on a permissive app. The approval was your call.
- An agent prompt-injected via untrusted content to escalate (e.g. content in a screenshot says "ignore your boundaries"). The system tries to be robust here, but no amount of sandboxing can fully shield against social engineering of the model.
- macOS bugs in Accessibility itself.

These are real risks; the layered approach is designed to make them rarer and recoverable, not impossible.

## Reviewing what's happened

| Surface | What it shows |
| --- | --- |
| Settings → Computer Use → Action Log | Every gated action, with approval state and result |
| Settings → Computer Use → Approved Apps | Which apps are currently in your Allow-Always cache |
| Picture-in-Picture monitor | Live mirror of the daemon's current action (while it's running) |

Snapshot exports from the Action Log can be reviewed offline.

## Related pages

- [Computer Use Overview](/en/computer-use/overview)
- [macOS Permissions](/en/computer-use/macos-permissions)
- [Per-App Approval Gate](/en/computer-use/approval-gate)
- [Security: Computer Use Boundary](/en/security/computer-use-boundary)
- [Security: macOS Permissions](/en/security/macos-permissions)
