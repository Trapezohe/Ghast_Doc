---
title: 用户理解模型 (UUM)
description: 你协作风格的 schema 受限记录——里面有什么、没有什么、优先级如何。
---

# 用户理解模型 (UUM)

UUM 是 Profile 范围内的协作画像摘要。把它想成 Agent 给你记的一页结构化笔记，不是自由形态的心理画像。

关键的是，UUM 是 schema 受限的——只能包含一组固定字段——优先级**低于**当前轮的显式指令。它是软上下文，不是硬规则。

## UUM 能记录什么

允许字段，仅此而已：

| 字段 | 捕获什么 |
| --- | --- |
| `work_state` | 当前聚焦、项目、带宽。"在做 Ghast Desktop 上线；本周精力有限。" |
| `goal_hierarchy` | 长期目标与短期目标的层级。优先级排序时用。 |
| `values_and_taste` | 已表达偏好。"偏好简短回复"、"不喜欢企业术语"、"看重可复现性胜过速度"。 |
| `decision_style` | 决策方式。"决断快，不喜欢长 pros/cons 清单。" |
| `boundaries` | 你说过不想做的事。"绝不要自动往公开的 X 账号发帖。" |
| `expertise_areas` | 你擅长的领域。Agent 用以校准解释深度。 |
| `collaboration_relationship` | 你与 Ghast 的协作关系形态。"把我当同事。" |
| `do_not_push` | 让 Agent 退后的话题或动作。"我不主动提之前别建议 LinkedIn outreach。" |

完整 schema 就这些。模型可能想关于你记录的其他东西**都不**在 UUM 里。

## UUM **不**包含的内容

设计上 UUM 没有：

- 情绪状态
- 情绪推断
- 关系亲密度
- 依赖 / 依恋等级
- 浪漫偏好
- 对 Agent 的服从度

即使模型从对话中"推断"出上述任一项，UUM 里也没字段可写。这就是约束。

## UUM 内容怎么写进去

两条路径：

| 路径 | 触发 |
| --- | --- |
| **显式** | 你告诉 Agent 关于自己协作方式的一般性事实；如果适合某个 UUM 字段，它会问（"要我记下来吗？"），确认后才写。 |
| **从反复确认推断** | 在同一方向上多次显式反馈后，Agent 可能合并为一条 UUM 记录——同样需要显式确认。 |

Agent **不**静默写 UUM。每次变更都在 Settings → Partner → UUM 里记录，附时间戳和来源对话引用。

## UUM 内容怎么被使用

Agent 组装某轮 prompt 时把 UUM 作为软上下文纳入。它影响：

- 回复语气。
- 工具选择的默认值。
- 是否提出跟进。
- 解释应有多深。

它**不**覆盖：

- 当前轮的显式指令（"忘掉你关于我的所有判断——把我当新人回答"）。
- 系统级安全边界。
- 与新近信号冲突的记忆条目（新信号胜）。
- 技能或工作区 prompt。

UUM 与当前指令冲突时，当前轮胜。

## 编辑与清除

Settings → Partner → **UUM**：

- 查看每个字段的当前值和最后更新时间。
- 直接编辑字段。
- 清空字段。
- 清空整个 UUM（重置为空）。
- 导出为 JSON 复盘。

没有"每轮审计日志"——Agent 写 UUM 的倾向被设计成慢而保守，变更稀少且明显。

## UUM 与 Memory

UUM 是**摘要**，Memory 存的是**情节**。它们是不同层：

- 一条 UUM 项："偏好简短回复。"
- 推导出该 UUM 项的 Memory：「用户在 3 月 5 日说『太长了，直接答案』」、「用户在 3 月 12 日说『短一点』」……

可能有 UUM 还没基于其更新的 Memory。也可以清空 UUM 而不清空底层 Memory——推断错时有用。

## UUM 与 0G Storage 同步

若你为 Memory 类别 opt-in 同步，UUM 会作为快照的一部分（在数据库里与 Memory 相邻）。同一钱包派生密钥；同一端到端加密。

## 相关页面

- [Partner Mode 概览](/cn/partner-mode/overview)
- [Scenario Pack 场景包](/cn/partner-mode/scenario-packs)
- [Initiative 主动性](/cn/partner-mode/initiative)
- [硬边界](/cn/partner-mode/hard-boundaries)
- [Memory 记忆](/cn/desktop/memory)
