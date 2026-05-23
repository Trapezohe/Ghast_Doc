---
title: 飞书 (Lark)
description: 配置飞书 / Lark 桥接——建企业应用、装到 workspace、映射聊天。
---

# 飞书 (Lark)

飞书桥接把 Ghast 连到你装在租户里的飞书企业应用。映射过的聊天路由进 Ghast 会话；Agent 回复以飞书消息或交互卡片形式发回。

## 配置

### 1. 创建飞书应用

1. 到 [飞书开放平台](https://open.feishu.cn/) 用属于你租户的开发者账号登录。
2. 新建**企业自建应用**。
3. 在基本信息页记下 **App ID** 和 **App Secret**。

### 2. 配置能力

在应用设置：

- **权限管理**：申请发送消息（`im:message`）、读消息（`im:message:readonly`）、上传文件（`im:resource`）、读取群/用户信息（`im:chat`、`contact:user.base:readonly`）等权限。
- **事件与回调**：启用事件订阅，选 **WebSocket / 长轮询** 传输（Ghast 用 SDK 的轮询），订阅：
  - `im.message.receive_v1`
  - `im.message.reaction.created_v1` / `.deleted_v1`（要 reaction 时）

### 3. 发布版本

飞书应用上线前需要管理员批准。提交带有所需权限的版本；租户管理员从管理后台批准。

### 4. 把凭据加到 Ghast

1. Settings → Channels → **Feishu**。
2. 粘贴 **App ID**、**App Secret**，以及应用配置要求的 **Verification Token** / **Encrypt Key**。
3. 点 **Connect**。桥接拿租户 token、校验权限、列出可用聊天。

### 5. 映射聊天

对每个聊天（群或 DM）选工作区和（可选）prompt/技能覆盖。要让机器人在群里收消息，需先把它加进群——群 → 设置 → 机器人 → 添加机器人。

## 支持的内容

| 方向 | 支持 |
| --- | --- |
| 入站文本 | 是 |
| 入站图片 / 文件 | 是 |
| 入站语音 | 是（若飞书提供音频则通过 Whisper 转录） |
| 出站文本 | 是 |
| 出站交互卡片 | 是（飞书卡片含按钮、字段、divider） |
| 出站文件 | 是 |
| Reaction | 是（已订阅时） |

## 交互卡片

飞书卡片格式很丰富——Ghast 能构造审批卡、带操作按钮的状态更新、结构化数据表，并响应用户对卡片按钮的点击。

## 隐私与撤销

- App ID / App Secret 加密存放在 Profile Vault。
- 在飞书管理后台撤销应用。
- 租户管理员随时可撤销。

## 失败模式

| 症状 | 原因 | 处理 |
| --- | --- | --- |
| `app_access_token_invalid` | App ID / Secret 错 | 在开发者控制台核对 |
| 收不到消息 | 事件订阅未配，或应用未发布 | 检查 **事件与回调**，确保有已审批版本 |
| 卡片按钮无响应 | 回调 URL 未设或 App Secret 错 | 核对事件订阅 |
| 发送提示「权限不足」 | 缺 `im:message` | 申请权限并重发版本 |

## 相关页面

- [远程消息通道概览](/cn/remote-channels/overview)
- [审批流](/cn/remote-channels/approval-flow)
- [通道支持矩阵](/cn/remote-channels/support-matrix)
