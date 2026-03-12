# English Docs Parity Rollout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Expand the English docs from the current 16-page launch scope to the same 56-page public structure as the Chinese docs.

**Architecture:** Keep the current VitePress information architecture and mirror the Chinese tree under `docs/product-docs/en`. Translate by section, not by random page order, so the English sidebar, entry paths, and cross-links stay coherent after each batch. Update `sidebar.en.ts` after each batch so the English site can ship incrementally without orphan pages.

**Tech Stack:** Markdown, VitePress, TypeScript sidebar config, `pnpm` docs build, Python link checker

---

## Scope Snapshot

**Current baseline**
- Chinese public pages: `56`
- English public pages: `16`
- Missing English pages: `40`

**Missing page list**
- `docs/product-docs/en/start-here/architecture.md`
- `docs/product-docs/en/extension/memory-tab.md`
- `docs/product-docs/en/extension/settings-overview.md`
- `docs/product-docs/en/extension/skills-tab.md`
- `docs/product-docs/en/companion/code-agents-acp.md`
- `docs/product-docs/en/companion/command-runtime.md`
- `docs/product-docs/en/companion/diagnostics-and-self-check.md`
- `docs/product-docs/en/companion/mcp-servers.md`
- `docs/product-docs/en/companion/native-messaging.md`
- `docs/product-docs/en/companion/permission-modes.md`
- `docs/product-docs/en/core-concepts/extension-and-companion.md`
- `docs/product-docs/en/core-concepts/memory-model.md`
- `docs/product-docs/en/core-concepts/page-context-capture.md`
- `docs/product-docs/en/core-concepts/remote-control-model.md`
- `docs/product-docs/en/core-concepts/scheduled-tasks-and-heartbeat.md`
- `docs/product-docs/en/core-concepts/security-model.md`
- `docs/product-docs/en/core-concepts/skills-and-mcp.md`
- `docs/product-docs/en/core-concepts/wallet-and-funding.md`
- `docs/product-docs/en/reference/companion-capabilities-reference.md`
- `docs/product-docs/en/reference/memory-file-reference.md`
- `docs/product-docs/en/reference/remote-channel-status-reference.md`
- `docs/product-docs/en/reference/settings-reference.md`
- `docs/product-docs/en/reference/supported-capture-sites.md`
- `docs/product-docs/en/reference/supported-models-and-funding.md`
- `docs/product-docs/en/release-notes/companion-changelog.md`
- `docs/product-docs/en/release-notes/docs-changelog.md`
- `docs/product-docs/en/release-notes/extension-changelog.md`
- `docs/product-docs/en/remote-control/approval-flow.md`
- `docs/product-docs/en/remote-control/channel-support-matrix.md`
- `docs/product-docs/en/remote-control/provenance-and-actor.md`
- `docs/product-docs/en/remote-control/telegram-setup.md`
- `docs/product-docs/en/security/chrome-permissions.md`
- `docs/product-docs/en/security/companion-boundary.md`
- `docs/product-docs/en/security/data-storage-and-sync.md`
- `docs/product-docs/en/security/local-execution-boundary.md`
- `docs/product-docs/en/security/wallet-key-handling.md`
- `docs/product-docs/en/security/web-capture-and-redaction.md`
- `docs/product-docs/en/troubleshooting/mcp-and-code-agents.md`
- `docs/product-docs/en/troubleshooting/scheduled-tasks-and-heartbeat.md`
- `docs/product-docs/en/troubleshooting/workspace-permissions.md`

## Batch Plan

### Batch 1: Entry + Everyday Usage

**Files:**
- Create: `docs/product-docs/en/start-here/architecture.md`
- Create: `docs/product-docs/en/extension/memory-tab.md`
- Create: `docs/product-docs/en/extension/settings-overview.md`
- Create: `docs/product-docs/en/extension/skills-tab.md`
- Create: `docs/product-docs/en/troubleshooting/workspace-permissions.md`
- Create: `docs/product-docs/en/troubleshooting/scheduled-tasks-and-heartbeat.md`
- Create: `docs/product-docs/en/troubleshooting/mcp-and-code-agents.md`
- Modify: `docs/product-docs/.vitepress/sidebar.en.ts`

