---
title: Inference Modes
description: Router vs Advanced — what's different, how setup and billing work for each.
---

# Inference Modes

Ghast AI exposes two ways to talk to the 0G Compute network: **Router mode** and **Advanced mode**. They differ in *how requests are dispatched*, *how you pay*, and *what kind of receipts you get*. They are **both paid** — neither is free.

This page covers the setup for each, when to pick which, and how funding works.

## Router mode

A managed routing endpoint operated by 0G. Each call you send hits the Router, which picks one of the underlying providers (by capacity, latency, availability) and forwards the request. You consume credits from your **0G Compute Console** balance.

| Aspect | Router |
| --- | --- |
| Endpoint | Managed Router (`router-api.0g.ai`) |
| Setup | Sign up at [pc.0g.ai](https://pc.0g.ai/), top up balance, generate API key, paste into Ghast |
| Wallet involvement | None — your local Ghast wallet isn't used for Router |
| On-chain accounting | Not visible from the client — billing lives in the Compute Console |
| Receipts | Console-side ledger of calls and balance |
| Best for | Quick start; users who want one endpoint that covers many models; not having to think about per-provider funding |

### Router setup (step by step)

1. **Open** <https://pc.0g.ai/> in a browser. Sign up for a 0G Compute Console account if you don't have one.
2. **Top up your balance** inside the Console. The Console manages its own payment flow — what you fund there is what the Router will draw against.
3. **Generate an API key** from the Console.
4. **Back in Ghast Desktop**, go to **Settings → Providers → Router** (this is the page-level Router/Advanced tab).
5. **Paste the API key** into the Router provider's `Compute API key` field.
6. Ghast tests the key and lists the models the Router serves.

After this, the Router shows up in the chat composer's model picker. Calls deduct from your Console balance.

## Advanced mode

Each Advanced provider is a specific entry in the 0G Inference contract's on-chain service registry. Enabling one binds Ghast to that exact provider, with its specific TEE signer, model, and pricing. Funding is per-provider, paid in OG from your local wallet.

| Aspect | Advanced |
| --- | --- |
| Endpoint | The specific provider's URL declared on-chain |
| Setup | Per provider: enable in Settings → Providers → Advanced, fund the sub-account from your wallet |
| Wallet involvement | Sign Ledger deposit, sign transfer to provider, sign `acknowledgeTEESigner` |
| On-chain accounting | Visible — funded amount per provider, refund flow |
| TEE attestation | Visible — explicit "Acknowledged" status per provider |
| Best for | Users who want a specific TEE handling their data, on-chain spend tracking, or capabilities a particular provider exposes |

### Advanced setup (step by step)

1. **Set up a wallet** in Ghast first if you haven't ([Wallet & Key Custody](/en/web3/wallet-and-key-custody)). Make sure it holds some OG.
2. **Go to** Settings → Providers → Advanced.
3. **Browse** the on-chain registry. Each entry shows the provider's address, service URL, declared capabilities, and pricing.
4. **Enable** a provider. Ghast materialises it as a local `zg-advanced-<address>` provider entry and asks you to fund it.
5. **Fund** by entering an OG amount. Ghast:
   - Tops up your 0G Ledger if needed (`addLedger` first time, `depositFund` thereafter).
   - Transfers the amount to the provider's sub-account (`transferFund(provider, "inference-v1.0", amount)`).
   - Calls `acknowledgeTEESigner(provider, true)` to record your TEE confirmation on-chain.
6. **Pick the provider's model** in the chat composer's model picker.

After this, chat requests go directly to the provider's `/v1/proxy/chat/completions` endpoint, with the `app-sk-...` token Ghast generated from your wallet. Calls are debited from your sub-account.

## Funding floors (Advanced)

The Ledger contract enforces a per-transfer minimum. The effective floor is:

```
max(MIN_TRANSFER_AMOUNT(), outputPrice + 1e12 buffer)
```

The UI computes this for you and shows the suggested minimum. Typical first-fund amounts are around **1–3 OG** for a small model.

## Refunds

### Router

Refunds for the Router are handled inside the **0G Compute Console** at <https://pc.0g.ai/>. Ghast does not have a refund button for Router — the balance lives in the Console, not in Ghast.

### Advanced

Each Advanced provider has a Refund button in Settings. Refunds:

- Are initiated on-chain.
- Are subject to a **24-hour lock window** before funds return to your Ledger.
- Can be cancelled by depositing fresh funds during the lock window (the contract re-uses the sub-account).

Refunded funds re-enter the Ledger (not your wallet). To move them back to the wallet, withdraw via the Ledger contract.

## Switching mid-conversation

You can change the model in the composer's model picker at any time, including across modes. Past turns are preserved; the new model receives the conversation context (subject to its context window). The agent's local state, memories, and tool wiring are unchanged.

Router-to-Advanced and Advanced-to-Router switches are fine — they're just model switches.

## When to pick which

Reasonable defaults:

- **Most users → Router.** One API key, one endpoint, no per-provider funding overhead. Pay on the Console.
- **Users with strong opinions about TEE / provider identity → Advanced.** You see exactly which TEE will serve your call; on-chain receipts; per-provider cost tracking.
- **Users running both → both.** They coexist. Pin Advanced for the workloads you want auditable; use Router for everything else.

## Related pages

- [0G Compute Overview](/en/web3/0g-compute-overview)
- [TEE & On-Chain Attestation](/en/web3/tee-and-attestation)
- [Wallet & Key Custody](/en/web3/wallet-and-key-custody)
- [Reference: Supported Models](/en/reference/supported-models)
- [Troubleshooting: Wallet & Funding](/en/troubleshooting/wallet-and-funding)
