---
title: Product Architecture
description: Understand the three product layers in Ghast AI and which boundaries matter during normal use.
---

# Product Architecture

## Overview

This page provides a practical view of how Ghast AI is assembled, what each component is responsible for, and which boundaries matter during normal use.

Ghast AI is not just a browser extension and it is not just a local service. The current product is composed of the browser extension, the local Companion service, and remote account or model services.

## What the product includes

| Component | What you see | Primary role |
| --- | --- | --- |
| Ghast AI Extension | Chrome sidebar | Chat, memory, skills, wallet, models, and settings |
| Ghast Companion | Local service | Workspace access, local commands, MCP, diagnostics, and other advanced local capabilities |

For most users, the simplest way to read this is straightforward:

- The extension covers most of what you use directly inside the browser.
- Companion adds the local capabilities that the browser should not handle on its own.

## What works without Companion

Even if you do not install Companion yet, the extension can already support the following:

- Sign-in and activation
- Sidebar chat
- Wallet management
- Memory management
- Skill import and management
- Model selection and funding status
- Page-context reading on supported sites

That means the core product path does not depend on Companion at the beginning.

## What Companion adds

Companion is what turns Ghast AI into a fuller local assistant. After it is installed, Ghast AI can add:

- Workspace connections
- Access to a local command runtime
- Hosted and connected MCP servers
- More advanced code-agent or local agent capabilities
- Local diagnostics, self-check, and repair visibility
- More resilient local task handling in offline or reconnect scenarios

If you only need the browser-side experience, you can start without Companion. If you need file access, commands, MCP, or stronger automation, Companion becomes necessary.

## How the three parts work together

### Browser extension

The extension is the main product entry point. What you see in `Chat`, `Memory`, `Skills`, and `Settings` belongs to the extension itself.

### Local Companion

Companion is the local service that sits outside the browser. Its role is direct: browsers are not the right place to carry local file access, command execution, or MCP connectivity in a stable and controlled way.

Companion should therefore be understood as the local capability layer, not as a second user interface.

### Remote services

Remote services primarily handle account and network-side capabilities such as sign-in, activation, model discovery, and parts of remote state synchronization. They are not your local execution environment and they do not replace your machine boundaries.

## The boundaries worth remembering

| Boundary | What it means now |
| --- | --- |
| Browser boundary | The extension is the main entry point, but browser capabilities are naturally limited |
| Local boundary | Companion provides local capabilities, but the allowed range still depends on the active permission mode |
| Page boundary | Page context is only collected on supported sites and under supported conditions |
| Wallet boundary | The wallet is managed locally by the extension and is not handed off to Companion |
| Account boundary | Sign-in and activation rely on remote services, but that does not grant remote local-execution rights |

## Default operating path

For users who follow the standard installation flow, the common path is:

1. Install the extension and sign in.
2. Complete activation with an invitation code.
3. Create or import a local wallet.
4. Install Companion only when local capabilities are needed.
5. If Companion is installed, begin with the more conservative `workspace` boundary instead of widening immediately to the entire machine.

That path is intentional. It lets most users reach a useful state first, then open stronger local capabilities step by step.

## How this manual is organized

The rest of the manual follows the same product logic:

- For browser-side features, read the Extension section.
- For local capabilities, read the Companion section.
- For permission and risk boundaries, read the Security section.

The manual starts with product structure, then moves to operating paths, then to safety boundaries. It does not begin with internal implementation details.

## Related pages

- [What Is Ghast AI](what-is-ghast-ai.md)
- [Quickstart](quickstart.md)
- [Install Companion](install-companion.md)
- [Security Overview](../security/overview.md)
