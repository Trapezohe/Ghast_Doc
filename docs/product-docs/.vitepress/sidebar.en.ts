import type { DefaultTheme } from "vitepress";

export const enSidebar: DefaultTheme.Sidebar = [
  {
    text: "Start Here",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/start-here/what-is-ghast-ai" },
      { text: "Product Architecture", link: "/en/start-here/architecture" },
      { text: "Quickstart", link: "/en/start-here/quickstart" },
      { text: "Install Companion", link: "/en/start-here/install-companion" },
    ],
  },
  {
    text: "Core Concepts",
    collapsed: false,
    items: [
      { text: "Extension and Companion", link: "/en/core-concepts/extension-and-companion" },
      { text: "Memory Model", link: "/en/core-concepts/memory-model" },
      { text: "Wallet and Model Funding", link: "/en/core-concepts/wallet-and-funding" },
      { text: "Page Context Capture", link: "/en/core-concepts/page-context-capture" },
      { text: "Skills and MCP", link: "/en/core-concepts/skills-and-mcp" },
      { text: "Scheduled Tasks and Heartbeat", link: "/en/core-concepts/scheduled-tasks-and-heartbeat" },
      { text: "Remote Control Model", link: "/en/core-concepts/remote-control-model" },
      { text: "Security Model and Trust Boundary", link: "/en/core-concepts/security-model" },
    ],
  },
  {
    text: "Extension",
    collapsed: false,
    items: [
      { text: "Install Extension", link: "/en/extension/install-extension" },
      { text: "Sign In & Activation", link: "/en/extension/sign-in-and-activation" },
      { text: "Wallet Setup", link: "/en/extension/wallet-setup" },
      { text: "Models & Funding", link: "/en/extension/models-and-funding" },
      { text: "Chat and Page Context", link: "/en/extension/chat-and-page-context" },
      { text: "Memory Page", link: "/en/extension/memory-tab" },
      { text: "Skills Page", link: "/en/extension/skills-tab" },
      { text: "Settings Overview", link: "/en/extension/settings-overview" },
    ],
  },
  {
    text: "Companion",
    collapsed: false,
    items: [
      { text: "Install & Auto-Pair", link: "/en/companion/install-and-auto-pair" },
      { text: "Permission Modes: workspace and full", link: "/en/companion/permission-modes" },
      { text: "Connect Workspace", link: "/en/companion/connect-a-workspace" },
      { text: "Command Runtime", link: "/en/companion/command-runtime" },
      { text: "MCP Servers", link: "/en/companion/mcp-servers" },
      { text: "Code Agents / ACP", link: "/en/companion/code-agents-acp" },
      { text: "Diagnostics & Self-Check", link: "/en/companion/diagnostics-and-self-check" },
      { text: "Native Messaging", link: "/en/companion/native-messaging" },
    ],
  },
  {
    text: "Remote Control",
    collapsed: false,
    items: [
      { text: "Telegram Setup", link: "/en/remote-control/telegram-setup" },
      { text: "Approval Flow", link: "/en/remote-control/approval-flow" },
      { text: "Provenance and Actor", link: "/en/remote-control/provenance-and-actor" },
      { text: "Channel Support Matrix", link: "/en/remote-control/channel-support-matrix" },
    ],
  },
  {
    text: "Security",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/security/overview" },
      { text: "Chrome Permissions", link: "/en/security/chrome-permissions" },
      { text: "Web Capture & Redaction", link: "/en/security/web-capture-and-redaction" },
      { text: "Wallet Key Handling", link: "/en/security/wallet-key-handling" },
      { text: "Companion Boundary", link: "/en/security/companion-boundary" },
      { text: "Local Execution Boundary", link: "/en/security/local-execution-boundary" },
      { text: "Data Storage & Sync", link: "/en/security/data-storage-and-sync" },
      { text: "OpenClaw Comparison", link: "/en/security/openclaw-comparison" },
    ],
  },
  {
    text: "Reference",
    collapsed: false,
    items: [
      { text: "Settings Reference", link: "/en/reference/settings-reference" },
      { text: "Memory File Reference", link: "/en/reference/memory-file-reference" },
      { text: "Supported Capture Sites", link: "/en/reference/supported-capture-sites" },
      { text: "Supported Models and Funding Rules", link: "/en/reference/supported-models-and-funding" },
      { text: "Companion Capabilities Reference", link: "/en/reference/companion-capabilities-reference" },
      { text: "Remote Channel Status Reference", link: "/en/reference/remote-channel-status-reference" },
    ],
  },
  {
    text: "Troubleshooting",
    collapsed: false,
    items: [
      { text: "Login & Activation", link: "/en/troubleshooting/login-and-activation" },
      { text: "Wallet & Funding", link: "/en/troubleshooting/wallet-and-funding" },
      { text: "Connection Issues", link: "/en/troubleshooting/companion-connection" },
      { text: "Workspace Permissions", link: "/en/troubleshooting/workspace-permissions" },
      { text: "MCP and Code Agents", link: "/en/troubleshooting/mcp-and-code-agents" },
      { text: "Scheduled Tasks and Heartbeat", link: "/en/troubleshooting/scheduled-tasks-and-heartbeat" },
    ],
  },
  {
    text: "Release Notes",
    collapsed: false,
    items: [
      { text: "Extension Changelog", link: "/en/release-notes/extension-changelog" },
      { text: "Companion Changelog", link: "/en/release-notes/companion-changelog" },
      { text: "Docs Changelog", link: "/en/release-notes/docs-changelog" },
    ],
  },
];
