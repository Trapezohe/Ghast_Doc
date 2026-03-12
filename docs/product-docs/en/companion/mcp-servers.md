---
title: MCP Servers
description: Understand what MCP Servers add to Ghast AI and when this deeper local tool layer becomes relevant.
---

# MCP Servers

## Overview

This page explains how MCP Servers should be understood in Ghast AI and when this layer becomes relevant for ordinary users.

## How to interpret this capability

For most users, MCP Servers do not need to be understood as a protocol first.

The simpler interpretation is this: after Ghast AI connects to Companion, MCP can provide additional local tool capabilities that the extension does not carry by itself.

Those capabilities may include:

- file-system access
- search tools
- database tools
- browser-automation tools

The important point is not the term itself. The important point is that MCP is what makes some deeper local tools available.

## When you usually do not need it yet

If your use is still mostly about:

- ordinary chat
- page understanding
- basic wallet and model use
- routine memory and skill use

then MCP Servers usually do not need to be a priority.

For most users, it is more important to get the extension, Companion, workspace connection, and basic operating path working first.

## When it becomes important

MCP Servers become more relevant when:

- you need stronger local tool support
- a skill or advanced workflow explicitly depends on extra tools
- you want Ghast AI to handle deeper tasks inside the local environment
- the base setup is already complete and you are expanding into more advanced local usage

In other words, MCP belongs to the deeper-use stage, not the first-use stage.

## How it relates to Skills

The simplest way to understand the relationship is:

- Skills are closer to telling Ghast AI how to work.
- MCP is closer to giving Ghast AI access to extra tools.

That is why they often appear together without being the same thing.

Some skills can work with method alone. Others need Companion and MCP before their deeper local behavior becomes available.

## What to confirm first

Before depending on this layer, confirm the following:

1. Companion is installed and recognized by the extension.
2. The issue is not actually installation approval, auto-pairing, or another base connection problem.
3. A defined workspace is already connected, and `workspace` mode remains the default.
4. Your current goal genuinely requires additional local tools rather than ordinary chat or page capabilities.

This keeps the base connection path and local boundary clear before you move into a deeper tool layer.

## If MCP capability does not work as expected

If you have already reached this stage but the related tools are still unavailable, use this order:

1. Confirm that Companion is connected normally.
2. Confirm that the issue is not really caused by the workspace boundary or permission mode.
3. If it still fails, use [Diagnostics and Self-Check](diagnostics-and-self-check.md) to inspect the local environment and tool availability.
4. If it looks more like installation, recognition, or pairing failure, return to [Companion Connection Issues](../troubleshooting/companion-connection.md).

This matters because many advanced-capability failures begin earlier in the installation, recognition, or local-boundary path rather than inside MCP itself.

In Ghast AI, MCP Servers belong to the deeper local tool layer that sits on top of Companion. For most users, they matter only after the base setup is complete and a workflow clearly requires stronger local tooling.

## Related pages

- [Skills Page](../extension/skills-tab.md)
- [Install and Auto-Pair](install-and-auto-pair.md)
- [Diagnostics and Self-Check](diagnostics-and-self-check.md)
- [Companion Connection Issues](../troubleshooting/companion-connection.md)
