---
title: 钱包与密钥托管（安全视角）
description: Ghast 如何在不托管的前提下管理你的钱包。
---

# 钱包与密钥托管（安全视角）

Ghast 钱包模型的安全面摘要。用户面的配置流程见 [Web3：钱包与密钥托管](/cn/web3/wallet-and-key-custody)。

## 关键陈述

**Ghast 不托管你的钱包密钥。** 钱包私钥加密保存在你的机器上。解密仅在内存中临时进行。Ghast 后端、链上层、任何远端服务，只能看到你的钱包签名的内容。

## 存储

```
~/<userData>/profiles/<profileId>/
└── wallet.json   ← 钱包私钥的 AES-256-GCM 密文
```

加密密钥（"Vault Key"）：

- 每次登录时由 Ghast 后端生成。
- 经 TLS 返回桌面客户端。
- 仅放在进程内存。
- **不**落盘。
- 在切换 Profile、退出登录、关闭应用时擦除。

冷启机器不登录 → 无 Vault Key → `wallet.json` 不可读。

## 签名流程

每次签名（Ledger 充值、供应商充值、TEE 确认、API token、同步指针）：

1. 调用方向 wallet keystore 请求钱包。
2. Keystore 用内存 Vault Key 解密 `wallet.json`。
3. 构造短生命期的 `ethers.Wallet` 实例。
4. 计算签名。
5. 释放 wallet 对象。

解密后的私钥不会落盘、不会出现在日志、不会跨操作存活。

## Agent 能用钱包做什么、不能做什么

Agent 运行时（技能、工具、MCP、Computer Use）**不能**调 `loadWalletPrivateKey()`。该能力只属于受信的主进程模块（`zerog-compute/`、`services/data-sync-service.ts` 等）。恶意技能或被攻破的 MCP 服务无法提取你的密钥。

Agent 可以请你授权一个签名动作——相关流程会在提交前在 UI 弹出确认卡片。你可以拒绝。

## 助记词处理

BIP-39 助记词（或导入的等价物）：

- **创建时只展示一次**。你键入确认。
- 此后**UI 任何地方都不以明文重新展示**。
- 仅以派生出的私钥形式存在 `wallet.json` 里。助记词本身不保留。

也就是说：助记词丢 + 设备丢 → 钱包不可恢复。Ghast 无法替你恢复私钥。

## Profile 隔离

| 方面 | 效果 |
| --- | --- |
| 一个 Profile → 一个钱包地址 | 多个 Profile → 多个独立钱包 |
| 切换 Profile | 旧 Vault Key 从内存擦除；后端为新 Profile 签发新 Vault Key |
| 跨 Profile 读 | 不可能——每个 Profile 有自己的 Vault Key、自己的数据库 |

## 这套栈**不**防：

诚实的威胁模型边界：

- **你处于登录状态且 Mac 上有完整磁盘访问的恶意软件**。同时拿到 `wallet.json` 和内存中 Vault Key 的攻击者可以解密钱包。
- **被攻破的 macOS 用户账号**。OS 级隔离不在范围；Ghast 不另加沙箱。
- **泄漏的助记词**。如果你把助记词写在不安全的地方，超出 Ghast 控制范围。

这些的缓解在 OS 层：文件系统加密、设备锁、用密码管理器存助记词。

## 审计 Ghast 签了什么

每笔链上交易：

- 在提交前在桌面 UI 弹确认卡。
- 落在 `evmrpc.0g.ai`——你可以读自己的交易历史。
- 0G Storage 的 Pointer Registry 合约也可独立查询。

你可以独立验证 Ghast 替你签的每一件事。

## 相关页面

- [Web3：钱包与密钥托管](/cn/web3/wallet-and-key-custody)
- [Web3：0G Compute 概览](/cn/web3/0g-compute-overview)
- [Profile 与工作区](/cn/desktop/profiles-and-workspaces)
- [安全概览](/cn/security/overview)
