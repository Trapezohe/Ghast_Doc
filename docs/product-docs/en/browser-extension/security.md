---
title: Security & Token Rotation
description: How the extension authenticates, where the token lives, and how to rotate it.
---

# Security & Token Rotation

The Browser Relay sits between a desktop client that holds your data and a Chrome browser that holds your sessions. Its trust model has to handle: "someone else on this machine shouldn't be able to use my browser through my desktop."

## What the extension can see

The extension itself is a small piece of software with a deliberately narrow purpose. It can:

- Connect to a WebSocket on `127.0.0.1` (only — host_permissions are restricted to localhost).
- Drive Chrome tabs via the `chrome.tabs` and `chrome.debugger` APIs.

It cannot:

- Talk to any remote server. There is no outbound network from the extension itself.
- Persist your browsing history or cookies (no `cookies` permission).
- Touch other extensions.
- Run when you're not signed into Ghast Desktop (no token, no connection).

The full manifest permissions are:

```
debugger        — attach to tabs via CDP
tabs            — full tab lifecycle
activeTab       — access active tab metadata
storage         — store port and token configuration
alarms          — schedule reconnect keep-alive
```

Plus host permissions:

```
<all_urls>          — CDP needs to attach to any URL
http://127.0.0.1/*  — localhost only
http://localhost/*  — localhost fallback
```

## How auth works

Every WebSocket connection between the extension and the desktop carries two subprotocol headers:

- `ghast-browser.v1` — protocol version selector
- `ghast-token.<TOKEN>` — auth token

The desktop server validates both before accepting a connection. Mismatch → connection rejected with WebSocket close code `4001`.

The token is:

- 24 bytes from `crypto.getRandomValues`.
- Stored encrypted in the profile vault at `live-browser.json`.
- Re-generated per profile (each profile has its own).
- Never broadcast.

## Where you see the token

In Ghast AI Desktop: **Settings → Integrations → Browser**. The token is shown masked by default; click the eye icon to reveal. Copy it into the extension's options page.

In the extension's options page: **Options → Auth Token**. Stored in `chrome.storage.local`. Visible after clicking the eye icon.

The token does **not** appear in:

- Conversation logs
- Skill outputs
- Sync exports

## Rotating the token

In **Settings → Integrations → Browser → Rotate token**:

1. Ghast generates a new random token.
2. The old token is invalidated immediately. Any extension still using it is disconnected with `4001`.
3. The new token is displayed for you to copy into the extension's options page.
4. After updating the extension, it reconnects with the new token.

When to rotate:

- You suspect the token has been exposed (e.g. screenshot leak).
- You're moving the extension to a different Chrome profile or instance.
- You're decommissioning the extension entirely (don't re-paste the new token).

## Threat model

What the auth protects:

- **Same-machine impostors.** Another local process can't drive your browser through Ghast without the token.
- **Cross-profile leakage.** Each profile has its own token; profiles can't talk to each other's extensions.

What the auth does *not* protect against:

- A local attacker with full disk access. They could read the encrypted vault if they also know the vault key — which is held in memory of a signed-in Ghast process.
- A malicious extension you installed yourself, which could in principle read `chrome.storage.local` of other extensions (not without explicit permission, but in pathological cases).
- A compromised Chrome itself (rare).

These are the standard risks for any browser-automation tool that bridges a local app and a browser. The mitigations (per-profile random tokens, localhost-only sockets, encrypted vault) are calibrated to that threat model — not to a much stronger one.

## When the extension goes silent

The extension will autonomously disconnect (without prompting) if:

- The desktop process is not running.
- The token doesn't match.
- The port doesn't match.
- A network error happens during heartbeat (every 20s; 60s timeout).

It will autonomously reconnect with backoff (1s → 30s). You can also click **Reconnect** in the popup.

## Related pages

- [Browser Extension Overview](/en/browser-extension/overview)
- [Install & Pair](/en/browser-extension/install-and-pair)
- [What the Agent Can Do](/en/browser-extension/capabilities)
- [Security Overview](/en/security/overview)
