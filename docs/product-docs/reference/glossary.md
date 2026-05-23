---
title: 术语表
description: Ghast AI 文档里用到的术语。
---

# 术语表

文档里用到的术语，平实解释。

## A

**ACP (Agent Communication Protocol)**——在 Ghast 对话里挂载子 Agent 的协议。主 Agent 把它当同伴对话。见 [ACP 与 Agent 通信](/cn/desktop/acp)。

**Action log（动作日志）**——按 Profile 加密的 Computer Use 经过审批 Gate 的动作日志。在 Settings → Computer Use 查看。

**Advanced（供应商）**——你显式启用并充值的特定 0G Compute 供应商。Router 的对立面。见 [推理模式](/cn/web3/inference-modes)。

**Approval gate（审批 Gate）**——新应用上"允许 Ghast 在 [应用名] 中 [动作]？"的 UI modal。见 [每应用审批 Gate](/cn/computer-use/approval-gate)。

**AX（辅助功能）**——macOS Accessibility API。Swift 守护进程用它读取应用 UI 树并投递事件。

## B

**Bot token**——消息平台机器人凭据（Telegram BotFather token、Discord bot token 等）。加密保存在 Profile Vault。

**Bridge（桥接）**——Ghast 与某消息平台的长连接（Telegram / Discord / Slack / 飞书 / 微信）。见 [远程消息通道概览](/cn/remote-channels/overview)。

**Browser Relay**——让桌面 Agent 通过 CDP 操控 Chrome 的扩展。见 [Ghast Browser Relay 概览](/cn/browser-extension/overview)。

## C

**CDP（Chrome DevTools Protocol）**——Browser Relay 用来驱动 Chrome 的协议。

**Companion（场景包）**——Partner Mode 的更温和语气场景。不是关系类产品。见 [Scenario Pack 场景包](/cn/partner-mode/scenario-packs)。

**Composer**——对话窗底部的输入区。

**Computer Use**——通过 Swift 守护进程驱动 macOS 应用的能力。见 [Computer Use 概览](/cn/computer-use/overview)。

**Consolidation（合并）**——把零碎记忆摘要成更高层事实的后台过程。见 [Memory 记忆](/cn/desktop/memory)。

## D

**Daemon（Computer Use）**——驱动 macOS 的 Swift 辅助应用。通过 Unix Socket 与桌面客户端对话。

**Dry run**——某些 Computer Use 动作（Calendar `create_event`、Mail compose）的标志，仅验证不产生副作用。

## E

**Embedding（嵌入）**——文本的向量表示，用于语义搜索。Ghast 嵌入记忆与查询做 KNN 召回。

## H

**Hard boundary（硬边界）**——Partner Mode 的不可被场景包、频道覆盖、轮次指令放宽的规则。见 [硬边界](/cn/partner-mode/hard-boundaries)。

**HKDF-SHA256**——从钱包私钥派生 0G Storage 加密密钥的 KDF。

## I

**Initiative（主动性）**——Partner Mode 的偶尔主动呈现引擎。见 [Initiative 主动性](/cn/partner-mode/initiative)。

**Inference 合约**——管理 0G Compute 供应商注册表、子账户、TEE 确认的链上合约。

## L

**Ledger（合约）**——保管你 OG 余额的链上合约。充值从这里开始。

## M

**MCP（Model Context Protocol）**——Ghast 接入外部工具服务的协议。见 [MCP 服务](/cn/desktop/mcp-servers)。

**Memory（记忆）**——关于你工作方式的长期事实的向量索引存储。见 [Memory 记忆](/cn/desktop/memory)。

## O

**OG**——0G 网络的原生代币。用于 Ledger 充值与供应商子账户。

**Open loop（未结流）**——过往对话里尚未闭环的承诺。锚定 Partner Mode 的跟进。

## P

**Partner Mode**——带场景包、Initiative、UUM 的长期协作层。见 [Partner Mode 概览](/cn/partner-mode/overview)。

**Pointer Registry**——存储 0G Storage 备份内容哈希的链上合约。

**Privileged actor（被授权执行者）**——群频道里被显式允许向 Agent 派活的用户。见 [审批流](/cn/remote-channels/approval-flow)。

**Profile**——Ghast Desktop 的顶层容器。一钱包、一数据库、一套设置。

**Profile Vault**——按 Profile 加密的高价值 secret 存储（钱包密钥、OAuth token、桥接凭据）。Vault Key 仅在内存。

## R

**Router (0G)**——0G 运营的托管路由端点。在 [0G Compute Console](https://pc.0g.ai/) 生成 API key 配置；调用从 Console 余额扣费。与 Advanced（用本地钱包对接特定链上供应商）有别。

## S

**Scenario pack（场景包）**——Partner Mode 预设：`work`、`companion`、`quiet`。见 [Scenario Pack 场景包](/cn/partner-mode/scenario-packs)。

**Skill（技能）**——Markdown 定义的 Agent 行为。内置或用户安装。见 [Skills 技能](/cn/desktop/skills)。

**Skyshot**——Computer Use 原语：AX 树 dump + 截图。Agent 的"看屏幕"动作。

**Strict approval（严格审批）**——Computer Use 设置：Always 行为变 Once。每次修改型动作都重新弹窗。

## T

**TEE（可信执行环境）**——0G Advanced 供应商运行模型的硬件隔离运行时。见 [TEE 与链上确认](/cn/web3/tee-and-attestation)。

**TEE signer**——Advanced 供应商在链上注册的地址，对推理响应签名。你在充值前确认其 TEE signer。

## U

**UUM（用户理解模型）**——Schema 受限的协作画像。字段：`work_state`、`goal_hierarchy`、`values_and_taste`、`decision_style`、`boundaries`、`expertise_areas`、`collaboration_relationship`、`do_not_push`。见 [UUM](/cn/partner-mode/uum)。

## V

**Vault Key**——加密 Profile Vault 的 AES-256-GCM 密钥。后端按登录签发，仅在内存。

## W

**Whisper**——本地语音转文字引擎。CPU 或 Apple Silicon Metal 后端。

**Workspace（工作区）**——Profile 内的项目级上下文。工作区共享钱包与记忆；对话列表与频道映射不同。

## 相关页面

- [设置项参考](/cn/reference/settings-reference)
- [内置技能清单](/cn/reference/bundled-skills)
- [支持的模型](/cn/reference/supported-models)
