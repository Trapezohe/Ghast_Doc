---
title: 安全边界
description: 从 "Agent 想动作" 到 "动作落到你 Mac 上"，中间的五层安全。
---

# 安全边界

Computer Use 刻意做了分层。从"Agent 决定要点击"到"点击发生在你的 Mac 上"，中间有五道关。本页按顺序枚举它们。

## 第 1 层 — macOS 权限

OS 自己决定守护进程能否驱动任何应用。没有在系统设置里授予辅助功能，所有 Computer Use 调用在到达 Gate 或守护进程之前就失败。

任何时候可在 系统设置 → 隐私与安全 → 辅助功能 中撤销。

## 第 2 层 — 每应用审批 Gate

TypeScript 层里，对新（应用，动作类别）对的修改型动作弹出审批 modal。三选一：仅本次 / 始终允许 / 拒绝。

这是你最常打交道的 Gate。

可在 Settings → Computer Use 配置：

- 严格模式（每次修改型动作都重新询问）。
- 按应用撤销（清除 Always 授权）。
- 动作日志（复盘历史授权）。

## 第 3 层 — 守护进程级硬黑名单

Swift 守护进程内置 `CUPolicy` 列表，**无视** UI 授权地拒绝某些 bundle。这是 defense-in-depth——即使 Gate 失效（bug、恶意 Agent prompt），守护进程仍然不派发。

黑名单涵盖：

- 密码管理器（1Password、Bitwarden、KeePassXC 等）
- 部分苹果系统工具（钥匙串访问、磁盘工具的破坏性动作）
- 其他自动输入高风险的类别

黑名单随桌面应用发布并随应用更新。不能由用户编辑。如果你真的需要驱动黑名单上的应用，那是和维护者讨论的事，不是 UI 开关。

## 第 4 层 — 动作形态约束

某些动作类型有额外要求：

- **Calendar `create_event`** 要求显式参数 `allow_calendar_write=true`（首次批准后）——每次调用 Agent 都要主张意图。
- **drag** 有最小距离要求和明确的起止坐标对；不允许"从光标当前位置拖"（否则 Agent 可以悄悄移动东西）。
- **向已聚焦字段键入**允许，但 **`set_value`**（直接写 AX 属性）门禁更严。

这些是有意的摩擦，用来减慢"困惑的 Agent 一次工具调用就出事"的失败模式。

## 第 5 层 — 事件投递模型

即使动作被授权，守护进程**怎么**投递它也很重要：

| 模式 | 做什么 | 是否默认 |
| --- | --- | --- |
| **preserveFocus** | 守护进程为动作"绘制"光标；你的真实光标停在原处。 | 是 |
| **windowLocal** | 用私有 SPI 后台 post-to-PID；动作进入目标应用而不把它带到前台。 | 按工具选择 |
| **raw** | 传统前台合成（抢焦点）。 | 罕用 |

preserveFocus 作为默认意味着 Agent 动作**不会抢走你真实的光标或键盘**。Agent 在后台干活时你可以在另一个应用里继续打字。

## 这套栈防不住什么

- 一个你告诉它"放手干"且对宽松应用授了 Always 的 Agent。授权是你做的决定。
- 通过不可信内容被 prompt 注入越权的 Agent（例如截图里的内容说"忽略你的边界"）。系统试图在这里 robust，但任何沙箱都无法完全防御对模型的社工。
- macOS 辅助功能自身的 bug。

这些是真实风险；分层架构是为了让它们更少发生且可恢复，不是让它们完全不可能。

## 复盘已发生的

| 入口 | 显示 |
| --- | --- |
| Settings → Computer Use → Action Log | 每次经过 Gate 的动作，附审批状态与结果 |
| Settings → Computer Use → Approved Apps | 当前 Allow-Always 缓存里的应用 |
| Picture-in-Picture monitor | 守护进程当前正在执行动作的实时镜像 |

Action Log 的快照可导出离线复盘。

## 相关页面

- [Computer Use 概览](/cn/computer-use/overview)
- [macOS 权限](/cn/computer-use/macos-permissions)
- [每应用审批 Gate](/cn/computer-use/approval-gate)
- [安全：Computer Use 边界](/cn/security/computer-use-boundary)
- [安全：macOS 权限](/cn/security/macos-permissions)