**Step 1: Audit the Chinese source pages**

Read:
- `docs/product-docs/start-here/architecture.md`
- `docs/product-docs/extension/memory-tab.md`
- `docs/product-docs/extension/settings-overview.md`
- `docs/product-docs/extension/skills-tab.md`
- `docs/product-docs/troubleshooting/workspace-permissions.md`
- `docs/product-docs/troubleshooting/scheduled-tasks-and-heartbeat.md`
- `docs/product-docs/troubleshooting/mcp-and-code-agents.md`

Expected: understand page purpose, screenshot usage, and user-manual tone before translating.

**Step 2: Draft the English pages**

Write English pages that preserve:
- the same operational meaning
- the same product boundaries
- the same screenshot placement intent
- the same formal manual tone already used in existing English pages

Expected: seven new English pages created under `docs/product-docs/en`.

**Step 3: Update the English sidebar**

Modify `docs/product-docs/.vitepress/sidebar.en.ts` to expose the new pages in:
- `Start Here`
- `Extension`
- `Troubleshooting`

Expected: no orphaned English entry pages after Batch 1.

**Step 4: Verify Batch 1**

Run: `pnpm docs:verify`
Expected: build passes and missing links remain `0`.

**Step 5: Commit**

```bash
git add docs/product-docs/en/start-here/architecture.md \
  docs/product-docs/en/extension/memory-tab.md \
  docs/product-docs/en/extension/settings-overview.md \
  docs/product-docs/en/extension/skills-tab.md \
  docs/product-docs/en/troubleshooting/workspace-permissions.md \
  docs/product-docs/en/troubleshooting/scheduled-tasks-and-heartbeat.md \
  docs/product-docs/en/troubleshooting/mcp-and-code-agents.md \
  docs/product-docs/.vitepress/sidebar.en.ts
git commit -m "docs: add english batch 1 parity pages"
```

### Batch 2: Security + Companion Operations

**Files:**
- Create: `docs/product-docs/en/security/chrome-permissions.md`
- Create: `docs/product-docs/en/security/companion-boundary.md`
- Create: `docs/product-docs/en/security/data-storage-and-sync.md`
- Create: `docs/product-docs/en/security/local-execution-boundary.md`
- Create: `docs/product-docs/en/security/wallet-key-handling.md`
- Create: `docs/product-docs/en/security/web-capture-and-redaction.md`
- Create: `docs/product-docs/en/companion/permission-modes.md`
- Create: `docs/product-docs/en/companion/command-runtime.md`
- Create: `docs/product-docs/en/companion/mcp-servers.md`
- Create: `docs/product-docs/en/companion/code-agents-acp.md`
- Create: `docs/product-docs/en/companion/diagnostics-and-self-check.md`
- Create: `docs/product-docs/en/companion/native-messaging.md`
- Modify: `docs/product-docs/.vitepress/sidebar.en.ts`

**Step 1: Audit the Chinese source pages**

Read the corresponding Chinese pages under:
- `docs/product-docs/security`
- `docs/product-docs/companion`

Expected: align English language with the existing production manual style, not an engineering explainer tone.

**Step 2: Draft the English pages**

Translate the missing twelve pages with the same section structure when it helps navigation, but compress headings that only restate the obvious.

Expected: the English `Security` and `Companion` sections reach the same page count as Chinese.

**Step 3: Update the English sidebar**

Expose the new pages under `Security` and `Companion`.

Expected: section-level parity in the sidebar.

**Step 4: Verify Batch 2**

Run: `pnpm docs:verify`
Expected: build passes and missing links remain `0`.

**Step 5: Commit**

