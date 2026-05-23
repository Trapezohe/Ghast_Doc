---
title: 0G Compute 概览
description: 推理流量如何流经 0G 网络，以及这在桌面 UI 上的呈现方式。
---

# 0G Compute 概览

[0G](https://0g.ai) 是 Ghast AI 用于推理的链上算力网络。本页解释这在实际使用中意味着什么——链上看到什么、你为什么付钱、桌面 UI 显示什么。

## 一段话讲清 0G

0G 是一条 EVM 兼容链（chain ID `16661`），原生代币是 **OG**。它在链上托管一个推理供应商注册表，每个供应商在 TEE（可信执行环境）里运行模型，并暴露 OpenAI 兼容的端点。

Ghast 用两种不同方式接入这个网络——**Router 模式**（0G 运营的托管路由服务）与 **Advanced 模式**（你本地钱包直接在链上和供应商子账户对话）。两种模式最终都把推理推到 0G 的供应商网格上；它们的差别在**请求怎么派发、账怎么结算**。

Ghast 还把 0G 用在另一件事上（单独 opt-in）：**0G Storage**，给你本地数据做加密备份。详见 [0G Storage 加密同步](/cn/web3/0g-storage-sync)。

## 链上的两个 compute 合约

链上 compute 层暴露两个合约：

- **Ledger 合约**——保管自钱包给供应商充值的 OG 余额。Advanced 模式的入口。
- **Inference 合约**——管理全局供应商注册表、每对（用户，供应商）的子账户、退款记录、TEE 签名者确认。

这些合约**只**在 Advanced 模式下被触及。Router 模式不直接与它们交互——它的账目在 [0G Compute Console](https://pc.0g.ai/) 里结算。

## 在应用里使用 0G 的两种方式

| 模式 | 是什么 | 在哪里付费 |
| --- | --- | --- |
| **Router** | 一个托管路由端点，每次调用选一个底层供应商。用 API key 访问。 | 在 **0G Compute Console** <https://pc.0g.ai/> 充值并生成 API key。 |
| **Advanced** | 本地钱包发现链上供应商，直接给它们的子账户充值。 | 用钱包里的 OG，通过 Ledger 合约付费。 |

**两种模式都是付费的。** 没有"免费"。差异在**怎么记账**：

- Router 从你的 Compute Console 余额扣（在 0G 网页门户上配置，独立于钱包）。
- Advanced 按供应商在链上的子账户扣（用本地钱包配置）。

挑哪个看你的工作流。完整配置与权衡见 [推理模式](/cn/web3/inference-modes)。

## 桌面里能看到什么

- **模型选择器**——列出所有启用的供应商。Router 在你粘贴 Compute Console 的 API key 之后出现；Advanced 供应商在你启用并充值之后出现。
- **能力徽章**——从每个供应商声明的 `supportedParameters`、`architecture.input_modalities`、`architecture.output_modalities` 推断。常见徽章：streaming、tools、vision、JSON mode、reasoning。
- **供应商 URL**——Advanced 供应商的链上注册 URL 显示在 Settings → Providers。
- **Console 链接**——Router 显示到 <https://pc.0g.ai/> 的链接，用于管理 API key 与余额。
- **已充值余额**——每个 Advanced 供应商当前子账户的 OG 余额，加一个 Refund 按钮。
- **TEE 签名者状态**——Advanced 供应商显式标注"已确认"或"未确认"。

## 哪些东西链下

- 你的 prompt 和模型响应。推理发生在供应商 TEE 内；链上看不到消息内容。
- 你的记忆、对话、技能。这些都在本地——见 [本地数据存储](/cn/security/local-data-storage)。
- 你的钱包私钥。加密存放在 Profile Vault 中；从不广播。
- Router 用的 Compute Console 密码 / session。该账号在 <https://pc.0g.ai/> 上自管，与 Ghast 独立。

## 相关页面

- [推理模式：Router 与 Advanced](/cn/web3/inference-modes)
- [钱包与密钥托管](/cn/web3/wallet-and-key-custody)
- [TEE 与链上确认](/cn/web3/tee-and-attestation)
- [0G Storage 加密同步](/cn/web3/0g-storage-sync)
