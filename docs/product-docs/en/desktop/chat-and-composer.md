---
title: Chat & Composer
description: The main chat window — composer controls, streaming, tool calls, and conversation lifecycle.
---

# Chat & Composer

The main window is where most of your time is spent. This page describes the composer (the input area at the bottom) and how a turn unfolds from typing to receiving a streamed response.

## Anatomy of the composer

The composer is split into a text area at the top (placeholder: *Ask, build, or run…*) and a control bar underneath. The bar has a left cluster of input-affordance buttons and a right cluster of status / send controls.

### Left cluster (input affordances)

| Control | Purpose |
| --- | --- |
| **Attach file** | Upload a file (PDF, DOCX, ZIP, …). Attached files are rendered with the right viewer and supplied to the model. |
| **Commands** | Open the Commands menu — the unified entry point for tools, skills, MCP servers, and saved prompts. Selections apply to this turn. |
| **Attach image** | Upload an image. Vision-capable models will receive it as an image input. |
| **Voice input** | Press to record. Whisper transcribes locally; you see a live audio-level meter. Pressing again stops the recording. |

### Right cluster (status and send)

| Control | Purpose |
| --- | --- |
| **Active tools** | A small badge with a count (e.g. "3") that shows how many tools are currently active for this turn. Click to inspect / adjust. |
| **Confirm before tools** | A toggle. When on, the agent pauses for approval before running a tool. When off, tools run inline. |
| **Model picker** | Shows the active model (e.g. *Ghast 2 Pro*). Click to switch. Lists every configured provider's models. |
| **Context ready** | A small indicator that turns active once memory / project / workspace context has been assembled for the turn. |
| **Send** | Submit the prompt. While the response is streaming, the same button becomes **Stop**. |

If no model is configured yet, the model picker shows the placeholder *Select model…* and the Send button shows the message *Choose or configure a model before sending. Drafts stay saved in this chat.* Configure a Router or Advanced provider first ([Model Selection](/en/desktop/model-selection)).

## How a turn unfolds

1. **Type or paste a prompt.** Use Attach file / image / voice as needed.
2. **(Optional)** open **Commands** to enable a specific tool, skill, MCP server, or saved prompt for this turn.
3. **(Optional)** toggle **Confirm before tools** if you want approval gates on every tool call.
4. **Press Enter** (Shift-Enter for newline) or click **Send**.
5. The composer locks; the agent's response card appears above it.
6. The response streams in chunk-by-chunk. Tool calls appear as collapsible cards inside the response — expand to see the call, arguments, and result.
7. When the agent finishes, the composer unlocks.

You can press **Stop** any time during streaming. The partial response stays in the conversation; you can either send a follow-up or **Retry** the last turn.

## Memory retrieval

When you start a new conversation (or send the first message in a thread fork), Ghast:

- Looks up your vector memory store with the embedding of your message.
- Picks the top matches above a cosine-similarity threshold (default 0.75).
- Surfaces them as a small "memory retrieval" stage card that appears briefly above the response.
- Injects them as context so the agent's reply is anchored in what it already knows about you.

See [Memory](/en/desktop/memory) for what's stored and how to manage it.

## Context usage display

The composer surfaces a **Context usage** breakdown for the current turn:

- **Input** — what you've sent so far this turn (after attachment expansion).
- **Output** — running count from the model.
- **Reasoning** — if applicable for the chosen model.
- **Cached** — how much of the prefix was served from the model's prompt cache.
- **`used / total` tokens** — the running total against the model's context window.

When you approach the window, Ghast runs **context compaction**: older turns are summarised into a compact representation and replaced in the prompt. The agent doesn't forget; the summary is preserved and shown as a folded "earlier" card you can inspect.

## Threads, forks, and side conversations

- **New thread** — clicking "New" in the sidebar starts a clean conversation with empty context.
- **Thread fork** — from any message, you can fork into a new conversation that inherits the context up to that point but evolves independently. Useful when you want to try a different approach without losing the current branch.
- **Side conversation** — some skills open a side conversation with the agent in a focused subtask. The main thread continues; the side conversation closes when its goal is met.

## Artefacts

When the agent generates substantial output (a long file, a code block, a diagram), it can break that out into an **artefact panel** alongside the chat. Artefacts are persisted alongside the conversation and can be opened in the Lightbox viewer for full-screen review.

## Related pages

- [Model Selection](/en/desktop/model-selection)
- [Memory](/en/desktop/memory)
- [Skills](/en/desktop/skills)
- [Voice (STT & TTS)](/en/desktop/voice)
