---
title: Ghast AI
description: Chrome 侧边栏中的 AI 助手产品手册
---

# Ghast AI

Ghast AI 是运行在 Chrome 侧边栏中的 AI 助手。本手册用于说明当前产品的标准使用路径、能力边界、安全模型和故障排查方式。

## 快速导航

- [Start Here](start-here/what-is-ghast-ai.md) — 先理解产品是什么，以及最短上手路径
- [Core Concepts](core-concepts/extension-and-companion.md) — 看懂扩展、Companion、记忆、远程控制与安全边界
- [Extension](extension/install-extension.md) — 浏览器侧安装、登录、钱包、模型、聊天与设置页说明
- [Companion](companion/install-and-auto-pair.md) — 本地能力安装、工作区、命令运行时、MCP 与诊断
- [Remote Control](remote-control/telegram-setup.md) — Telegram、审批流、远程来源与通道状态
- [Security](security/overview.md) — 权限、钱包、本地执行、数据边界与 OpenClaw 对比
- [Reference](reference/settings-reference.md) — 设置项、状态、站点与能力参考
- [Troubleshooting](troubleshooting/login-and-activation.md) — 按问题类型快速排查

## 文档边界

- 本手册只写当前仓库中已经存在、并且可以确认的能力。
- 代码中存在但当前 UI 未作为主路径公开的能力，会明确写成“已实现但不作为默认入口”，不会写成普通用户当前应直接使用的功能。
- 参考页用于集中列出字段、状态和范围说明；其余页面均按正式使用手册口径编排。
