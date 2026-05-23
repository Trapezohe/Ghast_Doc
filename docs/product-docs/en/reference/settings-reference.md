---
title: Settings Reference
description: Every settings panel and the meaningful fields in each.
---

# Settings Reference

This is the field-level reference for the Settings window. For a tour at the panel level, see [Settings Overview](/en/desktop/settings-overview).

## Account

| Field | Type | Notes |
| --- | --- | --- |
| Current profile | display | Active profile name + ID |
| Add profile | action | Triggers onboarding |
| Switch profile | action | Re-issues vault key |
| Sign out | action | Wipes vault key from memory |
| Language | enum | en / zh-CN / zh-TW / ja / ko / fr / vi / ru / es / de / pt |

## Wallet

| Field | Type | Notes |
| --- | --- | --- |
| Address | display | EVM address bound to this profile |
| OG balance | display | Wallet balance and Ledger balance |
| Deposit | action | Calls `addLedger` or `depositFund` |
| Withdraw | action | Pulls funds from Ledger back to wallet |
| Refund provider | action | Per Advanced provider, 24h lock |
| TEE ack status | display | Per provider; retry if needed |

## Data (0G Storage sync)

| Field | Type | Notes |
| --- | --- | --- |
| Master toggle | bool | Off by default |
| Sync category: Memories | bool | Off by default |
| Sync category: Conversations | bool | Off |
| Sync category: Providers | bool | Off |
| Sync category: Prompts | bool | Off |
| Sync category: Skills | bool | Off |
| Schedule | time | Default 06:00 local |
| Sync now | action | Manual trigger |
| Last sync | display | Timestamp + status |

## Providers

| Field | Type | Notes |
| --- | --- | --- |
| 0G Router | API key | Pasted from the 0G Compute Console at [pc.0g.ai](https://pc.0g.ai/); enables Router models in the picker |
| 0G Advanced | list | Per-provider enable, fund, ack, refund |
| Plugin providers | list | Per-plugin config |
| Default model | enum | Falls back if no model is specified |
| Reasoning effort default | enum | Low / Medium / High (where applicable) |

## MCP

| Field | Type | Notes |
| --- | --- | --- |
| Servers list | list | Stdio or URL |
| Add server | action | `command` or `url` config |
| Per-server enabled | bool | |
| OAuth status | display | Per server with re-auth action |
| Tool defaults | toggle list | Pre-enabled tools per server |

## Skills

| Field | Type | Notes |
| --- | --- | --- |
| Auto-select | bool | Let Ghast pick skills based on the prompt |
| Skill list | grouped list | Built-in / Personal / Claude Code / Codex / Marketplace / Project / Custom |
| Per-skill enabled | bool | |
| Marketplace browser | action | Search and install |

## Channels (per platform)

| Field | Type | Notes |
| --- | --- | --- |
| Connect / Disconnect | action | Bot token or OAuth flow |
| Mapped chats / channels | list | Workspace, prompt overrides, skill defaults |
| Approval rules | thresholds | Long-reply threshold, actor list, etc. |

## Whisper

| Field | Type | Notes |
| --- | --- | --- |
| Backend | enum | CPU / Metal (Apple Silicon) |
| Model variant | enum | Size/quality tradeoff |
| Language | enum | Auto or specific |

## TTS

| Field | Type | Notes |
| --- | --- | --- |
| Engine | enum | Kokoro / Qwen (Qwen Apple Silicon only) |
| Voice | enum | Per-engine voice list |

## Memory

| Field | Type | Notes |
| --- | --- | --- |
| Embedding provider | enum | Local Transformers / OpenAI Embeddings / … |
| Recall similarity threshold | number | Default 0.75 |
| Consolidator schedule | time | Background pass interval |

## Partner Mode

| Field | Type | Notes |
| --- | --- | --- |
| Master toggle | bool | Off by default |
| Scenario pack | enum | work / companion / quiet |
| Initiative | bool + sub-toggles | Open-loop, today, frequency caps, quiet hours |
| Emotion expression | bool | Companion-only, separate opt-in |
| Per-channel overrides | list | Override pack per messaging channel |
| Transparency view | display | Currently active rules |

## Chat

| Field | Type | Notes |
| --- | --- | --- |
| Default model | enum | |
| Auto-compact threshold | number | Token budget before compaction triggers |
| Context window | number | Max tokens to keep across turns |
| Response defaults | various | Tool toggles, skill defaults |

## UI

| Field | Type | Notes |
| --- | --- | --- |
| Theme | enum | System / Light / Dark |
| Font | enum | Stored fonts |
| Font size | number | |
| Layout density | enum | Compact / Comfortable |

## Network

| Field | Type | Notes |
| --- | --- | --- |
| Proxy URL | string | Optional |
| Timeouts | numbers | Various network endpoints |
| Diagnostics | action | Connectivity test |

## Computer Use

| Field | Type | Notes |
| --- | --- | --- |
| Permissions status | display | Accessibility, Screen Recording, AppleEvents |
| Approved apps | list | Per app, with revoke action |
| Strict approval | bool | Allow Always behaves like Allow Once |
| Action log | display | Timestamped log |
| Picture-in-Picture monitor | bool | Floating mirror window |

## Activity

| Field | Type | Notes |
| --- | --- | --- |
| State / metrics | display | Off / Idle / Indexing / Screen locked; Front app, Text index, Segments, Visual history |
| Recording on | bool | Off by default |
| Extract text from screen captures | bool | Master OCR toggle (macOS only) |
| OCR languages | string | Vision language codes, comma-separated |
| OCR every Nth capture | number | 1 = every capture, higher = less often |
| Heartbeat interval (ms) | number | Force a capture this often |
| Idle threshold (ms) | number | Close an idle segment after this long |
| Minimum capture gap (ms) | number | Floor between captures |
| Visual-change poll (ms) | number | Detect animations / video; 0 disables |
| JPEG quality | number | 1-100; for the capture buffer |
| Keep visual history | bool | Retain screenshot files; off by default |
| Max visual storage | number | Cap on retained screenshot bytes |
| Privacy · app blacklist | list | Bundles where the recorder auto-pauses and drops the buffer |
| Recent segments | display | Browse segments with duration, events, OCR preview |
| Permissions status | display | Screen Recording: Ready / Needs access |
| Danger zone → Delete everything | action | Delete all segments, events, OCR, summaries, embeddings, visual history |

## About

| Field | Type | Notes |
| --- | --- | --- |
| Version + build | display | |
| Check for updates | action | |
| License | display | |
| System info | display | Diagnostic dump |

## Related pages

- [Settings Overview](/en/desktop/settings-overview)
- [Reference: Supported Models](/en/reference/supported-models)
- [Reference: MCP Configuration](/en/reference/mcp-configuration)
- [Reference: Glossary](/en/reference/glossary)
