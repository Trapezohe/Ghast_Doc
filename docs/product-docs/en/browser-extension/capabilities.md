---
title: What the Agent Can Do
description: A full catalogue of operations the agent can perform on a connected Chrome browser.
---

# What the Agent Can Do

Through the Browser Relay extension, the agent gets a discrete set of operations against your connected Chrome. This page is the catalogue.

## Tab management

| Method | What it does |
| --- | --- |
| `browser.tabs.list` | Enumerate every open tab with URL, title, active state, window ID, audible flag, load status |
| `browser.tabs.create` | Open a new tab, optionally with a URL |
| `browser.tabs.navigate` | Load a URL in an existing tab |
| `browser.tabs.reload` | Refresh a tab |
| `browser.tabs.close` | Close a tab |

These are stateless from the extension's side — every call goes through Chrome's standard `chrome.tabs` API.

## Screenshots

| Method | What it does |
| --- | --- |
| `browser.tabs.capture` | Capture the visible region of a tab as JPEG (quality 80) base64, with viewport width and height. Uses CDP `Page.captureScreenshot`; falls back to `chrome.tabs.captureVisibleTab` if CDP is unavailable. |

Returned images include the dimensions so the agent can compute pixel-accurate coordinates if it later wants to act on what it saw.

## Debugger Protocol (CDP)

| Method | What it does |
| --- | --- |
| `browser.debugger.attach` | Attach the Chrome debugger to a tab (protocol version 1.3) |
| `browser.debugger.detach` | Detach the debugger |
| `browser.debugger.sendCommand` | Forward an arbitrary CDP method (e.g. `Runtime.evaluate`, `Page.captureScreenshot`, `DOM.describeNode`) |

CDP is the most powerful surface — through `sendCommand` the agent can:

- **Evaluate JavaScript** in page context (`Runtime.evaluate`).
- **Walk the DOM** (`DOM.getDocument`, `DOM.querySelector`).
- **Listen to events** — JS dialog opens, network activity, page lifecycle.

The extension auto-dismisses JS dialogs (`alert` / `confirm`) when the debugger is attached, so they don't block automation.

## DOM helpers

The desktop client wraps common CDP idioms into higher-level helpers the agent calls directly:

| Operation | What it does |
| --- | --- |
| Read page content | Title, URL, full innerText (capped at 60,000 chars, with a truncation flag) |
| Summarise DOM | Extract up to 200 interactive elements (buttons, links, inputs, custom roles) with CSS selectors, bounding boxes, visibility, text/aria-label, disabled state |
| Click by selector | Click an element identified by CSS selector |
| Type by selector | Type into an input identified by CSS selector |
| Scroll | Scroll the page or a specific scroll container |
| Upload file | Trigger a file input by CSS selector with a local file path |

The agent typically:

1. Captures a screenshot to see the page.
2. Summarises the DOM to learn the selectors.
3. Calls click / type with specific selectors.

## What the agent *cannot* do through the relay

- **Persist state across browser restarts.** The extension itself stores nothing about your browsing.
- **Read your browser history or bookmarks.** Those Chrome APIs are not in the extension's permission set.
- **Modify Chrome settings.** The extension does not request `chrome.management` or similar.
- **Touch other extensions.** The relay has no inter-extension messaging.
- **Operate in incognito mode.** Manifest V3 + the `debugger` permission do not extend to incognito by default. If you want incognito support, enable it explicitly per extension in `chrome://extensions`; otherwise incognito tabs are invisible to the agent.

## Concurrency

The relay attaches the debugger to one tab at a time per operation. The agent can drive multiple tabs but does so sequentially. A "follow this link, screenshot the page, come back, click another" workflow is normal; a "do these three things in parallel" workflow is not.

## Limits and quotas

- Screenshot quality is fixed at JPEG 80 — high enough for vision-capable models, small enough to fit in context.
- innerText is capped at 60,000 chars. Anything longer is truncated with an explicit flag the agent can see.
- DOM summarisation is capped at 200 interactive elements per call. For pages with more, the agent paginates by scrolling and re-summarising.

## Related pages

- [Browser Extension Overview](/en/browser-extension/overview)
- [Install & Pair](/en/browser-extension/install-and-pair)
- [Security & Token Rotation](/en/browser-extension/security)
- [Skills (`browser` skill)](/en/desktop/skills)
