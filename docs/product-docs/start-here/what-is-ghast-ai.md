---
title: 什么是 Ghast AI
description: 理解 Ghast AI 的定位、目标用户，以及本手册的阅读方式。
---

# 什么是 Ghast AI

Ghast AI 是一个由链上算力驱动的 macOS 桌面 AI 伙伴。它在一个客户端里整合了：

- 流式对话窗口；
- 操控你的 Mac 和你已经登录的 Chrome 的能力；
- 持久化的向量记忆；
- 技能（Skills）系统与 MCP / ACP 集成；
- Telegram、Discord、Slack、飞书、微信的消息桥接；
- 以钱包为锚点的 0G Compute、0G Storage 网络接入。

产品在三件事上有明确立场：**算力应该跑在可验证的链上层、数据应该默认留在本地、同一个 Agent 应该跟着你穿过你已经在用的应用**。

## 适合谁

Ghast AI 是为想要"长期 AI 伙伴"而非"用完即弃聊天窗"的人设计的。具体来说：

- 你希望同一个助手既能在 Telegram、Discord 里回答你，也能在桌面客户端里回答你。
- 你希望它真的去使用你的工具——读一个文件、打开 Mail 撰写窗口、截一张 Chrome 标签页的图——而不是只输出"我可以做这些"的描述。
- 你在意数据在哪里。你希望记忆和对话默认在本地，云端副本（如果存在）必须用你掌握的密钥端到端加密。
- 你愿意持有一个钱包。Ghast 用你的钱包给算力付费，也用你钱包派生出的密钥做端到端加密的云同步。

如果以上没有一条符合你，托管型聊天产品可能更合适。如果大部分符合，本手册对你会有用。

## 你可以用它做什么

当前默认入口包括：

- 在 Desktop 主窗口里**对话**，支持附件、语音输入、工具开关、技能选择。
- **回忆记忆**——Agent 在多次会话间积累的关于你工作、偏好、未结流的记忆。
- **运行技能**——内置 30 个，覆盖生产力、浏览器自动化、市场数据、社交搜索、截屏、语音等。
- 通过 **Computer Use** 操作 macOS，且任何修改型操作前都会经过每应用单独的审批。
- 通过 **Ghast Browser Relay** 扩展用 Chrome DevTools Protocol 操控 Chrome。
- **桥接消息平台**，让同一个 Agent 在 Telegram / Discord / Slack / 飞书 / 微信 里直接回应。
- 从 0G Compute 网络**选择模型**——可以走 Router（粘贴 Compute Console API key），也可以用钱包给特定链上 TEE 供应商充值（Advanced）。
- 把本地数据**加密备份**到 0G Storage，按类别 opt-in。

每一项在手册里都有专门章节。

## 它不是什么

把预期摆清楚：

- **不是一个带"设置页"的浏览器扩展**。桌面客户端才是主要的产品入口；Chrome 扩展是一个让 Agent 进入你浏览器的中继。
- **不是一个云端聊天服务**。对话和记忆都在本地 SQLite。云同步是 opt-in、按类别开关、客户端加密。
- **不是一个托管产品**。Ghast 不持有你的钱包私钥——私钥加密保存在本地 Profile Vault，签名在本地完成。
- **不是一个自动接管你电脑的工具**。Computer Use 需要你显式授予 macOS 辅助功能权限**且**每个应用的修改型动作都要单独审批。

## 首次使用推荐顺序

1. 安装 Ghast AI Desktop（[安装](/cn/desktop/install)）。
2. 用邮箱登录并完成 Onboarding（[登录与激活](/cn/desktop/sign-in-and-activation)）。
3. 创建或导入钱包（[钱包与密钥托管](/cn/web3/wallet-and-key-custody)）。
4. 到 <https://pc.0g.ai/> 注册 0G Compute Console、充值、生成 API key，并把它粘贴到 Ghast → Settings → Providers → Router（[推理模式](/cn/web3/inference-modes)）。
5. 按需逐项开启：给 Advanced 供应商充值、授权 Computer Use、安装 Chrome 扩展、配置消息桥接。

## 相关页面

- [产品架构一览](/cn/start-here/architecture)
- [快速开始](/cn/start-here/quickstart)
- [系统要求](/cn/start-here/system-requirements)
- [安全概览](/cn/security/overview)
