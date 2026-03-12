---
title: "Permission Modes: workspace and full"
description: Understand how Companion's two permission modes change the local boundary and which one should remain the default.
---

# Permission Modes: workspace and full

## Overview

Companion currently supports two operating modes: `workspace` and `full`.

For most users, this is not a technical toggle. It is the main local-boundary decision in the product. It determines whether Ghast AI uses local capabilities primarily inside connected workspaces or across a much wider part of the machine.

## Recommended default

Unless you have a clear reason to do otherwise, `workspace` should remain the preferred mode.

`workspace` fits the way most users actually work: around a project directory, a repository, or a defined set of files. It does not assume that the whole machine needs to be the starting scope.

`full` is better treated as an expanded mode for cases where you already know why broader local reach is necessary.

## What the two modes mean

| Mode | What it means in practice | Best suited for |
| --- | --- | --- |
| `workspace` | Local capabilities stay centered on the workspaces you explicitly connect | Daily project work, code directories, document folders, and ordinary local collaboration |
| `full` | Local capabilities are no longer mainly constrained by workspace scope | Cases that genuinely require broader machine access across directories or environments |

## Why `workspace` is the better default

The value of `workspace` is not that it is more complicated. Its value is that it is more restrained.

For most users, it brings three direct benefits:

- It is easier to understand which directory Ghast AI is actually working in.
- It is less likely to cross into local areas that the task never needed to touch.
- It is better suited to remain enabled as the long-term daily mode.

If your goal is simply to work with a project, repository, or document directory, `workspace` is usually enough.

## When `full` is worth considering

`full` should only become a serious option in situations like these:

- Your task genuinely spans multiple local directories.
- Your workflow cannot be organized around one or more connected workspaces.
- You have confirmed that the need cannot be met while staying in `workspace` mode.

Even then, the better first question is often whether you only need to add another workspace instead of widening the whole local boundary.

## What changes in `full`

The most important change in `full` is not that there are more capabilities. The important change is that the default boundary becomes wider.

In practical terms:

- Local capabilities are no longer mainly contained by the workspace boundary.
- You take on a broader machine-level operating scope.
- The protection you were getting from a workspace-first boundary becomes noticeably weaker.

That is why `full` should be treated as a deliberate expansion mode, not as the recommended default.

## A simple way to choose

| Your situation | Better choice |
| --- | --- |
| You only need to work inside a specific project directory | `workspace` |
| You are using the product normally and are still unsure about your boundary needs | `workspace` |
| You think you may need a broader range but have not confirmed it yet | Stay in `workspace` or add another workspace first |
| You clearly know that you need a wider machine scope | Consider `full` |

## Recommended operating order

The safer order is straightforward:

1. Start in `workspace` mode.
2. Confirm your real operating scope while using it.
3. If it is not enough, add or adjust workspaces first.
4. Switch to `full` only when those steps still do not cover the need.

This order preserves the tighter local boundary that Ghast AI provides by default.

In the standard installation path, Companion should be treated as a workspace-first local capability layer. `workspace` is the default operating mode, while `full` is an expanded mode that should only be enabled when the need is explicit.

## Related pages

- [Connect a Workspace](connect-a-workspace.md)
- [Command Runtime](command-runtime.md)
- [Security Overview](../security/overview.md)
- [Compared with OpenClaw](../security/openclaw-comparison.md)
