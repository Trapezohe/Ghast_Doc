---
title: 通道支持矩阵
description: 各桥接支持能力与差异的速览。
---

# 通道支持矩阵

本页是一个紧凑、可对比的参考。配置与安装见各平台专页。

## 入站

| 能力 | Telegram | Discord | Slack | 飞书 | 微信 |
| --- | --- | --- | --- | --- | --- |
| 文本 | ✓ | ✓ | ✓ | ✓ | ✓ |
| 图片 | ✓ | ✓ | ✓ | ✓ | ✓ |
| 语音（转录） | ✓ | ✓ | 部分 | ✓ | ✓ |
| 文件 / 附件 | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reaction 进 | ✓ | ✓ | ✓ | ✓ | 受限 |
| Thread 上下文 | n/a | ✓ | ✓ | n/a | n/a |

## 出站

| 能力 | Telegram | Discord | Slack | 飞书 | 微信 |
| --- | --- | --- | --- | --- | --- |
| 纯文本 | ✓ | ✓ | ✓ | ✓ | ✓ |
| Markdown | ✓ | ✓（子集） | ✓（mrkdwn） | n/a | n/a |
| 富卡片 / Block | n/a | Embed | Block Kit | 交互卡片 | n/a |
| 语音（TTS） | ✓ | ✓ | 部分 | ✓ | ✓ |
| 文件附件 | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reaction 出 | ✓ | ✓ | ✓ | ✓ | 受限 |
| 按钮 / 交互 | n/a | Embed 按钮 | Block Kit 按钮 | 卡片按钮 | n/a |

## 鉴权与安装

| 方面 | Telegram | Discord | Slack | 飞书 | 微信 |
| --- | --- | --- | --- | --- | --- |
| 创建 bot | BotFather | 开发者面板 | api.slack.com/apps | open.feishu.cn | 无——用你的个人微信账号 |
| 鉴权 | Bot token | Bot token + OAuth2 | OAuth2（xapp- + xoxb-） | App ID + Secret | 手机微信扫码 |
| 需要自建服务 | 否 | 否 | 否 | 否 | 否 |
| 特权 scope | 隐私模式 | Message Content Intent | 多个按通道 scope | 应用 scope + 管理员审批 | n/a——与你的微信账号同范围 |

## 各平台坑

| 坑 | 在哪 |
| --- | --- |
| **群隐私模式**——不关掉机器人在群里只看到命令 | Telegram |
| **Message Content Intent**——不开就看不到消息文本 | Discord |
| **QR session 可被踢下线**——你在手机上登出该设备即失效 | 微信 |
| **应用需管理员审批**——每次 scope 变更 | 飞书 |
| **Block Kit 嵌套限制**——actions 最多 5 个按钮、section 最多 10 个字段 | Slack |

## 默认审批行为

| 行为 | 默认 |
| --- | --- |
| 新映射频道首次回复需审批 | 开 |
| 长回复（>800 字符）需审批 | 开 |
| 带 `writes: true` 的工具调用需审批 | 开 |
| 群里非 actor 消息需审批 | 开 |
| Reaction 自动发 | 开 |
| 确认（"收到"）自动发 | 开 |

均可按频道调整。

## 相关页面

- [远程消息通道概览](/cn/remote-channels/overview)
- [审批流](/cn/remote-channels/approval-flow)
- 各平台配置：[Telegram](/cn/remote-channels/telegram) · [Discord](/cn/remote-channels/discord) · [Slack](/cn/remote-channels/slack) · [飞书](/cn/remote-channels/feishu) · [微信](/cn/remote-channels/wechat)
