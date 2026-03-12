---
title: Supported Capture Sites
description: Current supported site list for page-context capture and the operating modes that control it.
---

# Supported Capture Sites

## Current content-script match list

| Category | Current sites |
| --- | --- |
| 0G | `*.0g.ai`, `chainscan.0g.ai` |
| Block explorers | `*.etherscan.io`, `*.bscscan.com`, `*.polygonscan.com`, `*.arbiscan.io` |
| DeFi | `app.uniswap.org`, `*.aave.com`, `*.lido.fi`, `*.sushi.com`, `*.compound.finance`, `*.curve.fi`, `*.pancakeswap.finance` |
| Social | `x.com`, `twitter.com` |

## Current mode behavior

- `web3`: returns page context only on these sites and on recognized page types within them.
- `off`: does not return page context.

## Related pages

- [Page Context Capture](../core-concepts/page-context-capture.md)
- [Web Capture and Redaction](../security/web-capture-and-redaction.md)
