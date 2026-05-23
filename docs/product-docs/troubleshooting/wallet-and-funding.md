---
title: 钱包与充值
description: 诊断钱包、Ledger、供应商充值、退款问题。
---

# 钱包与充值

按症状索引。

## 钱包余额显示 0（或过时）

| 可能原因 | 处理 |
| --- | --- |
| 读余额时 RPC 抖动 | 等 10 秒刷新；余额会自动周期刷新 |
| 钱包从未充值 | 先从外部把 OG 发到你的钱包地址 |
| 看错钱包 | 核对 Settings → Wallet 里的地址与你充值的一致 |

## 充值到 Ledger 时 "Insufficient funds"

| 可能原因 | 处理 |
| --- | --- |
| 钱包余额 < 充值额 + gas | 减少充值额或先给钱包补 OG |
| Gas 估算超过钱包余额 | 同上——留出 gas 余量 |

## 供应商充值下限看起来很高

| 可能原因 | 处理 |
| --- | --- |
| 模型 `outputPrice` 高 | 下限是 `max(MIN_TRANSFER_AMOUNT(), outputPrice + buffer)`。换低价模型下限更低。 |
| 链上 `MIN_TRANSFER_AMOUNT()` 更新 | 在 Settings → Providers → 0G Advanced → [供应商] 读取最新值 |

## 交易已提交但余额不更新

| 可能原因 | 处理 |
| --- | --- |
| 确认等待中 | 等 1–2 分钟；0G 出块快但 RPC 读可能滞后 |
| 交易失败（gas 不足、revert） | 在链上浏览器 / 钱包历史里查 |

## 充值后 TEE 确认失败

| 可能原因 | 处理 |
| --- | --- |
| 调 ack 时 RPC 抖动 | 用 Settings → Providers → 0G Advanced → [供应商] 里的 **Reconfirm** |
| 充值与 ack 之间供应商已下线 | 退款，换供应商 |

## Advanced 供应商的模型报错

| 可能原因 | 处理 |
| --- | --- |
| 子账户余额低 | 在 Settings → Providers → 0G Advanced → [供应商] 充值 |
| 供应商 TEE 端点宕机 | 稍后再试；或在 picker 里切到 Router 模型（Router 会自动覆盖多个底层供应商） |
| `app-sk-...` token 过期 | 在 Settings 里关掉再开供应商以重新生成 |

## 退款看起来卡住

| 可能原因 | 处理 |
| --- | --- |
| 在 24 小时锁定窗口内 | 等——窗口结束自动释放 |
| 退款交易失败 | 查链上交易；从 Settings 重试 |

## 钱包能用但链上交易持续失败

| 可能原因 | 处理 |
| --- | --- |
| 你的网络访问不到链 RPC | 检查到 `evmrpc.0g.ai` 的连通性；企业代理有时拦截 |
| 网络错（极罕见——客户端写死 chain ID 16661） | 重装最新版 Ghast |

## 相关页面

- [Web3：钱包与密钥托管](/cn/web3/wallet-and-key-custody)
- [Web3：推理模式](/cn/web3/inference-modes)
- [安全：钱包与密钥托管](/cn/security/wallet-key-custody)
