---
title: 支持的模型与充值规则
---

# 支持的模型与充值规则

## 当前模型来源

| 来源 | 当前行为 |
| --- | --- |
| 链上 `getAllServices` | 首选来源 |
| 内置 `knownModels` | 读取失败时的回退 |

## 当前文档边界

- 仓库里没有一个适合直接写进文档、长期静态维护的“固定模型名单”。
- 因此本页只写模型发现机制和充值规则，不写死具体型号列表。

## 当前充值规则字段

| 字段 | 当前含义 |
| --- | --- |
| `minimumInitialAmount` | 首次充值最低值 |
| `minimumTopUpAmount` | 后续充值最低值 |
| `currentMinimumAmount` | UI 当前应展示的最低值 |
| `ledgerExists` | 是否已有 Ledger 账户 |
| `recentFunded24h` | 锁定窗口内近期充值金额 |
| `refundable` | 当前可退金额 |
| `lockTimeSeconds` | 退款锁定窗口 |

## 当前选择规则

当前 UI 采用单主模型选择逻辑：启用一个主模型后，其它模型会被降为非主模型或未启用。

## 相关页面

- [选择模型与充值](../extension/models-and-funding.md)
- [钱包与模型充值](../core-concepts/wallet-and-funding.md)
