---
title: 快速开始
description: 从全新安装到第一次对话的最短路径。
---

# 快速开始

本页是从全新安装到第一次对话的最短路径。每一步都链向更详细的页面，需要时可以深入。

## 开始之前

- macOS 11 或更新版本（Apple Silicon 或 Intel 都行）
- 大约 1 GB 可用磁盘空间
- 一个能收验证码的邮箱
- 一个 0G 钱包（可选——Ghast 可以替你生成）

如果你还没有 0G 钱包，Ghast 会在 Onboarding 阶段帮你生成一个，并展示助记词。你需要把它抄下来。

## 第 1 步 — 安装 Ghast AI Desktop

下载对应 CPU 架构（Apple Silicon 或 Intel）的签名 DMG，打开后把 **Ghast AI** 拖进"应用程序"文件夹。详细说明见 [安装 Ghast AI Desktop](/cn/desktop/install)。

## 第 2 步 — 登录

打开应用，第一个窗口是 **Sign In** 屏幕。

1. 输入邮箱并申请验证码，或者用 Google OAuth。
2. 输入收到的验证码。
3. 应用完成会话校验后进入 **Onboarding**。

完整流程：[登录与激活](/cn/desktop/sign-in-and-activation)。

## 第 3 步 — Onboarding

Onboarding 会引导你：

1. 选择界面语言（共 11 种）
2. 设置昵称
3. 选择外观（system / light / dark）
4. 配置钱包——三选一：
   - **新建钱包**——Ghast 生成钱包并展示助记词。请抄下来，之后会要求你确认。
   - **用助记词导入**
   - **用私钥导入**

钱包步骤完成后，客户端会用本地钱包对后端挑战签名，把钱包绑定到 Profile。

## 第 4 步 — 开始对话

模型选择器在你接入任何 Provider 之前是空的。最快的方式是配 **0G Router**：

1. 浏览器打开 <https://pc.0g.ai/>（0G Compute Console），注册账号、充值余额、生成 API key。
2. 在 Ghast 里到 **Settings → Providers → Router**，把 API key 粘贴进去。
3. Router 的模型出现在模型选择器里。

然后在主对话窗：

- 在底部输入框里输入提示词，按回车发送。
- 响应会流式显示。如果 Agent 调用了工具，会以可折叠卡片呈现。
- 附件与语音输入在输入框上的图标里。

## 第 5 步 — 按需逐项启用其他集成

下面这些功能不是必须的，按需开启即可。

| 集成 | 解锁什么 | 入口 |
| --- | --- | --- |
| **0G Advanced 供应商** | 特定的链上 TEE 模型与能力徽章 | [推理模式](/cn/web3/inference-modes) |
| **0G Storage 同步** | 跨设备的端到端加密备份 | [0G Storage 加密同步](/cn/web3/0g-storage-sync) |
| **Chrome 扩展** | Agent 操控你已经登录的 Chrome | [浏览器扩展](/cn/browser-extension/install-and-pair) |
| **Computer Use** | Agent 操作 macOS 应用 | [Computer Use](/cn/computer-use/macos-permissions) |
| **消息桥接** | Agent 在 Telegram / Discord / Slack / 飞书 / 微信 里直接回复 | [远程消息通道](/cn/remote-channels/overview) |
| **MCP 服务** | 给 Agent 接入外部工具 | [MCP 服务](/cn/desktop/mcp-servers) |
| **Partner Mode** | 长期协作的人格层 | [Partner Mode](/cn/partner-mode/overview) |

## 第一次使用的典型 15 分钟

可以这样安排：

1. 安装、登录、创建钱包、走完 Onboarding。
2. 在 0G Compute Console 充值并把 Router API key 粘贴进 Ghast。
3. 发 2–3 条消息确认 Router 上的对话正常工作。
4. 打开 Settings → Memory，浏览一下被存进去的记忆。
5. 打开 Settings → Wallet 查看你的地址（如果打算用 Advanced 供应商，可往 0G Ledger 充一点 OG 备用）。
6. 关闭再重开应用，确认对话还在。

如果上述六步都正常，说明安装健康。之后可以按你自己的节奏切到上一节的集成表。

## 相关页面

- [系统要求](/cn/start-here/system-requirements)
- [安装 Ghast AI Desktop](/cn/desktop/install)
- [登录与激活](/cn/desktop/sign-in-and-activation)
- [钱包与密钥托管](/cn/web3/wallet-and-key-custody)
- [故障排查：登录与激活](/cn/troubleshooting/login-and-activation)
