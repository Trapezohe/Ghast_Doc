---
title: Scheduled Tasks and Heartbeat Issues
description: Troubleshoot scheduled tasks that do not run, heartbeat silence, and persistent-capability expectations.
---

# Scheduled Tasks and Heartbeat Issues

## Overview

This page handles cases where scheduled tasks do not run as expected, heartbeat stays quiet for a long time, or persistent behavior after the browser goes offline does not match expectations.

## Identify the symptom first

| Observed behavior | Initial focus |
| --- | --- |
| A scheduled task never runs | Confirm the task was actually created and remains enabled |
| Heartbeat stays quiet for a long time | First determine whether this is normal “no news” silence |
| It feels like tasks were missed after the browser went offline | Confirm that Companion and the persistent-capability path are actually connected |
| Tasks repeat, pile up, or appear out of order | Check for duplicate tasks or older tasks that were never resolved |

## Standard troubleshooting order

1. Confirm that the task or heartbeat configuration was actually saved.
2. Confirm that the browser state and any required local capabilities are currently available.
3. If the issue started after the browser went offline, confirm that Companion has already connected correctly.
4. If heartbeat is quiet, determine whether there is simply nothing new that requires a report.

## What not to assume first

- Do not treat heartbeat silence as a failure by default.
- Do not blame deeper background paths before confirming that the task really exists.
- Do not interpret “persistent behavior is weaker than expected” as proof that every setting has failed.

## If the issue still does not clear

If you have already confirmed that the task exists, the configuration was saved, and Companion is connected, then it makes more sense to continue into diagnostics or Companion-side troubleshooting.

Scheduled tasks and heartbeat both belong to the persistent-capability path. For most users, the right order is to confirm the task exists, confirm the runtime conditions, and only then move into deeper local troubleshooting. Heartbeat silence, by itself, does not necessarily indicate a fault.

## Related pages

- [Settings Overview](../extension/settings-overview.md)
- [Companion Connection Issues](companion-connection.md)
- [Install and Auto-Pair](../companion/install-and-auto-pair.md)
