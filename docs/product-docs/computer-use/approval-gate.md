---
title: 每应用审批 Gate
description: 每应用审批流程如何工作，"仅本次"与"始终允许"具体做什么。
---

# 每应用审批 Gate

给 Ghast 授予辅助功能后，守护进程**技术上**可以驱动任何应用。审批 Gate 是上面这层："即使守护进程做得了，没你对**这个应用**说 yes 之前也不做。"

Gate 实现在 TypeScript 层（`computer-use-approval-gate.ts`），不是在 Swift 守护进程里。守护进程在它下面有一份独立的硬黑名单——见 [安全边界](/cn/computer-use/safety-boundaries)。

## Gate 何时触发

Gate 对**修改型动作**触发——会改变其他应用状态的动作：

- `click`
- `type`
- `press_key`
- `drag`
- `set_value`
- 基于 AppleScript 的 intent 派发（Calendar 创建、Mail 发送等）

只读动作完全跳过 Gate：

- `skyshot`
- `read`
- `permissions`
- `list_*`

也就是说：截屏与检查永远免费；修改永远审批。

## 弹窗长什么样

当修改型动作针对一个新应用：

1. Composer 弹出 modal：**「允许 Ghast 在 [应用名] 中 [click / type / drag]？」**
2. 三选项：**仅本次**、**始终允许**、**拒绝**。
3. 30 分钟无操作则超时，按拒绝处理。

## 仅本次 vs 始终允许

| 选项 | 效果 |
| --- | --- |
| **仅本次** | 当前动作通过。同一应用下一次修改型动作再次触发 Gate。 |
| **始终允许** | 当前动作通过**并**把该应用加入 Profile 级审批缓存。后续对该应用的修改型动作静默放行。 |
| **拒绝** | 动作返回带类型错误。下次尝试再次触发 Gate。 |

缓存是按 Profile 的，不是全局。切换 Profile 时 Gate 清空，需重新确认。可以在 Settings → Computer Use 里清除或撤销单应用授权。

## 始终允许后仍会再次询问的情况

即使勾选了始终允许，Gate 也会在以下情况再次触发：

- 动作类型变了（你允许了 click，Agent 现在要 drag）。
- Bundle ID 变了（少数应用在略微不同的 bundle 下重启）。
- 你在 Settings 里显式清除了授权。
- 该应用之后被加入守护进程黑名单（罕见——一般要通过更新才会出现）。

## 严格审批模式 (Strict Approval)

Settings → Computer Use → **Strict Approval** 改变缓存行为：始终允许变成仅本次。每次修改型动作都重新询问。

合理触发：

- 学习 Agent 行为期间想审视每一次变更。
- 在录制或调试。
- 在敏感流程中，任何偏离都是风险。

## 只读的画中画 (PIP)

Settings → Computer Use → **PIP Monitor** 打开一个小浮窗，镜像守护进程当前在做什么。它**不**拦截任何动作；仅用于观测。第一次给 Always 授权时想看实际执行了什么很有用。

## 拒绝后发生什么

被拒绝的动作向 Agent 返回 `approval_denied`。Agent 通常会：

- 报告（"没你的批准我改不了 Mail——要授权吗？"）
- 提议替代方案（"我可以先 `dry_run` 起草一份草稿。"）
- 或停下来等待。

可以重新提示来重试，也可以在 Settings 里预先授权。

## 动作日志

每次经过 Gate 的动作都记录在 Computer Use 动作日志里（Settings → Computer Use → Action Log），包括：

- 时间戳
- 动作类型
- 目标 bundle ID
- 审批状态（仅本次 / 始终允许 / 拒绝 / 超时）
- 结果（成功 / 错误码）

日志是 Profile 级本地的，不同步。可以导出为 JSON 复盘。

## 相关页面

- [Computer Use 概览](/cn/computer-use/overview)
- [macOS 权限](/cn/computer-use/macos-permissions)
- [内置应用 Playbook](/cn/computer-use/built-in-playbooks)
- [安全边界](/cn/computer-use/safety-boundaries)
- [安全：Computer Use 边界](/cn/security/computer-use-boundary)
