---
title: 0G Compute Overview
description: How inference flows through the 0G network, and how that shows up to you.
---

# 0G Compute Overview

[0G](https://0g.ai) is the on-chain compute network that Ghast AI uses for inference. This page explains what that means in practice — what the chain knows, what you pay for, and what shows up in the desktop UI.

## What 0G is, in one paragraph

0G is an EVM-compatible network (chain ID `16661`) whose native token is **OG**. It hosts a registry of inference providers, each of whom runs a model inside a TEE (trusted execution environment) and exposes an OpenAI-compatible endpoint.

Ghast lets you reach this network in two distinct ways — **Router mode** (a managed routing service operated by 0G) and **Advanced mode** (your local wallet talking to provider sub-accounts directly on-chain). Both ultimately drive inference through the 0G provider mesh; they differ in how the request is dispatched and how billing is settled.

Ghast also uses 0G for one other thing (separately, opt-in): **0G Storage**, an encrypted backup for your local data. Covered in [0G Storage Sync](/en/web3/0g-storage-sync).

## The two on-chain compute contracts

The on-chain compute layer is exposed via two contracts:

- **Ledger contract** — holds OG balances for users who fund providers from their own wallet. The on-ramp for Advanced mode.
- **Inference contract** — manages the global provider registry, per-(user, provider) sub-accounts, refund records, and TEE signer acknowledgements.

These contracts are *only* touched in Advanced mode. Router mode does not interact with them directly — its billing is settled inside the [0G Compute Console](https://pc.0g.ai/) instead.

## The two ways to use 0G in the app

| Mode | What it is | Where you pay |
| --- | --- | --- |
| **Router** | A managed routing endpoint that picks an underlying provider per call. Accessed with an API key. | Top up the **0G Compute Console** at <https://pc.0g.ai/> and generate an API key. |
| **Advanced** | Your local wallet discovers on-chain providers and funds their sub-accounts directly. | Pay in OG from your wallet, through the Ledger contract. |

**Both modes are paid.** Neither is "free." The difference is *how* you account for the spend:

- Router charges your Compute Console balance (set up at the 0G web portal, separate from your wallet).
- Advanced charges a per-provider sub-account on-chain (set up from your local wallet).

Pick whichever fits your workflow. See [Inference Modes](/en/web3/inference-modes) for the full setup and trade-offs.

## What you see in the desktop

- **Model picker** — lists every enabled provider. Router shows up after you've pasted your Compute Console API key; Advanced providers show up after you've enabled and funded them.
- **Capability badges** — derived from each provider's declared `supportedParameters`, `architecture.input_modalities`, `architecture.output_modalities`. Common badges: streaming, tools, vision, JSON mode, reasoning.
- **Provider URL** — for Advanced providers, the on-chain registered URL is displayed in Settings → Providers.
- **Console link** — Router shows a link to <https://pc.0g.ai/> for managing your API key and balance.
- **Funded balance** — for each Advanced provider, current sub-account balance in OG, plus a Refund button.
- **TEE signer status** — for Advanced providers, an explicit "Acknowledged" or "Not Acknowledged" indicator.

## What stays off-chain

- Your prompts and the model responses. Inference happens inside the provider's TEE; the chain does not see message content.
- Your memory, conversations, and skills. Those are local — see [Local Data Storage](/en/security/local-data-storage).
- Your wallet key. Stored encrypted in the Profile Vault; never broadcast.
- Your Compute Console password / session for the Router. That account is managed at <https://pc.0g.ai/>, independently of Ghast.

## Related pages

- [Inference Modes](/en/web3/inference-modes)
- [Wallet & Key Custody](/en/web3/wallet-and-key-custody)
- [TEE & On-Chain Attestation](/en/web3/tee-and-attestation)
- [0G Storage Sync](/en/web3/0g-storage-sync)
