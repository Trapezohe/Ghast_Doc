---
title: Security Overview
description: Every trust boundary in Ghast AI, in one place, for audit and review.
---

# Security Overview

This page is the single-page summary of every trust boundary in Ghast AI. The sub-pages drill into specific surfaces — wallet, data, Computer Use, Partner Mode — but if you only have time to read one page, read this one.

## The trust model in one sentence

**Ghast is a non-custodial, local-first client.** Your wallet keys stay on your machine, your data stays on your machine by default, and the on-chain layer (0G Compute / Storage) is the only outbound surface unless you opt into the rest.

## The boundaries

| Boundary | What it means | Where to read more |
| --- | --- | --- |
| **Wallet boundary** | Ghast does not custody funds. The wallet key is encrypted with a profile-scoped vault key (never on disk). Signing is in-memory and ephemeral. | [Wallet & Key Custody](/en/security/wallet-key-custody) |
| **Profile boundary** | Each profile is fully isolated. Two profiles cannot read each other's data, share a wallet, or share memories. | [Profiles & Workspaces](/en/desktop/profiles-and-workspaces) |
| **Local data boundary** | All conversations, memories, settings, MCP config sit in a per-profile SQLite database. They do not leave the machine unless you opt into sync. | [Local Data Storage](/en/security/local-data-storage) |
| **Cloud sync boundary** | 0G Storage sync is opt-in per category. End-to-end encrypted with a key derived from your wallet via HKDF-SHA256. | [Encrypted Cloud Sync](/en/security/encrypted-cloud-sync) |
| **macOS permission boundary** | Computer Use needs Accessibility (mandatory) and Screen Recording (for full-fidelity screenshots). All are opt-in via System Settings. | [macOS Permissions](/en/security/macos-permissions) |
| **Per-app approval boundary** | Even with Accessibility granted, modifying actions on a new app require explicit user approval through a UI modal. | [Computer Use Boundary](/en/security/computer-use-boundary) |
| **Daemon hard blocklist** | Even with UI approval, the Swift daemon refuses certain app categories (password managers, sensitive system tools). Defense-in-depth. | [Computer Use Boundary](/en/security/computer-use-boundary) |
| **Browser relay boundary** | Connection requires a per-profile random token; sockets are localhost-only. Token can be rotated. | [Browser Extension: Security](/en/browser-extension/security) |
| **Bridge channel boundary** | Messages are only routed from channels you've explicitly mapped to a workspace. Unmapped messages are ignored. | [Remote Channels: Overview](/en/remote-channels/overview) |
| **Bridge actor boundary** | In groups, non-actor messages are observed but don't drive agent actions without your approval. | [Remote Channels: Approval Flow](/en/remote-channels/approval-flow) |
| **Partner Mode boundary** | Eight hard boundaries that no scenario pack, channel override, or turn instruction can relax. UUM is schema-constrained. | [Partner Mode Boundary](/en/security/partner-mode-boundary) |

## What this stack assumes

Ghast's security model assumes:

- **You control your local machine.** The threat model is not "another local user takes over your account." That risk requires OS-level mitigations Ghast does not provide.
- **Your wallet mnemonic is your responsibility.** Ghast does not back it up. Lose the mnemonic and the device → lose the wallet.
- **You vet the apps you grant Computer Use.** Allow Always is your call; the per-app gate is the moment to make it.
- **The on-chain layer's correctness is not the client's concern.** 0G chain integrity, provider TEE behaviour, and the underlying contracts are out of scope for this client.

## What this stack does *not* protect against

- **Malware on your Mac with full disk access** while you're signed in. With both `wallet.json` and the in-memory vault key, an attacker decrypts the wallet.
- **A compromised model.** If the inference provider's TEE is compromised, the prompts you sent that provider are exposed. Funded providers' identities are at least on-chain; the rest is provider-side.
- **A compromised messaging platform.** Telegram seeing your conversations is a Telegram thing; Ghast doesn't add a second layer of encryption on top of their wire protocol.
- **Social engineering of the model.** Untrusted content in chat (a screenshot, a tool result, a remote message) can attempt to get the model to do things outside the user's intent. Hard boundaries help; they don't fully eliminate this risk.
- **OS-level exploits in macOS or Chrome.** Out of scope.

## How to review the model yourself

Three sources of truth, in order of priority:

1. **This documentation set.** Wrong here → wrong somewhere.
2. **The source code.** Specifically `src/main/auth/profile/wallet-keystore.ts`, `src/main/computer-use/computer-use-approval-gate.ts`, `computer-use/Sources/`, `src/main/zerog-compute/`, and `src/main/services/data-sync-service.ts`.
3. **The active runtime.** What permissions the app has in macOS Privacy & Security. What's in the Computer Use Action Log. What's in the bridge logs.

Discrepancies between (1) and (2) are documentation bugs we want to know about.

## Related pages

- [macOS Permissions](/en/security/macos-permissions)
- [Wallet & Key Custody](/en/security/wallet-key-custody)
- [Local Data Storage](/en/security/local-data-storage)
- [Encrypted Cloud Sync](/en/security/encrypted-cloud-sync)
- [Computer Use Boundary](/en/security/computer-use-boundary)
- [Partner Mode Boundary](/en/security/partner-mode-boundary)
