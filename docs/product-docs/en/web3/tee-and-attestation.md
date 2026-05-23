---
title: TEE & On-Chain Attestation
description: What the TEE in an Advanced provider does, what the chain attests to, and what gets shown in the UI.
---

# TEE & On-Chain Attestation

When you use an Advanced 0G provider, the model is served from inside a Trusted Execution Environment (TEE). This page explains what that gives you, what the chain actually verifies, and what Ghast surfaces in the UI.

## The short version

- Each Advanced provider registers a **TEE signer address** on-chain when they join the 0G inference registry.
- Inference responses are signed by that key, so the provider can prove the call ran through the TEE.
- Ghast asks you to **acknowledge** the TEE signer (a one-time on-chain transaction per provider) before funding the sub-account.
- The chain stores an `acknowledged` boolean per (your address, provider) pair.

## What "acknowledgement" actually is

On-chain, `inference.acknowledgeTEESigner(provider, true)` flips a flag in the Inference contract that records: "this user has confirmed this provider's TEE identity." It does not, on its own, verify TEE remote attestation cryptographically. It is a UX-level confirmation, not a TEE quote check.

In practice this means:

- The chain knows you've explicitly opted into this provider's TEE.
- The provider knows it can serve you and bill against your sub-account.
- Off-chain tooling and audits can use the acknowledgement record as evidence that a user opted in to a specific TEE identity at a specific time.

## What the TEE actually protects

The TEE is the runtime environment in which the provider runs the model. Its job:

- Keep your prompts and responses isolated from the provider's operator.
- Make it possible (in principle) to verify, via remote attestation, that the inference code is the expected binary.
- Sign responses with a key that lives only inside the enclave.

What the TEE does **not** do:

- It does not make the provider trustless. You still have to trust that the TEE itself (the hardware vendor's enclave) operates correctly.
- It does not protect against a provider that registers a TEE signer key for a TEE that was never actually deployed; the on-chain acknowledgement does not, by itself, prove the binary inside the enclave.
- It does not encrypt your traffic to the provider — TLS does that; the TEE is what processes the request after it arrives.

In short: TEE is a meaningful improvement over "send your prompt to a black box and trust them." It is not a complete trustless substitute for the operator.

## How Ghast uses TEE attestation in the UI

In Settings → Providers → 0G Advanced, each provider entry shows:

- **TEE signer address** — pulled from the on-chain registry entry.
- **Acknowledgement status** — `Acknowledged` (you've confirmed) or `Not acknowledged` (you haven't).
- **A confirm action** if you funded but the acknowledgement transaction failed (network hiccup), to retry the ack independently of funding.

You cannot send inference requests to an Advanced provider whose acknowledgement is missing — the client refuses to construct the `app-sk-...` token without it.

## What you sign

When you acknowledge:

- It's a regular EVM transaction. Your wallet signs it; Ghast submits it to `https://evmrpc.0g.ai`.
- You pay a small amount of OG for gas.
- The acknowledgement is permanent on-chain. Re-acknowledging is a no-op.
- There is no de-acknowledgement flow. If you want to stop using a provider, refund the sub-account; the on-chain `acknowledged` flag remains.

## What you can verify yourself

Anyone can verify on-chain that:

- Your wallet address has acknowledged a specific provider's TEE signer at a specific block height.
- A provider has registered a specific TEE signer key.

What you cannot verify from on-chain data alone:

- That the TEE actually ran the code the provider claims.
- That the TEE signer key was generated inside the enclave (versus brought in from outside).

These weaker properties are an honest characterisation of where on-chain attestation sits today. The acknowledgement is a useful audit primitive; it is not a proof of TEE integrity by itself.

## Related pages

- [0G Compute Overview](/en/web3/0g-compute-overview)
- [Inference Modes](/en/web3/inference-modes)
- [Wallet & Key Custody](/en/web3/wallet-and-key-custody)
