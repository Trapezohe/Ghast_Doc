import type { DefaultTheme } from "vitepress";

export const cnSidebar: DefaultTheme.Sidebar = [
  {
    text: "Start Here",
    collapsed: false,
    items: [
      { text: "什么是 Ghast AI", link: "/cn/start-here/what-is-ghast-ai" },
      { text: "产品架构一览", link: "/cn/start-here/architecture" },
      { text: "快速开始", link: "/cn/start-here/quickstart" },
      { text: "安装 Companion", link: "/cn/start-here/install-companion" },
    ],
  },
  {
    text: "Core Concepts",
    collapsed: false,
    items: [
      { text: "Extension 与 Companion 的工作方式", link: "/cn/core-concepts/extension-and-companion" },
      { text: "记忆模型", link: "/cn/core-concepts/memory-model" },
      { text: "钱包与模型充值", link: "/cn/core-concepts/wallet-and-funding" },
      { text: "页面上下文采集模型", link: "/cn/core-concepts/page-context-capture" },
      { text: "Skills 与 MCP 模型", link: "/cn/core-concepts/skills-and-mcp" },
      { text: "定时任务与 Heartbeat", link: "/cn/core-concepts/scheduled-tasks-and-heartbeat" },
      { text: "远程控制模型", link: "/cn/core-concepts/remote-control-model" },
      { text: "安全模型与信任边界", link: "/cn/core-concepts/security-model" },
    ],
  },
  {
    text: "Extension",
    collapsed: false,
    items: [
      { text: "安装扩展", link: "/cn/extension/install-extension" },
      { text: "登录与激活", link: "/cn/extension/sign-in-and-activation" },
      { text: "钱包设置", link: "/cn/extension/wallet-setup" },
      { text: "选择模型与充值", link: "/cn/extension/models-and-funding" },
      { text: "聊天与页面上下文", link: "/cn/extension/chat-and-page-context" },
      { text: "Memory 页面", link: "/cn/extension/memory-tab" },
      { text: "Skills 页面", link: "/cn/extension/skills-tab" },
      { text: "设置总览", link: "/cn/extension/settings-overview" },
    ],
  },
  {
    text: "Companion",
    collapsed: false,
    items: [
      { text: "安装与自动配对", link: "/cn/companion/install-and-auto-pair" },
      { text: "权限模式：workspace 与 full", link: "/cn/companion/permission-modes" },
      { text: "连接工作区", link: "/cn/companion/connect-a-workspace" },
      { text: "命令运行时", link: "/cn/companion/command-runtime" },
      { text: "MCP Servers", link: "/cn/companion/mcp-servers" },
      { text: "Code Agents / ACP", link: "/cn/companion/code-agents-acp" },
      { text: "诊断与自检", link: "/cn/companion/diagnostics-and-self-check" },
      { text: "Native Messaging 与扩展配对", link: "/cn/companion/native-messaging" },
    ],
  },
  {
    text: "Remote Control",
    collapsed: false,
    items: [
      { text: "Telegram 设置", link: "/cn/remote-control/telegram-setup" },
      { text: "审批流", link: "/cn/remote-control/approval-flow" },
      { text: "远程执行者与来源标记", link: "/cn/remote-control/provenance-and-actor" },
      { text: "通道支持矩阵", link: "/cn/remote-control/channel-support-matrix" },
    ],
  },
  {
    text: "Security",
    collapsed: false,
    items: [
      { text: "安全概览", link: "/cn/security/overview" },
      { text: "Chrome 权限与主机权限", link: "/cn/security/chrome-permissions" },
      { text: "网页采集与脱敏", link: "/cn/security/web-capture-and-redaction" },
      { text: "钱包密钥处理", link: "/cn/security/wallet-key-handling" },
      { text: "Companion 网络与认证边界", link: "/cn/security/companion-boundary" },
      { text: "本地执行边界", link: "/cn/security/local-execution-boundary" },
      { text: "数据存储与同步边界", link: "/cn/security/data-storage-and-sync" },
      { text: "与 OpenClaw 的安全边界对比", link: "/cn/security/openclaw-comparison" },
    ],
  },
  {
    text: "Reference",
    collapsed: false,
    items: [
      { text: "设置项参考", link: "/cn/reference/settings-reference" },
      { text: "记忆文件参考", link: "/cn/reference/memory-file-reference" },
      { text: "支持的采集站点", link: "/cn/reference/supported-capture-sites" },
      { text: "支持的模型与充值规则", link: "/cn/reference/supported-models-and-funding" },
      { text: "Companion 能力参考", link: "/cn/reference/companion-capabilities-reference" },
      { text: "远程通道状态参考", link: "/cn/reference/remote-channel-status-reference" },
    ],
  },
  {
    text: "Troubleshooting",
    collapsed: false,
    items: [
      { text: "登录与激活问题", link: "/cn/troubleshooting/login-and-activation" },
      { text: "钱包与充值问题", link: "/cn/troubleshooting/wallet-and-funding" },
      { text: "Companion 连接问题", link: "/cn/troubleshooting/companion-connection" },
      { text: "工作区权限问题", link: "/cn/troubleshooting/workspace-permissions" },
      { text: "MCP / Code Agents 问题", link: "/cn/troubleshooting/mcp-and-code-agents" },
      { text: "定时任务 / Heartbeat 问题", link: "/cn/troubleshooting/scheduled-tasks-and-heartbeat" },
    ],
  },
  {
    text: "Release Notes",
    collapsed: false,
    items: [
      { text: "扩展更新日志", link: "/cn/release-notes/extension-changelog" },
      { text: "Companion 更新日志", link: "/cn/release-notes/companion-changelog" },
      { text: "文档更新日志", link: "/cn/release-notes/docs-changelog" },
    ],
  },
];
