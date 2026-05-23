---
title: 本地数据存储
description: 本地数据在磁盘上的布局、加密情况、隔离方式。
---

# 本地数据存储

本页是 Ghast 的磁盘布局视图——每类数据在哪里、加密了什么、有哪些保护。

## 目录布局

```
~/Library/Application Support/Ghast/
├── profiles/
│   ├── <profileId-1>/
│   │   ├── ghast.db                 ← 主 SQLite 数据库
│   │   ├── wallet.json              ← 加密钱包（AES-256-GCM）
│   │   ├── live-browser.json        ← Browser Relay 端口 + token（加密）
│   │   ├── mcp-tokens.json          ← MCP 服务的 OAuth token（加密）
│   │   ├── bridge-credentials/      ← 加密的 bot token
│   │   ├── memory-embeddings/       ← 向量 embedding 文件（本地嵌入时） |
│   │   ├── activity/                ← 活动记录样本（启用时）|
│   │   └── attachments/             ← 用户上传的文件
│   └── <profileId-2>/ …
├── computer-use.sock                ← Computer Use 守护进程的 Unix socket（瞬态）
├── logs/                            ← 应用日志
└── crash-reports/                   ← Sentry 崩溃 dump（启用时）
```

## 加密了什么

| 文件 | 加密 |
| --- | --- |
| `wallet.json` | AES-256-GCM，密钥来自 Profile Vault Key（不落盘） |
| `live-browser.json` | 同上 |
| `mcp-tokens.json` | 同上 |
| `bridge-credentials/*` | 同上 |
| `ghast.db` | 数据库本身用 `better-sqlite3-multiple-ciphers`——支持页级加密。当前默认未启用页级加密；对话内容、记忆、设置存放在明文 SQLite 页中，除非你启用了 DB 级加密。 |

这种切分是刻意的：高价值秘密（钱包、token）用瞬态密钥强加密；大体量内容（对话、记忆）放在明文 SQLite，便于恢复与必要时检查。

如果你的威胁模型要求 DB 本身也加密，这在路线图里但今天不是默认。

## 默认**未**加密的

- SQLite 数据库内容（对话、记忆、设置、技能、MCP 配置）。
- 活动记录器样本（启用时）。
- 你上传的附件。
- 应用日志。

这些依赖 macOS 文件系统级保护：你用户账号的 home 目录权限，加上你启用 FileVault 的情况。FileVault 开 → 磁盘静态加密；关机时数据不可读。FileVault 关 → home 目录里任何东西都能被有物理访问权且 Mac 已解锁的人读到。

## Profile 隔离

两个 Profile 互相读不到对方数据，因为：

- 各自有独立 Vault Key（登录时分别签发）。
- Profile A 的加密文件只能用 Profile A 的 Vault Key 解开。
- Profile A 的 SQLite 仅在 A 处于活动 Profile 时打开。

Computer Use 守护进程的 socket 在 OS 用户级共享，但守护进程按 Profile 强制审批状态（每次 RPC 调用都带）。

## 备份

默认情况下，什么都不离开你的机器。**Time Machine** 等 macOS 备份工具会复制整个 `Application Support/Ghast` 目录——包括加密的 `wallet.json`。同一 Mac、同一 macOS 用户上从 Time Machine 恢复，数据可用；恢复到不同机器且没登录，钱包仍解不开（没 Vault Key）。

如果你 opt-in 了 0G Storage 同步，已 opt-in 类别的加密副本会进存储网络——但加密密钥来自钱包，同样限制适用。

## 删除

删除时：

- **对话**——行从数据库移除。Embedding 一起移除。引用它的活动记录条目不受影响。
- **记忆**——先软删除，由合并器最终确认。
- **Profile**——整个 Profile 目录被移除。链上状态（Ledger 余额、供应商子账户）不受影响，仍绑定在钱包上。

"被 Ghast 遗忘"不等于"被链遗忘"——链上的东西留在链上。

## 应用日志

Ghast 记录：

- 应用错误与警告。
- 网络错误（不含 body）。
- Sentry 崩溃报告（安装时 opt-in）。

日志**不**包含：

- 钱包密钥或助记词。
- 解密后的 token 值。
- 对话内容。
- 工具调用参数或结果。

Sentry 崩溃报告可能包含含文件路径和变量名的堆栈跟踪。不包含用户内容或 secret。可在 Settings → System 关掉 Sentry。

## 相关页面

- [加密云同步](/cn/security/encrypted-cloud-sync)
- [Profile 与工作区](/cn/desktop/profiles-and-workspaces)
- [Memory 记忆](/cn/desktop/memory)
- [安全概览](/cn/security/overview)
