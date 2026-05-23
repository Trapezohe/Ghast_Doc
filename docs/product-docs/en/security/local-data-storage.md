---
title: Local Data Storage
description: Where local data lives on disk, what's encrypted, and how isolation works.
---

# Local Data Storage

This page is the disk-layout view of Ghast — where every category of data lives, what's encrypted, and what protections apply.

## Directory layout

```
~/Library/Application Support/Ghast/
├── profiles/
│   ├── <profileId-1>/
│   │   ├── ghast.db                 ← Main SQLite database
│   │   ├── wallet.json              ← Encrypted wallet (AES-256-GCM)
│   │   ├── live-browser.json        ← Browser Relay port + token (encrypted)
│   │   ├── mcp-tokens.json          ← OAuth tokens from MCP servers (encrypted)
│   │   ├── bridge-credentials/      ← Encrypted bot tokens
│   │   ├── memory-embeddings/       ← Vector embedding files (if local)
│   │   ├── activity/                ← Activity Recorder samples (when enabled)
│   │   └── attachments/             ← User-uploaded files
│   └── <profileId-2>/ …
├── computer-use.sock                ← Unix socket for the Computer Use daemon (transient)
├── logs/                            ← App logs
└── crash-reports/                   ← Sentry crash dumps (if enabled)
```

## What's encrypted

| File | Encryption |
| --- | --- |
| `wallet.json` | AES-256-GCM with the profile vault key (vault key not on disk) |
| `live-browser.json` | Same scheme |
| `mcp-tokens.json` | Same scheme |
| `bridge-credentials/*` | Same scheme |
| `ghast.db` | The DB itself is `better-sqlite3-multiple-ciphers` — supports page-level encryption. Currently the DB is not page-encrypted by default; conversation content, memories, and settings sit in plain SQLite pages unless you've enabled DB-level encryption. |

The split is deliberate: high-value secrets (wallet, tokens) get strong encryption with an ephemeral key; bulky content (conversations, memories) sits in plain SQLite so that recovery and inspection are possible if you ever need to.

If your threat model requires the DB itself to be encrypted, this is on the roadmap but not the default today.

## What's *not* encrypted by default

- The SQLite database content (conversations, memories, settings, skills, MCP config).
- Activity Recorder samples (when enabled).
- Attachments you uploaded.
- App logs.

These rely on macOS filesystem-level protection: your user account's home directory permissions, plus FileVault if you've enabled it. If you have FileVault on, the disk is encrypted at rest; powered-off, the data is unreadable. If you don't, anything in your home directory is readable by anyone with physical access to your unlocked Mac.

## Profile isolation

Two profiles cannot read each other's data because:

- Each has its own vault key (issued separately at sign-in).
- The encrypted files in profile A are decryptable only with profile A's vault key.
- The SQLite database in profile A is opened only when profile A is active.

The Computer Use daemon's socket is shared at the OS-user level, but the daemon enforces approval state per profile (sent in each RPC call).

## Backups

By default, nothing leaves your machine. **Time Machine** and other macOS backup tools will copy the entire `Application Support/Ghast` directory — including encrypted `wallet.json`. If you restore from Time Machine on the same Mac and same macOS user, the data is usable; restoring to a different machine without signing in still won't decrypt the wallet (no vault key).

If you opt into 0G Storage sync, encrypted copies of opted-in categories go to the storage network — but the encryption key is derived from your wallet, so the same caveats apply.

## Deletion

When you delete:

- **A conversation** — the row is removed from the database. Embeddings are removed. Activity Recorder records referencing it are not affected.
- **A memory** — soft-deleted first, finalised by the consolidator.
- **A profile** — the entire profile directory is removed. The on-chain state (Ledger balance, provider sub-accounts) is unaffected and remains tied to the wallet.

"Forgotten by Ghast" does not mean "forgotten by the chain" — anything that was on-chain stays on-chain.

## App logs

Ghast logs:

- Application errors and warnings.
- Network errors (without bodies).
- Crash reports via Sentry (opt-in at install).

Logs do **not** include:

- Wallet keys or mnemonics.
- Decrypted token values.
- Conversation content.
- Tool call parameters or results.

Sentry crash reports may include stack traces with file paths and variable names. They do not include user content or secrets. You can disable Sentry in Settings → System.

## Related pages

- [Encrypted Cloud Sync](/en/security/encrypted-cloud-sync)
- [Profiles & Workspaces](/en/desktop/profiles-and-workspaces)
- [Memory](/en/desktop/memory)
- [Security Overview](/en/security/overview)
