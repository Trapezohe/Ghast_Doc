---
title: 0G Storage Sync
description: Encrypted cross-device backup of your local data, opt-in per category.
---

# 0G Storage Sync

0G Storage Sync is Ghast's optional cross-device backup. It encrypts your local data, uploads it to the 0G storage network, and writes the resulting content hash to an on-chain Pointer Registry. The decryption key is derived from your wallet — Ghast cannot read your backups.

This is the *only* way data leaves your machine other than the inference traffic itself. It is **off by default** and opt-in per category.

## Where it lives in the UI

Settings → Data → **0G Storage Sync**. The panel shows:

- A master toggle (off by default).
- Per-category toggles (memories, conversations, providers, prompts, skills).
- The next scheduled sync time.
- A Sync Now button for manual runs.
- The last sync status (success / failure with a one-line reason).

## How the encryption works

Each upload is encrypted client-side before leaving the machine:

| Stage | What happens |
| --- | --- |
| Key derivation | An AES-256-GCM key is derived from your wallet private key via HKDF-SHA256. |
| Encryption | The serialised category snapshot is encrypted with that key. |
| Upload | The ciphertext is sent to the 0G storage indexer (`https://indexer-storage-turbo.0g.ai`). |
| Pointer | The content hash is signed and submitted to the on-chain Pointer Registry contract (`0x68F8610...61c` on chain 16661). |

The derived key never lands on disk. The key derivation is deterministic — the same wallet always derives the same key — which is what lets you restore on another device with the same wallet.

## What gets backed up

| Category | Default state | What it contains |
| --- | --- | --- |
| **Memories** | Off | Vector memory records and their embeddings |
| **Conversations** | Off | Full chat history and tool calls |
| **Providers** | Off | Enabled provider configurations (not the keys themselves) |
| **Prompts** | Off | Saved prompt templates |
| **Skills** | Off | Skills you installed or authored |

The wallet itself is **not** backed up to 0G Storage. The mnemonic / private key is your responsibility — see [Wallet & Key Custody](/en/web3/wallet-and-key-custody).

## When sync runs

- **Scheduled** — daily at 06:00 local time by default (configurable in the same panel).
- **Manual** — the Sync Now button.
- **Not real-time** — sync is snapshot-based, not change-by-change. If you want the latest state on another device, run a manual sync from the source device first.

## Restoring on a new device

The flow on a new machine:

1. Install Ghast AI Desktop.
2. Sign in with the same email account.
3. In onboarding, choose **Import from mnemonic** and enter the same wallet's mnemonic.
4. After the profile is created and the wallet is bound, the client looks up the on-chain Pointer Registry for snapshots tied to your wallet address.
5. For each backed-up category, the encrypted snapshot is pulled, decrypted locally with the derived key, and merged into the local database.

If the wallet does not match what was used to encrypt the snapshots, decryption will fail. There is no recovery flow for a lost wallet — the encrypted blobs stay on 0G Storage but are unreadable without the right key.

## Costs

Each upload costs OG to register the pointer on-chain and to store the ciphertext on the storage network. The cost per snapshot is small (typically well under 1 OG for a normal-sized profile), but it does require an OG balance in your wallet.

## What this is not

- **Not a real-time sync.** If you make a change on Device A at 09:00 and open Device B at 09:05, B will not see the change until you trigger a sync on A.
- **Not a server-side service.** Ghast does not run a server that holds your data. The 0G storage network does; Ghast just talks to it.
- **Not a "cloud account."** There is no central account that owns the backups. Ownership is the wallet address that signed the pointer.

## Related pages

- [Wallet & Key Custody](/en/web3/wallet-and-key-custody)
- [Security: Encrypted Cloud Sync](/en/security/encrypted-cloud-sync)
- [Security: Local Data Storage](/en/security/local-data-storage)
- [Troubleshooting: Memory & Sync](/en/troubleshooting/memory-and-sync)
