---
title: Provenance and Actor
description: Understand why Ghast AI distinguishes where a request came from and why that matters in practice.
---

# Provenance and Actor

## Overview

This page explains why Ghast AI distinguishes where a request came from, and what that distinction means for ordinary users.

## The practical way to read it

You do not need to remember internal fields. The practical point is simply that the system tries to distinguish which kind of entry point a request came from.

| Source path | What it means for users |
| --- | --- |
| Local chat | A request you sent directly in the sidebar |
| Remote channel | A request sent through Telegram or another remote path |
| Scheduled / Heartbeat | A turn triggered by the system on a planned schedule |
| ACP / local agent | A deeper local code-agent or automation path |

The purpose of this distinction is not to create terminology to memorize. It is to keep different entry-point boundaries from being mixed together.

## Why this matters

Without source distinction, remote entry points, local entry points, and persistent task entry points can easily collapse into one undifferentiated request stream.

For ordinary users, preserving that distinction has three direct benefits:

- Local use and remote use do not become the same path.
- Approvals, prompts, and responses can remain different depending on the source.
- When the system records or reviews behavior, it is easier to understand which kind of scenario produced the action.

## What ordinary users actually need to remember

You do not need to understand the internal implementation of actor or provenance tagging. The practical interpretation is enough:

- The system knows whether an action was started from the sidebar.
- The system also distinguishes whether it came from a remote message or from a scheduled path.
- That distinction helps approvals, responses, and boundary control remain clearer.

Ghast AI currently distinguishes between local, remote, and persistent-task source paths. For most users, the value of this distinction is not technical detail. It is the ability to keep clearer use boundaries, approval boundaries, and accountability boundaries instead of treating every request as the same kind of input.

## Related pages

- [Approval Flow](approval-flow.md)
- [Remote Control Model](../core-concepts/remote-control-model.md)
- [Security Overview](../security/overview.md)
