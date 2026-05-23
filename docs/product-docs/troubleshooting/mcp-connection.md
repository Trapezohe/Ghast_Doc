---
title: MCP 连接
description: 诊断 MCP 服务连接、OAuth、工具问题。
---

# MCP 连接

按症状索引。

## 服务连接失败——stdio

| 可能原因 | 处理 |
| --- | --- |
| `command` 路径不存在 | 核对绝对路径；终端里 `which <command>` 验证 |
| 命令需要的环境变量没配 | 加到 `env` 里；secret 用 `$KEYCHAIN:name` |
| 子进程立刻退出 | 用同样参数手动跑该命令；看 stderr |
| 工作目录错 | 显式设 `cwd` |

## 服务连接失败——URL

| 可能原因 | 处理 |
| --- | --- |
| URL 不可达 | 同机 `curl <url>` 验证；查防火墙 / 代理 |
| 传输错 | 依次试 `sse`、`streamable-http`、`http` |
| TLS 错误 | 服务证书必须有效；不接受自签证书 |
| header / token 错 | 核对服务期望的 header 格式 |

## OAuth 流程没完成

| 可能原因 | 处理 |
| --- | --- |
| 浏览器没回 Ghast | 与 Google OAuth 同源——Ghast 的 deep-link handler 可能要重新注册；重装 Ghast |
| Redirect URI 不匹配 | OAuth 服务的 redirect 必须匹配 Ghast 的 deep link |
| Scope 错 | 对照服务文档核对 `scopes` 列表 |

## 连接后工具没出现

| 可能原因 | 处理 |
| --- | --- |
| 服务连上但 `tools/list` 失败 | 重启服务；看 stderr 中的 MCP 错误 |
| 工具注册竞态 | 重开 Composer；工具在打开时刷新 |
| `defaultDisabled` 排除了它们 | Settings → MCP → [服务] → 在工具默认值里启用 |

## 工具调用返回错误

| 可能原因 | 处理 |
| --- | --- |
| 服务端错误（真实失败） | 看对话里的错误卡片——原样的服务消息 |
| 服务端权限缺失（如路径在允许根之外） | 重新配置服务允许的路径 |
| 超时 | 长跑工具调用有按调用超时；改成分块工具更稳 |

## 连接成功但工具列表为空

| 可能原因 | 处理 |
| --- | --- |
| 服务不暴露任何工具 | 部分 MCP 仅 resource；看服务提供什么 |
| Manifest 不匹配 | 更新服务到现行 MCP 规范 |

## OAuth token 过期

| 可能原因 | 处理 |
| --- | --- |
| Access token 失效 | Refresh token 应自动续；不行就点 Settings 里的 **Reconnect** |
| 服务侧吊销了 refresh token | 重新走 OAuth |

## Stdio 服务吃 CPU

| 可能原因 | 处理 |
| --- | --- |
| 子进程异常 | 用 `ps aux | grep <command>` 找出；重启或移除 |
| 服务里有 tight polling | 服务侧 bug——向服务维护者报告 |

## 相关页面

- [MCP 服务](/cn/desktop/mcp-servers)
- [参考：MCP 配置](/cn/reference/mcp-configuration)
- [ACP 与 Agent 通信](/cn/desktop/acp)
