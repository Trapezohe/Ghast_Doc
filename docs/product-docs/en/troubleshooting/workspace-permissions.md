---
title: Workspace Permission Issues
description: Troubleshoot workspace access failures, expired folder authorization, and directory-range mismatches.
---

# Workspace Permission Issues

## Overview

This page handles cases where a workspace appears to be connected but Ghast AI still cannot read or write the directory, the authorization seems to have stopped working, or the current directory is outside the connected range.

## Identify the symptom first

| Observed behavior | Initial focus |
| --- | --- |
| A folder was selected, but local files still cannot be accessed | Confirm the workspace was actually connected and the authorization has not expired |
| A workspace that used to work is no longer available | Check whether the browser requires re-authorization or the folder location has changed |
| An action says the target is outside the workspace boundary | Confirm whether the target is simply not inside the currently connected directory |
| You need access to another project directory | Treat this as a workspace-selection issue first, not as a reason to widen the entire machine boundary |

## Standard troubleshooting order

1. Confirm that Companion is being detected normally by the extension.
2. Confirm that the current workspace still shows as connected.
3. If the browser asks for authorization again, reselect the folder and complete authorization.
4. If the current directory range is not sufficient, change or add the workspace first.
5. Only after those steps should you evaluate whether a wider `full` boundary is actually necessary.

## What not to assume first

- Do not assume a workspace issue automatically means the whole-machine boundary must be widened.
- Do not diagnose Companion itself as broken before you have checked whether re-authorization is required.
- Do not confuse “this directory is outside the workspace” with “file permissions are completely broken.”

Workspace issues should be treated as connection-scope or re-authorization problems first. For most users, the right order is consistent: confirm Companion detection, confirm workspace status, re-authorize or switch directories, and only then decide whether a wider boundary is justified.

## Related pages

- [Connect a Workspace](../companion/connect-a-workspace.md)
- [Companion Connection Issues](companion-connection.md)
- [Install and Auto-Pair](../companion/install-and-auto-pair.md)
