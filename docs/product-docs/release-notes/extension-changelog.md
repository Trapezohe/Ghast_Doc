---
title: 扩展更新日志
description: Ghast Browser Relay 扩展的用户面变化。
---

# 扩展更新日志

让 Agent 操控浏览器的 Chrome 扩展的用户面变化。

## 1.0.0 — 2026-05-18

- Ghast Browser Relay 首次公开发布
- Manifest V3，Chrome 120+
- 到 Ghast Desktop 的 WebSocket 桥接，按 Profile token 鉴权
- 标签页管理、截图（CDP `Page.captureScreenshot`）、DOM 检查、JS 执行、按 selector 点击 / 键入 / 滚动
- Debugger 附加期间自动接管 `alert` / `confirm`
- 指数退避自动重连
- 从 Ghast Desktop 按 Profile 轮换 token

## 阅读本日志

扩展版本与包含 bundled 扩展变更的桌面发布一起更新。如果你手动加载了扩展（安装指南的方式 B），桌面更新后到 `chrome://extensions` 重载扩展以取到新版本。

如果扩展引入新 Chrome 权限，会同时反映在本页和扩展的 [安全与 Token 轮换](/cn/browser-extension/security) 页里。

## 相关页面

- [Ghast Browser Relay 概览](/cn/browser-extension/overview)
- [安装与配对](/cn/browser-extension/install-and-pair)
- [Desktop 更新日志](/cn/release-notes/desktop-changelog)
