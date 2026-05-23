---
title: 产品架构一览
description: 实用视角下的 Ghast AI 分层结构，以及日常使用中真正重要的边界。
---

# 产品架构一览

本页说明 Ghast AI 是怎么组装起来的，让你阅读后续章节时有上下文。你不需要记住内部细节，但理解"哪一层负责什么"会让你在思考权限、数据、故障模式时心里有数。

## 五层结构

| 层 | 是什么 | 主要职责 |
| --- | --- | --- |
| **Ghast AI Desktop** | macOS Electron 客户端 | 主要产品入口。对话、记忆、技能、设置、MCP、ACP、Computer Use、消息桥接都在这里。 |
| **0G Compute 网络** | EVM 兼容链（chain ID 16661）+ 供应商注册表 | 推理实际发生的地方。可以走 Router（托管端点，在 0G Compute Console 付费），也可以走用钱包充值过的特定链上 TEE 供应商。 |
| **0G Storage 网络** | 去中心化存储 + 链上指针注册表 | 可选的本地数据加密备份。默认关闭。 |
| **Ghast Browser Relay** | Chrome 扩展（Manifest V3） | 让 Desktop Agent 通过 CDP 操控你已经登录的 Chrome 的中继。 |
| **Computer Use 守护进程** | 原生 Swift 辅助程序 | 通过 macOS 辅助功能 API 与 CoreGraphics 驱动 macOS。Desktop 通过本地 Unix Socket 调用它。 |

其他所有东西（钱包、Profile Vault、消息桥接 token）都是围绕这五层组织的。

## Agent 跑在哪里

推理**总是在你的机器之外**发生——要么经过 0G Router（从你的 0G Compute Console 余额扣费），要么经过你用钱包直接充值过的链上 TEE 供应商。供应商执行；你付费。

而**其他所有事情**——上下文组装、工具执行、记忆检索、技能编排、与守护进程的 IPC、消息桥接——都跑在 Desktop 客户端里。Agent 的"大脑"在远端；Agent 的"身体"在本地。

这是有意为之。这意味着：给模型提供上下文不需要把你的数据搬出机器；同一个本地"身体"可以换不同的模型而不丢失记忆。

## 数据在哪里

| 位置 | 内容 | 什么时候会离开机器 |
| --- | --- | --- |
| `~/<userData>/profiles/<id>/ghast.db` | 对话、记忆、设置、技能记录、MCP 配置 | 仅当你为该类别开启 0G Storage 同步 |
| `~/<userData>/profiles/<id>/wallet.json` | 加密的钱包私钥 | 永不离开。只有在内存中临时解密用来签名 |
| `~/Library/Application Support/Ghast/computer-use.sock` | 守护进程的本地 IPC socket | 永不离开。仅本地 socket，无网络暴露 |
| `~/<userData>/profiles/<id>/live-browser.json` | Browser Relay 端口与认证 token | 永不离开。只在 Settings 里向你展示 |

如果你开启了 0G Storage 同步，所选类别的快照会用钱包派生（HKDF-SHA256）的密钥端到端加密后上传到存储网络，得到的内容哈希作为指针写入链上注册表。解密密钥不在任何机外位置存储。

## 信任边界在哪

| 边界 | 含义 |
| --- | --- |
| 钱包边界 | Ghast 不托管资金。每一笔链上交易都在本地用你的私钥签名。 |
| Profile 边界 | 每个 Profile 完全隔离——独立钱包、记忆、对话、桥接 token。切换 Profile 时旧 Vault Key 从内存擦除。 |
| macOS 边界 | Computer Use 需要"辅助功能"权限**且**每应用单独审批。Swift 守护进程还有一份硬黑名单，即使 UI 批准也会拒绝。 |
| Chrome 边界 | 扩展只接受 `localhost` 连接。鉴权是每 Profile 随机生成的 token，可以一键 rotate。 |
| 通道边界 | 消息桥接只路由你显式映射到工作区的频道。未映射的消息被忽略。 |
| 云端边界 | 0G Storage 同步按类别 opt-in 且端到端加密。Ghast 无法解密你的备份。 |

## 安装后立即可用的能力

安装 Desktop 客户端并创建钱包后，下列本地能力立刻可用：

- 本地记忆与技能系统
- 每次新对话时的记忆召回
- 活动记录（本地、默认关闭）
- 语音输入（Whisper）与 TTS（Kokoro / Qwen）

## 上手聊天的前置步骤

模型选择器在你接入任意 Provider 之前是空的。最常见的起步路径：

- **Router**：到 <https://pc.0g.ai/> 注册 0G Compute Console、充值、生成 API key，粘到 Settings → Providers → Router。
- **Advanced**（可选）：在 Settings → Providers → Advanced 启用具体链上供应商，用本地钱包给子账户充值。

## 不必立即开启的功能

- Computer Use（需要 macOS 辅助功能授权 + 每应用审批）
- Chrome 扩展（需要加载扩展并粘贴 token）
- 消息桥接（每平台需要 bot token / OAuth）
- 0G Storage 同步（默认关闭，按类别 opt-in）

## 手册的组织方式

阅读顺序大致按层级展开：

1. **开始使用** — 产品是什么、如何安装
2. **Web3 基础设施** — 链上层先讲，因为它会影响钱包/模型/同步选择
3. **Desktop 客户端** — 主应用的每个界面，大致按你会先遇到的顺序
4. **Computer Use** — Mac 侧操作，因为有独立权限模型，单列章节
5. **浏览器扩展** — Chrome 中继，同理单列
6. **远程消息通道** — 各平台桥接
7. **Partner Mode** — 长期协作人格层
8. **安全** — 所有信任边界集中说明，便于审查
9. **参考** — 设置项、模型、技能、MCP、术语表
10. **故障排查** — 按症状索引

## 相关页面

- [什么是 Ghast AI](/cn/start-here/what-is-ghast-ai)
- [快速开始](/cn/start-here/quickstart)
- [0G Compute 概览](/cn/web3/0g-compute-overview)
- [安全概览](/cn/security/overview)
