---
title: Compared with OpenClaw
description: Default security boundaries in Ghast AI versus OpenClaw-style local gateway solutions.
---

# Compared with OpenClaw

## Overview

This page answers the question most users ask from a practical perspective: compared with OpenClaw-style local agents or gateways, where does Ghast AI keep its default boundaries tighter, and where do risks remain similar?

It focuses on the current product behavior only, without making brand comparisons or claiming that Ghast AI is universally safer in every configuration.

## Summary

If you install Ghast AI through the standard flow and continue using Companion in the default `workspace` mode, the out-of-box boundaries are more constrained than a typical OpenClaw-style high-permission local gateway.

That restraint shows up in four areas:

- Local capabilities are scoped to the workspace unless you opt in to expand them
- Page context is collected only on a limited set of supported sites by default
- Wallet keys are managed inside the extension with automatic locking
- Remote approvals preserve clear origin labels rather than merging remote and local input

However, this advantage depends on keeping the default configuration. Switch Companion to `full` mode, grant broader optional permissions, or keep the wallet unlocked for a long time, and the security gap narrows significantly.

## What differs in practice

| Dimension | Typical OpenClaw assumption | Ghast AI default | What it means for you |
| --- | --- | --- | --- |
| Local execution scope | Local abilities usually converge on a single high-permission entry point | Companion prioritizes workspace mode by default | The whole machine is not opened before you need it |
| Browser page coverage | Browser tooling often applies to every page | Page context is captured only on supported launch sites | You expose fewer pages by default |
| Wallet handling | Wallets are treated as part of the in-browser local Web3 surface | Keys live in the extension and lock automatically | Web3 sensitivity is separated from other local risk |
| Remote control | Control planes emphasize a unified remote entry | The shipped experience stays restrained with Telegram as the primary path for external input | The external attack surface stays more controlled |

## What Ghast AI constrains by default

### Default workspace-first local scope

This is the most intuitive difference. After a standard install, Companion does not immediately treat the entire machine as available; it stays tied to your workspace. That means:

- Local capabilities are not granted over the whole disk by default
- Daily usage focuses on specific project directories
- You do not need to open broader machine access just to handle a workspace task

For most users, the practical value is knowing the system starts restrained rather than fully permissive.

### Default browser context is limited to supported sites

Ghast AI does not automatically treat every website as a context source. Only the launch-supported sites are in scope, and the system filters sensitive query parameters upfront.

This results in:

- Not every page immediately becomes an AI context
- The surface area of page-related data is easier to document and explain
- Users can clearly see which sites are recognized and which are not

### Wallets stay behind their own boundary

Wallet handling is not bundled into general local capabilities. Keys are kept inside the extension, encrypted, and auto-locked when idle. Companion's local execution abilities run separately from the wallet risk surface.

This separation matters for Web3 users because it avoids mixing wallet-sensitive actions with general local attacks.

### Remote origins remain distinct

Remote control and approvals keep origin metadata. The key consequences are:

- Remote input is not anonymous
- Anyone enabling remote approvals cannot simply impersonate you
- Local commands, remote commands, and scheduled triggers remain distinguishable

## What it does not mean

It would be incorrect to say:

- Ghast AI is safer than OpenClaw in every configuration
- Ghast AI completely isolates the local machine by default
- Ghast AI removes the need for system-level security controls
- Using a local service eliminates all permission risks

Those statements fail to acknowledge that Companion supports `full` mode, the extension still holds browser permissions, optional permissions exist, and individual choices about wallet lock or remote control change the runtime boundary.

This page should be interpreted as "how narrow is the default boundary," not as an absolute security ranking.

## Recommended use

To stay in the default, constrained mode:

1. Install the extension and Companion through the standard flow.
2. Keep Companion in `workspace` mode.
3. Only relax optional permissions when you have a clear need.
4. Do not leave the wallet unlocked for long periods.
5. Enable remote control only when you explicitly require it.

These steps are not about eliminating risk. They preserve the default design's restrained posture while keeping the product functional.

"In the standard install path, Ghast AI enforces workspace-first access, automatic wallet locking, limited site collection, and distinct remote origins, which keep the default boundary tighter than a general OpenClaw-style local gateway, but the gap depends on those defaults, and you must reassess if you switch to `full` mode or intentionally loosen permissions."

## Related pages

- [Security Overview](/en/security/overview)
