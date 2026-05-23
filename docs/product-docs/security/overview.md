---
title: 安全概览
description: Ghast AI 所有信任边界的集中说明，便于审查。
---

# 安全概览

本页是 Ghast AI 所有信任边界的单页摘要。子页面深入各具体面——钱包、数据、Computer Use、Partner Mode——但只有时间读一页的话，读这一页。

## 一句话信任模型

**Ghast 是一个非托管、本地优先的客户端。** 钱包密钥留在你的机器；数据默认留在你的机器；除非你 opt-in 其他能力，链上层（0G Compute / Storage）是唯一的出站面。

## 边界一览

| 边界 | 含义 | 深入阅读 |
| --- | --- | --- |
| **钱包边界** | Ghast 不托管资金。钱包密钥用 Profile 级 Vault Key（不落盘）加密。签名仅内存内短暂存在。 | [钱包与密钥托管](/cn/security/wallet-key-custody) |
| **Profile 边界** | 每个 Profile 完全隔离。两个 Profile 不能互相读取数据、共享钱包、共享记忆。 | [Profile 与工作区](/cn/desktop/profiles-and-workspaces) |
| **本地数据边界** | 所有对话、记忆、设置、MCP 配置都在 Profile 级 SQLite 数据库里。除非你 opt-in 同步，否则不出机。 | [本地数据存储](/cn/security/local-data-storage) |
| **云同步边界** | 0G Storage 同步按类别 opt-in。HKDF-SHA256 从钱包派生密钥，端到端加密。 | [加密云同步](/cn/security/encrypted-cloud-sync) |
| **macOS 权限边界** | Computer Use 需要辅助功能（必需）与屏幕录制（高保真截图）。均通过系统设置 opt-in。 | [macOS 权限](/cn/security/macos-permissions) |
| **每应用审批边界** | 即使授予辅助功能，新应用上的修改型动作仍要 UI modal 显式批准。 | [Computer Use 边界](/cn/security/computer-use-boundary) |
| **守护进程硬黑名单** | 即使 UI 批准，Swift 守护进程也拒绝某些应用类别（密码管理器、敏感系统工具）。Defense-in-depth。 | [Computer Use 边界](/cn/security/computer-use-boundary) |
| **浏览器中继边界** | 连接需要每 Profile 随机 token；socket 仅 localhost。Token 可轮换。 | [浏览器扩展：安全](/cn/browser-extension/security) |
| **桥接频道边界** | 仅显式映射到工作区的频道消息会被路由。未映射消息忽略。 | [远程消息通道概览](/cn/remote-channels/overview) |
| **桥接 actor 边界** | 群里非 actor 消息被观察但不驱动 Agent 动作（除非走审批）。 | [审批流](/cn/remote-channels/approval-flow) |
| **Partner Mode 边界** | 八条硬边界，任何场景包、频道覆盖、当轮指令都不能放宽。UUM 受 schema 约束。 | [Partner Mode 边界](/cn/security/partner-mode-boundary) |

## 这套栈假设什么

Ghast 安全模型假设：

- **你掌控本地机器**。威胁模型不是"本地另一个用户接管你的账号"。这类风险需要 OS 级缓解，Ghast 不提供。
- **钱包助记词是你的责任**。Ghast 不备份。助记词丢 + 设备丢 = 钱包没了。
- **你审视你授予的 Computer Use 应用**。Allow Always 是你的决定；每应用 Gate 是做决定的时刻。
- **链上层的正确性不由客户端保证**。0G 链完整性、供应商 TEE 行为、底层合约都不在客户端范围。

## 这套栈**不**防：

- **Mac 上有完整磁盘访问且你处于登录状态时的恶意软件**。同时拿到 `wallet.json` 和内存中 Vault Key 的攻击者可解密钱包。
- **被攻破的模型**。如果推理供应商的 TEE 被攻破，你发给该供应商的 prompt 暴露。已充值供应商的身份至少在链上；其余看供应商。
- **被攻破的消息平台**。Telegram 看到你的对话是 Telegram 的事；Ghast 不在其传输协议上再加一层加密。
- **对模型的社工**。对话中的不可信内容（截图、工具结果、远程消息）可能尝试让模型做用户意图外的事。硬边界缓解；不完全消除。
- **macOS 或 Chrome 的 OS 级漏洞**。不在范围。

## 自审方法

三个真相来源，按优先级：

1. **本文档集**。这里写错 → 哪里都错。
2. **源代码**。具体看 `src/main/auth/profile/wallet-keystore.ts`、`src/main/computer-use/computer-use-approval-gate.ts`、`computer-use/Sources/`、`src/main/zerog-compute/`、`src/main/services/data-sync-service.ts`。
3. **实际运行时**。应用在 macOS 隐私与安全中的权限。Computer Use 动作日志。桥接日志。

(1) 与 (2) 的不一致是文档 bug，欢迎反馈。

## 相关页面

- [macOS 权限](/cn/security/macos-permissions)
- [钱包与密钥托管](/cn/security/wallet-key-custody)
- [本地数据存储](/cn/security/local-data-storage)
- [加密云同步](/cn/security/encrypted-cloud-sync)
- [Computer Use 边界](/cn/security/computer-use-boundary)
- [Partner Mode 边界](/cn/security/partner-mode-boundary)
