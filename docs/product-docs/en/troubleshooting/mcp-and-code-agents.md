---
title: MCP and Code Agent Issues
description: Troubleshoot MCP and code-agent failures by separating advanced-capability issues from missing prerequisites.
---

# MCP and Code Agent Issues

## Overview

This page handles common problems involving MCP servers and Code Agents / ACP. When these capabilities fail, the first step is to determine whether the advanced capability itself is failing or whether the earlier Companion, workspace, or local-runtime path is still incomplete.

## Confirm that this is the right page

| Observed behavior | Initial focus |
| --- | --- |
| A skill says it needs MCP, or an MCP-backed tool is unavailable | Treat this as an MCP tool-layer issue |
| A code agent cannot start | Confirm the base local path and environment are actually ready |
| A code agent starts but makes no visible progress | Determine whether it is waiting, paused, or genuinely failing |
| Companion is not yet detected by the extension | This is not an MCP or code-agent issue yet; return to connection troubleshooting first |

If Companion is not being detected consistently, or the installer is still blocked by the operating system, return to [Companion Connection Issues](companion-connection.md) before troubleshooting MCP or code agents directly.

## What to rule out first

Before treating this as an advanced-capability failure, confirm these prerequisites:

1. Companion is installed and detected by the extension.
2. The workspace has been connected.
3. The command runtime and other base local capabilities are already usable.
4. The active local boundary and permission mode match what you intend to do.

This matters because MCP and code agents are built on top of these layers. If the earlier path is not ready, the advanced layer usually will not behave reliably either.

## How to handle MCP issues

If the problem is that MCP-backed tools are unavailable, or a skill still says MCP is required, use this order:

1. Confirm that Companion is connected normally.
2. Confirm that the issue is not caused by the workspace boundary or current permission mode.
3. Recheck the skill or workflow to confirm whether it genuinely depends on deeper local tooling.
4. If the prerequisites are already in place and the issue remains, move into the Companion diagnostic path.

For most users, the key point is simple: a message that MCP is required does not automatically mean the product is malfunctioning. It often means the current task genuinely depends on a deeper local tool layer.

## How to handle code-agent issues

If a code agent cannot start, or starts but does not work normally, use this order:

1. Confirm that Companion is connected.
2. Confirm that the workspace, permission mode, and command runtime are functioning normally.
3. If the issue remains, continue into diagnostics and self-check.
4. Then return to the Code Agents / ACP workflow and confirm that the current task is actually within the intended use stage for that capability.

Do not isolate code-agent problems too early. Many of them are still upstream readiness issues.

## When progress appears to stop

If a code agent has already started but no longer shows obvious progress, do not immediately conclude that it failed.

More common explanations include:

- The task is waiting for additional output.
- The task has paused and needs the next step.
- The local environment or advanced capability prerequisites are still insufficient.

“No new output” does not automatically mean “failed to start.” Distinguishing waiting, pause states, and environment gaps produces a more accurate diagnosis.

MCP servers and Code Agents / ACP both sit on top of Companion, the workspace path, and the base local-capability layer. For most users, the correct troubleshooting order is to confirm the prerequisites first, then classify the problem, and only then troubleshoot the advanced layer itself.

## Related pages

- [Connect a Workspace](../companion/connect-a-workspace.md)
- [Install and Auto-Pair](../companion/install-and-auto-pair.md)
- [Companion Connection Issues](companion-connection.md)
