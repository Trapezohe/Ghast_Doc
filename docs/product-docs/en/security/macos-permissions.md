---
title: macOS Permissions (Security View)
description: What each macOS permission unlocks for Ghast, and the threat model implications.
---

# macOS Permissions (Security View)

This is the security-facing summary of the macOS permissions Ghast may request. For the operational "how to grant them" walkthrough, see [Computer Use: macOS Permissions](/en/computer-use/macos-permissions).

## Permission catalogue

| Permission | What Ghast does with it | Threat if compromised |
| --- | --- | --- |
| **Accessibility** | The Swift daemon walks AX trees and posts CGEvents to drive macOS apps | Full UI control over your Mac (within the app blocklist) |
| **Screen Recording** | The daemon takes pixel-fidelity screenshots of any app | Exposure of any on-screen content during a screenshot call |
| **AppleEvents (per app)** | Specific app adapters (Calendar, Mail, Music) drive via AppleScript | App-specific scripting (e.g. Calendar event creation) |
| **Microphone** | Voice input via Whisper | Audio capture during recording sessions |

Ghast does **not** request:

- Camera
- Contacts
- Calendars (for reading — the Calendar adapter writes via AppleEvent)
- Reminders
- Photos
- Full Disk Access

If you ever see a prompt for one of these, that's not the official build. Verify the DMG hash.

## Defense-in-depth on top of macOS permissions

The Accessibility permission is a powerful grant. The daemon layers extra constraints on top:

| Layer | What it adds |
| --- | --- |
| Per-app approval gate (UI) | First modifying action against a new app surfaces a modal. |
| Daemon hard blocklist | Refuses certain apps (password managers, sensitive system tools) regardless of UI approval. |
| Event delivery defaults | `preserveFocus` mode — daemon "draws" cursor without taking your real one. |
| Action shape constraints | Calendar writes need an explicit `allow_calendar_write=true`. Drags need start+end coords. |
| Action logging | Every action recorded in the local Action Log, with approval state and result. |

## Revoking

Any permission is revocable in System Settings → Privacy & Security. After revoking:

- Accessibility → all Computer Use calls return `permission_denied` until re-granted.
- Screen Recording → `skyshot` returns partial results or typed errors.
- AppleEvents (per app) → that adapter falls back to generic click/type or fails.
- Microphone → voice input fails; text input still works.

Settings → Computer Use shows the live state of each permission with a "Reconfirm" deep link.

## Managed Macs

For Macs administered via MDM, the IT team must pre-approve Accessibility and Screen Recording via a PPPC configuration profile. Without that, you cannot grant the permissions yourself. The bundle ID to whitelist is `ai.ghast.desktop`.

## What the permissions do *not* let Ghast do

- They do not extend to incognito Chrome tabs (those are the browser extension's concern; see [Browser Extension: Capabilities](/en/browser-extension/capabilities)).
- They do not survive across user accounts on the same Mac. Each macOS user must grant separately.
- They do not give Ghast the ability to escalate to root.

## Related pages

- [Computer Use: macOS Permissions](/en/computer-use/macos-permissions)
- [Computer Use Boundary](/en/security/computer-use-boundary)
- [Security Overview](/en/security/overview)
