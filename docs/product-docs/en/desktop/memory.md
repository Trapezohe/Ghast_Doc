---
title: Memory
description: How Ghast remembers what matters across sessions — write paths, recall, embeddings, and the management panel.
---

# Memory

Memory is what makes Ghast a long-term partner instead of a session scratchpad. It's a local vector database that stores what the agent has learned about your work, preferences, and open loops, with semantic recall on every new conversation.

## How a memory is created

There are three write paths:

| Path | Trigger |
| --- | --- |
| **Explicit in chat** | You ask the agent to remember something, or it offers to and you accept. |
| **From Activity Recorder** | Background activity (window focus, files touched, URLs) is occasionally summarised into candidate memories. |
| **Manual** | Settings → Memory → Add. You type the memory text directly. |

Each memory record stores:

- The text.
- A source tag (conversation / activity / manual).
- Optional user tags.
- A vector embedding for semantic recall.
- An access counter (bumped on recall).
- A timestamp.

## How recall works

When you start a new conversation or send the first message in a thread fork:

1. The first message is embedded with the configured embedding model.
2. Ghast queries the local sqlite-vec index for nearest neighbours (cosine similarity).
3. Matches above a similarity threshold (default 0.75) are surfaced.
4. They are injected as a "memory retrieval" stage card briefly visible above the response, and added to the model's context.

You can see exactly which memories were recalled by expanding the stage card.

## The embedding model

By default, Ghast uses a local Transformers model running in the main process (no network round-trip per query). You can switch to a remote embedding provider (e.g. OpenAI Embeddings) in Settings → Memory.

If you switch the embedding provider, Ghast will:

- Prompt you to confirm.
- Mark existing memories as needing re-embedding.
- Re-embed them in the background.

During re-embedding, recall continues with both old and new embeddings; once done, only the new index is queried.

## Consolidation

A background consolidator periodically:

- Identifies overlapping memories ("user prefers dark mode" said three different ways).
- Summarises long-tail fragments into higher-level facts.
- Marks subsumed memories as archived (not deleted; viewable in the panel with a filter).

Consolidation runs on a schedule and on a manual trigger from the panel. It does not delete memories without your action — only archives.

## The Memory panel

Settings → Memory shows:

| Element | What it lets you do |
| --- | --- |
| **Stats** | Total memories, indexed count, last consolidation time |
| **Search** | Semantic search across all memories (uses the same embedding pipeline) |
| **List** | Browse, filter by source / tag / date |
| **Edit** | Click a memory to change its text or tags. The embedding is recomputed on save. |
| **Delete** | Soft-delete a memory. Recoverable until consolidation finalises it. |
| **Add** | Type a memory directly. |
| **Consolidator** | Run consolidation now; see what it would propose to merge. |

## What gets stored versus what gets shown

A memory record can contain any text the agent or you choose. Common shapes:

- "Songsu is working on Ghast Desktop; deadline mid-March."
- "Prefer Mandarin replies in Discord, English in main chat."
- "Don't suggest LinkedIn outreach unless I ask."

The agent treats memories as soft context, not as hard rules. They influence tone, prioritisation, and proactive behaviour but can be overridden by explicit instructions in a turn.

For Partner Mode users, memories interact with the User Understanding Model (UUM) and its strict allowlist of fields. See [Partner Mode: User Understanding Model](/en/partner-mode/uum).

## Privacy

- Memories are local by default. Stored in `<profile>/ghast.db`.
- Memories sync to 0G Storage **only if** you opt in to the Memories category in Settings → Data → 0G Storage Sync. Encryption is end-to-end with a wallet-derived key.
- The agent will not exfiltrate memories to remote channels unless a turn explicitly asks it to.

## Related pages

- [Chat & Composer](/en/desktop/chat-and-composer)
- [Activity Recorder](/en/desktop/activity-recorder)
- [Settings Overview](/en/desktop/settings-overview)
- [0G Storage Sync](/en/web3/0g-storage-sync)
- [Reference: Memory File Format (if needed)](/en/reference/bundled-skills)
