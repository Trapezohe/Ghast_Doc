---
title: Scheduled Tasks and Heartbeat
description: Understand the difference between scheduled tasks and heartbeat, and choose the right persistent-capability path for the job.
---

# Scheduled Tasks and Heartbeat

## Overview

This page explains what scheduled tasks and heartbeat are each best suited to solve, and how ordinary users should choose between these two persistent-capability paths.

## Pick the path based on the need

| Your need | Better fit |
| --- | --- |
| Remind or execute something at a fixed time | Scheduled task |
| Keep watching a topic over time and stay quiet when nothing matters | Heartbeat |
| Start with the simplest persistent capability | Scheduled task first |
| Maintain a long-running watch list and check it on a rhythm | Heartbeat later |

For most users, the practical difference is simple: a scheduled task is closer to "do this on schedule," while heartbeat is closer to "check this on schedule, then notify or act only when needed."

## How to interpret heartbeat

Heartbeat is better understood as a persistent watch path. It periodically reads the `heartbeat.md` list, lets the AI determine whether anything needs attention, and stays quiet when nothing needs to be reported.

That means the point of heartbeat is not to produce output every time. The point is to keep watching over time and speak only when necessary.

## A steadier way to begin

For most users, the better order is:

1. Start with one simple and specific scheduled task.
2. Confirm that you actually need persistent behavior.
3. Only move into heartbeat once you realize the same kind of issue needs to be watched over time.

That is usually more stable than turning every reminder into a long-running watch path from the start.

## What not to do first

- Do not turn every reminder into heartbeat immediately.
- Do not treat heartbeat silence as a fault by default.
- Do not make the persistent-capability path heavy before the base product path is already stable.

Ghast AI currently separates persistent capability into scheduled tasks and heartbeat. The first is for time-based execution, while the second is for time-based checking with reminders or action only when needed. For most users, the better starting point is a simple scheduled task, with heartbeat added later when there is a genuine long-term watch need.

## Related pages

- [Settings Overview](../extension/settings-overview.md)
- [Scheduled Tasks and Heartbeat Issues](../troubleshooting/scheduled-tasks-and-heartbeat.md)
- [Remote Control Model](remote-control-model.md)
