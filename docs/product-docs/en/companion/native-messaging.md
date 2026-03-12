---
title: Native Messaging and Extension Pairing
description: Understand why the extension usually detects the local Companion automatically and when this pairing path becomes a troubleshooting focus.
---

# Native Messaging and Extension Pairing

## Overview

This page explains how the extension prioritizes recognition of the local Companion and when this pairing path actually deserves attention during troubleshooting.

## How to interpret this capability

For most users, Native Messaging is not a feature that needs separate study or manual setup. It is the standard automatic pairing path that lets the extension recognize the local Companion.

Its role is straightforward:

- help the extension discover the local Companion automatically
- reduce the need to enter connection details by hand
- make post-install connection behave more like automatic detection

The point of this capability is not to add another settings layer. It is to reduce the connection burden for ordinary users.

## What you normally do not need to do

If Companion is installed and the extension recognizes it normally, you usually do not need to:

- configure Native Messaging separately
- understand the lower-level pairing mechanism by hand
- use this page as a first-stop troubleshooting page during initial setup

For most users, once the extension recognizes Companion, this pairing path can simply be treated as working normally.

## When this page matters

This page becomes relevant mainly in situations like these:

- installation is complete, but Companion still does not appear in the extension
- auto-pairing keeps failing
- diagnostics or self-check report a browser-recognition, pairing, or local-registration issue
- you have already verified the installer source and handled OS security prompts, but connection still does not complete

If the installer is still being blocked by macOS Gatekeeper or Windows SmartScreen, that is not a pairing issue yet. Return to [Companion Connection Issues](../troubleshooting/companion-connection.md) and clear the installation approval path first.

## How it relates to diagnostics

For ordinary users, the relationship is simple:

- the installation page explains the standard installation order
- this page explains why the extension can usually detect the local Companion automatically
- the diagnostics page continues the process when automatic recognition fails

The key point is that auto-pairing failure does not mean installation failure. This pairing path only becomes a real troubleshooting focus after installation is complete but the extension still cannot recognize Companion.

## Recommended troubleshooting order

If you suspect that the problem is in automatic pairing, use this order:

1. Confirm that the issue is not actually an installation approval problem.
2. Return to the Companion page in the extension and run detection again.
3. If Companion is still not recognized, move into [Diagnostics and Self-Check](diagnostics-and-self-check.md) to inspect browser-recognition and pairing results.
4. Only after the direction is clearer should you continue into repair or manual connection.

This keeps installation approval, automatic recognition, and later connection issues separated instead of pushing every failure into Native Messaging immediately.

## What not to do first

The steadier approach is to avoid these common misreads:

- do not treat auto-pairing failure as proof that the installer package is defective
- do not immediately reinstall the package when installation is already complete
- do not start with broad repair actions before the problem category is even clear

Troubleshooting is faster when you first separate installation approval, automatic recognition, and later connection behavior.

Native Messaging is the standard automatic pairing path that lets the extension recognize the local Companion first. For most users, it is not a separately managed feature. It only becomes a troubleshooting focus after installation is complete but the extension still cannot detect Companion.

## Related pages

- [Install and Auto-Pair](install-and-auto-pair.md)
- [Diagnostics and Self-Check](diagnostics-and-self-check.md)
- [Companion Connection Issues](../troubleshooting/companion-connection.md)
