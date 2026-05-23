---
title: Partner Mode 概览
description: Partner Mode 是什么——带显式安全边界的长期协作层。
---

# Partner Mode 概览

Partner Mode 是 Ghast AI 的长期协作层。它校准 Agent 在长期使用中的呈现方式：语气、什么时候主动提醒、记住你怎么工作、怎么在各频道里和你说话。

它**不是**一个关系类产品。不做亲密度评分、不做情绪推断、不用愧疚驱动参与度。实现严格遵循 [硬边界](/en/partner-mode/hard-boundaries) 列出的限制。

## Partner Mode 增加什么

启用 Partner Mode 后，三件事变得可用：

- **场景包**——`work`、`companion`、`quiet`——设定 Agent 默认语气与主动性风格。
- **主动性引擎**——Agent 可在有真实可观察上下文支撑时偶尔提出后续跟进、未结流提醒、复盘建议。
- **用户理解模型 (UUM)**——Profile 范围、schema 受限的协作画像（偏好、边界、决策风格），Agent 用它校准响应。

你可以只启用其中一部分。也可以全部关掉——Ghast 作为普通聊天助手仍工作得好好的。

## 入口

Settings → **Partner**。一个主开关门禁全部；下面的开关启用每一项。

应用其他地方能看到 Partner Mode 的影响：

- 对话回复中的语气微调。
- 主页可选的「今天」/「未结流」卡片。
- 消息桥接里的按频道人格提示。
- 定期的透明度卡片，展示 Partner Mode 当前在做什么。

## 三种场景包

| 场景包 | 什么时候选 |
| --- | --- |
| **`work`** | 聚焦工作伙伴。跟踪未结流、目标、deadline、显式跟进项。保守语气。 |
| **`companion`** | 更温和的对话伙伴。可与轻量的情绪表达状态配合（默认关闭——单独 opt-in）。不是亲密度产品。 |
| **`quiet`** | 低存在感执行者。最小主动性，紧凑回复。默认"做事，不多说"。 |

切场景包改变默认语气与主动性阈值。它不解锁本质上不同的能力。所有场景包遵守同一组硬边界。

## 你可以配置什么

- 主开关。
- 场景包。
- 主动性——什么触发主动出现、频率。
- 情绪表达——单独 opt-in（且仅在 `companion` 下有意义）。
- 按频道覆盖——例如 Slack 用 `work`、微信用 `quiet`。
- 隐私控件——UUM 可写入和读取的范围。
- 透明度视图——当前 Partner Mode 在做什么的实时读数。

## 隐私姿态

Partner Mode 本地优先。UUM 在你的 SQLite 数据库里。仅在你为相关记忆类别 opt-in 时才同步到 0G Storage。模型从不把 Partner Mode 状态发往远端服务，除非作为你已主动发起的推理调用的上下文。

## 什么时候启用

合理触发：

- 想让 Agent 记住你的协作方式，避免每会话重新解释。
- 想得到偶尔的、有锚点的跟进，而不是"问完即弃"的答案。
- 想给不同频道配不同人格。

只问一次性问题的用法，不需要 Partner Mode。

## 相关页面

- [Scenario Pack 场景包](/cn/partner-mode/scenario-packs)
- [Initiative 主动性](/cn/partner-mode/initiative)
- [用户理解模型 (UUM)](/cn/partner-mode/uum)
- [硬边界](/cn/partner-mode/hard-boundaries)
- [安全：Partner Mode 边界](/cn/security/partner-mode-boundary)
