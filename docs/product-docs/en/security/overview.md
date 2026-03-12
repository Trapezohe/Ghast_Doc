---
title: Security Overview
description: High-level security model for Ghast AI.
---

# Security Overview

## Overview

This page explains the practical security boundaries that Ghast AI enforces by default so you can understand what stays contained, what requires active decision-making, and how those choices affect the risk surface.

Most users only need one takeaway: keep the default settings whenever possible so you retain the product's built-in constraints while keeping it usable.

## Default mindset

Ghast AI's default approach is not "open everything and expect the user to lock it later." It is "start from a deliberate set of constraints, then loosen them only as needed."

Key signals of this mindset include:

- Companion favoring workspace-level access by default
- Wallet locking automatically whenever it is inactive
- Page context collection only on supported sites by default
- Remote control and syncing remaining opt-in capabilities, not forced on every install

As a result, the standard install state is more restrained than an "open local machine + gather every page + keep wallet unlocked forever" configuration.

## The four boundaries

### 1. Browser boundary

Ghast AI is delivered through a browser extension. The extension has the permissions it needs, but it does not start capturing every page automatically. Only the sites covered in the supported list are in scope by default.

For everyday use, this means:

- Not every page becomes an AI context by default
- Page-related capabilities remain in a known, documented scope
- If you explicitly widen browser permissions, the boundary expands accordingly

### 2. Local boundary

Companion handles the local capabilities that a browser cannot: workspace access, richer local execution, and closer interaction with your projects. Out of the box, it is aligned with your workspace instead of assuming the whole machine is fair game.

This boundary keeps the local risk surface focused on a clear directory, and you only open it wider when you truly need broader local access.

### 3. Wallet boundary

Wallet handling is treated as a separate security boundary. The wallet lives inside the extension, stays encrypted, and locks itself automatically when idle.

That design reminds you that wallet capabilities are not just another local feature. They have their own risk level, and keeping them unlocked for long periods noticeably increases exposure.

### 4. Remote boundary

Remote control remains an opt-in capability. Even when you enable it, the sources of input stay separated from your local input, and approvals are not accepted anonymously.

Thus:

- Remote usage does not become indistinguishable from local usage
- Remote approvals are not "anyone can confirm in your place"
- Local actions, remote actions, and scheduled triggers remain distinguishable

## What to keep unchanged

For normal daily use, keep these defaults:

1. Continue using Companion in the workspace-centric mode it starts in
2. Let the wallet lock itself automatically when you are away
3. Only widen browser permissions when a supported workflow truly requires it
4. Keep remote control off unless you specifically need it

These choices preserve the baseline experience while keeping the additional safeguards in place.

## What enlarges the boundary

These are not "minor setting tweaks"; they change how much the product exposes:

- Switching Companion to `full` mode
- Granting broader browser permissions beyond the supported site list
- Keeping the wallet unlocked for extended periods
- Enabling remote control and allowing remote approvals

After any of these changes, the system is no longer operating in the default constrained mode.

## Recommended use

Follow this sequence for a cautious, stable posture:

1. Install the extension and Companion through the standard flow.
2. Confirm which capabilities you actually need before loosening defaults.
3. Only expand local access once you have a clear requirement for it.
4. Revisit the boundary implications after every deliberate expansion.

## Next pages

If there is one single summary, remember: Ghast AI ships with a "loosen as needed" mindset rather than "default everything open."

Subsequent pages dive deeper into each boundary:

- Browser permissions and page context handling
- Wallet handling and key storage
- Companion's local execution model
- Security comparison with OpenClaw
