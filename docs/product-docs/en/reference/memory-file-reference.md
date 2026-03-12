---
title: Memory File Reference
description: Reference mapping for the current core memory files, their UI labels, and their intended use.
---

# Memory File Reference

## Current core file mapping

| Internal name | Current UI label | Current use |
| --- | --- | --- |
| `soul` | `soul.md` | Agent self-definition |
| `user` | `profile.md` | User profile and preferences |
| `strategy` | `strategy.md` | Action and strategy rules |
| `memory` | `long-term-memory.md` | Main long-term memory body |
| `heartbeat` | `heartbeat.md` | Heartbeat checklist |

## Current boundary

- The tool layer treats these files as reserved core memory and does not allow them to be treated like ordinary workspace files.
- The manual keeps both the internal name and the current UI label so troubleshooting does not lose track of the mapping.

## Related pages

- [Memory Model](../core-concepts/memory-model.md)
- [Memory Page](../extension/memory-tab.md)
