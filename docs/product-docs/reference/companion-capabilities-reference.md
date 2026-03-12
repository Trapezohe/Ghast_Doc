---
title: Companion 能力参考
---

# Companion 能力参考

## 当前协议声明

| 项 | 当前值 |
| --- | --- |
| protocolVersion | `2026-03-07` |
| `acp` | `true` |
| `mcp` | `true` |
| `cronReplay` | `true` |
| `diagnostics` | `true` |
| `approvalStore` | `true` |
| `runLedger` | `true` |
| `mediaNormalization` | `true` |

## 当前主要接口面

| 分组 | 当前接口示例 |
| --- | --- |
| Health | `/healthz` |
| Runtime | `/api/runtime/exec`、`/api/runtime/sessions` |
| Approvals | `/api/runtime/approvals` |
| MCP | `/api/mcp/servers`、`/api/mcp/tools` |
| Diagnostics | `/api/system/diagnostics`、`/api/system/self-check` |
| Cron | `/api/cron/jobs`、`/api/cron/pending` |

## 相关页面

- [MCP Servers](../companion/mcp-servers.md)
- [诊断与自检](../companion/diagnostics-and-self-check.md)
