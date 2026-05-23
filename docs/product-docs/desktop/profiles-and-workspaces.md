---
title: Profile 与工作区
description: Profile 如何隔离数据、什么时候建多个 Profile、工作区在 Profile 内部做什么。
---

# Profile 与工作区

Ghast 用 **Profile** 和**工作区**两个概念把"你是谁"和"你在做什么"分开。

## Profile = 钱包 + 身份

Profile 是最顶层的容器。每个 Profile 拥有：

- 一个钱包（每个 Profile 一个地址）
- 一个 Profile Vault（独立的加密密钥，登录时签发）
- 一个 SQLite 数据库（对话、记忆、设置）
- 桥接凭据（按平台的 token）
- 一份 MCP 配置
- 一份 0G Storage 同步配置（哪些类别同步、什么节奏）

两个 Profile 完全隔离。不能互相读取数据，不能共享钱包，不能共享记忆。

### 什么时候用多个 Profile

| 原因 | 建议 |
| --- | --- |
| 严格的工作 / 个人分离 | 两个 Profile。要不同的资金来源就用不同钱包。 |
| 你有多个想独立使用的钱包 | 每个钱包一个 Profile。 |
| 测试一套不同的配置 | 用独立 Profile 隔离实验。 |
| 不同语境下需要不同语言 | Profile 存语言设置，用它来切换语境。 |

### 不应该用多个 Profile 的场景

- 仅仅因为有多个项目。工作区（见下）来处理这种情况。
- 想"跨机器共享钱包"——用 0G Storage 同步。

### 管理 Profile

Settings → Account 显示当前 Profile。**Add Profile** 触发一次新 Onboarding。**Switch** 切换当前 Profile，过程中：

- 上一个 Profile 的 Vault Key 从内存擦除。
- 向后端请求新 Profile 的 Vault Key。
- 从新 Profile 目录重新加载 SQLite、设置、UI 状态。

旧 Profile 不会被退出登录，只是挂起。可以无需再次 Onboarding 切回去。

## 工作区 = Profile 内的项目

工作区是 Profile 内**项目级**的上下文。工作区之间共享：

- 同一个钱包
- 同一个记忆库（适用时按工作区打标）
- 同一套桥接凭据
- 同一套设置

它们的差异：

- 显示的对话和 todo 集合
- 当前映射的消息频道
- 可选的每工作区 prompt 和默认技能

典型用法：

- Profile = "Songsu"
- 工作区："Ghast Desktop"、"侧项目"、"个人笔记"

主窗口侧栏里能看到工作区切换器。每个工作区呈现自己的对话列表；全局记忆和桥接频道在合适的地方按当前工作区过滤。

### 工作区不是什么

- 不是独立账号。钱包、Vault、后端 session 都是共享的。
- 不是独立的技能安装。技能在 Profile 级别安装。
- 不是 OS 层面的沙箱。Computer Use 审批与 MCP 服务都是 Profile 级。

## 文件布局

```
~/Library/Application Support/Ghast/
├── profiles/
│   ├── <profileId-1>/
│   │   ├── ghast.db           ← SQLite（工作区数据是共享表里的行）
│   │   ├── wallet.json        ← 加密钱包
│   │   ├── live-browser.json  ← Chrome 扩展 token
│   │   └── …
│   └── <profileId-2>/
│       └── …
└── computer-use.sock          ← 守护进程共享 Unix socket
```

Computer Use 守护进程的 socket 在用户级共享，但守护进程按 Profile 维护审批状态。

## 相关页面

- [登录与激活](/cn/desktop/sign-in-and-activation)
- [Memory 记忆](/cn/desktop/memory)
- [设置总览](/cn/desktop/settings-overview)
- [安全：本地数据存储](/cn/security/local-data-storage)
