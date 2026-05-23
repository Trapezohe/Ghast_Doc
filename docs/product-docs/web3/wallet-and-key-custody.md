---
title: 钱包与密钥托管
description: 钱包私钥放在哪里、Ghast 如何在不托管私钥的前提下签名、切换 Profile 时发生了什么。
---

# 钱包与密钥托管

Ghast AI 是**非托管**客户端。你的钱包私钥加密保存在本机上，仅在需要签名时临时解密到内存，永远不会发送到远端服务。

本页讲解托管模型如何工作、三种 Onboarding 路径、以及钱包的运行生命周期。

## 三种 Onboarding 路径

Onboarding 阶段，钱包步骤会让你三选一：

| 路径 | 发生什么 | 什么时候选 |
| --- | --- | --- |
| **新建钱包** | Ghast 在本地生成一个全新私钥并展示 BIP-39 助记词。你抄下来，再键入确认。 | 全新使用 Ghast，没有想复用的钱包。 |
| **用助记词导入** | 粘贴 BIP-39 助记词，Ghast 派生私钥并绑定到当前 Profile。 | 已有钱包（例如 MetaMask）想在这里继续使用。 |
| **用私钥导入** | 粘贴原始 hex 私钥。 | 你的私钥不是助记词派生的（例如从其他工具导出）。 |

助记词**只在创建时展示一次**。确认完成后，UI 任何地方都不会再以明文形式显示。如果你丢失助记词且丢失设备，钱包不可恢复——Ghast 没有办法替你恢复私钥。

## 私钥存在哪里

| 文件 | 内容 | 加密方式 |
| --- | --- | --- |
| `~/<userData>/profiles/<profileId>/wallet.json` | 加密的钱包私钥 | AES-256-GCM，密钥来自 Profile Vault Key |

Vault Key 本身：

- 由 Ghast 后端在登录时签发。
- 仅保存在内存。
- **不持久化到磁盘。**
- 切换 Profile 或退出登录时从内存擦除。

这意味着：冷启机器不登录的话，没有任何可解密的东西。即使有完整磁盘访问权限，攻击者没有 Vault Key 也解不开 `wallet.json`，而 Vault Key 又必须重新登录才能拿到。

## 签名是怎么发生的

当 Ghast 需要签名（Ledger 充值、调用 `acknowledgeTEESigner`、给 Advanced 供应商生成 `app-sk-...` API token、0G Storage 指针签名）时：

1. 相关客户端模块请求钱包。
2. Profile Vault 在内存中解密 `wallet.json`。
3. 用解密出的私钥构造一个 `ethers.Wallet` 实例（仅本次操作期间存在）。
4. 计算签名。
5. 释放 wallet 对象。

解密后的私钥不会落盘、不会过网、也不会跨操作保留。

## Ghast 替你签名的范围

按设计，Ghast 不会每次交易都弹窗——威胁模型假设你掌控本地机器。它会签名的操作有：

- **0G Ledger 充值与追加充值**——从钱包把 OG 转入你的 Ledger 账户。
- **供应商子账户充值**——从 Ledger 划账给特定供应商的子账户。
- **TEE 签名者确认**——链上声明你已确认某供应商的 TEE 身份。
- **Advanced 供应商 API token**——生成对话时使用的 `app-sk-...` token。
- **0G Storage 上传指针**——为加密备份快照的元数据签名。

每一项都会在执行前在 UI 中展示动作。你可以看到将要发生什么，关闭弹窗即拒绝。

## Profile 边界

每个 Profile 一套钱包。模型是：

- 一个 Profile ↔ 一个钱包地址。
- 切换 Profile 会为目标 Profile 重新签发新的 Vault Key，并把上一个从内存擦除。
- 两个 Profile 互相读不到对方的加密数据。

如果你想做干净分离（例如工作/个人），用两个 Profile 各自配一个钱包。**不要**试图在两个 Profile 间"共享"同一个钱包——Ghast 不支持，未来的检测可能会把同地址视为 Profile 冲突。

## Ghast **不会**做的事

明确一下：

- **不托管资金**。资金都在链上的 0G Ledger 和供应商子账户里；没有你钱包签名，Ghast 动不了。
- **不备份你的私钥**。没有任何云端副本。设备丢 + 助记词丢 = 钱包没了。
- **不写私钥日志**。解密后的私钥仅在签名操作期间存在于内存。
- **不让 Agent 接触私钥**。Agent 运行时不能从工具或技能调 `loadWalletPrivateKey()`——这个能力只属于受信的 Ghast 主进程。

## 相关页面

- [0G Compute 概览](/cn/web3/0g-compute-overview)
- [推理模式：Router 与 Advanced](/cn/web3/inference-modes)
- [安全：钱包与密钥托管](/cn/security/wallet-key-custody)
- [故障排查：钱包与充值](/cn/troubleshooting/wallet-and-funding)
