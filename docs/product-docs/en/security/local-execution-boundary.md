---
title: Local Execution Boundary
description: Understand where Ghast AI keeps local execution contained by default and when that boundary becomes much wider.
---

# Local Execution Boundary

## Overview

This page explains where Ghast AI keeps its local-capability boundary by default, and in which situations that boundary becomes noticeably wider.

For most users, the most important conclusion is a simple one: Ghast AI's current local boundary is primarily built around `workspace` mode.

## The main takeaway

When Companion stays in `workspace` mode, Ghast AI's local capabilities are primarily centered on the workspace you deliberately connect, rather than treating the entire machine as the default scope.

That boundary becomes much weaker once you switch to `full` mode.

This page is therefore meant to clarify two points:

- Why `workspace` mode is the better default mode
- Why `full` mode should not remain on without a clear reason

## What workspace mode means

In `workspace` mode, Ghast AI's local capabilities are meant to operate around the workspace first.

From a user perspective, that has direct effects:

- Local capabilities stay more focused on the directory range you explicitly connected.
- It becomes less likely that a single action will reach unrelated local locations.
- It fits daily use around project folders, repositories, and document directories.

That is why `workspace` mode should be treated as the default recommended mode throughout the manual.

## What this boundary helps constrain

With the default workspace-oriented boundary, Ghast AI tries to avoid several classes of risk:

- Reaching outside the workspace to act on unrelated locations
- Using clearly higher-risk system-level commands as ordinary default behavior
- Escaping the intended directory range through command or path tricks

You do not need to memorize every lower-level rule. The important point is the goal: Ghast AI is not designed to treat the whole machine as fully open local scope by default. It begins from the workspace you explicitly connect.

## What full mode means

`full` mode is not only "more capability." The more accurate reading is that you are deliberately widening the local boundary.

After switching to `full`, the important change is:

- Ghast AI's local capabilities are no longer mainly constrained by workspace scope.
- You take responsibility for a larger machine-wide operating range.
- The protection you were getting from the workspace-first boundary becomes noticeably weaker.

That is why `full` mode should be understood as a widened-access mode for explicit needs, not as the recommended advanced default.

## Recommended choice for ordinary users

If you are unsure whether you need `full`, the practical answer is usually that you do not need it yet.

The steadier sequence is:

1. Start in `workspace` mode.
2. If the scope feels too small, add or change workspaces before switching modes.
3. Consider `full` only when the task genuinely requires a broader machine range.

That sequence preserves the more restrained local boundary that Ghast AI provides by default.

## How this relates to the OpenClaw comparison

One of the most important differences in the OpenClaw comparison is the default local execution boundary. The claim that Ghast AI starts with a narrower local boundary depends mainly on Companion remaining in `workspace` mode.

Once that premise changes, the comparison must be re-evaluated.

On the standard installation path, Ghast AI keeps its default local boundary focused on clearly connected directories through a workspace-first operating model. That boundary is clearest in `workspace` mode and noticeably weaker in `full` mode.

## Related pages

- [Permission Modes: workspace and full](../companion/permission-modes.md)
- [Companion Network and Trust Boundary](companion-boundary.md)
- [Security Overview](overview.md)
- [Compared with OpenClaw](openclaw-comparison.md)
