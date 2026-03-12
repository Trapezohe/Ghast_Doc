---
title: Extension and Companion
description: Understand how the browser extension and Companion divide responsibilities and when Companion becomes necessary.
---

# Extension and Companion

## Overview

This page explains Ghast AI's two core product layers: the browser extension and Companion.

For most users, the value of this page is not internal implementation detail. It answers two practical questions:

- How far can I go without installing Companion?
- Why does the product become stronger after Companion is installed?

## The simplest way to understand the relationship

| Component | What it is for users | Primary role |
| --- | --- | --- |
| Extension | The main interface you use every day | Chat, memory, skills, wallet, page context, and settings |
| Companion | The local capability layer outside the extension | Workspaces, local capabilities, stronger automation, and advanced local features |

In practical terms:

- The extension handles what you see and use directly in the browser.
- Companion handles what the browser cannot safely or reliably provide on its own.

## What already works with the extension alone

Even without Companion, Ghast AI can already support many basic usage paths, including:

- Sign-in and activation
- Sidebar chat
- Memory management
- Skill management
- Wallet management
- Model selection
- Supported page-based use

That means the extension is already a usable product on its own. Companion is not a prerequisite for getting started.

## Why the product becomes stronger with Companion

A browser extension is naturally suited to interface, page understanding, and lighter interaction. Once the workflow involves workspaces, local files, local commands, or stronger local capabilities, Companion is what fills that gap.

After installing Companion, Ghast AI gains a deeper local capability layer, such as:

- Local use centered on workspaces
- Stronger local task support
- MCP and more advanced automation paths
- Diagnostics, self-check, and local repair functions

The simplest user-facing interpretation is direct:

The extension determines how you use the product. Companion determines how deep that usage can go.

## When Companion is worth installing

If you only want to start with chat, memory, skills, and page understanding, you can begin with the extension alone.

Companion becomes worth installing earlier if you want any of the following:

- Workspace-based use
- Stronger local capabilities
- MCP or deeper automation paths
- A more complete local assistant instead of only a browser sidebar assistant

## The boundary between the two

The most important thing is not to treat the extension and Companion as the same layer.

A practical way to remember the distinction is:

- The extension is the main entry point.
- Companion is the local capability layer.
- Installing Companion changes capability depth, not whether the product can be used at all.

That is also why the manual treats them as separate sections.

## Recommended path for ordinary users

If you are unsure where to start, the steadier order is:

1. Install the extension and complete sign-in.
2. Get comfortable with chat, memory, wallet, and page understanding first.
3. Install Companion once you genuinely need workspaces or stronger local capabilities.
4. After installing Companion, keep the more restrained default setup first, then expand only when needed.

Ghast AI currently consists of two parts: the extension and Companion. The extension is the main user entry point, while Companion is the local capability layer outside the browser. For most users, the extension is enough for basic use. Companion matters when you want the product to go beyond a browser assistant and connect more deeply to the local environment.

## Related pages

- [Product Architecture](../start-here/architecture.md)
- [Install and Auto-Pair](../companion/install-and-auto-pair.md)
- [Permission Modes: workspace and full](../companion/permission-modes.md)
- [Security Overview](../security/overview.md)
