import type { DefaultTheme } from "vitepress";

export const enSidebar: DefaultTheme.Sidebar = [
  {
    text: "Start Here",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/start-here/what-is-ghast-ai" },
      { text: "Quickstart", link: "/en/start-here/quickstart" },
      { text: "Install Companion", link: "/en/start-here/install-companion" },
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
    ],
  },
  {
    text: "Companion",
    collapsed: false,
    items: [
      { text: "Install & Auto-Pair", link: "/en/companion/install-and-auto-pair" },
      { text: "Connect Workspace", link: "/en/companion/connect-a-workspace" },
    ],
  },
  {
    text: "Security",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/security/overview" },
      { text: "OpenClaw Comparison", link: "/en/security/openclaw-comparison" },
    ],
  },
  {
    text: "Troubleshooting",
    collapsed: false,
    items: [
      { text: "Login & Activation", link: "/en/troubleshooting/login-and-activation" },
      { text: "Wallet & Funding", link: "/en/troubleshooting/wallet-and-funding" },
      { text: "Connection Issues", link: "/en/troubleshooting/companion-connection" },
    ],
  },
];
