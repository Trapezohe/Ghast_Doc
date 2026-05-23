---
title: ACP & Agent Communication
description: How Ghast hosts agent-to-agent sessions inside a conversation.
---

# ACP & Agent Communication

ACP — Agent Communication Protocol — is how Ghast hosts a sub-agent inside a conversation. Where MCP exposes *tools*, ACP exposes a *whole agent* that can hold state, call its own tools, and respond as a peer in the conversation.

Ghast uses ACP through the `@mcpc-tech/acp-ai-provider` integration. This page describes what an ACP session looks like to you and when to use one.

## Sub-agent vs. tool

| Concept | Lifetime | Best for |
| --- | --- | --- |
| **MCP tool** | One call per invocation; no memory of past calls | Stateless operations: "fetch this URL", "query this table" |
| **ACP sub-agent** | Stateful session that persists across turns | Multi-step delegated work: "have the design agent draft this page" |

A sub-agent has its own context, its own tools, and its own model. The main agent talks to it like a peer — issues prompts, reads responses, can hand off and reclaim control.

## When to use one

Reasonable triggers:

- The task has a specialised sub-agent better suited to it (e.g. a coding agent for a refactor, a research agent for a literature scan).
- You want the work to happen "in the background" without the sub-agent's intermediate steps cluttering the main thread.
- The sub-agent has access to credentials or context the main agent shouldn't carry.

If the task is a single tool call or a short prompt, regular MCP / built-in tools are better. ACP has a setup cost; don't reach for it for trivial work.

## Setting up an ACP provider

In Settings → MCP → ACP:

1. **Add provider** — give it a name and a config (command for stdio-style ACPs, URL for HTTP-style).
2. **Test connection** — Ghast performs an `initialize` handshake.
3. **Save.**

Once configured, an ACP provider becomes available in the composer as a session you can attach to the current turn.

## How a session shows up in chat

When an ACP session is active, you see:

- A nested "sub-agent" lane in the response card, with its own streaming output.
- Tool calls from the sub-agent are rendered inside that lane, not mixed with the main thread.
- Hand-offs are explicit: the main agent waits, the sub-agent runs, control returns when the sub-agent reports completion.

You can stop the sub-agent the same way you stop the main agent — Esc, or the Stop button on the sub-agent card.

## Privacy and isolation

The sub-agent only receives the context the main agent explicitly hands off. By default, your memories are not exposed to a sub-agent. Tool results from the sub-agent's tools are not written back to memory unless the main agent decides to.

## Limits

- One active ACP session per conversation. To swap, end the current one and start a new one.
- ACP sub-agents do not have access to the Computer Use daemon or the Browser Relay extension. Those are reserved to the main agent.

## Related pages

- [MCP Servers](/en/desktop/mcp-servers)
- [Chat & Composer](/en/desktop/chat-and-composer)
- [Reference: MCP Configuration](/en/reference/mcp-configuration)
