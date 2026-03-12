---
title: Wallet and Funding Issues
description: Troubleshooting for wallet status, repayment, and model funding.
---

# Wallet and Funding Issues

This page describes how to troubleshoot wallet lockouts, import failures, unsuccessful model top-ups, or refund amounts that do not match expectations.

## Overview

Use this page when the wallet remains locked, you cannot import a wallet, the model interface continues to ask for funding despite a positive wallet balance, a top-up attempt fails, or the refund amount is smaller than expected.

## Identify the symptom

| Observable symptom | What to check first |
| --- | --- |
| Wallet remains locked and you cannot continue | Whether the wallet is unlocked and whether the automatic lock timeout is too short |
| You cannot create or import a wallet | Whether the inputs are complete and follow the required format |
| The wallet has funds but the model page still prompts for payment | Treat wallet balance and model-usable funds as separate layers |
| A top-up attempt fails | Whether the wallet balance covers the requested payment plus on-chain fees |
| The refund amount is smaller than expected | Confirm the current refundable range instead of assuming all funds are immediately refundable |

## Recommended order

1. Ensure the wallet is unlocked.
2. Confirm the wallet's network and balance match the current funding need.
3. Return to the model page to understand the minimum required funding and the precise balance layer currently displayed.
4. For refund issues, confirm you see the refundable amount rather than interpreting the entire balance as instantly refundable.

## Avoid these assumptions

- Do not treat wallet balance and model funds as the same amount.
- Do not assume the top-up path is broken before unlocking the wallet.
- Do not interpret a partial refund as necessarily being an error.

## If it still fails

If you have confirmed the wallet unlocks, its balance suffices, and the model's funding requirements are met but the top-up or refund still behaves unexpectedly, continue inspecting the wallet or model pages for clearer status indicators.

Wallet funds and model funds operate on different layers. Regular users should first verify wallet status and balance, then confirm the model funding layer; refunds should be interpreted according to the currently refundable amount, not the whole balance shown.

## Related pages

- [Wallet Setup](../extension/wallet-setup.md)
- [Models and Funding](../extension/models-and-funding.md)
