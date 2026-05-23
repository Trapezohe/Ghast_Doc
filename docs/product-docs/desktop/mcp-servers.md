---
title: MCP 服务
description: 接入 Model Context Protocol 服务，给 Agent 暴露外部工具。
---

# MCP 服务

Model Context Protocol（MCP）是一个开放协议，把外部进程的工具与资源暴露给 AI Agent。Ghast 是 MCP 一等公民客户端——任何 MCP 兼容服务接入后，其工具立刻出现在 Composer 的工具开关里。

## 可以接入什么

两种配置风格：

### Stdio 服务（本地子进程）

桌面客户端把命令作为子进程拉起；通信走 stdin/stdout。

```json
{
  "servers": {
    "postgres": {
      "command": "/usr/local/bin/postgres-mcp",
      "args": ["--db", "production"],
      "env": { "PGPASSWORD": "$KEYCHAIN:postgres" }
    }
  }
}
```

适合本地工具——文件系统、数据库、内部 CLI、自定义 shim。

### URL 服务（基于 HTTP）

通过 HTTPS 连接的远端 MCP 服务，三种传输：

| 传输 | 用在哪 |
| --- | --- |
| **SSE** | 较老的基于 Server-Sent Events 的 HTTP MCP 服务 |
| **Streamable HTTP** | 较新的使用 chunked HTTP 流的 MCP 服务 |
| **Plain HTTP** | 简单请求/响应风格的 MCP 端点 |

```json
{
  "servers": {
    "remote-api": {
      "url": "https://mcp.example.com/api",
      "headers": { "Authorization": "Bearer $VAULT:my-token" }
    }
  }
}
```

## 接入一个服务

1. **打开** Settings → MCP。
2. **点 Add Server**，选 stdio 或 URL。
3. **填入**命令 / URL，以及任何 auth header 或环境变量。
4. **测试连接**。Ghast 完成 `initialize` 握手并列出发现的工具。
5. **保存**。服务即时生效。

如果服务要走 OAuth（某些托管 MCP 需要）：

1. 点 Connect 在系统浏览器中打开 OAuth 流。
2. 在第三方 UI 中完成授权。
3. 回到 Ghast——OAuth token 自动捕获并存入 Profile Vault。

## 工具如何出现在 Composer 中

服务接入后：

- 它的工具以 `<服务名>__<工具名>` 形式出现在 Composer 工具开关里。
- Agent 可像调用任何内置工具一样调用它们。
- 结果在对话里以可折叠卡片渲染。

可以按轮次开关具体工具，也可在 Settings → MCP 里设默认值。

## 资源 (Resources)

MCP 也支持*资源*——服务暴露的只读 blob（文件、文档、仪表盘）。已连接服务的资源可通过 `@` mention picker 在对话中引用，Agent 可以读取它们作为上下文。

## 移除或轮换服务

| 操作 | 效果 |
| --- | --- |
| **禁用** | 工具与资源在 Composer 里隐藏；子进程在下次重启前继续跑 |
| **移除** | 子进程被杀，工具移除，服务记录删除 |
| **轮换 auth** | 编辑 env var 或 header value 后重连 |

通过 Ghast OAuth 流签发的 token 可从第三方服务侧吊销；下一次调用会失败并触发重新授权。

## 安全要点

- MCP 服务与桌面应用同权限运行（没有额外沙箱）。
- Stdio 服务是一个子进程；像评估任何本地二进制一样评估其可信度。
- URL 服务只看到 Agent 在工具调用中发送的内容。它无法访问你的记忆或钱包。
- OAuth token 和其他 secret 一样，加密存放在 Profile Vault。

完整模型见 [安全：本地执行边界](/cn/security/overview)。

## 相关页面

- [对话与输入框](/cn/desktop/chat-and-composer)
- [Skills 技能](/cn/desktop/skills)
- [ACP 与 Agent 通信](/cn/desktop/acp)
- [参考：MCP 配置](/cn/reference/mcp-configuration)
- [故障排查：MCP 连接](/cn/troubleshooting/mcp-connection)
