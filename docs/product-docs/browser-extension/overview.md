---
title: Ghast Browser Relay 概览
description: 让桌面 Agent 操作你真实浏览器的 Chrome 扩展。
---

# Ghast Browser Relay 概览

Ghast Browser Relay 是一个 Chrome 扩展（Manifest V3），让 Ghast AI Desktop 的 Agent 操作你的 Chrome 浏览器。它是一个**薄中继**，不是第二个产品入口——唯一的工作是把桌面客户端的命令通过 Chrome DevTools Protocol (CDP) 转发到 Chrome，并把事件流回。

扩展是整个产品的一小部分。桌面客户端是你停留的地方；扩展是 Agent 需要操作浏览器时的桥梁。

## "操作你的浏览器"是什么意思

通过中继，Agent 能：

- **管理标签页**——列出、新建、跳转、刷新、关闭
- **截屏**——可视区域的高保真截图，附 viewport 尺寸
- **检查 DOM**——抽取交互元素（最多 200 个）含 CSS selector、bounding box、可见性、aria-label、disabled 状态
- **读内容**——title、URL、innerText（截断到 60,000 字符并标记 truncation flag）
- **执行 JS**——在页面上下文中跑任意表达式
- **交互**——通过 CSS selector 点击、键入、滚动、上传文件
- **自动处理弹窗**——`alert` / `confirm` 自动接管，不阻塞自动化

这些对应桌面客户端的 `browser` 技能。

## 为什么是中继而不是内置浏览器

权衡考量：

- **你保持登录**。Agent 操作的是你日常使用的 Chrome 实例——你的 session、cookie、扩展、历史都在。不需要二次登录。
- **不维护 headless 浏览器**。Ghast 不需要打包 Chromium 二进制、维护补丁、做沙箱。Chrome 就是 Chrome。
- **可观察**。Agent 做的事都在你能看到的标签页里发生。

权衡是 Agent 可以对你的浏览器做事。信任模型靠 Profile 级 token（见 [安全与 Token 轮换](/cn/browser-extension/security)）。

## 它不是什么

- **不是侧边栏 AI**。Ghast AI 是桌面应用。扩展没有聊天 UI——它的弹窗只显示连接状态。
- **不是自主浏览器 Agent**。Agent 仅在桌面客户端的某轮次告诉它时才行动。
- **不是 Firefox / Safari / 独立 Chrome 的故事**。Manifest V3 + `debugger` 权限意味着仅 Chrome（或完整支持 Manifest V3 的 Chromium 系浏览器）。

## 怎么连到桌面

```
   桌面客户端                   扩展                       Chrome
┌────────────────────┐         ┌──────────────┐         ┌──────────────┐
│  LiveBrowser RPC   │ ──────▶ │  service     │ ──CDP─▶ │ active tab   │
│  (WebSocket server)│ ◀────── │  worker      │ ◀────── │              │
└────────────────────┘         └──────────────┘         └──────────────┘
       ws://127.0.0.1:18189/v1/browser/stream
       JSON-RPC 2.0, subprotocol-bearer auth
```

- 桌面客户端在 `127.0.0.1:18189`（端口可改）启动本地 WebSocket 服务。
- 扩展的 service worker 连接到该服务。
- 鉴权是每 Profile 随机生成的 token，作为 WebSocket subprotocol（`ghast-token.<TOKEN>`）发送。
- 协议是 JSON-RPC 2.0；方法集包括 `browser.tabs.*`、`browser.debugger.*`、`session.*`。
- 自动重连——基于 Chrome alarm 的 keep-alive，指数退避最多 30 秒。

## 什么时候安装

中继是可选的。下列情况安装：

- 想让 Agent 在你真实的浏览器里做真实的工作——填表单、读你登录的仪表盘、为研究截图。
- 想让 Composer 里的 `browser` 技能真正起作用。

如果你的工作流是纯对话或本地 Mac 自动化，不需要它。

## 下一步去哪

- [安装与配对](/cn/browser-extension/install-and-pair)——加载扩展并连接桌面
- [Agent 能做什么](/cn/browser-extension/capabilities)——完整能力清单
- [安全与 Token 轮换](/cn/browser-extension/security)——鉴权、轮换、扩展能/不能看见什么
