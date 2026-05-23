---
title: Skills 技能
description: 技能如何扩展 Agent 能力、30 个内置技能、如何安装自己的技能。
---

# Skills 技能

技能（Skill）是带结构化前置元数据的 Markdown 文件，描述一个 Agent 可以执行的行为。技能介于"模型知道怎么写代码"和"模型能按下按钮"之间——它把可复用的工作流编码下来，让 Agent 拿起来即用。

## 30 个内置技能

桌面客户端开箱即用 30 个技能，源在 `resources/bundled-skills/`，按主题分组：

### 生产力

- `tasks`——对话范围内的待办创建与管理
- `todo`——旧版 todo 支持
- `scheduler`——按 cron 节奏调度 prompt
- `notebook`——工作区内的持久文本笔记
- `work-log`——记录与摘要每日活动
- `plan-mode`——执行前先做结构化规划

### 自动化与工具

- `computer-use`——驱动 macOS 应用（搭配 Computer Use 守护进程）
- `browser`——通过 Ghast Browser Relay 扩展驱动 Chrome
- `screenshot`——截屏（屏幕或窗口）
- `web-fetch`——HTTP GET/POST，解析 HTML/JSON
- `web-search`——网页搜索（Bing、自定义引擎），带截图
- `surf`——更高层的网页浏览工具集
- `file-manager`——浏览与打开文件
- `send-file`——给外发消息附加文件

### 记忆与自省

- `memory-management`——创建 / 召回 / 删除记忆
- `self-management`——对会话上下文与目标的反思
- `self-reflection`——计划性的用户行为自我分析

### 技能与对话管理

- `skill-hub`——从市场发现并安装技能
- `skill-search`——搜索已安装技能
- `conversation-management`——归档、搜索、重命名、fork 对话

### 通讯

- `telegram`——在 Telegram 桥接里收发
- `discord`——在 Discord 桥接里收发
- `reactions`——给远程消息加 emoji reaction
- `voice`——语音录制 + 转录（Whisper），TTS 播放

### 金融与市场

- `market-intel`——加密 / 股市数据抓取
- `okx-review`——OKX 交易复盘
- `btc-grid-buy-okb`——BTC / OKB 网格交易（自动买入）
- `kline-indicator`——K 线指标分析

### 社交搜索

- `x-search`——Twitter / X 搜索
- `rednote-search`——小红书搜索

## Skill Picker

Composer 里的技能选择器是一个分组浏览器：

| 分组 | 内容 |
| --- | --- |
| **Built-in** | 上面 30 个内置技能 |
| **Personal** | 你自己写或导入的技能 |
| **Claude Code** | 在 `~/.claude/skills/` 里发现的技能 |
| **Codex** | 在 `~/.codex/skills/` 里发现的技能 |
| **Marketplace** | 通过 `skill-hub` 从 Ghast 技能市场下载的 |
| **Project** | 项目工作区的 `.ghast/skills/` 里声明的 |
| **Custom** | 其他通过 Settings → Skills 添加的 |

可以按轮次显式挑选，也可以开 **Auto-select**，让 Ghast 根据你的 prompt 决定。

## 技能怎么被调用

技能在某一轮激活时：

1. 技能的 prompt 片段被前置到 system prompt。
2. 技能声明的工具变得可用。
3. Agent 根据你的请求自行决定是否、如何使用该技能。

Agent 调用了技能暴露的工具时，会看到带参数和结果的工具调用卡片，和任何其他工具一样。技能执行不会被隐藏——每一步都在对话里可见。

## 安装额外技能

三条路径：

| 方式 | 步骤 |
| --- | --- |
| **市场** | 在对话里用 `skill-hub`（"安装 X 技能"），或在 Settings → Skills → Marketplace 浏览 |
| **本地文件** | 把 `*.md` 文件丢进 `<profile>/skills/personal/`，扫描器会自动识别 |
| **邻近生态** | 如果你有 Claude Code 或 Codex 在 `~/.claude/skills/` / `~/.codex/skills/` 下，会自动出现 |

## 写自己的技能

技能是单个 Markdown 文件。前置元数据声明名称、描述、工具列表、激活提示。正文是技能激活时前置到 system prompt 的片段。

技能创作详见开发者文档，不在本手册范围。

## 禁用技能

Settings → Skills 列出所有已安装技能。可以逐个关掉，也可在 Skill Picker 中按轮次覆盖。禁用的技能不会出现在 Auto-select 里。

## 相关页面

- [对话与输入框](/cn/desktop/chat-and-composer)
- [Computer Use 概览](/cn/computer-use/overview)
- [浏览器扩展概览](/cn/browser-extension/overview)
- [参考：内置技能清单](/cn/reference/bundled-skills)
