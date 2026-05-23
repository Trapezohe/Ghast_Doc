---
title: macOS 权限
description: Computer Use 可能需要的四种 macOS 权限及授予方式。
---

# macOS 权限

Computer Use 需要显式 macOS 权限才能工作。在功能首次需要之前不会请求。

## 四种权限

| 权限 | 守护进程因此能做什么 | 何时请求 |
| --- | --- | --- |
| **辅助功能** | 读取任何应用的 AX 树、对其他窗口点击与键入 | 首次执行任何 Computer Use 动作 |
| **屏幕录制** | 像素级截取其他应用屏幕 | 首次执行 `skyshot` |
| **AppleEvents（自动化）** | 通过 AppleScript 驱动特定应用（Mail、Calendar、音乐适配器） | 首次运行某个该类适配器 |
| **麦克风** | 接收语音输入（严格说不是 Computer Use 功能，但常一起开启） | 第一次点 Composer 麦克图标 |

守护进程**不**请求摄像头、完整磁盘访问、通讯录、读日历等其他隐私敏感权限。Computer Use 不需要它们。

## 授予辅助功能

最关键的一项。没有它守护进程什么也做不了。

1. 第一次尝试 Computer Use 动作时，对话里会出现一张「需要权限」卡片。
2. 卡片上有 **打开系统设置** 按钮。
3. macOS 跳到 **隐私与安全 → 辅助功能**。
4. Ghast AI 在列表里、开关关闭。打开它。
5. macOS 要求输入密码 / Touch ID 确认。
6. 回到 Ghast 在动作卡片上点 **Retry**。

如果跳过系统设置 deep link，可以手动到：

```
系统设置 → 隐私与安全 → 辅助功能 → +
```

…然后添加 `应用程序/Ghast AI.app`。

## 授予屏幕录制

流程相同，路径在 **隐私与安全 → 屏幕与系统音频录制**。仅 `skyshot` 与任何返回截图的工具需要。没有它，仅 AX 类的工具（按 AX selector 点击、向已聚焦字段键入）仍可工作。

## 授予 AppleEvents

当 Agent 调用基于 AppleEvent 的适配器（Mail compose、Calendar create_event、音乐控制）时，macOS 会弹：

> "Ghast AI" 想要控制 "&lt;App&gt;"。

点 **OK**。授权是按应用的——给 Mail 的控制权不会自动给 Calendar。

可以在 **隐私与安全 → 自动化** 中查看与撤销单个 AppleEvent 权限。

## 授予麦克风

第一次点 Composer 麦克图标时弹标准 macOS 提示。撤销路径相同。

## 之后撤销

任何权限随时可在 系统设置 → 隐私与安全 中撤销。撤销后：

- 撤销辅助功能 → 所有 Computer Use 动作返回 `permission_denied`，直到重新授予。
- 撤销屏幕录制 → `skyshot` 返回部分结果（窗口列表无像素）或带类型错误。
- 撤销特定应用的 AppleEvents → 对应适配器若能就回退到通用 click/type，否则失败。

桌面客户端在 Settings → Computer Use 显示每项权限的状态，带盾牌图标和 "Reconfirm" 按钮，直接 deep-link 到正确的系统设置页。

## 在受管理的 Mac 上怎么办

部分受管 Mac（MDM 控制）要求管理员先用配置文件预批准辅助功能 / 屏幕录制。如果你的 IT 没做，你自己无法授予。请他们把 `ai.ghast.desktop` 加到 PPPC payload。

## 相关页面

- [Computer Use 概览](/cn/computer-use/overview)
- [每应用审批 Gate](/cn/computer-use/approval-gate)
- [故障排查：Computer Use 权限](/cn/troubleshooting/computer-use-permissions)
