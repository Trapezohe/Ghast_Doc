---
title: Wallet & Key Custody
description: Where your wallet key lives, how Ghast signs without holding custody, and what happens when you switch profiles.
---

# Wallet & Key Custody

Ghast AI is a non-custodial client. Your wallet key is stored encrypted on your machine, decrypted only in memory when something needs to be signed, and is never sent to a remote service.

This page covers how that custody model works, the three onboarding paths, and the operational lifecycle of your wallet.

## The three onboarding paths

During onboarding, the wallet step gives you a single choice:

| Path | What happens | When to pick it |
| --- | --- | --- |
| **Create a new wallet** | Ghast generates a fresh key locally and shows you the BIP-39 mnemonic. You write it down, then confirm by typing it back. | You're starting fresh on Ghast and don't have a wallet you want to reuse. |
| **Import from mnemonic** | You paste a BIP-39 mnemonic. Ghast derives the key and binds it to this profile. | You already have a wallet (e.g. from MetaMask) and want to use it here. |
| **Import from raw private key** | You paste a raw hex private key. | You have a key not represented by a mnemonic (e.g. exported from a different tool). |

The mnemonic is **shown exactly once at creation**. After confirmation, it is not displayed again in plaintext anywhere in the UI. If you lose it and lose the device, the wallet is unrecoverable — Ghast cannot recover keys for you.

## Where the key lives

| File | Contents | Encryption |
| --- | --- | --- |
| `~/<userData>/profiles/<profileId>/wallet.json` | Wallet private key, encrypted | AES-256-GCM with a profile vault key |

The vault key itself is:

- Issued by the Ghast backend at sign-in.
- Held only in memory.
- **Never persisted to disk.**
- Wiped from memory when you switch profiles or sign out.

This means: cold-booting the machine without signing in gives you nothing decryptable. Even with full disk access, an attacker cannot decrypt `wallet.json` without the vault key, and the vault key requires a fresh sign-in.

## How signing works

When Ghast needs to sign something (a Ledger deposit, an `acknowledgeTEESigner` call, an `app-sk-...` API token for an Advanced provider, a 0G Storage pointer):

1. The relevant client module asks for the wallet.
2. The Profile Vault decrypts `wallet.json` in memory.
3. An `ethers.Wallet` instance is constructed for the duration of the operation.
4. The signature is computed.
5. The wallet object is released.

The decrypted key never lands on disk, is never sent over the wire, and is not retained between operations.

## What Ghast signs on your behalf

By design, Ghast signs without prompting you for each transaction — the threat model assumes you control the local machine. The operations it signs:

- **0G Ledger deposits and top-ups** — moves OG from your wallet into your Ledger account.
- **Provider sub-account funding** — moves OG from your Ledger into a specific provider's sub-account.
- **TEE signer acknowledgement** — registers on-chain that you have confirmed a provider's TEE identity.
- **Advanced provider API tokens** — produces the `app-sk-...` token used at chat time.
- **0G Storage upload pointers** — signs the metadata for encrypted backup snapshots.

For each of these, Ghast shows the action in the UI before executing. You can see what's about to happen, and decline by closing the dialog.

## Profile boundary

Every profile has its own wallet. The model is:

- One profile ↔ one wallet address.
- Switching profiles re-issues a new vault key for the target profile and wipes the previous one from memory.
- The two profiles cannot read each other's encrypted data.

If you want a clean separation (e.g. work vs. personal), use two profiles with two different wallets. Do **not** try to "share" a wallet across profiles — Ghast does not support that, and a future check may treat duplicate addresses as a profile collision.

## What Ghast does **not** do

To be explicit:

- **It does not custody your funds.** Funds sit in the 0G Ledger and provider sub-accounts on-chain; Ghast cannot move them without your wallet's signature.
- **It does not back up your key.** No cloud copy is made. Lose the device + lose the mnemonic = lose the wallet.
- **It does not log your key.** Decrypted key material is held in memory only for the signing operation.
- **It does not give the agent access to your key.** The agent runtime cannot call `loadWalletPrivateKey()` from a tool or skill — that capability is reserved for the trusted Ghast main process.

## Related pages

- [0G Compute Overview](/en/web3/0g-compute-overview)
- [Inference Modes](/en/web3/inference-modes)
- [Security: Wallet & Key Custody](/en/security/wallet-key-custody)
- [Troubleshooting: Wallet & Funding](/en/troubleshooting/wallet-and-funding)
