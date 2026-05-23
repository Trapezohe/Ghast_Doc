---
title: 设置项参考
description: 每个 Settings 面板与其中有意义的字段。
---

# 设置项参考

Settings 窗口的字段级参考。面板级导览见 [设置总览](/cn/desktop/settings-overview)。

## Account

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 当前 Profile | 显示 | 活动 Profile 名 + ID |
| 添加 Profile | 动作 | 触发 Onboarding |
| 切换 Profile | 动作 | 重新签发 Vault Key |
| 退出登录 | 动作 | 从内存擦除 Vault Key |
| 语言 | 枚举 | en / zh-CN / zh-TW / ja / ko / fr / vi / ru / es / de / pt |

## Wallet

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 地址 | 显示 | 绑定此 Profile 的 EVM 地址 |
| OG 余额 | 显示 | 钱包余额与 Ledger 余额 |
| 充值 | 动作 | 调 `addLedger` 或 `depositFund` |
| 提现 | 动作 | 从 Ledger 取回钱包 |
| 退款（按供应商） | 动作 | 每个 Advanced 供应商，24h 锁定 |
| TEE 确认状态 | 显示 | 按供应商；需要时可重试 |

## Data（0G Storage 同步）

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 主开关 | 布尔 | 默认关 |
| 同步：Memories | 布尔 | 默认关 |
| 同步：Conversations | 布尔 | 关 |
| 同步：Providers | 布尔 | 关 |
| 同步：Prompts | 布尔 | 关 |
| 同步：Skills | 布尔 | 关 |
| 计划 | 时间 | 默认本地 06:00 |
| 立即同步 | 动作 | 手动触发 |
| 上次同步 | 显示 | 时间戳 + 状态 |

## Providers

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 0G Router | API key | 从 [pc.0g.ai](https://pc.0g.ai/) 的 0G Compute Console 粘贴；启用后 Router 模型出现在 picker |
| 0G Advanced | 列表 | 按供应商启用、充值、确认、退款 |
| 插件供应商 | 列表 | 按插件配置 |
| 默认模型 | 枚举 | 未指定模型时回退 |
| 默认 reasoning effort | 枚举 | Low / Medium / High（适用时） |

## MCP

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 服务列表 | 列表 | Stdio 或 URL |
| 添加服务 | 动作 | `command` 或 `url` 配置 |
| 按服务启用 | 布尔 | |
| OAuth 状态 | 显示 | 按服务，可重新授权 |
| 工具默认 | 切换列表 | 各服务预启用的工具 |

## Skills

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 自动选择 | 布尔 | 让 Ghast 根据 prompt 挑技能 |
| 技能列表 | 分组列表 | Built-in / Personal / Claude Code / Codex / Marketplace / Project / Custom |
| 按技能启用 | 布尔 | |
| 市场浏览器 | 动作 | 搜索与安装 |

## Channels（按平台）

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| Connect / Disconnect | 动作 | Bot token 或 OAuth |
| 已映射聊天 / 频道 | 列表 | 工作区、prompt 覆盖、默认技能 |
| 审批规则 | 阈值 | 长回复阈值、actor 列表等 |

## Whisper

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 后端 | 枚举 | CPU / Metal（Apple Silicon） |
| 模型变体 | 枚举 | 大小 / 质量取舍 |
| 语言 | 枚举 | 自动或固定 |

## TTS

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 引擎 | 枚举 | Kokoro / Qwen（Qwen 仅 Apple Silicon） |
| 音色 | 枚举 | 按引擎音色列表 |

## Memory

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 嵌入供应商 | 枚举 | 本地 Transformers / OpenAI Embeddings / … |
| 召回相似度阈值 | 数值 | 默认 0.75 |
| 合并器计划 | 时间 | 后台合并间隔 |

## Partner Mode

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 主开关 | 布尔 | 默认关 |
| 场景包 | 枚举 | work / companion / quiet |
| Initiative | 布尔 + 子开关 | open-loop、today、频率上限、静默时段 |
| 情绪表达 | 布尔 | 仅 companion，单独 opt-in |
| 按频道覆盖 | 列表 | 给消息频道覆盖场景包 |
| 透明度视图 | 显示 | 当前生效规则 |

## Chat

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 默认模型 | 枚举 | |
| 自动压缩阈值 | 数值 | 压缩触发的 token 预算 |
| 上下文窗口 | 数值 | 跨轮保留的最大 token |
| 响应默认 | 各种 | 工具开关、技能默认 |

## UI

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 主题 | 枚举 | System / Light / Dark |
| 字体 | 枚举 | 已存字体 |
| 字号 | 数值 | |
| 布局密度 | 枚举 | Compact / Comfortable |

## Network

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 代理 URL | 字符串 | 可选 |
| 超时 | 数值 | 各网络端点 |
| 诊断 | 动作 | 连通性测试 |

## Computer Use

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 权限状态 | 显示 | 辅助功能、屏幕录制、AppleEvents |
| 已批准应用 | 列表 | 按应用，可撤销 |
| 严格审批 | 布尔 | Always 行为变 Once |
| 动作日志 | 显示 | 带时间戳的日志 |
| 画中画监控 | 布尔 | 浮窗镜像 |

## Activity

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 状态 / 度量 | 显示 | Off / Idle / Indexing / Screen locked；Front app、Text index、Segments、Visual history |
| 录制开启 | 布尔 | 默认关 |
| Extract text from screen captures | 布尔 | OCR 主开关（仅 macOS） |
| OCR languages | 字符串 | Vision 语言代码，逗号分隔 |
| OCR every Nth capture | 数值 | 1 = 每次 OCR，更大 = 跳过更多 |
| Heartbeat interval (ms) | 数值 | 强制采样的间隔 |
| Idle threshold (ms) | 数值 | 超过该时长关闭 idle 中的 segment |
| Minimum capture gap (ms) | 数值 | 采样间隔下限 |
| Visual-change poll (ms) | 数值 | 动画 / 视频检测间隔；0 关闭 |
| JPEG quality | 数值 | 1-100，缓冲截图质量 |
| Keep visual history | 布尔 | 是否保留截图文件；默认关 |
| Max visual storage | 数值 | 保留截图的容量上限 |
| Privacy · app blacklist | 列表 | 列表中的 bundle 在前台时记录器自动暂停 + 丢缓冲 |
| Recent segments | 显示 | 浏览 segment：时长、事件数、OCR 预览 |
| 权限状态 | 显示 | Screen Recording：Ready / Needs access |
| Danger zone → Delete everything | 动作 | 删除所有 segments、events、OCR、摘要、embeddings、视觉历史 |

## About

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| 版本 + build | 显示 | |
| 检查更新 | 动作 | |
| License | 显示 | |
| 系统信息 | 显示 | 诊断 dump |

## 相关页面

- [设置总览](/cn/desktop/settings-overview)
- [参考：支持的模型](/cn/reference/supported-models)
- [参考：MCP 配置](/cn/reference/mcp-configuration)
- [参考：术语表](/cn/reference/glossary)
