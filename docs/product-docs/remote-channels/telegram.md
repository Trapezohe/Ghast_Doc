---
title: Telegram
description: 配置 Telegram 桥接——建机器人、粘贴 token、把聊天映射到工作区。
---

# Telegram

Telegram 桥接把 Ghast 连到你拥有的一个 Telegram 机器人。你映射过的聊天里的消息会路由进 Ghast 会话；Agent 的回复通过机器人发回。

## 配置

### 1. 创建一个 Telegram 机器人

1. 在 Telegram 里给 `@BotFather` 发消息。
2. 发送 `/newbot`。
3. 给机器人起一个显示名和唯一的 `_bot` 用户名。
4. BotFather 回复 **HTTP API Token**（形如 `123456789:ABCdefGHI…`）。复制下来。

（可选但推荐）用 `/setprivacy → Disable` 把机器人的隐私模式关掉，这样机器人在群里能看到所有消息，而不仅仅是命令。

### 2. 把 token 加到 Ghast

1. 打开 Settings → Channels → **Telegram**。
2. 把 token 粘贴到 **Bot Token**，点 **Connect**。
3. Ghast 测试 token，并显示机器人用户名与 ID。

### 3. 把机器人邀请到聊天

**私聊**：让 BotFather 的机器人发消息，或让你的用户直接和机器人开始聊天（`/start`）。

**群聊**：像加普通用户一样把机器人加进群。想让它看所有消息就关掉隐私模式。

### 4. 把聊天映射到工作区

至少有一个聊天与机器人交互过后，Ghast 的 Telegram 面板会列出来。对每个聊天：

1. 从下拉里选一个工作区。
2.（可选）覆盖 system prompt 或默认技能集。
3. 保存。

映射过的聊天即时开始把消息路由进 Ghast。

## 支持的内容

| 方向 | 支持 |
| --- | --- |
| 入站文本 | 是 |
| 入站照片 | 是（视觉模型可读取） |
| 入站语音 | 是（先用 Whisper 转录再喂 Agent） |
| 入站文件 | 是（用对应 viewer 渲染） |
| 入站贴纸 | 提取为 alt 文本 |
| 出站文本 | 是，Markdown 渲染 |
| 出站语音 | 是（通过 TTS） |
| 出站附件 | 是（受 Telegram 文件大小上限限制） |
| Reactions | 双向均支持 |

## 群聊行为

群里桥接遵守**被授权执行者**模型：

- 你标为 actor 的用户可向 Agent 派活。
- 非 actor 的消息会被观察（进入会话上下文）但不触发 Agent 动作，除非显式 @ 提及。

actor 在按聊天配置中设置。默认：无 actor → Agent 视该聊天为观察模式。

## 隐私与撤销

- Bot token 加密存放在 Profile Vault。
- 机器人只能看到你把它加进去的聊天。把它移出聊天即切断该聊天的桥接。
- 怀疑泄漏时，到 BotFather 用 `/revoke` 重发 token，在 Ghast 设置里更新。

## 失败模式

| 症状 | 原因 | 处理 |
| --- | --- | --- |
| 机器人连上但收不到群消息 | 隐私模式开了 | BotFather → `/setprivacy → Disable` |
| Token 被拒 | 错的 token / 已撤销 | 用 `https://api.telegram.org/bot<token>/getMe` 自查 |
| 语音消息没转录 | Whisper 模型未下载 | Settings → Whisper → 选模型并等下载 |
| 回复发到错的聊天 | 聊天未映射，或映射到了另一个工作区 | Settings → Channels → Telegram → 检查映射 |

## 相关页面

- [远程消息通道概览](/cn/remote-channels/overview)
- [审批流](/cn/remote-channels/approval-flow)
- [语音输入与输出](/cn/desktop/voice)
