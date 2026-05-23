---
title: macOS 权限（安全视角）
description: 每项 macOS 权限给 Ghast 解锁什么，以及威胁模型上的含义。
---

# macOS 权限（安全视角）

本页是 Ghast 可能申请的 macOS 权限的安全面摘要。操作性的"如何授予"说明见 [Computer Use：macOS 权限](/cn/computer-use/macos-permissions)。

## 权限目录

| 权限 | Ghast 用它做什么 | 被滥用时威胁 |
| --- | --- | --- |
| **辅助功能** | Swift 守护进程遍历 AX 树并投递 CGEvent 驱动 macOS 应用 | 对你的 Mac 全 UI 控制（受应用黑名单限制） |
| **屏幕录制** | 守护进程截取任何应用的像素级截图 | 截图调用期间任何屏上内容暴露 |
| **AppleEvents（按应用）** | 具体应用适配器（Calendar、Mail、音乐）走 AppleScript | 应用层脚本能力（如创建日历事件） |
| **麦克风** | Whisper 语音输入 | 录音会话期间的音频采集 |

Ghast **不**请求：

- 摄像头
- 通讯录
- 日历（读取——日历适配器通过 AppleEvent 写入）
- 提醒事项
- 照片
- 完整磁盘访问

任何时候看到这些权限请求都不是官方构建。核对 DMG 哈希。

## macOS 权限之上的 defense-in-depth

辅助功能是强力授权。守护进程在它之上叠加额外约束：

| 层 | 增加 |
| --- | --- |
| 每应用审批 Gate（UI） | 新应用的首次修改型动作弹出 modal。 |
| 守护进程硬黑名单 | 对某些应用（密码管理器、敏感系统工具）无视 UI 批准。 |
| 事件投递默认值 | `preserveFocus` 模式——守护进程"绘制"光标而不占用你的真实光标。 |
| 动作形态约束 | 日历写入需显式 `allow_calendar_write=true`。拖拽需起止坐标。 |
| 动作日志 | 每次动作都记入本地 Action Log，附审批状态与结果。 |

## 撤销

任何权限都可在 系统设置 → 隐私与安全 撤销。撤销后：

- 辅助功能 → 所有 Computer Use 调用返回 `permission_denied`，直到重新授予。
- 屏幕录制 → `skyshot` 返回部分结果或带类型错误。
- AppleEvents（按应用） → 该适配器回退到通用 click/type 或失败。
- 麦克风 → 语音输入失败；文本输入仍可。

Settings → Computer Use 显示各权限实时状态，带 "Reconfirm" deep link。

## 受管理的 Mac

由 MDM 管理的 Mac 上，IT 必须用 PPPC 配置文件预批准辅助功能与屏幕录制。否则你自己授不了权。要 whitelist 的 bundle ID 是 `ai.ghast.desktop`。

## 这些权限**不让** Ghast 做的事

- 不延伸到隐身 Chrome tab（那是浏览器扩展的事；见 [浏览器扩展：Agent 能做什么](/cn/browser-extension/capabilities)）。
- 不跨同一 Mac 的不同用户账号生效。每个 macOS 用户需各自授予。
- 不给 Ghast 提权 root 的能力。

## 相关页面

- [Computer Use：macOS 权限](/cn/computer-use/macos-permissions)
- [Computer Use 边界](/cn/security/computer-use-boundary)
- [安全概览](/cn/security/overview)
