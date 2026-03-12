---
title: Command Runtime
description: Understand how Ghast AI uses local command execution after Companion is connected and how to keep that capability within a clear boundary.
---

# Command Runtime

## Overview

This page explains how Ghast AI uses local command capability after Companion has been installed and connected, and how that capability should be understood in daily use.

## When this capability matters

The command runtime is best suited to situations like these:

- Running local tasks inside a defined workspace
- Using scripts, commands, or local tools
- Letting Ghast AI complete local steps that the browser cannot handle on its own

If your current use is still centered on chat, page understanding, memory, wallet, and basic model use, this is usually not the first capability you need to focus on.

## How to interpret it

For most users, the command runtime should not be understood as giving the assistant unrestricted control over the machine.

A more accurate way to read it is:

- It is an optional local capability provided by Companion.
- It is best used around a workspace you have already connected.
- Its operating range depends on the active permission mode.
- Higher-risk commands currently require confirmation in the extension.

The real question is not whether it can execute endlessly. The real question is which local tasks it can help with, and within which boundary.

## What to confirm first

Before relying on the command runtime, confirm the following:

1. Companion is installed and recognized by the extension.
2. The issue is not actually an installation, security-prompt, or auto-pairing problem.
3. A clear workspace has already been connected.
4. You are still using `workspace` mode unless a wider boundary is genuinely required.

This order matters because installation, recognition, and workspace scope should be clear before you move into local command execution.

## Recommended way to use it

For most users, the steadier operating pattern is:

- Start from a specific workspace.
- Use it for concrete, limited local tasks.
- Keep the default local boundary as narrow as practical.
- Only widen the machine scope when there is a real need for it.

If your task does not require local commands at all, there is no benefit in expanding local reach just to make the product feel more complete.

## What not to assume

Avoid these common misunderstandings:

- Do not treat the command runtime as unrestricted machine control by default.
- Do not make it your main entry point before a workspace has even been connected.
- Do not assume that switching to a wider permission mode is a prerequisite for using it.
- Do not mix installation, recognition, and command-execution problems into one category.

If Companion is not yet being recognized by the extension, the first issue is connection, not command runtime behavior.

## If commands do not work as expected

If Companion is installed but the command capability is still unavailable, use this order:

1. Confirm that the extension recognizes Companion.
2. Confirm that the current workspace and permission mode match your intended use.
3. If the issue remains, move into [Diagnostics and Self-Check](diagnostics-and-self-check.md).
4. If the problem looks more like installation, recognition, or pairing failure, return to [Companion Connection Issues](../troubleshooting/companion-connection.md).

This keeps installation, connection, boundary, and command-execution problems separate instead of attributing every failure to the runtime itself.

Ghast AI's command runtime is an advanced local capability provided through Companion. For most users, it should be understood as workspace-centered local command support rather than whole-machine execution by default. In the standard path, `workspace` remains the better operating mode, and higher-risk commands move forward only after extension-side confirmation.

## Related pages

- [Permission Modes: workspace and full](permission-modes.md)
- [Connect a Workspace](connect-a-workspace.md)
- [Diagnostics and Self-Check](diagnostics-and-self-check.md)
- [Companion Connection Issues](../troubleshooting/companion-connection.md)
