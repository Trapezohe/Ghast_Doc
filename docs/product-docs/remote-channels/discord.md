---
title: Discord
description: 配置 Discord 桥接——建机器人、邀请进服务器、映射频道。
---

# Discord

Discord 桥接把 Ghast 连到你拥有并邀请进服务器的 Discord 机器人。映射过的频道消息流入 Ghast 会话；Agent 回复通过机器人发回。

## 配置

### 1. 创建 Discord 应用与机器人

1. 到 [Discord 开发者面板](https://discord.com/developers/applications) 点 **New Application**。
2. 命名并创建。
3. 左侧栏点 **Bot**。
4. 如有需要点 **Add Bot**。
5. 在 **Token** 处点 **Reset Token**（新建的可直接 **Copy**）。保存 token。
6. 在 **Privileged Gateway Intents**，启用 **Message Content Intent**（在非 mention 上下文读取消息文本时必需）。

### 2. 邀请机器人到服务器

1. 在开发者面板，到 **OAuth2 → URL Generator**。
2. Scopes：勾 **bot** 与 **applications.commands**。
3. Bot Permissions：至少 **Read Messages/View Channels**、**Send Messages**、**Embed Links**、**Attach Files**、**Add Reactions**、**Read Message History**、**Use Slash Commands**。
4. 复制生成的 URL，在浏览器打开，授权机器人进你的服务器。

### 3. 把 token 加到 Ghast

1. Settings → Channels → **Discord**。
2. 粘贴 bot token，点 **Connect**。
3. 连接成功后 Ghast 列出该机器人能看到的所有服务器与频道。

### 4. 映射频道

为每个想让 Agent 响应的频道：

1. 选一个工作区。
2.（可选）配置 prompt 覆盖与默认技能。
3. 保存。

## 支持的内容

| 方向 | 支持 |
| --- | --- |
| 入站文本 | 是 |
| 入站图片 | 是（视觉模型） |
| 入站语音（Discord 语音消息） | 是（已转录） |
| 入站文件 / embed | 是 |
| Thread 回复 | 是——Agent 把 thread 当作有范围的对话 |
| 出站文本 | 是，含 Discord 的 Markdown 子集 |
| 出站 embed | 是（链接预览、附件） |
| Reaction | 双向均支持 |

## Thread

Discord thread 是一等公民。Agent 在 thread 里回复后，后续 Agent 活动都留在该 thread 里。这是"在子 thread 里长对话又不干扰主频道"的正确形态。

## 斜杠命令

如果你在机器人设置里注册了 application commands，Agent 也能响应斜杠命令。斜杠命令适合一次性、结构化请求（"/translate this message"）。

## 隐私与撤销

- Bot token 加密存放在 Profile Vault。
- 机器人只能看到被邀请进的服务器。
- 通过开发者面板 Reset Token 撤销，并在 Ghast 更新。
- 从服务器移除：服务器主在 Server Settings → Integrations 移除机器人。

## 失败模式

| 症状 | 原因 | 处理 |
| --- | --- | --- |
| 机器人连上但看不到消息 | 没开 Message Content Intent | 开发者面板 → Bot → Privileged Gateway Intents |
| 机器人不能在频道发言 | 机器人角色缺 **Send Messages** 权限 | Server Settings → Roles |
| Embed 不渲染 | 缺 **Embed Links** 权限 | 同上 |
| 斜杠命令不出现 | OAuth2 没勾 `applications.commands` | 同时勾两个 scope 重邀请 |

## 相关页面

- [远程消息通道概览](/cn/remote-channels/overview)
- [审批流](/cn/remote-channels/approval-flow)
- [通道支持矩阵](/cn/remote-channels/support-matrix)
