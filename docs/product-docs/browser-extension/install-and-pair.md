---
title: 安装与配对
description: 把扩展加载到 Chrome 并连接到桌面客户端的两种方式。
---

# 安装与配对

Browser Relay 扩展打包在 Ghast AI Desktop 应用里。要使用它，需要把它加载进 Chrome，并把桌面侧的连接信息喂给它。

## 方式 A — 让桌面替你启动 Chrome

macOS 上最快的路径：

1. 打开 Ghast AI Desktop。
2. 到 **Settings → Integrations → Browser**。
3. 点 **Launch Chrome with extension**。
4. Ghast 拉起一个新 Chrome 实例，参数为 `--load-extension=<打包路径>`。
5. 扩展自动连接当前运行的桌面客户端。

这种方式打开的 Chrome 与你已有的 Chrome 实例分开。两个都可以用。

如果 Mac 上没装 Chrome，会报清晰错误。到 `chrome.google.com` 装一个再重试。

## 方式 B — 手动加载已解压扩展

想用在已有 Chrome 里（保留已有登录和书签）：

1. 打开 `chrome://extensions`。
2. 开启右上角的 **开发者模式**。
3. 点 **加载已解压的扩展程序**。
4. 浏览到：
   ```
   /Applications/Ghast AI.app/Contents/Resources/chrome-extension/
   ```
5. 选中该文件夹。

扩展图标（G 标志）现在出现在工具栏。点它弹出 popup。

桌面更新后想重载扩展：回到 `chrome://extensions` 在扩展卡片上点刷新图标。

## 与桌面配对

扩展和桌面必须就两件事达成一致：

- **Port**——桌面监听的 WebSocket 端口（默认 `18189`）。
- **Auth Token**——24 字节随机 secret，按 Profile 一份。

配置步骤：

1. 在 Ghast AI Desktop，到 **Settings → Integrations → Browser**。
2. 复制 **Port** 和 **Auth Token** 的值。
3. 点 Chrome 里扩展图标 → **Settings**（或右键 → Options）。
4. 把 **Port** 和 **Auth Token** 粘贴到选项页。
5. 点 **Save**。

一秒内扩展 popup 的连接指示器应该变绿。如果仍是黄或红，见 [故障排查：浏览器扩展](/cn/troubleshooting/browser-extension)。

## 弹窗速览

点扩展图标显示：

| 元素 | 含义 |
| --- | --- |
| **状态点** | 绿 = 已连接；黄 = 连接中；红 = 断开 |
| **服务器地址** | 显示已配置的 `127.0.0.1:<port>` |
| **已附加标签页** | 当前 Agent 拥有 debugger 访问权的 tab ID 与标题 |
| **附加当前标签** | 手动给当前 tab 附加 debugger |
| **分离**（按 tab） | 手动分离 |
| **重连** | 强制重连桌面服务 |
| **设置** | 打开选项页 |

平时不需要手动 Attach / Detach——桌面客户端按需请求附加。

## 升级扩展

更新 Ghast AI Desktop 时，打包的扩展可能一起更新。若用了手动方式（方式 B），到 `chrome://extensions` 重新加载它。用方式 A 自启 Chrome 的话，下次启动会自动取到新版本。

## 移除扩展

在 Chrome 里右键扩展图标 → **从 Chrome 中移除**。弹窗确认。这**不**影响桌面侧状态。

如果同时想在桌面侧也忘掉配对，到 Settings → Integrations → Browser 里轮换 token（见 [安全与 Token 轮换](/cn/browser-extension/security)）。

## 相关页面

- [Ghast Browser Relay 概览](/cn/browser-extension/overview)
- [Agent 能做什么](/cn/browser-extension/capabilities)
- [安全与 Token 轮换](/cn/browser-extension/security)
- [故障排查：浏览器扩展](/cn/troubleshooting/browser-extension)
