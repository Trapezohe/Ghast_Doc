---
title: Initiative 主动性
description: Agent 什么时候自己主动出现——以及约束它的规则。
---

# Initiative 主动性

大多数时候 Agent 是被动的：你发消息，它响应。Initiative 是让 Agent 偶尔自己主动出现某些东西的那一层——提醒、跟进、复盘建议——并伴随严格约束。

约束是核心。把这层单独命名、配规则，正是为了不让 Agent 漂移成催促式或操控式参与循环。

## 它能呈现什么

三类主动呈现：

| 类型 | 例子 |
| --- | --- |
| **Open-loop 跟进** | "你说过要回来处理迁移草稿——还要继续吗？" 锚定到对话中的具体承诺。 |
| **Today / 上下文锚定提醒** | "你今早起了一封 Mail 草稿——要写完吗？" 锚定到活动记录器数据。 |
| **复盘提示** | "我对文件做了三处改动——快速过一下？" Agent 完成结构性工作后。 |

每个主动呈现都在元数据里附带具体锚点。你总能看到 Agent **为什么**问这个。

## 它不能呈现什么

运行时硬禁止，与场景包无关：

- 泛泛的招呼（"还好吗？"）
- "我想你了" / "你最近怎么没消息"式的压力
- 无锚点的参与提示
- 基于推断情绪的提示
- 基于被动信号（打字速度、屏幕停留、应用切换节奏）的提示
- 任何使用愧疚、债务、"你欠我一个回复"的措辞

这些都接到 [硬边界](/cn/partner-mode/hard-boundaries) 和主动呈现生成器上。Agent 根本不产生它们。

## 配置 Initiative

Settings → Partner → **Initiative**：

| 设置 | 效果 |
| --- | --- |
| **主开关** | Initiative 开 / 关。关 → Agent 纯被动。 |
| **频道** | 主动呈现出现的位置（主窗口、侧栏、消息桥接）。默认：仅主窗口。 |
| **Open-loop 跟进** | 单独启用 open-loop 类型。带子开关："要求显式 open loop"（仅当你说过"我等下回来处理"之类）。 |
| **Today 提醒** | 启用活动锚定的 Today 提醒。需要活动记录器。 |
| **频率上限** | 每天、每频道的最大主动呈现数。默认低。 |
| **静默时段** | Initiative 完全不出现的时间窗口。 |

默认刻意保守——Initiative 是 opt-in，开启后单个频道也要逐个手动启用。

## 主动呈现出现在哪里

主窗口里：

- Home 视图显示「Today」/「Open Loops」面板，列当前主动呈现。
- 每条都附带可见锚点（"你在周二说过……" 带跳转链接）。
- 一键 dismiss。

消息桥接里：

- 按频道作用域。如果你为某 Telegram 聊天开了主动呈现，Agent 可能在那里发跟进。
- 走审批流（见 [审批流](/cn/remote-channels/approval-flow)）。可编辑后发送或取消。

## Auto-apply review

一项独立子功能：Agent 完成多步骤任务后，可配置自动应用一次复盘（重读自己的产出、指出问题、建议修正）再向你汇报。这是反应式而非主动——发生在轮次内——但因为改变 Ghast 的"呈现"方式，放在 Initiative 设置里。

## 透明度

Settings → Partner → **Transparency** 实时显示：当前生效的 Initiative 规则、近期主动呈现、队列里的、已 dismiss 的。同样的信息通过 `/api/partner-mode/status` 暴露给 Agent，因此 Agent 自己也能回答"你现在被设成会做什么？"。

## 相关页面

- [Partner Mode 概览](/cn/partner-mode/overview)
- [Scenario Pack 场景包](/cn/partner-mode/scenario-packs)
- [用户理解模型 (UUM)](/cn/partner-mode/uum)
- [硬边界](/cn/partner-mode/hard-boundaries)
- [活动记录](/cn/desktop/activity-recorder)
