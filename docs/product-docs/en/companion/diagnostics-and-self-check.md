---
title: Diagnostics and Self-Check
description: Use Companion health checks, self-checks, and repair actions in the right order when local capability issues appear.
---

# Diagnostics and Self-Check

## Overview

This page explains how to use Companion's health check, self-check, and repair functions after installation when you run into detection failures, connection problems, unusable workspaces, or unstable local capability behavior.

## When this page should be the first stop

Move to this page first when you see situations like these:

- installation is complete, but Companion does not appear in the extension
- auto-pairing did not finish successfully
- a workspace that used to work is no longer usable
- local capability behavior is unstable or obviously incomplete
- a skill, local tool, or advanced capability reports that the machine environment is incomplete

If the installer itself is still being blocked by macOS Gatekeeper or Windows SmartScreen, that is not the diagnostics stage yet. Return to [Companion Connection Issues](../troubleshooting/companion-connection.md) and clear the installation approval path first.

## The three functions on this page

| Function | How to read it |
| --- | --- |
| Health check | Confirm whether Companion is currently online |
| Self-check | Determine whether the issue is closer to configuration, pairing, workspace scope, or local environment readiness |
| Repair | Apply recovery actions after the problem category is already clearer |

For most users, there is no need to understand internal mechanisms first. The important thing is to use these three functions in order.

## What self-check focuses on

Self-check currently focuses on items such as:

- whether local configuration can be read
- whether Companion access credentials exist
- whether the current workspace boundary is valid
- whether the browser-side registration needed to recognize Companion is complete
- whether configured MCP or local tools are actually executable

The practical purpose is not to fix everything immediately. It is to locate the layer where the problem most likely sits.

## Recommended order

The steadier sequence is:

1. Run a health check to confirm whether Companion is online.
2. Run self-check to decide whether the issue looks more like connection, workspace, pairing, or missing environment prerequisites.
3. Use repair only after the direction is already clear.

This order separates status confirmation, problem classification, and repair, instead of mixing installation, connection, and environment issues together.

## When repair should be used

Repair is better treated as a targeted recovery action, not as the first move whenever anything looks wrong.

The more accurate interpretation is:

- health check confirms status
- self-check helps locate the issue
- repair acts on a problem that has already been identified

Common repair actions currently focus on two kinds of recovery:

- restoring or completing local configuration
- rebuilding the browser-side recognition and pairing path for Companion

If you still do not know what kind of issue you are dealing with, repair should not be the first step.

## If the issue still does not clear

If you have already completed health check, self-check, and the appropriate repair steps, continue based on the type of problem:

- installation or OS approval issue: [Companion Connection Issues](../troubleshooting/companion-connection.md)
- standard installation order and auto detection: [Install and Auto-Pair](install-and-auto-pair.md)
- workspace boundary or access-range issue: [Workspace Permission Issues](../troubleshooting/workspace-permissions.md)

If you are already in a more advanced troubleshooting stage, you can also use `trapezohe-companion self-check` to review the current results and follow the suggested repair actions.

Companion's health check, self-check, and repair path is Ghast AI's unified user-facing entry point for local-capability troubleshooting. For most users, the correct order is always to confirm status first, classify the problem second, and repair only after the direction is clear.

## Related pages

- [Install and Auto-Pair](install-and-auto-pair.md)
- [Companion Connection Issues](../troubleshooting/companion-connection.md)
- [Workspace Permission Issues](../troubleshooting/workspace-permissions.md)
