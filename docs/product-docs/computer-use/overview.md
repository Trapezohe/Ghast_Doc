---
title: Computer Use 概览
description: Computer Use 做什么、架构如何、启用代价。
---

# Computer Use 概览

Computer Use 让 Ghast 从"会聊 Mac 的助手"变成"会用 Mac 的助手"。它让 Agent 能点击按钮、键入窗口、截屏、驱动 macOS 应用——包括没有 API 的应用。

## Agent 能做什么

通过 Computer Use，Agent 获得：

- **11 个核心原语**——skyshot（AX 树 + 截图）、click（含双击/三击）、type、press_key（组合键）、scroll、drag、set_value、select_text、read、permissions、session 生命周期。
- **30+ 进阶工具**——右键菜单、状态栏、菜单栏、应用启动、窗口管理、剪贴板读写、文件 reveal/open_with、URL 打开、等待元素/文本/窗口、在 Chrome/Safari/Brave/Edge 里注入 JS、AX 探测、harness trace。
- **应用专用 Playbook**——日历、邮件、备忘录、访达、Safari，加上 QQ 音乐、网易云、Apple Music、Spotify、微信、Slack 的专用适配器。

## 为什么单独跑一个守护进程

Computer Use 实现为单独的 Swift 辅助应用（`Ghast Computer Use.app`），打包在主应用资源里，**不是**主进程内代码。

理由：

- **权限隔离**。只有 Swift 守护进程需要"辅助功能"权限。主 Electron 应用不需要。
- **稳定性**。AX API 内部的 crash（确实会发生）不会拖垮你的对话。
- **性能**。AX 树遍历与 CoreGraphics 事件投递在原生二进制里远快于 Node。

守护进程监听本地 Unix Socket：`~/Library/Application Support/Ghast/computer-use.sock`。Electron 按需打开它，通过 NDJSON RPC 对话。其他 Agent（Claude Desktop、Codex、脚本）通过 `bin/ghast-computer-use-mcp.mjs` 这个 MCP 包装也能连接同一个守护进程。

## 一个轮次怎么走

1. Agent 决定需要操作某个 Mac 应用。
2. Composer 显示一张 Computer Use 卡片，展示计划动作（如"在 Mail 里点 Send"）。
3. 如果这是本 Profile 对该应用的**首次修改型动作**，**审批 Gate**弹窗出现——你选 Allow Once / Allow Always / Deny。
4. 批准后，请求发给 Swift 守护进程：
   - 核对动作不在硬黑名单。
   - 定位目标元素（AX 查询或坐标快照 pin）。
   - 通过 AX 或 CoreGraphics 执行 click / type / drag。
   - 返回结果（成功 + 动作后 AX 状态，或带类型的错误）。
5. Agent 读结果，继续该轮次。

## 启用代价

| 代价 | 内容 |
| --- | --- |
| **macOS 权限** | 辅助功能（必需）、屏幕录制（高保真截图用）、麦克风（仅当也用语音时） |
| **每应用审批** | 每个 Profile 对每个应用的首次修改型动作弹一次窗。Allow Always 永久缓存。 |
| **性能** | 守护进程遍历当前应用 AX 树时有少量 CPU 占用。人类节奏下可忽略。 |
| **信任** | 守护进程可以驱动任何 macOS 允许 AX 自动化的应用。授 Always 前花点时间核对权限。 |

## 它不会做的事

明确一下：

- **不是远程控制协议**。Computer Use 是让 Agent 用你的 Mac，不是让别人用你的 Mac。
- **不是录制器**。它不流式记录你在做什么。它响应你的 prompt 执行 Agent 的指令。
- **不劫持键盘**。事件注入用 AX 原语和 per-PID CGEvent 投递，不是 raw HID。你真实的鼠标键盘仍归你。
- **不无界**。守护进程内置硬黑名单 (`CUPolicy`)，对密码管理器、敏感系统工具等类别动作一律拒绝，UI 是否批准都不行。

## 什么时候启用

授予辅助功能之前 Computer Use 是**关闭**的。合理触发：

- 想让 Agent 真正完成任务（"起草这封邮件"、"加到我日历"、"播放这首歌"）。
- 想用绑定到具体应用 Playbook 的自动化（例如把"日历事件创建"作为一次工具调用）。

如果你的用法是纯文本——生成文档、研究摘要、通过桥接和团队沟通——不需要 Computer Use。

## 相关页面

- [macOS 权限](/cn/computer-use/macos-permissions)
- [每应用审批 Gate](/cn/computer-use/approval-gate)
- [内置应用 Playbook](/cn/computer-use/built-in-playbooks)
- [安全边界](/cn/computer-use/safety-boundaries)
- [安全：Computer Use 边界](/cn/security/computer-use-boundary)
