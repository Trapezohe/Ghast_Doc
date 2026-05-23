---
title: Slack
description: 配置 Slack 桥接——创建 Slack 应用、装到 workspace、映射频道。
---

# Slack

Slack 桥接把 Ghast 连到你装在 workspace 里的 Slack 应用。映射过的频道里的消息进入 Ghast 会话；Agent 回复通过 Slack 应用发回。

## 配置

### 1. 创建 Slack 应用

1. 到 [Slack API – Your Apps](https://api.slack.com/apps) 点 **Create New App** → **From scratch**。
2. 命名并选好要装它的 workspace。

### 2. 配置 scopes

在应用设置 **OAuth & Permissions → Scopes → Bot Token Scopes**：

- `chat:write`——发送消息
- `chat:write.public`——在未邀请的频道发送（可选）
- `channels:history`——读取频道消息
- `channels:read`——列出频道
- `groups:history`、`groups:read`——私有频道同上
- `im:history`、`im:read`、`im:write`——DM
- `mpim:history`、`mpim:read`、`mpim:write`——多人 DM
- `reactions:read`、`reactions:write`——双向 reaction
- `files:read`——读附件
- `users:read`——解析用户名

### 3. 开启 Socket Mode

1. **Socket Mode → Enable Socket Mode**。
2. 生成带 `connections:write` 的 **App-Level Token**。保存它（以 `xapp-` 开头）。
3. **Event Subscriptions → Enable Events**，订阅：
   - `message.channels`、`message.groups`、`message.im`、`message.mpim`
   - `reaction_added`、`reaction_removed`

### 4. 装到 workspace

1. **Install App → Install to Workspace**。
2. 批准所请求的 scope。
3. Slack 返回 **Bot User OAuth Token**（以 `xoxb-` 开头）。保存。

### 5. 把 token 加到 Ghast

1. Settings → Channels → **Slack**。
2. 同时粘贴 **App-Level Token**（`xapp-…`）和 **Bot User OAuth Token**（`xoxb-…`）。
3. 点 **Connect**。Ghast 列出你的频道和 DM。

### 6. 映射频道

对每个频道，选工作区和（可选）prompt/技能覆盖。非公开频道需要邀请机器人——`/invite @YourBot`。

## 支持的内容

| 方向 | 支持 |
| --- | --- |
| 入站文本 | 是 |
| 入站图片 / 文件 | 是 |
| 入站语音（Slack huddle / clip） | 有限——可用时给文本字幕 |
| Threads | 是——Agent 回复 thread 感知 |
| 出站文本 | 是 |
| 出站 Block Kit | 是（按钮、section、divider） |
| Reaction | 双向均支持 |

## Block Kit

对于多步决策，Agent 可用 Block Kit 搭交互卡片——按钮、下拉、divider——并响应点击。共享频道里的审批流很好用。

## 企业版考虑

- 对 Enterprise Grid workspace，在 workspace 级安装。当前不支持 Org 级安装。
- Slack 速率限制适用（大多数 API 是 tier-2：~50/分）。Ghast 遵守速率限制，内部排队。

## 隐私与撤销

- Token 加密存放在 Profile Vault。
- 在 Slack API 面板 **OAuth & Permissions → Revoke Tokens** 撤销。
- workspace 管理员也随时可撤销安装。

## 失败模式

| 症状 | 原因 | 处理 |
| --- | --- | --- |
| Connect 报 `not_authed` | Token 错、顺序错或已撤销 | 在 Slack API 面板重新生成，重粘两个 token |
| 机器人在频道里不发言 | 不在频道里 | 在频道里 `/invite @YourBot` |
| 入站事件为空 | 没启用 Event Subscriptions | 启用 Events 和 message 类 scope |
| 回复慢 | 触发速率限制 | 等；Ghast 会带退避重试 |

## 相关页面

- [远程消息通道概览](/cn/remote-channels/overview)
- [审批流](/cn/remote-channels/approval-flow)
