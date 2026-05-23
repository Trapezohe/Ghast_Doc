---
title: 内置技能清单
description: Ghast AI Desktop 自带的 30 个技能，按用途分组。
---

# 内置技能清单

Ghast AI Desktop 在 `resources/bundled-skills/` 下自带 30 个内置技能。每个是一份带结构化前置元数据的 Markdown 文件。本页是完整参考列表。

## 生产力（6）

| 技能 | 作用 |
| --- | --- |
| `tasks` | 创建 / 管理对话范围内的待办。 |
| `todo` | 旧版 todo 支持——仍可用，旧接口。 |
| `scheduler` | 按 cron 节奏调度 prompt。 |
| `notebook` | 工作区内的持久文本笔记。 |
| `work-log` | 记录与摘要每日活动。 |
| `plan-mode` | 执行前的结构化规划。 |

## 自动化与工具（8）

| 技能 | 作用 |
| --- | --- |
| `computer-use` | 驱动 macOS 应用（搭配 Computer Use 守护进程）。 |
| `browser` | 通过 Ghast Browser Relay 扩展驱动 Chrome。 |
| `screenshot` | 截屏（屏幕或窗口）。 |
| `web-fetch` | HTTP GET/POST，解析 HTML/JSON。 |
| `web-search` | 网页搜索（Bing、自定义引擎），带截图。 |
| `surf` | 更高层的网页浏览工具集。 |
| `file-manager` | 浏览与打开文件。 |
| `send-file` | 给外发消息附加文件。 |

## 记忆与自省（3）

| 技能 | 作用 |
| --- | --- |
| `memory-management` | 创建 / 召回 / 删除记忆。 |
| `self-management` | 对会话上下文与目标的反思。 |
| `self-reflection` | 计划性的用户行为自我分析。 |

## 技能与对话管理（3）

| 技能 | 作用 |
| --- | --- |
| `skill-hub` | 从市场发现并安装技能。 |
| `skill-search` | 搜索已安装技能。 |
| `conversation-management` | 归档、搜索、重命名、fork 对话。 |

## 通讯（4）

| 技能 | 作用 |
| --- | --- |
| `telegram` | 在 Telegram 桥接里收发。 |
| `discord` | 在 Discord 桥接里收发。 |
| `reactions` | 对远程消息加 emoji reaction。 |
| `voice` | 语音录制 + 转录（Whisper），TTS 播放。 |

## 金融与市场（4）

| 技能 | 作用 |
| --- | --- |
| `market-intel` | 加密 / 股市数据抓取。 |
| `okx-review` | OKX 交易复盘。 |
| `btc-grid-buy-okb` | BTC / OKB 网格交易（自动买入）。 |
| `kline-indicator` | K 线指标分析。 |

## 社交搜索（2）

| 技能 | 作用 |
| --- | --- |
| `x-search` | Twitter / X 搜索。 |
| `rednote-search` | 小红书搜索。 |

## 计数

| 分组 | 数量 |
| --- | --- |
| 生产力 | 6 |
| 自动化与工具 | 8 |
| 记忆与自省 | 3 |
| 技能与对话管理 | 3 |
| 通讯 | 4 |
| 金融与市场 | 4 |
| 社交搜索 | 2 |
| **合计** | **30** |

## 不内置但自动发现

除内置技能外，Ghast 还扫描：

- `<profile>/skills/personal/`——你自己的技能
- `~/.claude/skills/`——邻近的 Claude Code 技能
- `~/.codex/skills/`——邻近的 Codex 技能
- 项目工作区的 `.ghast/skills/`——按项目的技能

它们在 Skill Picker 中以单独分组（Personal / Claude Code / Codex / Project）出现，与内置技能一样可开关。

## 相关页面

- [Skills 技能](/cn/desktop/skills)
- [对话与输入框](/cn/desktop/chat-and-composer)
- [设置项参考](/cn/reference/settings-reference)
