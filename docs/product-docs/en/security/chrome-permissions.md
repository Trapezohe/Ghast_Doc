---
title: Chrome Permissions and Host Permissions
description: Understand why Ghast AI needs browser permissions, what scope they cover, and when wider access should be treated cautiously.
---

# Chrome Permissions and Host Permissions

## Overview

As a browser extension, Ghast AI relies on a set of browser permissions. This page does not explain them from a developer perspective. It explains why the permissions exist, what scope they roughly cover, and when permission changes deserve closer attention.

## The main takeaway

Ghast AI is not an extension that applies equally to every website by default. Even when the extension holds browser permissions, the sites that actually participate in page context remain limited.

For most users, two points matter most:

- The extension does need certain browser permissions to work normally.
- Having those permissions does not mean every webpage is read or captured by default.

## What the permissions are used for

| Permission area | What it means for users |
| --- | --- |
| Local storage | Stores settings, memory, wallet state, and other local extension data |
| Active tab and page access | Reads current page context on supported pages |
| Sidebar capability | Lets Ghast AI run as a browser sidebar experience |
| Timers and notifications | Supports reminders, heartbeat, and some background tasks |
| Page injection capability | Enables page-understanding features on supported sites |
| Local pairing capability | Finds and connects to Companion |
| Sign-in capability | Supports Google sign-in |

The practical interpretation is simple: these are browser capabilities required to make the extension usable, not a blanket permission to open every website by default.

## What site scope this roughly covers

Current host permissions are mainly centered on these categories:

- 0G-related sites
- Common block explorers
- Common DeFi protocol sites
- X / Twitter
- Discord
- Google-related services
- Trapezohe-owned services
- Skill and search-related sites
- Local `localhost` / `127.0.0.1`

That means Ghast AI behaves more like an extension organized around Web3 workflows and local capability integration, not a generic capture extension for the entire web.

## What deserves extra attention

There is also a broader access range that can be granted on demand. It is not permanently open by default, but if you deliberately authorize it, the extension's accessible page range becomes noticeably wider.

For most users, one sentence is enough:

If you do not clearly need broader coverage, keep the default permission range and avoid widening website access unnecessarily.

## What Google sign-in means here

Ghast AI's sign-in capability is currently used for basic account identification and session recognition. It should not be interpreted as broad access to your Google account content.

## Why this page matters

After reading this page, the practical conclusion should be:

- Ghast AI does need browser permissions to function.
- Those permissions have defined purposes rather than unlimited page access.
- Page context capabilities still follow a separate supported-site scope.
- If you deliberately widen permissions, you gain a wider capability range and a wider boundary at the same time.

## Related pages

- [Web Capture and Redaction](web-capture-and-redaction.md)
- [Security Overview](overview.md)
- [Compared with OpenClaw](openclaw-comparison.md)
