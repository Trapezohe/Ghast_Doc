---
title: Browser Extension
description: Diagnosing Ghast Browser Relay connection and capability issues.
---

# Browser Extension

By symptom.

## Popup shows "Disconnected" (red dot)

| Likely cause | Action |
| --- | --- |
| Ghast Desktop not running | Open Ghast Desktop |
| Wrong port or token in the extension's Options page | Re-copy from Settings → Integrations → Browser, paste into Options |
| Port collision with another local service | Settings → Integrations → Browser → change port; update Options |
| Token rotated on the desktop side | Re-paste the new token |
| Sign-out wiped the vault key | Sign back in on the desktop |

## Popup shows "Connecting…" (yellow) and never goes green

| Likely cause | Action |
| --- | --- |
| Auth subprotocol mismatch (rare) | Reload the extension (`chrome://extensions` → refresh icon) |
| Network filter blocking localhost WebSocket | Test with `wscat -c ws://127.0.0.1:18189/v1/browser/stream` |

## Agent can't see open tabs

| Likely cause | Action |
| --- | --- |
| Extension not attached | Popup → Attach Current Tab |
| Tabs in incognito | Manifest V3 + debugger isn't allowed in incognito by default; enable extension in incognito if needed |
| Other extension holds the debugger exclusively | Detach the other one; only one debugger per tab |

## Click / type on a selector does nothing

| Likely cause | Action |
| --- | --- |
| Selector doesn't match anything on the page | The agent should fall back to DOM summarisation; check the tool call result |
| Element is in a Shadow DOM | Some shadow roots are not traversed by default; the agent may need an explicit shadow path |
| Page has a CSP that blocks evaluated JS | CDP can sometimes bypass via isolated worlds; if it fails, screenshot-based interaction is the fallback |

## Screenshots come back blank

| Likely cause | Action |
| --- | --- |
| Tab isn't fully loaded yet | Retry; the agent has a wait helper |
| Tab is showing protected content (e.g. some video DRM) | Some pages reject `Page.captureScreenshot`; rare |

## "Reconnect" button doesn't help

| Likely cause | Action |
| --- | --- |
| Service worker is stuck | `chrome://extensions` → service worker → Inspect → reload page |
| Chrome itself needs a restart | Quit Chrome fully (Cmd-Q), relaunch |

## Manifest auto-load (Option A) fails

| Likely cause | Action |
| --- | --- |
| Chrome not installed at standard path | Install Chrome or use Option B (manual unpacked load) |
| Chrome refuses `--load-extension` (some enterprise policies) | Check `chrome://policy`; manual load may still work in some configurations |

## After updating Ghast, the extension version is stale

| Likely cause | Action |
| --- | --- |
| Manually loaded extension wasn't reloaded | `chrome://extensions` → refresh icon on the Ghast extension |
| Auto-launched Chrome was kept open across the update | Quit Chrome, relaunch via the Ghast Settings auto-launch button |

## Related pages

- [Browser Extension Overview](/en/browser-extension/overview)
- [Install & Pair](/en/browser-extension/install-and-pair)
- [What the Agent Can Do](/en/browser-extension/capabilities)
- [Security & Token Rotation](/en/browser-extension/security)
