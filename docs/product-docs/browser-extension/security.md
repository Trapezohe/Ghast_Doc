---
title: 安全与 Token 轮换
description: 扩展如何鉴权、Token 存在哪里、如何轮换。
---

# 安全与 Token 轮换

Browser Relay 夹在保管你数据的桌面客户端和保管你 session 的 Chrome 之间。它的信任模型必须处理："这台机器上的其他人不能借我的桌面操控我的浏览器。"

## 扩展能看到什么

扩展本身是一段刻意收窄目的的小代码。它能：

- 连接到 `127.0.0.1` 上的 WebSocket（host_permissions 仅限 localhost）。
- 通过 `chrome.tabs` 和 `chrome.debugger` API 驱动 Chrome 标签页。

它不能：

- 和任何远程服务通信。扩展自身没有出站网络。
- 持久化你的浏览历史或 cookie（没有 `cookies` 权限）。
- 触碰其他扩展。
- 在你没登录 Ghast Desktop 时运行（没 token、没连接）。

完整 manifest 权限：

```
debugger        — 通过 CDP 附加到 tab
tabs            — 完整的 tab 生命周期
activeTab       — 访问活跃 tab 的元数据
storage         — 存端口与 token 配置
alarms          — 调度重连 keep-alive
```

加上 host 权限：

```
<all_urls>          — CDP 需要附加到任何 URL
http://127.0.0.1/*  — 仅 localhost
http://localhost/*  — localhost 回退
```

## 鉴权怎么工作

扩展与桌面之间每次 WebSocket 连接携带两个 subprotocol 头：

- `ghast-browser.v1`——协议版本
- `ghast-token.<TOKEN>`——鉴权 token

桌面服务在接受连接前都校验。不匹配 → 用 WebSocket close code `4001` 拒绝。

Token：

- 24 字节，来自 `crypto.getRandomValues`。
- 加密存放在 Profile Vault 的 `live-browser.json`。
- 每个 Profile 独立生成。
- 永不广播。

## 在哪儿能看到 Token

Ghast AI Desktop：**Settings → Integrations → Browser**。默认遮罩显示，点眼睛图标展示。复制到扩展选项页。

扩展选项页：**Options → Auth Token**。存在 `chrome.storage.local`。点眼睛图标可见。

Token **不会**出现在：

- 对话日志里
- 技能输出里
- 同步导出里

## 轮换 Token

**Settings → Integrations → Browser → Rotate token**：

1. Ghast 生成新随机 token。
2. 旧 token 立即失效。仍在用旧 token 的扩展被以 `4001` 断开。
3. 新 token 显示出来供你复制到扩展选项页。
4. 扩展更新 token 后用新值重连。

何时轮换：

- 怀疑 token 已暴露（如截图泄漏）。
- 把扩展换到不同 Chrome Profile 或实例。
- 彻底停用扩展（之后不要再粘贴新 token）。

## 威胁模型

鉴权保护：

- **同机冒名**。本机其他进程没有 token 就不能通过 Ghast 操作你的浏览器。
- **跨 Profile 泄漏**。每个 Profile 各自一个 token；Profile 之间不能跨用扩展。

鉴权**不**防：

- 拥有完整磁盘访问的本地攻击者。如果他们同时知道 Vault Key（驻留在已登录的 Ghast 进程内存中），就能读加密的 vault。
- 你自己安装的恶意扩展（理论上可以读其他扩展的 `chrome.storage.local`，需要显式权限，但极端情形下存在）。
- Chrome 自身被攻破（罕见）。

这些是任何"在本地应用与浏览器之间架桥"的浏览器自动化工具的标准风险。缓解（按 Profile 随机 token、仅 localhost socket、加密 vault）是匹配该威胁模型的——不是面向远比它更强威胁的。

## 扩展什么时候静默

扩展会自动断开（不弹窗）：

- 桌面进程没运行。
- Token 不匹配。
- 端口不匹配。
- 心跳期间网络错误（每 20 秒；60 秒超时）。

它会自动重连，带退避（1s → 30s）。也可以在 popup 点 **Reconnect**。

## 相关页面

- [Ghast Browser Relay 概览](/cn/browser-extension/overview)
- [安装与配对](/cn/browser-extension/install-and-pair)
- [Agent 能做什么](/cn/browser-extension/capabilities)
- [安全概览](/cn/security/overview)
