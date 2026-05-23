---
title: ACP 与 Agent 通信
description: Ghast 如何在对话内挂载子 Agent 会话。
---

# ACP 与 Agent 通信

ACP——Agent Communication Protocol——是 Ghast 在对话里挂载子 Agent 的方式。MCP 暴露的是**工具**，ACP 暴露的是**一个完整的 Agent**：有自己的状态，可以调自己的工具，在对话里像同伴一样响应。

Ghast 通过 `@mcpc-tech/acp-ai-provider` 集成使用 ACP。本页讲解 ACP 会话在你眼里长什么样、什么时候应该用。

## 子 Agent 与工具的区别

| 概念 | 生命周期 | 适合 |
| --- | --- | --- |
| **MCP 工具** | 每次调用一回；不记得过往调用 | 无状态操作："拉这个 URL"、"查这张表" |
| **ACP 子 Agent** | 跨轮持续的有状态会话 | 多步骤委托工作："让设计 Agent 起草这一页" |

子 Agent 有自己的上下文、自己的工具、自己的模型。主 Agent 像跟同伴对话一样跟它沟通——下 prompt、读响应、可移交控制权与收回。

## 什么时候用

合理触发：

- 任务有更专精的子 Agent 适配（例如重构用 coding agent、文献扫读用 research agent）。
- 想让工作"在后台"进行，不让子 Agent 的中间步骤干扰主线程。
- 子 Agent 有主 Agent 不该携带的凭据或上下文。

如果只是一次工具调用或一个简短 prompt，普通 MCP / 内置工具更合适。ACP 有配置成本，琐碎工作不要用。

## 配置一个 ACP 供应商

Settings → MCP → ACP：

1. **添加供应商**——命名并填配置（stdio 风格填 command，HTTP 风格填 URL）。
2. **测试连接**——Ghast 完成 `initialize` 握手。
3. **保存**。

配置完成后，在 Composer 中 ACP 供应商以可附加到当前轮次的会话形式出现。

## 一个 ACP 会话在对话里长什么样

ACP 会话活动时，你看到：

- 响应卡片里有一个嵌套的"子 Agent" 通道，自己有流式输出。
- 子 Agent 的工具调用渲染在该通道里，不与主线程混淆。
- 移交是显式的：主 Agent 等候，子 Agent 跑，子 Agent 报告完成时控制权归还。

可以像停主 Agent 一样停子 Agent——Esc 或子 Agent 卡片上的 Stop 按钮。

## 隔离与隐私

子 Agent 只接收主 Agent 显式移交的上下文。默认情况下你的记忆不会暴露给子 Agent。子 Agent 工具的结果不会写回记忆，除非主 Agent 明确决定写。

## 限制

- 每个对话一个活跃 ACP 会话。要换则先结束当前会话再起新的。
- ACP 子 Agent 没有 Computer Use 守护进程或 Browser Relay 扩展的访问权。这些是主 Agent 专属。

## 相关页面

- [MCP 服务](/cn/desktop/mcp-servers)
- [对话与输入框](/cn/desktop/chat-and-composer)
- [参考：MCP 配置](/cn/reference/mcp-configuration)
