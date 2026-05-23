---
title: Computer Use 边界
description: 从 Agent 意图到点击落到 Mac 上之间的五层安全。
---

# Computer Use 边界

Computer Use 安全栈的安全面摘要。操作性与按动作细节见 [Computer Use：安全边界](/cn/computer-use/safety-boundaries)。

## 五层

| 层 | 作用 |
| --- | --- |
| 1. macOS 辅助功能权限 | 没它，守护进程对任何应用都无能为力。 |
| 2. 每应用审批 Gate（UI） | 新应用上的首次修改型动作弹出 modal。仅本次 / 始终 / 拒绝。 |
| 3. 守护进程硬黑名单（`CUPolicy`） | 对某些 bundle（密码管理器、敏感工具）无视 UI 批准。 |
| 4. 动作形态约束 | 某些动作（Calendar 写、drag）需额外显式参数。 |
| 5. 事件投递模型 | 默认 `preserveFocus`，守护进程不抢你的真实光标 / 键盘。 |

层是有意冗余的。任一层失效（如自动批准的 UI bug，或绕过 Gate 的漏洞）本身不会导致点击落在敏感应用。

## 守护进程保护的资产

| 资产 | 保护 |
| --- | --- |
| 其他应用 UI | 审批 Gate、硬黑名单 |
| 真实光标 / 键盘 | `preserveFocus` 事件投递 |
| 敏感系统工具 | 硬黑名单 |
| Calendar / Mail / 系统数据写入 | 动作形态约束（`allow_calendar_write=true` 等） |
| 动作历史 | 按 Profile 加密的动作日志 |

## 守护进程**不**保护：

- 用户对宽松应用授予的 Always。这是用户决定。
- macOS 辅助功能本身的 bug。
- 模型被不可信内容（截图、工具结果）社工后请求一个你本不会批准的动作。

最后一点，每应用 Gate 是用户抓住意外动作的机会。动作日志给事后视角。

## 动作日志的角色

每次经过 Gate 的动作——批准或拒绝——都进 Computer Use Action Log：

- 时间戳
- 动作类型
- 目标 bundle ID
- 审批状态
- 结果

日志本地、按 Profile，与其他数据一起在 SQLite 中加密。除非你为相关类别 opt-in，否则不同步。

用日志来：

- 发现模式（"Agent 最近频繁在 Mail 里点击——都是我让它做的吗？"）。
- 复盘具体事件。
- 导出做合规审查。

## 看似绕过的（受控）面

少数机制**看起来**像绕过 Gate，但都受约束：

| 机制 | 约束 |
| --- | --- |
| 只读动作跳过 Gate | 不能改状态——只读 AX 树和截图 |
| 已批准（Always）应用跳过每动作弹窗 | 限制在已批准的动作类别内 |
| Calendar / Mail compose 的 `dry_run` 标志 | 只验证不产生副作用；仍记录日志 |
| 某些进阶动作的 `force` 标志 | 默认技能不暴露；要在自定义技能里写显式代码 |

每一项都是安全与摩擦的权衡。没有一项授予无差别绕过。

## 严格审批开启后的变化

Settings → Computer Use → **Strict Approval** 把 Allow Always 改为 Allow Once。每次修改型动作重新弹窗。黑名单、动作形态约束、事件投递模型不变。动作日志按动作记录审批。

## 威胁模型

- **已批准应用随时间漂移**——你上月授了 Always，但 Agent 行为已演化。用动作日志重新审视；如需要在 Settings 里撤销。
- **被攻破的模型**请求某动作。每应用 Gate 缓解（你看到要做的事），硬黑名单缓解（即使想通过 UI 批准也批不进密码管理器）。
- **被攻破的本地桌面进程**。Gate 代码与守护进程代码同时被攻破时，这套栈不保护你。这是远比这里覆盖的更强的威胁。

## 相关页面

- [Computer Use：安全边界](/cn/computer-use/safety-boundaries)
- [Computer Use：审批 Gate](/cn/computer-use/approval-gate)
- [macOS 权限](/cn/security/macos-permissions)
- [安全概览](/cn/security/overview)
