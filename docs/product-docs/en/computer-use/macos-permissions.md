---
title: macOS Permissions
description: The four macOS permissions Computer Use may ask for, and how to grant them.
---

# macOS Permissions

Computer Use needs explicit macOS permissions to do its job. None are requested until the first time a feature needs them.

## The four permissions

| Permission | What it lets the daemon do | When it's asked |
| --- | --- | --- |
| **Accessibility** | Read the AX tree of any app, click and type into other windows | First time any Computer Use action runs |
| **Screen Recording** | Capture pixel-accurate screenshots of other apps | First time `skyshot` runs |
| **AppleEvents (Automation)** | Drive specific apps via AppleScript (Mail, Calendar, Music adapters) | First time one of those adapters runs |
| **Microphone** | Listen for voice input (not a Computer Use feature per se, but commonly enabled at the same time) | First time you press the mic in the composer |

The daemon does **not** ask for camera, full disk access, contacts, calendars (for reading), or any other privacy-sensitive permission. Computer Use does not need them.

## Granting Accessibility

This is the most important one. Without it the daemon can do nothing.

1. The first Computer Use action you try will show a "Permission required" card in chat.
2. The card has a button **Open System Settings**.
3. macOS opens to **Privacy & Security → Accessibility**.
4. Ghast AI is in the list with its toggle off. Flip it on.
5. macOS asks for your password / Touch ID to confirm.
6. Return to Ghast and click **Retry** on the action card.

If you skip the system-settings deep-link, you can find it at:

```
System Settings → Privacy & Security → Accessibility → +
```

…and add `Applications/Ghast AI.app` manually.

## Granting Screen Recording

Same flow but in **Privacy & Security → Screen & System Audio Recording**. Required only for `skyshot` and any tool that returns a screenshot. Without it, AX-only tools (click by AX selector, type into the focused field) still work.

## Granting AppleEvents

When the agent uses an AppleEvent-based adapter (Mail compose, Calendar create_event, Music control), macOS will prompt with:

> "Ghast AI" wants access to control "&lt;App&gt;".

Click **OK**. The grant is per-app — granting access to control Mail does not grant access to control Calendar.

You can review and revoke individual AppleEvent permissions in **Privacy & Security → Automation**.

## Granting Microphone

Standard macOS prompt the first time you tap the mic in the composer. Same revoke path.

## Revoking later

All permissions are revokable at any time in System Settings → Privacy & Security. After revoking:

- Accessibility revoked → all Computer Use actions fail with `permission_denied` until re-granted.
- Screen Recording revoked → `skyshot` returns a partial result (window list without pixel data) or a typed error.
- AppleEvents per-app revoked → the corresponding adapter falls back to generic click/type if possible, otherwise fails.

The desktop client surfaces permission state in Settings → Computer Use, with a shield icon per permission and a "Reconfirm" button that re-deep-links to the right system settings page.

## What if I'm on a managed Mac?

Some managed Macs (MDM-controlled) require an admin to pre-approve Accessibility / Screen Recording via a configuration profile. If your IT department has not done that, you will not be able to grant the permissions yourself. Ask them to add `ai.ghast.desktop` to the PPPC payload.

## Related pages

- [Computer Use Overview](/en/computer-use/overview)
- [Per-App Approval Gate](/en/computer-use/approval-gate)
- [Troubleshooting: Computer Use Permissions](/en/troubleshooting/computer-use-permissions)