```bash
git add docs/product-docs/en/security docs/product-docs/en/companion docs/product-docs/.vitepress/sidebar.en.ts
git commit -m "docs: add english security and companion pages"
```

### Batch 3: Core Concepts

**Files:**
- Create: `docs/product-docs/en/core-concepts/extension-and-companion.md`
- Create: `docs/product-docs/en/core-concepts/memory-model.md`
- Create: `docs/product-docs/en/core-concepts/page-context-capture.md`
- Create: `docs/product-docs/en/core-concepts/remote-control-model.md`
- Create: `docs/product-docs/en/core-concepts/scheduled-tasks-and-heartbeat.md`
- Create: `docs/product-docs/en/core-concepts/security-model.md`
- Create: `docs/product-docs/en/core-concepts/skills-and-mcp.md`
- Create: `docs/product-docs/en/core-concepts/wallet-and-funding.md`
- Modify: `docs/product-docs/.vitepress/sidebar.en.ts`

**Step 1: Audit the Chinese source pages**

Read all eight Chinese pages under `docs/product-docs/core-concepts`.

Expected: identify which pages explain operating principles to users and keep the English versions focused on understanding, not implementation internals.

**Step 2: Draft the English pages**

Create the English `Core Concepts` section as a complete set.

Expected: the English docs gain the same conceptual backbone as Chinese.

**Step 3: Update the English sidebar**

Add a `Core Concepts` section with all eight links.

Expected: the English information architecture now matches Chinese through the conceptual layer.

**Step 4: Verify Batch 3**

Run: `pnpm docs:verify`
Expected: build passes and missing links remain `0`.

**Step 5: Commit**

```bash
git add docs/product-docs/en/core-concepts docs/product-docs/.vitepress/sidebar.en.ts
git commit -m "docs: add english core concepts section"
```

### Batch 4: Remote Control + Reference + Release Notes

**Files:**
- Create: `docs/product-docs/en/remote-control/telegram-setup.md`
- Create: `docs/product-docs/en/remote-control/approval-flow.md`
- Create: `docs/product-docs/en/remote-control/provenance-and-actor.md`
- Create: `docs/product-docs/en/remote-control/channel-support-matrix.md`
- Create: `docs/product-docs/en/reference/settings-reference.md`
- Create: `docs/product-docs/en/reference/memory-file-reference.md`
- Create: `docs/product-docs/en/reference/supported-capture-sites.md`
- Create: `docs/product-docs/en/reference/supported-models-and-funding.md`
- Create: `docs/product-docs/en/reference/companion-capabilities-reference.md`
- Create: `docs/product-docs/en/reference/remote-channel-status-reference.md`
- Create: `docs/product-docs/en/release-notes/extension-changelog.md`
- Create: `docs/product-docs/en/release-notes/companion-changelog.md`
- Create: `docs/product-docs/en/release-notes/docs-changelog.md`
- Modify: `docs/product-docs/.vitepress/sidebar.en.ts`

**Step 1: Audit the Chinese source pages**

Read the corresponding pages under:
- `docs/product-docs/remote-control`
- `docs/product-docs/reference`
- `docs/product-docs/release-notes`

Expected: separate durable user guidance from time-sensitive logs and tables.

**Step 2: Draft the English pages**

Translate the remaining thirteen pages, keeping tables accurate and release-note chronology intact.

Expected: English page count reaches full parity with Chinese.

**Step 3: Update the English sidebar**

Add `Remote Control`, `Reference`, and `Release Notes`.

Expected: the English sidebar structure matches the Chinese sidebar one-to-one.

**Step 4: Verify final parity**

Run: `pnpm docs:verify`
Expected: build passes, missing links remain `0`, and the English tree mirrors the Chinese tree.

**Step 5: Commit**

```bash
git add docs/product-docs/en/remote-control docs/product-docs/en/reference docs/product-docs/en/release-notes docs/product-docs/.vitepress/sidebar.en.ts
git commit -m "docs: complete english docs parity"
```
