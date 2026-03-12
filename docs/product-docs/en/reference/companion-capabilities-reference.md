---
title: Companion Capabilities Reference
description: Reference summary of the current Companion protocol declarations and major interface groups.
---

# Companion Capabilities Reference

## Current protocol declaration

| Item | Current value |
| --- | --- |
| `protocolVersion` | `2026-03-07` |
| `acp` | `true` |
| `mcp` | `true` |
| `cronReplay` | `true` |
| `diagnostics` | `true` |
| `approvalStore` | `true` |
| `runLedger` | `true` |
| `mediaNormalization` | `true` |

## Current major interface groups

| Group | Current interface examples |
| --- | --- |
| Health | `/healthz` |
| Runtime | `/api/runtime/exec`, `/api/runtime/sessions` |
| Approvals | `/api/runtime/approvals` |
| MCP | `/api/mcp/servers`, `/api/mcp/tools` |
| Diagnostics | `/api/system/diagnostics`, `/api/system/self-check` |
| Cron | `/api/cron/jobs`, `/api/cron/pending` |

## Related pages

- [MCP Servers](../companion/mcp-servers.md)
- [Diagnostics and Self-Check](../companion/diagnostics-and-self-check.md)
