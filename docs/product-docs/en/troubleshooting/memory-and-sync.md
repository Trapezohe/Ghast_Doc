---
title: Memory & Sync
description: Diagnosing memory recall, embeddings, consolidation, and 0G Storage sync.
---

# Memory & Sync

By symptom.

## Memory recall surfaces nothing

| Likely cause | Action |
| --- | --- |
| Recall threshold too high | Settings → Memory → similarity threshold; try 0.65 |
| Embedding provider changed and re-embed didn't finish | Wait for re-embed; check Settings → Memory → stats |
| Empty store (just installed) | Build it up by working with the agent |
| Workspace filter excluding the right memories | Check the active workspace |

## Old memories suddenly stop matching

| Likely cause | Action |
| --- | --- |
| Embedding provider was changed | Old embeddings are dropped; re-embed in progress |
| Consolidation archived them under a different summary | Search archived in Settings → Memory |

## Memory writes happen silently / surprise me

| Likely cause | Action |
| --- | --- |
| Activity Recorder generated candidate memories | Settings → Memory → filter by source = activity |
| A skill is writing | Inspect the agent's tool call cards |
| The consolidator merged | Check the consolidator's recent runs |

## I can't delete a memory

| Likely cause | Action |
| --- | --- |
| Soft-delete pending finalisation | Wait for the next consolidator run, or run it manually |
| The memory is referenced by a UUM consolidation | Clear the UUM field that references it first |

## 0G Storage sync says "failed"

| Likely cause | Action |
| --- | --- |
| Wallet has no OG for the on-chain pointer | Send a small amount of OG to your wallet |
| Storage indexer unreachable | Check connectivity to `indexer-storage-turbo.0g.ai` |
| Snapshot too large | Disable a category and retry; large categories take longer |

## Cross-device restore fails

| Likely cause | Action |
| --- | --- |
| Different wallet imported on the new device | Decryption fails — use the same wallet |
| Sync was disabled on the source device | No snapshot exists; turn on sync there first |
| Pointer registry RPC issues | Retry later |

## Activity Recorder shows nothing

| Likely cause | Action |
| --- | --- |
| Recording is off (default) | Settings → Activity → enable |
| App excluded by the mute list | Check the mute list |
| Recording started during the period you care about, not before | Backfill is not retroactive |

## Embedding change confirmation didn't appear

| Likely cause | Action |
| --- | --- |
| You changed providers in the same setting save | The prompt appears on save; if you missed it, Settings → Memory → Re-embed |

## Memory panel shows fewer memories than expected

| Likely cause | Action |
| --- | --- |
| Filter applied (source, tag, date) | Clear filters at the top of the panel |
| Archive view collapsed | Toggle the archived view |

## Related pages

- [Memory](/en/desktop/memory)
- [Activity Recorder](/en/desktop/activity-recorder)
- [0G Storage Sync](/en/web3/0g-storage-sync)
- [Security: Encrypted Cloud Sync](/en/security/encrypted-cloud-sync)
