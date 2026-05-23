---
title: Agent 能做什么
description: 通过扩展可对已连接 Chrome 执行的操作目录。
---

# Agent 能做什么

通过 Browser Relay 扩展，Agent 获得一组离散的、可对已连接 Chrome 执行的操作。本页是这个目录。

## 标签页管理

| 方法 | 作用 |
| --- | --- |
| `browser.tabs.list` | 枚举所有打开的 tab：URL、title、活跃态、window ID、audible 标志、加载状态 |
| `browser.tabs.create` | 新建 tab，可选 URL |
| `browser.tabs.navigate` | 在已有 tab 中加载 URL |
| `browser.tabs.reload` | 刷新 tab |
| `browser.tabs.close` | 关闭 tab |

扩展侧这些方法无状态——每次调用直接走 Chrome 标准 `chrome.tabs` API。

## 截屏

| 方法 | 作用 |
| --- | --- |
| `browser.tabs.capture` | 截取 tab 可视区域为 JPEG（质量 80）base64，并附 viewport 宽高。优先用 CDP `Page.captureScreenshot`；CDP 不可用时回退 `chrome.tabs.captureVisibleTab`。 |

返回图像带有尺寸信息，Agent 之后想基于看到的内容做像素级坐标动作时可用。

## Debugger Protocol (CDP)

| 方法 | 作用 |
| --- | --- |
| `browser.debugger.attach` | 给 tab 附加 Chrome debugger（协议版本 1.3） |
| `browser.debugger.detach` | 分离 debugger |
| `browser.debugger.sendCommand` | 转发任意 CDP 方法（如 `Runtime.evaluate`、`Page.captureScreenshot`、`DOM.describeNode`） |

CDP 是最强大的面——通过 `sendCommand`，Agent 可以：

- **在页面上下文中执行 JS**（`Runtime.evaluate`）。
- **遍历 DOM**（`DOM.getDocument`、`DOM.querySelector`）。
- **监听事件**——JS 弹窗、网络活动、页面生命周期。

附加 debugger 时扩展会自动接管 JS 弹窗（`alert` / `confirm`），避免阻塞自动化。

## DOM 助手

桌面客户端把常见 CDP 用法封装成更高级的 helper 供 Agent 直接调用：

| 操作 | 作用 |
| --- | --- |
| 读页面内容 | title、URL、innerText（截断到 60,000 字符，带 truncation flag） |
| 摘要 DOM | 提取最多 200 个交互元素（按钮、链接、输入、自定义 role），含 CSS selector、bounding box、可见性、text/aria-label、disabled |
| 按 selector 点击 | 点击 CSS selector 指定的元素 |
| 按 selector 键入 | 向 CSS selector 指定的输入键入 |
| 滚动 | 滚动页面或指定滚动容器 |
| 上传文件 | 用本地文件路径触发指定 CSS selector 的 file input |

Agent 的典型流程：

1. 截图看页面。
2. 摘要 DOM 学习 selector。
3. 用具体 selector 调用 click / type。

## 通过中继**做不了**的事

- **跨浏览器重启保留状态**。扩展本身不存储你的任何浏览数据。
- **读浏览历史或书签**。这些 Chrome API 不在扩展权限集里。
- **改 Chrome 设置**。扩展不申请 `chrome.management` 等。
- **触碰其他扩展**。中继没有跨扩展消息。
- **在隐身模式下操作**。Manifest V3 + `debugger` 权限默认不延伸到隐身。要在隐身工作，需在 `chrome://extensions` 中显式给该扩展启用隐身权限；否则隐身 tab 对 Agent 不可见。

## 并发

中继同一时间只对一个 tab 附加 debugger。Agent 可以驱动多个 tab，但顺序执行。"跟着这个链接、截图、回来、点另一个"的流程很常见；"并行做三件事"则不行。

## 限制与配额

- 截图固定 JPEG 80 质量——对视觉模型够用、又不撑爆 context。
- innerText 上限 60,000 字符。超长会显式截断并带 flag。
- DOM 摘要单次上限 200 个交互元素。更多元素时 Agent 通过滚动 + 重新摘要分页。

## 相关页面

- [Ghast Browser Relay 概览](/cn/browser-extension/overview)
- [安装与配对](/cn/browser-extension/install-and-pair)
- [安全与 Token 轮换](/cn/browser-extension/security)
- [Skills（`browser` 技能）](/cn/desktop/skills)
