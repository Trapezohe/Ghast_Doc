---
title: Memory Model
description: Understand what memory means in Ghast AI and why it is different from chat history or workspace files.
---

# Memory Model

## Overview

This page explains how memory should be understood in Ghast AI, and why it is not the same thing as ordinary chat history or local workspace files.

## Separate the three content types first

| Content type | Where it fits best |
| --- | --- |
| One-time conversation exchanges | The current chat flow |
| Stable context that should be kept long term | Memory |
| Project source code, documents, and local files | The workspace |

For most users, memory is not meant to save everything. Its purpose is to help Ghast AI retain the context that actually matters over time.

## What memory is best suited for

Memory is better suited to content like this:

- Stable information that remains relevant to you over time
- Important context that should survive across repeated use
- Content that makes sense to organize, migrate, or back up over the long term

If a piece of information is only useful briefly in the current chat, it usually does not need to be managed as long-term memory.

## Why this is not the same as workspace files

Workspace files belong to local directories that you deliberately connect. Memory belongs to Ghast AI's own long-term context layer.

That is why the product gives Memory its own entry point instead of asking you to manage it through ordinary file paths.

## When ordinary users need to care more deeply

If you are only trying the product for the first time, it is enough to think of memory as the place where the assistant can retain some important information over time.

It becomes more meaningful to manage memory more deliberately when you begin to:

- use Ghast AI over a longer period
- keep stable personal context
- organize, back up, or migrate long-term content

Ghast AI's current memory model is meant to hold long-term context rather than replace ordinary chat history or local workspace files. For most users, the best way to understand it is as the layer where the product keeps important context over time, with deeper organization becoming more useful as long-term use increases.

## Related pages

- [Memory Page](../extension/memory-tab.md)
- [Data Storage and Sync Boundary](../security/data-storage-and-sync.md)
