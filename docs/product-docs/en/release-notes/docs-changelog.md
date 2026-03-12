---
title: Docs Changelog
description: Key confirmed changes to the product manual information architecture and documentation wording.
---

# Docs Changelog

## 2026-03-12

- Rebuilt the `product-docs` information architecture into `Start Here / Core Concepts / Extension / Companion / Remote Control / Security / Reference / Troubleshooting / Release Notes`.
- Converted the old `introduction / getting-started / rewards / faq / changelog / security-boundary` pages into archive placeholders and removed the old body content.
- Split security content into multiple pages and added [Compared with OpenClaw](../security/openclaw-comparison.md).
- Rewrote the core pages around capabilities that can be confirmed in the repository and removed subjective marketing language.
- Continued rewriting user pages from reference-style or implementation-style wording into a formal product-manual tone across major Start Here, Security, Companion, Core Concepts, Extension, and Remote Control pages.
- Corrected the Companion installation documentation by making GitHub Releases packages the standard installation path and adding guidance for macOS Gatekeeper and Windows SmartScreen prompts.
- Rewrote `troubleshooting/companion-connection.md` so that "installer blocked by the system" became an easier-to-find troubleshooting entry and linked it back to the install page.
- Tightened the manual tone of `companion/diagnostics-and-self-check.md` so its troubleshooting split matches the main Companion troubleshooting entry.
- Tightened `companion/native-messaging.md` so it is clearly the automatic-pairing explanation page after installation rather than a first-install configuration page.
- Tightened `companion/command-runtime.md` so it is clearly a workspace-first local command page with confirmation boundaries.
- Tightened `companion/mcp-servers.md` so it is clearly the advanced local tool page that follows the base setup path.
- Tightened `companion/code-agents-acp.md` so it is clearly an advanced local-agent page built on Companion, workspaces, and base local capabilities.
- Tightened `companion/connect-a-workspace.md` so it is clearly the standard authorization page for ordinary users connecting a local workspace.
- Continued tightening the remaining user-manual pages, especially troubleshooting entries, Remote Control, persistent capability, and Skills / Memory / Wallet pages, while removing internal-field style wording.
- Extracted and integrated key product screenshots from `Ghast_AI_插件安装指南.docx` into major entry pages such as extension installation, sign-in and activation, workspaces, Telegram, Companion installation, Memory, Skills, and Settings.
- Tightened the low-priority tail sections of `start-here/what-is-ghast-ai.md`, `extension/chat-and-page-context.md`, `core-concepts/page-context-capture.md`, `remote-control/channel-support-matrix.md`, and `README.md`, and added the main sidebar screenshot.
- Unified the layout of existing screenshot pages into a shorter lead-in sentence plus shorter figure captions so the image placement and caption density stay consistent across the manual.
- Tightened the troubleshooting-entry wording in `troubleshooting/mcp-and-code-agents.md` so its routing order matches the MCP, Code Agents, command runtime, and diagnostics pages.
