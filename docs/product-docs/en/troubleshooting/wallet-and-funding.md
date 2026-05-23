---
title: Wallet & Funding
description: Diagnosing wallet, Ledger, provider funding, and refund issues.
---

# Wallet & Funding

By symptom.

## Wallet balance shows zero (or stale)

| Likely cause | Action |
| --- | --- |
| RPC blip when reading balance | Wait 10s, refresh; balance auto-refreshes periodically |
| Balance was never funded | Send OG to your wallet address externally first |
| Looking at the wrong wallet | Verify the address shown in Settings → Wallet matches what you funded |

## "Insufficient funds" when depositing to Ledger

| Likely cause | Action |
| --- | --- |
| Wallet balance < deposit amount + gas | Reduce the deposit or top up the wallet |
| Gas estimate exceeds wallet balance | Same as above — leave headroom for gas |

## Provider funding floor seems high

| Likely cause | Action |
| --- | --- |
| Model's `outputPrice` is high | The floor is `max(MIN_TRANSFER_AMOUNT(), outputPrice + buffer)`. Lower-priced models have lower floors. |
| `MIN_TRANSFER_AMOUNT()` updated on-chain | Read the latest value in Settings → Providers → 0G Advanced → [provider] |

## Transaction submitted but balance doesn't update

| Likely cause | Action |
| --- | --- |
| Confirmation pending | Wait 1–2 minutes; 0G blocks are fast but RPC reads can lag |
| Transaction failed (out-of-gas, reverted) | Check the chain explorer / your wallet's history |

## TEE acknowledgement fails after funding

| Likely cause | Action |
| --- | --- |
| RPC blip during the ack call | Use the **Reconfirm** button in Settings → Providers → 0G Advanced → [provider] |
| Provider deregistered between funding and ack | Refund the sub-account; pick a different provider |

## Advanced provider's model gives errors

| Likely cause | Action |
| --- | --- |
| Sub-account balance low | Top up via Settings → Providers → 0G Advanced → [provider] |
| Provider's TEE endpoint down | Try again later; or switch to a Router model in the picker (Router covers many providers automatically) |
| `app-sk-...` token expired | Re-generate by toggling the provider off/on in Settings |

## Refund seems stuck

| Likely cause | Action |
| --- | --- |
| Within the 24-hour lock window | Wait — funds release automatically when the window ends |
| Attempted refund failed | Check on-chain transaction; retry from Settings |

## Wallet works, but on-chain transactions consistently fail

| Likely cause | Action |
| --- | --- |
| Chain RPC unreachable from your network | Check connectivity to `evmrpc.0g.ai`; corporate proxies sometimes block |
| Wrong network (extremely rare — the client pins chain ID 16661) | Reinstall the latest Ghast |

## Related pages

- [Web3: Wallet & Key Custody](/en/web3/wallet-and-key-custody)
- [Web3: Inference Modes](/en/web3/inference-modes)
- [Security: Wallet & Key Custody](/en/security/wallet-key-custody)
