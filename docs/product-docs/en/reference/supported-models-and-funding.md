---
title: Supported Models and Funding Rules
description: Reference view of the current model-discovery path, recharge fields, and single-primary-model rule.
---

# Supported Models and Funding Rules

## Current model sources

| Source | Current behavior |
| --- | --- |
| On-chain `getAllServices` | Preferred source |
| Built-in `knownModels` | Fallback when the preferred read fails |

## Documentation boundary

- The repository does not currently provide a fixed model list that is suitable for long-term static documentation.
- For that reason, this page documents the model-discovery path and funding rules instead of locking a model list into the manual.

## Current funding-rule fields

| Field | Current meaning |
| --- | --- |
| `minimumInitialAmount` | Minimum amount for the first recharge |
| `minimumTopUpAmount` | Minimum amount for later top-ups |
| `currentMinimumAmount` | Minimum amount the UI should currently display |
| `ledgerExists` | Whether a Ledger account already exists |
| `recentFunded24h` | Recently funded amount within the lock window |
| `refundable` | Amount currently refundable |
| `lockTimeSeconds` | Refund lock window |

## Current selection rule

The current UI follows a single-primary-model rule: once one primary model is enabled, other models are reduced to non-primary or disabled status.

## Related pages

- [Models and Funding](../extension/models-and-funding.md)
- [Wallet and Model Funding](../core-concepts/wallet-and-funding.md)
