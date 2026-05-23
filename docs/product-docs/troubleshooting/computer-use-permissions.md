---
title: Computer Use 权限
description: 诊断辅助功能、屏幕录制、每应用审批问题。
---

# Computer Use 权限

按症状索引。

## 每次动作都弹「需要权限」卡

| 可能原因 | 处理 |
| --- | --- |
| 未授予辅助功能 | 系统设置 → 隐私与安全 → 辅助功能 → 启用 Ghast AI |
| 辅助功能授给了旧版 Ghast | 在列表里删掉旧条目，重新添加当前 `应用程序` 里的 |
| 应用授权后被复制 / 移位 | macOS 辅助功能按精确路径跟踪；在新路径重新添加 |

## 动作静默失败

| 可能原因 | 处理 |
| --- | --- |
| 目标应用在守护进程硬黑名单 | UI 不能覆盖。如确实需要，向维护者反馈。 |
| 该应用上的该动作类别未批准 | 找审批 modal——可能出现在另一个桌面 |
| 守护进程崩了 | 完全退出 Ghast 再开 |

## `skyshot` 没有像素

| 可能原因 | 处理 |
| --- | --- |
| 未授予屏幕录制 | 系统设置 → 隐私与安全 → 屏幕与系统音频录制 → 启用 Ghast |
| 应用拒绝录制（某些受保护应用） | AX 树仍返回；像素数据在 OS 层被拦 |

## AppleEvents 提示反复出现

| 可能原因 | 处理 |
| --- | --- |
| 你之前拒绝过 | 系统设置 → 隐私与安全 → 自动化 → 授予 Ghast 对该应用的控制 |
| 应用 bundle 变了 | 重新授权；macOS 按 bundle identifier 跟踪 |

## 审批 modal 从不出现

| 可能原因 | 处理 |
| --- | --- |
| 该动作类别已是 Allow Always | 设计如此——查 Settings → Computer Use → Approved Apps |
| 只读动作 | 只读动作设计上跳过 Gate |
| Modal 被其他窗口挡住 | Cmd-Tab 把 Ghast 拉到前台 |

## "审批被拒"反复出现

| 可能原因 | 处理 |
| --- | --- |
| 先前拒绝被短暂缓存 | 重新触发动作；Gate 重新询问 |
| 应用在守护进程黑名单 | 不能通过 UI 继续 |

## 严格审批意外每次弹窗

| 可能原因 | 处理 |
| --- | --- |
| Strict Approval 开了 | 设计如此——Allow Always 变 Once。不想要就在 Settings 关掉。 |

## 画中画监控一直空白

| 可能原因 | 处理 |
| --- | --- |
| 当前没有动作在跑 | PIP 仅在守护进程活动时显示 |
| 未授予屏幕录制 | 同 `skyshot` |

## 相关页面

- [Computer Use 概览](/cn/computer-use/overview)
- [Computer Use：macOS 权限](/cn/computer-use/macos-permissions)
- [Computer Use：每应用审批 Gate](/cn/computer-use/approval-gate)
- [Computer Use：安全边界](/cn/computer-use/safety-boundaries)
