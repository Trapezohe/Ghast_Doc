---
title: Data Storage and Sync Boundary
description: See where major Ghast AI data lives, what remains local by default, and how optional syncing should be understood.
---

# Data Storage and Sync Boundary

## Overview

This page explains where Ghast AI keeps its major categories of data, which content remains local by default, and how remote sync should be interpreted.

## Where the main data lives

| Data type | Current primary location |
| --- | --- |
| Extension data such as wallet state, sessions, settings, and remote-control state | Local browser extension storage |
| Long-term memory and memory management | The extension memory system and the Memory page |
| Workspace files | Local folders that you deliberately connect |
| Companion local configuration | `~/.trapezohe` |
| Optional remote memory sync data | Only participates after you enable the related sync capability |

For most users, the main conclusion is that different data types do not live in one place, and installing Companion does not automatically move everything into one shared sync path.

## The distinctions that matter

To keep the boundary model clear, remember these three points:

- Workspace files are not the same thing as Ghast AI's core memory.
- Companion local configuration is not the same as the extension's local data.
- The existence of remote sync does not mean all local data is automatically copied to remote systems.

## How to interpret remote sync

Remote sync is better understood as an optional capability, not as a mandatory default path.

For ordinary users, the safer interpretation is:

- Remote sync only participates after you deliberately enable it.
- It is centered on the content that actually needs syncing, not on cloning the full local environment.
- If you do not yet have a clear sync need, it does not need to be a first-use priority.

## When this page matters more

This page becomes more important in a few specific situations:

- You are actively managing long-term memory.
- You need to determine where a certain type of data is being stored locally.
- You are troubleshooting sync, migration, or recovery.

For day-to-day use, it is usually enough to remember that different data types live in different places and remote sync is not fully on by default.

Ghast AI currently keeps extension data, long-term memory, workspace files, and Companion local configuration in separate locations. Remote sync is an optional capability rather than a default full-environment sync path. For most users, the practical model is straightforward: data is managed by type and synced only when needed.

## Related pages

- [Memory Page](../extension/memory-tab.md)
- [Wallet Key Handling](wallet-key-handling.md)
- [Security Overview](overview.md)
