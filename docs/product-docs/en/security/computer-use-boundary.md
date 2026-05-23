---
title: Computer Use Boundary
description: The five layers of safety between agent intent and a click landing on your Mac.
---

# Computer Use Boundary

This is the security-facing summary of the Computer Use safety stack. For the operational and per-action details, see [Computer Use: Safety Boundaries](/en/computer-use/safety-boundaries).

## The five layers

| Layer | What it does |
| --- | --- |
| 1. macOS Accessibility permission | Without it, the daemon cannot act on any app at all. |
| 2. Per-app approval gate (UI) | First modifying action on a new app surfaces a modal. Allow Once / Always / Deny. |
| 3. Daemon hard blocklist (`CUPolicy`) | Refuses certain bundles (password managers, sensitive utilities) regardless of UI approval. |
| 4. Action shape constraints | Some actions (Calendar write, drag) require additional explicit parameters. |
| 5. Event delivery model | Default `preserveFocus` so the daemon does not steal your real cursor / keyboard. |

The layers are intentionally redundant. Any one of them failing (e.g. a UI bug that auto-grants approvals, or an exploit that bypasses the gate) does not by itself result in a click landing on a sensitive app.

## What the daemon protects

| Asset | Protection |
| --- | --- |
| Other apps' UI | Approval gate, hard blocklist |
| Your real cursor / keyboard | `preserveFocus` event delivery |
| Sensitive system tools | Hard blocklist |
| Calendar / Mail / system data write | Action shape constraints (`allow_calendar_write=true`, etc.) |
| Action history | Per-profile encrypted action log |

## What the daemon does *not* protect

- A user-approved Always-allow on a permissive app. That's the user's call.
- macOS Accessibility bugs.
- A model that's been social-engineered via untrusted content (a screenshot, a tool result) into asking for an action you wouldn't have approved.

For the last item, the per-app gate is the user's chance to catch surprising actions. The action log gives an after-the-fact view.

## The role of the action log

Every gated action — granted or denied — lands in the Computer Use Action Log:

- Timestamp
- Action type
- Target bundle ID
- Approval state
- Outcome

The log is local, per-profile, encrypted in the same SQLite database as the rest of your data. It is not synced unless you've opted in to the relevant category.

Use the log to:

- Spot patterns ("the agent has been clicking around in Mail a lot lately — was that all me?").
- Audit specific incidents.
- Export for compliance review.

## Bypass surfaces (controlled)

A few mechanisms exist that *look like* they bypass the gate but are bounded:

| Mechanism | Bound |
| --- | --- |
| Read-only actions skip the gate | They cannot modify state — only read AX trees and capture screenshots |
| Already-approved (Always) apps skip the per-action prompt | Limited to the approved action category |
| `dry_run` flag on Calendar / Mail compose | Performs validation only; no side effect; still logged |
| `force` flag on certain advanced actions | Not exposed in default skills; would require explicit code in a custom skill |

Each is a calibrated trade-off between safety and friction. None grants blanket bypass.

## What changes when you enable Strict Approval

Settings → Computer Use → **Strict Approval** changes Allow Always to Allow Once. Every modifying action re-prompts. The blocklist, action shape constraints, and event delivery model are unchanged. The action log records the per-action approvals.

## Threat model

- **Approved apps drift over time** — you allowed Always last month, but the agent's behaviour has since evolved. The action log lets you re-examine; revoke in Settings if needed.
- **Compromised model** asking for action. Mitigated by the per-app gate (you see what's being attempted) and the hard blocklist (you can't approve into a password manager even if you wanted to via the UI).
- **Compromised local desktop process**. With both the gate code and the daemon code subverted, this stack does not protect you. That is a much stronger threat than what's covered here.

## Related pages

- [Computer Use: Safety Boundaries](/en/computer-use/safety-boundaries)
- [Computer Use: Approval Gate](/en/computer-use/approval-gate)
- [macOS Permissions](/en/security/macos-permissions)
- [Security Overview](/en/security/overview)
