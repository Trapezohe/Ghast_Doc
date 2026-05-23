---
title: Install & Pair
description: Two ways to load the extension into Chrome and connect it to the desktop client.
---

# Install & Pair

The Browser Relay extension ships bundled inside the Ghast AI Desktop app. To use it, you need to load it into Chrome and feed it the desktop's connection info.

## Option A — Let the desktop launch Chrome

The fastest path on macOS:

1. Open Ghast AI Desktop.
2. Go to **Settings → Integrations → Browser**.
3. Click **Launch Chrome with extension**.
4. Ghast spawns a new Chrome instance with `--load-extension=<bundled path>`.
5. The extension auto-connects to your running desktop client.

The Chrome window opened this way is a separate instance from any Chrome you already have open. You can use either.

If Chrome is not installed on your Mac, this option fails with a clear error. Install Chrome from `chrome.google.com` and retry.

## Option B — Load unpacked manually

If you want the extension in your existing Chrome (with your existing logins and bookmarks):

1. Open `chrome://extensions`.
2. Enable **Developer mode** (top right).
3. Click **Load unpacked**.
4. Browse to:
   ```
   /Applications/Ghast AI.app/Contents/Resources/chrome-extension/
   ```
5. Select the folder.

The extension's icon ("G" logo) now appears in your toolbar. Click it and the popup opens.

If you want to reload the extension after a desktop update, return to `chrome://extensions` and click the refresh icon on the extension card.

## Pair to the desktop

The extension and desktop must agree on:

- **Port** — the WebSocket port the desktop listens on (default `18189`).
- **Auth token** — a 24-byte random secret, per profile.

To configure:

1. In Ghast AI Desktop, go to **Settings → Integrations → Browser**.
2. Copy the **Port** and **Auth Token** values.
3. Click the extension's icon in Chrome → **Settings** (or right-click → Options).
4. Paste **Port** and **Auth Token** into the options page.
5. Click **Save**.

Within a second, the extension popup's connection indicator should go green. If it stays yellow or red, see [Troubleshooting: Browser Extension](/en/troubleshooting/browser-extension).

## The popup at a glance

Clicking the extension icon shows:

| Element | Meaning |
| --- | --- |
| **Status dot** | Green = connected; yellow = connecting; red = disconnected |
| **Server address** | Shows the configured `127.0.0.1:<port>` |
| **Attached tabs** | Tab IDs and titles the agent currently has debugger access to |
| **Attach Current Tab** | Manually attach the current tab's debugger |
| **Detach** (per tab) | Manually detach |
| **Reconnect** | Force-reconnect to the desktop server |
| **Settings** | Open the options page |

You don't usually need to touch Attach / Detach — the desktop client requests attachment on demand.

## Updating the extension

When you update Ghast AI Desktop, the bundled extension may also update. If you loaded it manually (Option B), reload it in `chrome://extensions`. If you used the auto-launch path (Option A), the next launch picks up the new version automatically.

## Removing the extension

Right-click the icon in Chrome → **Remove from Chrome**. Confirms in a dialog. This does not affect any desktop state.

If you want to forget the pairing on the desktop side as well, rotate the token in Settings → Integrations → Browser (see [Security & Token Rotation](/en/browser-extension/security)).

## Related pages

- [Browser Extension Overview](/en/browser-extension/overview)
- [What the Agent Can Do](/en/browser-extension/capabilities)
- [Security & Token Rotation](/en/browser-extension/security)
- [Troubleshooting: Browser Extension](/en/troubleshooting/browser-extension)
