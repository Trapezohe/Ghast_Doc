---
title: 文档更新日志
---

# 文档更新日志

## 2026-03-12

- 重构 `product-docs` 信息架构，改为 `Start Here / Core Concepts / Extension / Companion / Remote Control / Security / Reference / Troubleshooting / Release Notes`。
- 将旧版 `introduction / getting-started / rewards / faq / changelog / security-boundary` 页面正文改为归档占位，不再保留旧正文。
- 将安全内容拆分为多页，并新增 [与 OpenClaw 的安全边界对比](../security/openclaw-comparison.md)。
- 用仓库已实现能力重写核心页面，删除主观营销式表述。
- 继续将用户页从参考说明 / 实现说明口吻统一为正式使用手册口径，覆盖 Start Here、Security、Companion、Core Concepts、Extension 与 Remote Control 的主要页面。
- 更正 Companion 安装文档：将 GitHub Releases 安装包改为标准安装路径，并补充 macOS Gatekeeper / Windows SmartScreen 的处理说明。
- 重写 `troubleshooting/companion-connection.md`，将“安装包被系统拦截”补成更易找到的故障入口，并回链到安装页。
- 收紧 `companion/diagnostics-and-self-check.md` 的使用手册口径，使其与 Companion 故障入口页的分流顺序保持一致。
- 收紧 `companion/native-messaging.md` 的使用手册口径，将其明确为安装完成后的自动配对解释页，而非首次安装配置页。
- 收紧 `companion/command-runtime.md` 的使用手册口径，将其明确为工作区优先、带确认边界的本地命令能力页。
- 收紧 `companion/mcp-servers.md` 的使用手册口径，将其明确为基础接入完成后的高级本地工具能力页。
- 收紧 `companion/code-agents-acp.md` 的使用手册口径，将其明确为建立在 Companion、工作区和基础本地能力之上的高级本地代理页。
- 收紧 `companion/connect-a-workspace.md` 的使用手册口径，将其明确为普通用户接入本地工作区时的标准授权说明页。
- 继续收紧剩余用户手册页，重点覆盖故障入口、Remote Control、持续能力、Skills / Memory / Wallet 等页面，移除内部字段式说明。
- 从 `Ghast_AI_插件安装指南.docx` 提取并接入关键产品截图，补到安装扩展、登录与激活、工作区、Telegram、Companion 安装、Memory、Skills、Settings 等入口页。
- 收紧 `start-here/what-is-ghast-ai.md`、`extension/chat-and-page-context.md`、`core-concepts/page-context-capture.md`、`remote-control/channel-support-matrix.md` 与 `README.md` 的尾部低优先级页口径，并补入侧边栏主界面截图。
- 统一现有截图页的版式：收敛为短前置说明句 + 简短图题，保持整套手册的图片插入位置和标题密度一致。
- 收紧 `troubleshooting/mcp-and-code-agents.md` 的故障入口口径，使其与 MCP、Code Agents、命令运行时和诊断页的分流顺序保持一致。
