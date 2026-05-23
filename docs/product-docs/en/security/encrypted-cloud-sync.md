---
title: Encrypted Cloud Sync (Security View)
description: The cryptographic model of 0G Storage sync, what gets uploaded, and what cannot be recovered.
---

# Encrypted Cloud Sync (Security View)

This is the security-facing summary of 0G Storage sync. For the user-facing settings, see [0G Storage Sync](/en/web3/0g-storage-sync).

## Threat model

The threat model that drove this design:

- The user wants cross-device backup.
- The user does not want to trust Ghast (or any centralised service) with the cleartext.
- The user accepts that they manage their own key, with all the consequences (lose it → lose access).

The design avoids any centralised service holding cleartext. The trade-off is irrecoverable loss if the wallet (which derives the key) is lost.

## Cryptographic model

```
wallet private key
        │
        ▼
   HKDF-SHA256
        │
        ▼
sync encryption key
        │
        ├─── AES-256-GCM ───── ciphertext ────► 0G Storage indexer
        │                                        │
        ▼                                        ▼
local plaintext snapshot                content hash ──► on-chain Pointer Registry
                                                            (signed by wallet)
```

Each backup snapshot:

1. Is serialised from the relevant local data (memories, conversations, etc.).
2. Is encrypted with the wallet-derived key using AES-256-GCM.
3. Is uploaded to `https://indexer-storage-turbo.0g.ai`.
4. The content hash is signed with the wallet and submitted to the on-chain Pointer Registry contract.

The encryption key never leaves the local machine. The indexer sees only ciphertext. The Registry contract sees only a content hash.

## What Ghast cannot do

- Ghast cannot decrypt your backups. The team does not have the key.
- Ghast cannot reset your key. There is no recovery flow.
- Ghast cannot delete your ciphertext from the storage network on your behalf. You can stop pushing new snapshots; old ones live on.

This is the core property of E2E encryption with user-managed keys. It is also why losing the wallet means losing access.

## What can be backed up

| Category | What's in the snapshot |
| --- | --- |
| Memories | Vector memory records + embeddings |
| Conversations | Full chat history + tool calls |
| Providers | Configurations (model selections, accounts) — *not* the credentials themselves |
| Prompts | Saved prompt templates |
| Skills | Skills you authored or installed manually |

Excluded from any sync:

- Wallet private key
- Vault key
- Bridge bot tokens (per-platform credentials)
- MCP OAuth tokens
- Browser Relay tokens
- Activity Recorder samples (off by default; would need a separate opt-in even within the sync setting)

The exclusions are deliberate. If the encryption key (wallet) is lost, you don't want platform-specific credentials going with it — you can always re-issue those.

## What recovery looks like

On a new device with the same wallet:

1. Sign in to the same Ghast account.
2. Onboarding: import wallet from mnemonic.
3. After wallet bind, the client looks up on-chain pointers tied to your wallet address.
4. For each backed-up category, the encrypted snapshot is pulled, decrypted locally, merged into the new database.

If the wallet does not match what was used to encrypt the snapshots, decryption fails. The ciphertext stays on the storage network but is unreadable.

## What this does *not* protect against

- **Lost wallet.** No recovery.
- **Compromised wallet.** If your wallet key is exposed, the attacker can decrypt all your sync snapshots.
- **Compromised local machine.** If the attacker can also derive the sync key (because they have the wallet), they get everything.

If your wallet is exposed and you suspect snapshots have been read, the only mitigation is to migrate to a new wallet (and start fresh with empty backups). You cannot retroactively "encrypt with a new key" — the old ciphertext on the storage network is what it is.

## What the chain knows

The on-chain Pointer Registry stores:

- Your wallet address.
- A content hash per snapshot.
- A timestamp.
- Your signature.

It does **not** store:

- The cleartext.
- The category or any indication of what's in the snapshot.
- The number of records inside the snapshot.

This is enough for the client to find your snapshots without revealing what they contain.

## Related pages

- [0G Storage Sync](/en/web3/0g-storage-sync)
- [Wallet & Key Custody](/en/security/wallet-key-custody)
- [Local Data Storage](/en/security/local-data-storage)
- [Security Overview](/en/security/overview)
