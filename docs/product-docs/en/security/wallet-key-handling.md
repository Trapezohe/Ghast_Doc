---
title: Wallet Key Handling
description: Understand how Ghast AI currently handles private keys and seed phrases, and what the default wallet boundary means in practice.
---

# Wallet Key Handling

## Overview

This page explains how Ghast AI currently handles wallet private keys and seed phrases, and what that handling means for ordinary users.

For most users, the practical takeaway is direct: the wallet is managed locally by the extension, it locks automatically by default, and installing Companion does not move wallet handling into a separate storage path.

## The main takeaway

The current wallet boundary can be summarized in three statements:

- Wallet information is primarily stored locally in the extension.
- The wallet is not kept permanently open in plaintext use.
- It locks itself again automatically after a period of time.

That means wallet handling should be understood as its own sensitive boundary, not as a minor setting attached to the rest of the product.

## What happens during create, import, and unlock

When you create a wallet, import a private key, or import a seed phrase, the system stores that sensitive material with local encryption rather than keeping it as directly readable local storage.

When you unlock the wallet, the system only keeps the usable state needed for the current session. Once automatic locking takes effect, or you lock it manually, that usable state is withdrawn.

## What the default protection is

The most important default protection is automatic locking. The current default time is 10 minutes.

That matters because:

- You do not need to remember to lock the wallet every time.
- A single unlock does not leave the wallet permanently available.
- Briefly stepping away does not automatically leave the wallet in a long-running unlocked state.

## How Companion relates to the wallet

Companion extends Ghast AI's local capabilities, but it is not the main storage location for the wallet.

The direct user interpretation is simple:

Installing Companion does not hand wallet management over to Companion. The wallet boundary remains primarily on the extension side.

## What widens wallet risk

Several choices make the wallet boundary noticeably wider:

- Keeping the wallet unlocked for long periods
- Setting automatic locking to never lock automatically
- Exporting sensitive material more often than necessary
- Treating local encrypted storage as if it removed all practical risk in every situation

The important point is that automatic locking matters because the wallet is still in a more sensitive state while it remains unlocked.

## Recommended use

If your goal is to preserve the default wallet boundary, use it this way:

1. Keep the default automatic lock unless you have a very clear reason to change it.
2. Unlock the wallet only when needed.
3. Do not treat private-key or seed exports as routine operations.
4. Treat the wallet as a separate sensitive boundary, not as a normal settings item.

Ghast AI currently treats the wallet as a separate local sensitive boundary. Wallet information is primarily stored in the extension and protected through local encryption and default automatic locking. Once you extend the unlock period or disable automatic locking, that default boundary becomes noticeably wider.

## Related pages

- [Wallet Setup](../extension/wallet-setup.md)
- [Data Storage and Sync Boundary](data-storage-and-sync.md)
- [Security Overview](overview.md)
