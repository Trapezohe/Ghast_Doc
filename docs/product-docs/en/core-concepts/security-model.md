---
title: Security Model and Trust Boundary
description: Understand the four security layers in Ghast AI and how the trust boundary changes as more capabilities are enabled.
---

# Security Model and Trust Boundary

## Overview

Ghast AI's current security model does not depend on a single switch. It is built from multiple boundaries working together.

For users, the most important point is not to memorize the internal mechanism. The practical point is this:

Ghast AI's risk surface changes according to which capabilities you enable and which settings you loosen. In the default state, the product begins with tighter boundaries. As you ask for stronger capabilities, those boundaries widen step by step.

## Think of it as four layers

### Browser layer

The browser layer determines what Ghast AI can see on the web and which pages it can interact with.

At the moment, it does not open itself to every page by default. Page-context capability only operates on supported sites and in supported modes. For most users, that means browser-side capability has a defined scope rather than unrestricted browser-wide access.

### Local layer

The local layer is mainly handled by Companion. It determines whether Ghast AI can enter a workspace, use local capability, and keep that capability contained inside the workspace or widen it to a larger part of the machine.

For users, the most important choice at this layer is whether Companion stays in `workspace` mode.

### Wallet layer

The wallet layer is separate from the local layer. The wallet is currently managed locally in the extension and locks automatically by default. The purpose of this boundary is to separate local capability from wallet-sensitive capability instead of letting them merge into one risk class.

### Remote layer

The remote layer determines how Ghast AI distinguishes remote input, local input, and other trigger sources when you use channels such as Telegram. Its purpose is not to turn remote use into the default path, but to keep that capability inside a clear boundary after it is enabled.

## Default security posture

On the standard installation path, Ghast AI's current default posture can be summarized like this:

- Browser capability stays inside a limited scope.
- Local capability stays centered on workspaces first.
- The wallet locks automatically by default.
- Remote capability is not the primary path by default.

That is why the default user experience feels closer to "use within scope first" than "open everything first and reduce it later."

## What widens the boundary most easily

In daily use, the settings that most noticeably widen the trust boundary are not ordinary conversations. They are choices like these:

- Switching Companion from `workspace` to `full`
- Granting the browser a broader access range
- Leaving the wallet unlocked for long periods
- Enabling remote control and making remote approval part of the daily path

These are not minor adjustments. They are deliberate trust-boundary changes.

## The most practical way to read it

If you do not want to study the implementation, use this simpler set of questions:

| Question | What to check first |
| --- | --- |
| Is this mainly a browser-side capability? | Check whether it depends on supported sites and browser permissions |
| Does this capability enter the local machine? | Check whether it depends on Companion |
| Does this capability touch the wallet? | Check whether it requires wallet unlock |
| Is this being triggered remotely? | Check whether it comes from a remote channel |

Once you separate those four questions, most of the boundary model becomes much easier to follow.

## Why this page matters in the manual

This page is not meant to make you configure a security system manually. It is meant to give you a stable mental model:

- Browser capability has a browser boundary.
- Local capability has a Companion boundary.
- Wallet capability has its own boundary.
- Remote capability has a remote boundary.

Once those four layers are clear, the permission pages, wallet pages, local-execution pages, and the OpenClaw comparison all become easier to read.

## Related pages

- [Security Overview](../security/overview.md)
- [Chrome Permissions and Host Permissions](../security/chrome-permissions.md)
- [Wallet Key Handling](../security/wallet-key-handling.md)
- [Permission Modes: workspace and full](../companion/permission-modes.md)
- [Compared with OpenClaw](../security/openclaw-comparison.md)
