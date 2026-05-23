---
title: 首次启动与引导
description: 第一次打开 Ghast AI Desktop 时发生了什么。
---

# 首次启动与引导

首次启动是一个引导流程。本页说明每一屏的作用和持久化的内容。

## 先打开 Auth 窗

第一次启动应用时，打开的是 **Auth** 窗口而不是主对话。完成登录与 Onboarding 之前，其他窗口都打不开。

Auth 窗口是和主对话分离的 React 入口，有自己专门的登录/引导 UI，便于在不引入主应用复杂度的情况下控制整个流程。

## 第 1 步 — 登录

两条路径，都产出后端 session：

| 路径 | 流程 |
| --- | --- |
| **邮箱** | 输入邮箱 → 申请验证码 → 输入验证码 → session 授权 |
| **Google OAuth** | 点"用 Google 登录" → 在系统浏览器里完成 OAuth → 回到应用 |

登录后客户端与后端校验 session，进入 Onboarding。

## 第 2 步 — 语言

选择界面语言，共 11 种：

- English (en)
- 简体中文 (zh-CN)
- 繁體中文 (zh-TW)
- 日本語 (ja)
- 한국어 (ko)
- Français (fr)
- Tiếng Việt (vi)
- Русский (ru)
- Español (es)
- Deutsch (de)
- Português (pt)

选择会被持久化，之后可在 Settings → UI 中修改。

## 第 3 步 — 昵称

一个简短的显示名。会出现在 UI 中，也会在与远程频道（Telegram / Discord / Slack / 飞书 / 微信）相关的场合展示给对方。

## 第 4 步 — 外观

三种模式：

- **System**——跟随 macOS 深色/浅色设置。
- **Light**——始终浅色。
- **Dark**——始终深色。

保存在 `localStorage` 的 `ghast-theme-preference`，之后随时可在 Settings → UI 中改。

## 第 5 步 — 钱包

最关键的一步。三选一：

| 路径 | 结果 |
| --- | --- |
| **新建钱包** | Ghast 生成新钱包。助记词只展示一次，需要键入确认。 |
| **用助记词导入** | 粘贴 BIP-39 助记词。Ghast 派生私钥。 |
| **用私钥导入** | 粘贴 hex 私钥。 |

之后 Ghast 用本地钱包对后端挑战签名，把钱包地址绑定到 Profile。此后 Profile 锚定在该钱包上。

详细模型：[钱包与密钥托管](/cn/web3/wallet-and-key-custody)。

## 第 6 步 — 激活（如适用）

某些渠道（如内测预览）需要邀请码激活。如果你的账号在这种渠道里，这里会出现激活页。粘贴激活码并确认即可。

不需要激活的账号会跳过这一步。

## Onboarding 完成后持久化了什么

成功页之后，下列内容已写入磁盘：

- `~/Library/Application Support/Ghast/profiles/<profileId>/` 下的 Profile 目录
- `<profile>/wallet.json`（加密的钱包）
- 初始设置（语言、外观、昵称）
- 后端 session token
- 一个空的 SQLite 数据库，待写入对话与记忆

Auth 窗关闭，**Main** 主对话窗打开。

## Main 里首先看到什么

主对话窗打开后是空白的 Home 视图：

- 底部空白输入框（光标已聚焦）
- 模型选择器为空——粘贴 <https://pc.0g.ai/> 的 Router API key 或启用 Advanced 供应商之后才有可选项
- 侧栏还没有任何对话
- "Today / Open Loops" 提醒（首次启动是空的）

想开始聊天，先配至少一个模型 Provider——通常是 **0G Router**（到 <https://pc.0g.ai/> 注册账号、充值余额、生成 API key，粘贴到 Settings → Providers → Router）。之后模型选择器就有内容了，可以发出第一条消息。

## 重新走 Onboarding

Onboarding 没有"重新进入"入口。要从头重建：

- 在 Settings → Account → Add Profile 新建一个 Profile，会触发新 Profile 的 Onboarding。
- 或者卸载应用、清空 `~/Library/Application Support/Ghast`、重新安装。

切换 Profile 不会重新走 Onboarding。

## 相关页面

- [安装 Ghast AI Desktop](/cn/desktop/install)
- [登录与激活](/cn/desktop/sign-in-and-activation)
- [Profile 与工作区](/cn/desktop/profiles-and-workspaces)
- [钱包与密钥托管](/cn/web3/wallet-and-key-custody)
