---
title: Ghast Browser Relay
description: The Chrome extension that lets the desktop agent operate your real browser.
---

# Ghast Browser Relay

Ghast Browser Relay is a Chrome extension (Manifest V3) that lets the Ghast AI Desktop agent operate your Chrome browser. It is a thin **relay**, not a second product surface — its only job is to forward commands from the desktop client into Chrome via the Chrome DevTools Protocol (CDP) and stream events back.

The extension is one piece of the broader product. The desktop client is where you spend time; the extension is the bridge that lets the agent reach into your browser when it needs to.

## What "operate your browser" means

Through the relay, the agent can:

- **Manage tabs** — list, create, navigate, reload, close
- **Take screenshots** — full-fidelity tab captures with viewport dimensions
- **Inspect DOM** — extract interactive elements (up to 200) with CSS selectors, bounding boxes, visibility, aria-label, disabled state
- **Read content** — title, URL, full innerText (capped at 60,000 chars with a truncation flag)
- **Evaluate JavaScript** — arbitrary expressions in page context
- **Interact** — click, type, scroll, file upload by CSS selector
- **Auto-dismiss dialogs** — `alert` / `confirm` are handled so they don't block automation

These map to the `browser` skill in the desktop client.

## Why a relay and not a built-in browser

A few options were considered. Why this shape:

- **You stay logged in.** The agent operates the Chrome instance you already use — your sessions, cookies, extensions, and history are intact. No second login.
- **No headless browser maintenance.** Ghast doesn't have to ship a Chromium binary, patch it, or sandbox it. Chrome is Chrome.
- **Auditable.** What the agent does happens in a tab you can watch.

The trade-off is that the agent can do things to your browser. The trust model relies on the per-profile token (see [Security](/en/browser-extension/security)).

## What it is *not*

- **Not a sidebar AI.** Ghast AI is a desktop app. The extension has no chat UI — its popup just shows connection status.
- **Not an autonomous browser agent.** The agent acts only when a turn in the desktop client tells it to.
- **Not a Firefox / Safari / standalone Chrome story.** Manifest V3 + the `debugger` permission means Chrome (or Chromium-based browsers with full Manifest V3 compatibility) only.

## How it connects to the desktop

```
   Desktop client                Extension                  Chrome
┌────────────────────┐         ┌──────────────┐         ┌──────────────┐
│  LiveBrowser RPC   │ ──────▶ │  service     │ ──CDP─▶ │ active tab   │
│  (WebSocket server)│ ◀────── │  worker      │ ◀────── │              │
└────────────────────┘         └──────────────┘         └──────────────┘
       ws://127.0.0.1:18189/v1/browser/stream
       JSON-RPC 2.0, subprotocol-bearer auth
```

- The desktop client runs a local WebSocket server on `127.0.0.1:18189` (port configurable).
- The extension's service worker connects to that server.
- Authentication is a per-profile random token, sent as a WebSocket subprotocol (`ghast-token.<TOKEN>`).
- The protocol is JSON-RPC 2.0; methods are `browser.tabs.*`, `browser.debugger.*`, `session.*`.
- Reconnect is automatic — Chrome alarm-based keep-alive with exponential backoff up to 30s.

## When you'd install it

The relay is optional. Install it when:

- You want the agent to do real web work in your real browser — filling forms, reading dashboards you're logged into, capturing screenshots for research.
- You want the `browser` skill in the composer to actually do something.

If your workflow is purely chat or local Mac automation, you don't need it.

## Where to go next

- [Install & Pair](/en/browser-extension/install-and-pair) — load the extension and connect it to the desktop
- [What the Agent Can Do](/en/browser-extension/capabilities) — full capability list
- [Security & Token Rotation](/en/browser-extension/security) — auth, rotation, what the extension can and can't see
