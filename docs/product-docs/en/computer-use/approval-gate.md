---
title: Per-App Approval Gate
description: How the per-app approval flow works, what "Allow Once" vs "Allow Always" actually do.
---

# Per-App Approval Gate

Granting Accessibility to Ghast lets the daemon *technically* drive any app. The approval gate is the layer on top that says: "even if the daemon can do it, we don't until you say yes for *this app*."

The gate sits in the TypeScript layer (`computer-use-approval-gate.ts`), not in the Swift daemon. The daemon enforces a separate hard blocklist below it — see [Safety Boundaries](/en/computer-use/safety-boundaries).

## When the gate triggers

The gate triggers on **mutating actions** — actions that change state in another app:

- `click`
- `type`
- `press_key`
- `drag`
- `set_value`
- AppleScript-based intent dispatch (Calendar create, Mail send, etc.)

Read-only actions skip the gate entirely:

- `skyshot`
- `read`
- `permissions`
- `list_*`

This means screenshotting and inspecting are always free; modifying is always gated.

## What the dialog looks like

When a mutating action targets a new app:

1. Composer surfaces a modal: **"Allow Ghast to [click / type / drag] in [AppName]?"**
2. Three options: **Allow Once**, **Allow Always**, **Deny**.
3. If you do nothing for 30 minutes, the request times out and is treated as Deny.

## Allow Once vs Allow Always

| Choice | Effect |
| --- | --- |
| **Allow Once** | This single action proceeds. The next modifying action against the same app triggers a fresh gate. |
| **Allow Always** | The action proceeds **and** the app is added to the per-profile approval cache. Subsequent modifying actions against that app go through silently. |
| **Deny** | The action returns a typed error. The next attempt re-triggers the gate. |

The cache is per-profile, not global. Switching profiles re-empties the gate, so you reconfirm. You can clear or revoke individual app approvals in Settings → Computer Use.

## When Allow Always still re-prompts

Even with Allow Always, the gate will re-trigger in some cases:

- The action category changes (you allowed click; now the agent wants to drag).
- The bundle ID changes (e.g. some apps relaunch under a slightly different bundle).
- You explicitly clear the approval in Settings.
- The app is later added to the daemon-level blocklist (rare — typically only via an update).

## Strict Approval mode

Settings → Computer Use → **Strict Approval** changes the cache behaviour: Allow Always becomes Allow Once. Every modifying action re-prompts.

Reasonable triggers for Strict mode:

- You want to vet every change while you learn the agent's behaviour.
- You're recording or debugging.
- You're operating sensitive flows where any drift is a risk.

## Read-only Picture-in-Picture

Settings → Computer Use → **PIP Monitor** opens a small floating window that mirrors what the daemon is doing. It does not block any action; it's purely for observability. Useful when you're approving Always for the first time and want to watch what's actually executed.

## What happens on deny

A denied action returns `approval_denied` to the agent. The agent typically:

- Reports back ("I can't change Mail without your approval — want to allow it?")
- Proposes an alternative ("I can compose a draft as a `dry_run` instead.")
- Or stops and waits.

You can re-prompt by re-asking, or pre-approve via Settings.

## Action log

Every gated action is recorded in the Computer Use action log (Settings → Computer Use → Action Log) with:

- Timestamp
- Action type
- Target bundle ID
- Approval state (granted once / granted always / denied / expired)
- Result (success / error code)

The log is local to the profile and not synced. You can export it to JSON for review.

## Related pages

- [Computer Use Overview](/en/computer-use/overview)
- [macOS Permissions](/en/computer-use/macos-permissions)
- [Built-in App Playbooks](/en/computer-use/built-in-playbooks)
- [Safety Boundaries](/en/computer-use/safety-boundaries)
- [Security: Computer Use Boundary](/en/security/computer-use-boundary)
