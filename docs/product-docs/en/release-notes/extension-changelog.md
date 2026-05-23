---
title: Extension Changelog
description: User-facing changes to the Ghast Browser Relay extension.
---

# Extension Changelog

User-facing changes to the Chrome extension that lets the agent operate your browser.

## 1.0.0 — 2026-05-18

- Initial public release of Ghast Browser Relay
- Manifest V3, Chrome 120+
- WebSocket bridge to Ghast Desktop with per-profile token auth
- Tab management, screenshots (CDP `Page.captureScreenshot`), DOM inspection, JS evaluation, click / type / scroll by selector
- Auto-dismiss for `alert` / `confirm` dialogs while the debugger is attached
- Auto-reconnect with exponential backoff
- Per-profile token rotation from Ghast Desktop

## Reading this changelog

The extension's version updates with each desktop release that includes a bundled extension change. If you loaded the extension manually (Option B in the install guide), reload it in `chrome://extensions` to pick up the new version after a desktop update.

If the extension introduces new Chrome permissions, that's surfaced both here and in the extension's [Security & Token Rotation](/en/browser-extension/security) page.

## Related pages

- [Browser Extension Overview](/en/browser-extension/overview)
- [Install & Pair](/en/browser-extension/install-and-pair)
- [Desktop Changelog](/en/release-notes/desktop-changelog)
