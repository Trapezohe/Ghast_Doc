---
title: Computer Use Permissions
description: Diagnosing Accessibility, Screen Recording, and per-app approval issues.
---

# Computer Use Permissions

By symptom.

## "Permission required" card on every action

| Likely cause | Action |
| --- | --- |
| Accessibility not granted | System Settings → Privacy & Security → Accessibility → enable Ghast AI |
| Accessibility granted to an old build of Ghast | Remove old Ghast from the list and re-add the current Applications copy |
| App copied or relocated after granting | macOS Accessibility tracks by exact file location; re-add at the new path |

## Actions silently do nothing

| Likely cause | Action |
| --- | --- |
| Target app is in the daemon hard blocklist | Cannot be overridden via UI. If the action is genuinely needed, raise with maintainers. |
| Approval not granted for this action category on this app | Look for the approval modal — it may have appeared on another desktop |
| Daemon crashed | Quit Ghast fully, relaunch |

## `skyshot` returns no pixels

| Likely cause | Action |
| --- | --- |
| Screen Recording not granted | System Settings → Privacy & Security → Screen & System Audio Recording → enable Ghast |
| App refuses recording (some protected apps) | AX tree still returned; pixel data is blocked at the OS level |

## AppleEvents prompt repeats every time

| Likely cause | Action |
| --- | --- |
| You denied a previous prompt | System Settings → Privacy & Security → Automation → grant Ghast control of the app |
| App bundle changed | Re-grant; macOS tracks the per-app permission by bundle identifier |

## Approval modal never appears

| Likely cause | Action |
| --- | --- |
| Action category was already Allow Always | Working as designed — check Settings → Computer Use → Approved Apps |
| Read-only action | Read actions skip the gate by design |
| Modal queued behind another window | Bring Ghast to front (Cmd-Tab) |

## "Approval denied" repeatedly

| Likely cause | Action |
| --- | --- |
| Earlier deny is cached briefly | Re-trigger the action; the gate re-prompts |
| App in the daemon blocklist | Cannot proceed via UI |

## Strict Approval setting unexpectedly prompts every time

| Likely cause | Action |
| --- | --- |
| Strict Approval is on | This is intended — Allow Always behaves like Allow Once. Disable in Settings if you don't want this. |

## Picture-in-Picture monitor stays blank

| Likely cause | Action |
| --- | --- |
| No action is currently running | PIP only shows during active daemon operations |
| Screen Recording not granted | Same as above for `skyshot` |

## Related pages

- [Computer Use Overview](/en/computer-use/overview)
- [Computer Use: macOS Permissions](/en/computer-use/macos-permissions)
- [Computer Use: Approval Gate](/en/computer-use/approval-gate)
- [Computer Use: Safety Boundaries](/en/computer-use/safety-boundaries)
