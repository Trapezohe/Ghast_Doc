---
title: 系统要求
description: 运行 Ghast AI Desktop 所需的硬件、系统、网络、账号前提条件。
---

# 系统要求

## 操作系统

- **macOS 11 (Big Sur) 或更新版本**。
- 同时支持 Apple Silicon（M 系列）与 Intel CPU。
- 暂未发布 Windows / Linux 版本。当前阶段桌面客户端只在 macOS 上发布。

部分功能在不同 CPU 上略有差别：

| 功能 | Apple Silicon | Intel |
| --- | --- | --- |
| Whisper STT | CPU 或 Metal 后端 | CPU 后端 |
| Kokoro TTS | 支持 | 支持 |
| Qwen TTS (MLX) | 支持 | 不可用 |
| Computer Use | 支持 | 支持 |

## 磁盘空间

- 应用本体大约 **1 GB**。
- 加上 Profile 目录，会随使用增长（记忆、对话、附件）。在你积累大量媒体之前，通常不会超过几百 MB。

如果你启用了本地的 embedding 或 Whisper 模型推理，模型文件会再多占 **150–400 MB**，取决于你拉取的具体变体。

## 网络

- 出站 HTTPS：`https://evmrpc.0g.ai`（0G 链 RPC）
- 出站 HTTPS：`https://router-api.0g.ai/v1/models`（Router 供应商）
- 出站 HTTPS：`https://indexer-storage-turbo.0g.ai`（启用 0G Storage 同步时）
- 出站 HTTPS：你启用的 Advanced 0G 供应商各自在链上注册的端点
- 出站连接到 Telegram / Discord / Slack / 飞书 / 微信 API（仅启用相应桥接时）
- 出站 HTTPS 到你配置的 MCP 服务

如果在企业代理后，到 Settings → Network 里配置代理。客户端默认使用系统代理。

## 权限

第一次启动不会请求任何系统权限。权限按需在第一次使用相关功能时请求：

| 权限 | 何时请求 | 用途 |
| --- | --- | --- |
| **辅助功能** | 第一次用 Computer Use 时 | Swift 守护进程需要 AX API 来点击和键入 |
| **屏幕录制** | 第一次 Computer Use 截图 (`skyshot`) 时 | 需要高保真截图其他应用 |
| **麦克风** | 第一次使用语音输入时 | Whisper 麦克风采集 |
| **AppleEvents** | 第一次 Computer Use 调用 AppleScript 时 | Mail、Calendar、音乐应用的适配器 |
| **通知** | 第一次 Agent 主动提醒时 | Partner Mode 后续跟进 |

任何时候都可以在 系统设置 → 隐私与安全 中查看或撤销这些权限。

## 账号前提

- **一个能收验证码的邮箱**，或一个用于 OAuth 登录的 Google 账号。
- **一个钱包**（Onboarding 时创建或导入）。钱包地址绑定到 Profile；换钱包意味着创建另一个 Profile。

Router 模式从你的 **0G Compute Console** 余额扣费（在 <https://pc.0g.ai/> 配置），不走本地钱包——所以 Router 不需要钱包里有 OG。给特定 Advanced 供应商充值做链上推理、或开启 0G Storage 同步时，钱包里才需要 OG。

## 不需要的东西

明确一下，开始使用 Ghast AI 不需要：

- 安装 Chrome——只有想用浏览器扩展时才需要。
- Telegram / Discord / Slack / 飞书 / 微信 账号——只有想用对应桥接时才需要。
- 任何 MCP 服务——内置工具与技能已经够用。
- 在你自己的机器上安装代码签名证书或开发者账号——DMG 已经签名并 notarize 过。

## 相关页面

- [安装 Ghast AI Desktop](/cn/desktop/install)
- [快速开始](/cn/start-here/quickstart)
- [安全概览](/cn/security/overview)
