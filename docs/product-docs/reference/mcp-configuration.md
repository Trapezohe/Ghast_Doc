---
title: MCP 配置
description: MCP 服务配置 schema 的形状——字段、传输、特殊功能。
---

# MCP 配置

本页是 MCP 服务配置 schema 的参考。操作性配置见 [MCP 服务](/cn/desktop/mcp-servers)。

## 顶层形状

MCP 配置在 Settings → MCP，并持久化到 Profile 的 SQLite 数据库。概念上：

```json
{
  "servers": {
    "<name>": { /* 服务配置 */ }
  }
}
```

每个服务一个唯一 `name`。该名字成为 Composer 工具开关里的工具 ID 前缀（`<name>__<tool>`）。

## Stdio 服务

本地命令：

```json
{
  "servers": {
    "filesystem": {
      "command": "/usr/local/bin/fs-mcp",
      "args": ["--root", "/Users/me/Documents"],
      "env": {
        "DEBUG": "1",
        "TOKEN": "$KEYCHAIN:fs-token"
      },
      "cwd": "/Users/me/Documents",
      "enabled": true
    }
  }
}
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `command` | 是 | 可执行文件路径 |
| `args` | 否 | argv 列表 |
| `env` | 否 | 环境变量；`$KEYCHAIN:name` 从 Keychain 读，`$VAULT:name` 从 Profile Vault 读 |
| `cwd` | 否 | 工作目录 |
| `enabled` | 否 | 默认 true |

## URL 服务

远端 MCP 端点：

```json
{
  "servers": {
    "remote-api": {
      "url": "https://mcp.example.com/api",
      "transport": "sse",
      "headers": {
        "Authorization": "Bearer $VAULT:my-token"
      },
      "enabled": true
    }
  }
}
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `url` | 是 | HTTPS 端点 |
| `transport` | 否 | `sse`（旧 MCP 默认）、`streamable-http`、`http` |
| `headers` | 否 | 静态或 vault 插值 header |
| `oauth` | 否 | 存在则首次连接触发 OAuth；结果 token 入 vault |
| `enabled` | 否 | 默认 true |

## OAuth 启用的 URL 服务

```json
{
  "servers": {
    "calendar-mcp": {
      "url": "https://calendar.example.com/mcp",
      "oauth": {
        "authorizationUrl": "https://calendar.example.com/oauth/authorize",
        "tokenUrl": "https://calendar.example.com/oauth/token",
        "clientId": "ghast-desktop",
        "scopes": ["calendar.read", "calendar.write"]
      },
      "enabled": true
    }
  }
}
```

点 Connect 时 Ghast 会：

1. 在系统浏览器打开 `authorizationUrl`。
2. 捕获重定向。
3. 用 code 到 `tokenUrl` 换 token。
4. 把 token（及 refresh token，如有）存入 Profile Vault。
5. 把 token 加到后续每个请求。

## 工具默认值

服务接入后其工具自动出现在 Composer 工具开关。可按服务设默认值：

```json
{
  "servers": {
    "filesystem": {
      "command": "/usr/local/bin/fs-mcp",
      "defaultEnabled": ["read_file", "list_dir"],
      "defaultDisabled": ["delete_file"]
    }
  }
}
```

这些预填开关状态。用户仍可按轮次覆盖。

## 资源 (Resources)

服务暴露 resource 时在 Composer 的 `@` mention picker 里以 `@<服务名>/<资源>` 出现。资源访问只读。

## Secret 处理

Vault 插值（`$VAULT:name`）和 Keychain 查询（`$KEYCHAIN:name`）让 token 不出现在 JSON 里。OAuth 流程写入的 token 加密保存，不出现在 Settings 可见的 JSON 配置中。

## 常见模式

| 模式 | 例子 |
| --- | --- |
| 本地 CLI 包装 | `"command": "/usr/local/bin/git-mcp"` |
| Python 脚本 | `"command": "python", "args": ["-m", "mymcp"]` |
| Node 脚本 | `"command": "node", "args": ["/path/to/mcp.js"]` |
| Bun 打包脚本 | `"command": "/opt/homebrew/bin/bun", "args": ["run", "/path/to/mcp.ts"]` |
| 托管 MCP（无 OAuth） | `"url": "https://api.example.com/mcp", "headers": { "Authorization": "Bearer $VAULT:api-key" }` |
| 托管 MCP（OAuth） | `"url": "...", "oauth": { ... }` |

## 限制

- 同时连接服务数：实际无硬上限，但 ~20 个后性能开始下降。
- 每服务工具数：无硬上限。
- 每服务资源数：同上。

## 相关页面

- [MCP 服务](/cn/desktop/mcp-servers)
- [设置项参考](/cn/reference/settings-reference)
- [故障排查：MCP 连接](/cn/troubleshooting/mcp-connection)
