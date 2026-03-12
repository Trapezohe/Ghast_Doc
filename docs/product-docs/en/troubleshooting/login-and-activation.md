---
title: Login and Activation Issues
description: Troubleshooting for sign-in and activation.
---

# Login and Activation Issues

This page guides you through the troubleshooting steps for login or activation issues that leave the product stuck on the invitation code step, repeatedly drop you back to sign-in, or otherwise prevent you from reaching the main experience.

## Overview

This page covers cases where login succeeds but the session does not enter the normal usage state, the interface stays on the invitation code screen, or login keeps expiring.

## Identify the symptom

| Observed behavior | More likely explanation |
| --- | --- |
| Google sign-in completes but the app still cannot reach the main interface | Activation is not finished, or the current session has not resumed correctly |
| The flow stays on the invitation code input screen | The code is not approved yet, or the account still needs activation |
| You just signed in and are immediately asked to sign in again | The login session did not persist |
| You are unsure whether something failed | Treat the invitation code step as part of the normal usage path |

## Recommended order

1. Repeat the Google login once more.
2. If the interface continues to request an invitation code, complete that validation; do not treat it as an error you should skip.
3. After both login and invitation code are complete, verify whether you can enter the next guided step or the main interface.
4. If you still bounce back to the login or activation screen, move on to the login session troubleshooting steps.

## Avoid these assumptions

- Do not expect the invitation code screen to be skipped automatically.
- Do not equate a successful login with the account being fully usable.
- Do not start troubleshooting wallet, model, or Companion issues before login and activation are fully finished.

## If it still fails

If you have retried login, ensured the invitation code is correct, and still cannot reach the normal interface, the issue remains at the login or activation layer. Continue prioritizing those steps rather than jumping to later functionality.

Ghast AI currently treats login and activation as two consecutive but distinct steps. For ordinary users, the invitation code step is part of the official usage path for some accounts. Only when both login and activation complete does the account enter the full usage state.

## Related pages

- [Sign In and Activation](../extension/sign-in-and-activation.md)
- [Quickstart](../start-here/quickstart.md)
