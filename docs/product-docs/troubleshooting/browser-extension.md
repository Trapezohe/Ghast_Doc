---
title: 浏览器扩展
description: 诊断 Ghast Browser Relay 的连接与能力问题。
---

# 浏览器扩展

按症状索引。

## 弹窗显示「断开」（红点）

| 可能原因 | 处理 |
| --- | --- |
| Ghast Desktop 没运行 | 打开 Ghast Desktop |
| 扩展选项页里端口或 token 错 | 从 Settings → Integrations → Browser 重新复制，粘到 Options |
| 端口与本机其他服务冲突 | Settings → Integrations → Browser → 改端口；更新 Options |
| 桌面侧 token 轮换了 | 重新粘新 token |
| 退出登录抹掉了 Vault Key | 在桌面重新登录 |

## 弹窗显示「连接中…」（黄）一直不变绿

| 可能原因 | 处理 |
| --- | --- |
| Auth subprotocol 不匹配（罕见） | 重载扩展（`chrome://extensions` → 刷新图标） |
| 网络过滤阻止 localhost WebSocket | 用 `wscat -c ws://127.0.0.1:18189/v1/browser/stream` 测 |

## Agent 看不到打开的 tab

| 可能原因 | 处理 |
| --- | --- |
| 扩展未附加 | 弹窗 → 附加当前 tab |
| Tab 在隐身模式 | 默认 Manifest V3 + debugger 不允许隐身；需要的话在 `chrome://extensions` 启用隐身权限 |
| 其他扩展独占 debugger | 让另一个 detach；每 tab 只能有一个 debugger |

## 按 selector 点击 / 键入没反应

| 可能原因 | 处理 |
| --- | --- |
| Selector 没匹配到任何元素 | Agent 应回退到 DOM 摘要；查工具调用结果 |
| 元素在 Shadow DOM 中 | 部分 shadow root 默认不遍历；Agent 可能需要显式 shadow 路径 |
| 页面 CSP 拒绝评估 JS | CDP 有时能通过 isolated world 绕过；失败时基于截图的交互是回退 |

## 截图返回空白

| 可能原因 | 处理 |
| --- | --- |
| Tab 还没完全加载 | 重试；Agent 有等待 helper |
| Tab 显示受保护内容（如某些视频 DRM） | 部分页面拒绝 `Page.captureScreenshot`；罕见 |

## 「重连」按钮无效

| 可能原因 | 处理 |
| --- | --- |
| Service worker 卡住 | `chrome://extensions` → service worker → Inspect → reload page |
| Chrome 本身要重启 | Cmd-Q 完全退出 Chrome 再开 |

## 自动加载（方式 A）失败

| 可能原因 | 处理 |
| --- | --- |
| Chrome 不在标准路径 | 安装 Chrome 或改用方式 B（手动加载已解压） |
| Chrome 拒绝 `--load-extension`（某些企业策略） | 查 `chrome://policy`；某些配置下手动加载仍可行 |

## Ghast 更新后扩展版本过时

| 可能原因 | 处理 |
| --- | --- |
| 手动加载的扩展没重载 | `chrome://extensions` → Ghast 扩展上的刷新图标 |
| 自启 Chrome 跨更新没关 | 关掉 Chrome，从 Ghast Settings 的自启按钮重启 |

## 相关页面

- [Ghast Browser Relay 概览](/cn/browser-extension/overview)
- [安装与配对](/cn/browser-extension/install-and-pair)
- [Agent 能做什么](/cn/browser-extension/capabilities)
- [安全与 Token 轮换](/cn/browser-extension/security)
