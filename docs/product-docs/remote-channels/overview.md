---
title: 远程消息通道概览
description: 同一个 Agent 跨 Telegram、Discord、Slack、飞书、微信——共有机制与各平台差异。
---

# 远程消息通道概览

桌面客户端内置 5 个消息平台的桥接，让**同一个 Agent**在你团队日常使用的应用里直接响应。本页讲共有机制，并指引到各平台的配置页。

## "桥接"是什么意思

桥接是 Ghast Desktop 与消息平台之间的一条长连接。映射过的频道收到消息时，桥接会：

1. 把它转发到 Ghast 会话（需要时新建一个）。
2. 用 Agent 处理，伴随平常的上下文（记忆、技能、工具）。
3. 把 Agent 的响应以平台原生格式发回频道。

桥接是双向的，因此你在平台里的 reaction 也能驱动 Agent 行为（比如点赞确认草稿）。

## 各桥接共有机制

| 机制 | 作用 |
| --- | --- |
| **频道映射** | 仅在 Settings → Channels 显式映射过的频道才被路由。未映射的消息忽略。 |
| **工作区绑定** | 每个频道映射到一个工作区。Agent 在该工作区的上下文里运行。 |
| **语音 I/O** | 入站语音用 Whisper 转录；出站回复可用 TTS 合成。 |
| **Reaction** | Agent 用 emoji reaction 表达"已读 / 处理中 / 完成"，避免长消息打扰。 |
| **按频道 prompt** | 每个频道可有自己的 system prompt、人格、默认技能集。 |
| **按频道记忆 scope** | 频道里生成的记忆可标记来源以便过滤。 |
| **被授权执行者 (Privileged actor)** | 群频道可显式列出"被允许的发起人"。非授权者的消息会被观察但不触发 Agent 动作。 |

## 五个平台

| 平台 | 鉴权 | 适合 |
| --- | --- | --- |
| **Telegram** | Bot Token（BotFather） | 私聊与群、语音消息、快速迭代场景 |
| **Discord** | Bot Token + OAuth2 | 服务器频道、thread 回复、embed、按角色使用 |
| **Slack** | OAuth2 Bot | 工作区频道、Block Kit、thread、企业使用 |
| **飞书 (Lark)** | 企业应用 OAuth2 | 国内/国际企业团队使用飞书、卡片化交互 |
| **微信** | 用官方 Clawbot 端点扫码登录个人微信账号 | 国内场景，让 Agent 以你的身份在普通 DM 与群里响应 |

各自有专页：

- [Telegram](/cn/remote-channels/telegram)
- [Discord](/cn/remote-channels/discord)
- [Slack](/cn/remote-channels/slack)
- [飞书 (Lark)](/cn/remote-channels/feishu)
- [微信](/cn/remote-channels/wechat)

## 一个典型流程

1. 平台侧准备好——Telegram / Discord / Slack / 飞书 各自建好 bot 或应用；微信用手机扫一下二维码即可。
2. Ghast Desktop **Settings → Channels → [平台]** 粘贴凭据。
3. 桥接连接，列出可用频道 / 聊天。
4. 你**映射**某个频道到一个工作区。
5.（可选）配置该频道的 prompt 与技能。
6. 消息开始路由。

## 审批流

对敏感动作——替你长回复、执行有副作用的工具、在群里回复非授权者——Agent **不**盲目动作。审批流在桌面客户端弹出确认卡，等你决策。

模型与触发条件见 [审批流](/cn/remote-channels/approval-flow)。

## 桥接**不会**做的事

- 不会发送到你没映射的频道。
- 不会把你未映射的远程对话归档进 Ghast。
- 不会向远程用户暴露 Ghast 记忆或钱包信息。
- 不会脱离桌面客户端运行——Ghast Desktop 没在跑，桥接就没在跑。

## 相关页面

- [Telegram](/cn/remote-channels/telegram)
- [Discord](/cn/remote-channels/discord)
- [Slack](/cn/remote-channels/slack)
- [飞书 (Lark)](/cn/remote-channels/feishu)
- [微信](/cn/remote-channels/wechat)
- [审批流](/cn/remote-channels/approval-flow)
- [通道支持矩阵](/cn/remote-channels/support-matrix)
