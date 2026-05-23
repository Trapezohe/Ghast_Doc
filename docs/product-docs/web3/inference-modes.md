---
title: 推理模式：Router 与 Advanced
description: Router 与 Advanced 的差异、各自的配置与计费方式。
---

# 推理模式：Router 与 Advanced

Ghast AI 提供两种与 0G Compute 网络交互的方式：**Router 模式**与 **Advanced 模式**。它们在**请求怎么派发、你怎么付费、回执是什么**上不同。**两种都是付费的**——没有"免费"。

本页讲两种模式的配置、什么时候选哪个、充值怎么走。

## Router 模式

0G 运营的托管路由端点。你发的每次调用打到 Router，Router 按容量、延迟、可用性选一个底层供应商转发请求。你消耗的是 **0G Compute Console** 账号上的余额。

| 方面 | Router |
| --- | --- |
| 端点 | 托管 Router（`router-api.0g.ai`） |
| 配置 | 到 [pc.0g.ai](https://pc.0g.ai/) 注册账号，充值余额，生成 API key，粘贴到 Ghast |
| 钱包参与 | 无——Router 不用你的本地 Ghast 钱包 |
| 链上记账 | 客户端看不到——账目在 Compute Console 里 |
| 回执 | Console 侧的调用与余额记录 |
| 适合谁 | 快速上手；想一个端点覆盖多种模型；不愿意为每个供应商单独充值 |

### Router 配置（分步）

1. **在浏览器打开** <https://pc.0g.ai/>。如果还没有 0G Compute Console 账号，先注册。
2. **在 Console 里充值余额**。Console 自管支付流程——你在那里充的就是 Router 会扣的。
3. **在 Console 里生成 API key**。
4. **回到 Ghast Desktop**，到 **Settings → Providers → Router**（这是页面顶层的 Router / Advanced tab）。
5. **把 API key 粘贴**到 Router 供应商的 `Compute API key` 字段。
6. Ghast 测试 key 并列出 Router 服务的模型。

之后 Router 出现在主对话窗的模型选择器里。调用从 Console 余额扣。

## Advanced 模式

每个 Advanced 供应商对应 0G Inference 合约链上服务注册表的一条具体记录。启用一个就把 Ghast 绑定到该供应商，使用它特定的 TEE 签名者、模型和定价。按供应商单独充值，用本地钱包的 OG 付。

| 方面 | Advanced |
| --- | --- |
| 端点 | 该供应商在链上声明的 URL |
| 配置 | 按供应商：在 Settings → Providers → Advanced 启用，用钱包给子账户充值 |
| 钱包参与 | 签 Ledger 充值、签划账给供应商、签 `acknowledgeTEESigner` |
| 链上记账 | 可见——按供应商显示已充值金额、退款流程 |
| TEE 确认 | 可见——按供应商显式标注「已确认」 |
| 适合谁 | 想挑 TEE 服务方、想做链上花费追踪、要某供应商专有能力的用户 |

### Advanced 配置（分步）

1. **先在 Ghast 里配好钱包**（如果还没——[钱包与密钥托管](/cn/web3/wallet-and-key-custody)）。确保钱包里有 OG。
2. **打开** Settings → Providers → Advanced。
3. **浏览**链上注册表。每条记录展示供应商地址、服务 URL、声明的能力、定价。
4. **启用**一个供应商。Ghast 把它实例化为本地 `zg-advanced-<address>` 供应商记录，并要求你充值。
5. **充值**：输入 OG 数额。Ghast 会：
   - 如有需要先给你的 0G Ledger 充值（首次 `addLedger`，之后 `depositFund`）。
   - 把金额划账到供应商子账户（`transferFund(provider, "inference-v1.0", amount)`）。
   - 调用 `acknowledgeTEESigner(provider, true)` 在链上记录你的 TEE 确认。
6. 在主对话窗的模型选择器里**挑该供应商的模型**。

之后对话请求直接打到供应商的 `/v1/proxy/chat/completions` 端点，带上 Ghast 用你钱包生成的 `app-sk-...` token。调用从子账户扣费。

## 充值下限（Advanced）

Ledger 合约对每笔转账强制最小金额。实际下限是：

```
max(MIN_TRANSFER_AMOUNT(), outputPrice + 1e12 buffer)
```

UI 会替你算好并显示建议金额。小模型首次充值通常在 **1–3 OG** 之间。

## 退款

### Router

Router 的退款在 **0G Compute Console**（<https://pc.0g.ai/>）里处理。Ghast 没有针对 Router 的退款按钮——余额在 Console 里，不在 Ghast 里。

### Advanced

每个 Advanced 供应商在 Settings 里都有 Refund 按钮。退款：

- 是链上发起的。
- 有 **24 小时锁定窗口**，期满后资金回到 Ledger。
- 锁定期内可通过再次充值取消退款（合约复用子账户）。

退款回到 Ledger（**不是钱包**）。要把资金从 Ledger 取回到钱包，需要通过 Ledger 合约的提现操作。

## 对话中途切换

可以在 Composer 的模型选择器里随时换模型，含跨模式切换。之前的轮次保留；新模型收到对话上下文（受其上下文窗口限制）。Agent 本地状态、记忆、工具接线不变。

Router 与 Advanced 之间互切没问题——只是换模型。

## 什么时候选哪个

合理的默认：

- **大多数用户 → Router**。一个 API key、一个端点、不用按供应商分别充值。在 Console 里付费。
- **对 TEE / 供应商身份有强意见 → Advanced**。你能精确看到哪个 TEE 服务你的调用；链上回执；按供应商成本追踪。
- **两个都用的人 → 两个都开**。它们能共存。要审计的工作流绑 Advanced；其他用 Router。

## 相关页面

- [0G Compute 概览](/cn/web3/0g-compute-overview)
- [TEE 与链上确认](/cn/web3/tee-and-attestation)
- [钱包与密钥托管](/cn/web3/wallet-and-key-custody)
- [参考：支持的模型](/cn/reference/supported-models)
- [故障排查：钱包与充值](/cn/troubleshooting/wallet-and-funding)
