---
title: Product Architecture
description: A practical view of the layers that make up Ghast AI and the boundaries that matter during normal use.
---

# Product Architecture

This page lays out how Ghast AI is put together, so the rest of the manual makes sense in context. You do not need to memorise the internals — but knowing which layer owns what helps you reason about permissions, data, and failure modes.

## The five layers

| Layer | What it is | Primary role |
| --- | --- | --- |
| **Ghast AI Desktop** | macOS Electron client | The main product surface. Chat, memory, skills, settings, MCP, ACP, Computer Use, messaging bridges all live here. |
| **0G Compute network** | EVM-compatible chain (ID 16661) + provider registry | Where inference happens. Either through the Router (managed endpoint, paid via the 0G Compute Console) or through a specific on-chain TEE provider you fund from your wallet. |
| **0G Storage network** | Decentralised content store + on-chain pointer registry | Optional encrypted backup for your local data. Off by default. |
| **Ghast Browser Relay** | Chrome extension (Manifest V3) | A relay that lets the desktop agent operate your real Chrome over CDP. |
| **Computer Use daemon** | Native Swift helper app | Drives macOS via the Accessibility API and CoreGraphics. Called by the desktop client through a local Unix socket. |

Everything else (your wallet, your Profile Vault, your messaging bridge tokens) is wrapped around these layers.

## Where the agent runs

Inference always runs **outside** your machine — either via the 0G Router (paid from your 0G Compute Console balance), or via an on-chain TEE provider you funded directly from your wallet. The provider executes; you pay.

Everything *else* — context assembly, tool execution, memory retrieval, skill orchestration, IPC with the helper daemon, the messaging bridges — runs **inside** the desktop client. The agent's "brain" is remote; the agent's "body" is local.

This is intentional. It means your data does not have to leave your machine to give the model context, and it means the same local body can talk to different models without losing memory.

## Where your data lives

| Where | What | When it leaves the machine |
| --- | --- | --- |
| `~/<userData>/profiles/<id>/ghast.db` | Conversations, memories, settings, skill records, MCP config | Only if you enable 0G Storage sync for that category |
| `~/<userData>/profiles/<id>/wallet.json` | Encrypted wallet private key | Never. Only decrypted in-memory to sign |
| `~/Library/Application Support/Ghast/computer-use.sock` | Local IPC socket for the helper daemon | Never. Local socket, no network exposure |
| `~/<userData>/profiles/<id>/live-browser.json` | Browser Relay port + auth token | Never. Only shown to you in Settings |

If you have 0G Storage sync enabled, snapshots of the selected categories are encrypted with a key derived from your wallet (HKDF-SHA256), uploaded to the storage network, and the resulting content hash is stored as a pointer in an on-chain registry. The decryption key is not stored anywhere off-machine.

## Where the trust boundaries are

| Boundary | What it means |
| --- | --- |
| Wallet boundary | Ghast does not custody funds. Every chain transaction is signed locally. |
| Profile boundary | Each profile is fully isolated — separate wallet, memories, conversations, bridge tokens. Switching profiles wipes the previous vault key from memory. |
| macOS boundary | Computer Use requires Accessibility permission *and* per-app approval. The Swift daemon also has a hard blocklist that ignores UI approvals for sensitive apps. |
| Chrome boundary | The extension only accepts connections from `localhost`. Authentication is a per-profile random token; you can rotate it. |
| Channel boundary | A messaging bridge only routes messages from channels you explicitly mapped to a workspace. Unmapped messages are ignored. |
| Cloud boundary | 0G Storage sync is opt-in per category and end-to-end encrypted. Ghast cannot decrypt your backups. |

## What's usable immediately after install

After installing the desktop client and creating a wallet, the following local capabilities are immediately available:

- Local memory and skill system
- Memory recall on every new conversation
- Activity recorder (local, off-by-default)
- Voice input (Whisper) and TTS (Kokoro / Qwen)

## What you need to set up before you can chat

The model picker is empty until you connect at least one provider. The common starting point:

- **Router** — sign up at <https://pc.0g.ai/> for the 0G Compute Console, top up a balance, generate an API key, paste it into Settings → Providers → Router.
- **Advanced** (optional) — enable specific on-chain providers in Settings → Providers → Advanced and fund their sub-accounts from your local wallet.

## What you do *not* need right away

- Computer Use (requires macOS Accessibility grant + per-app approval)
- Chrome extension (requires loading the extension and pasting a token)
- Messaging bridges (require bot tokens / OAuth credentials per platform)
- 0G Storage sync (off by default; opt-in per category)

## How the manual is laid out

Reading order roughly follows the layers above:

1. **Start Here** — what the product is and how to install it
2. **Web3 Infrastructure** — the on-chain layer, because it informs wallet / model / sync choices
3. **Desktop Client** — each surface of the main app, in roughly the order you'll encounter them
4. **Computer Use** — Mac-side operation, separated because it has its own permission model
5. **Browser Extension** — the Chrome relay, separated for the same reason
6. **Remote Channels** — messaging platform bridges, per-platform
7. **Partner Mode** — the long-term collaboration personality layer
8. **Security** — every trust boundary, in one place, for review and audit
9. **Reference** — settings, models, skills, MCP, glossary
10. **Troubleshooting** — by symptom

## Related pages

- [What Is Ghast AI](/en/start-here/what-is-ghast-ai)
- [Quickstart](/en/start-here/quickstart)
- [0G Compute Overview](/en/web3/0g-compute-overview)
- [Security Overview](/en/security/overview)
