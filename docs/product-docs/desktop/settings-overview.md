---
title: 设置总览
description: Settings 窗口里每个面板的导览。
---

# 设置总览

Settings 窗口是和主对话分离的 React 入口。打开后是分组的导航栏——本页是每个面板的导览。

## 账号与钱包

| 面板 | 内容 |
| --- | --- |
| **Account** | 当前 Profile、登录 / 退出、Profile 切换器、新增 Profile、语言回退 |
| **Wallet** | 钱包地址、余额、Ledger 充值、退款流程、已充值 Advanced 供应商列表 |
| **Usage** | 各供应商近期推理用量、累计、可退款余额 |
| **Data** | 0G Storage 同步——主开关、按类别 opt-in（memories / conversations / providers / prompts / skills）、计划、Sync Now |

## 模型与工具

| 面板 | 内容 |
| --- | --- |
| **Providers** | 页面顶层的 **Router / Advanced** 两个 tab。Router 需要 0G Compute Console 的 API key（在 <https://pc.0g.ai/> 注册并充值）；Advanced 让你从钱包启用、充值、确认链上供应商。也包括插件供应商、模型选项弹窗、连接测试。 |
| **MCP** | MCP 服务（stdio / URL）、测试连接、OAuth 流程、按服务启用/禁用、工具默认值 |
| **Plugins** | 已安装插件、启用/禁用、插件自提供的设置 |
| **Skills** | 已安装技能（Built-in / Personal / Claude Code / Codex / Marketplace / Project / Custom）、启用/禁用、按技能设置、市场浏览器 |
| **Hooks** | 给模型完成、工具审批等用的自定义 webhook |

## 通讯

| 面板 | 内容 |
| --- | --- |
| **Channels** | 各平台（Telegram / Discord / Slack / 飞书 / 微信）的频道映射——接入 bot token / OAuth，把频道映射到工作区 |
| **Whisper** | STT 后端（CPU / Metal）、模型变体、语言 |
| **TTS** | 引擎（Kokoro / Qwen）、按引擎选音色 |

## 工作区与记忆

| 面板 | 内容 |
| --- | --- |
| **Workspace** | 多工作区配置、当前工作区、默认值 |
| **Memory** | 搜索与编辑记忆、嵌入供应商、统计、合并器 |
| **Partner** | Partner Mode——启用、场景包、主动性设置、情绪表达 opt-in、按频道覆盖、透明度状态 |
| **Chat** | 默认模型、自动压缩阈值、上下文窗口、响应默认值 |

## 系统

| 面板 | 内容 |
| --- | --- |
| **General** | 启动行为、默认窗口大小 |
| **UI** | 主题（system / light / dark）、字体、字号、布局密度、编辑器外观 |
| **Network** | 代理、超时、网络诊断 |
| **Web Search** | 默认搜索引擎、API key（如有）、结果数 |

## 集成与监控

| 面板 | 内容 |
| --- | --- |
| **Computer Use** | 按应用授权矩阵（ShieldCheck / ShieldAlert）、严格审批开关、动作日志、Picture-in-Picture 监控、应用选择器 |
| **Activity** | 本地屏幕文本记录器。开关、状态与度量、OCR 设置（语言、频率）、采样控件（heartbeat / idle / 最小间隔）、视觉历史开关与容量上限、应用黑名单、Recent segments 浏览、Danger Zone（全部删除）。 |
| **About** | 版本、build、License、检查更新、系统信息 dump |

## Settings 里没有什么

有几样东西故意不放进 Settings，因为属于别处：

- **对话列表**——主窗口侧栏。
- **某轮次的记忆召回**——在对话里展开 retrieval 卡片。
- **一次性技能调用**——Composer 里的 Skill Picker。
- **实时 TTS 播放开关**——Composer 层级的语音按钮。

## Settings 持久化

所有设置存在当前 Profile 的 SQLite 数据库里（少量纯 UI 项在 `localStorage`）。如果你为 Providers / Skills / Prompts 类别开启了 0G Storage 同步，设置作为这些快照的子集会一起同步。

## 相关页面

- [Profile 与工作区](/cn/desktop/profiles-and-workspaces)
- [参考：设置项参考](/cn/reference/settings-reference)
