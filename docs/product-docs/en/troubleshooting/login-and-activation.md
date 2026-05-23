---
title: Login & Activation
description: Diagnosing sign-in and onboarding failures.
---

# Login & Activation

By symptom.

## Verification code never arrives

| Likely cause | Action |
| --- | --- |
| Email in spam folder | Check spam; mark as not spam |
| Slow email provider | Wait 30s, request a new code |
| Typo in email | Cancel, retry with the correct address |
| Email backend incident | Wait 5 min, try again or use Google OAuth |

## Code rejected as invalid

| Likely cause | Action |
| --- | --- |
| Expired (5+ min) | Request a new code |
| Mistyped | Re-enter, watch for similar-looking characters (0/O, 1/l) |
| Used twice | Codes are one-shot; request a new one |

## Google OAuth doesn't return to the app

| Likely cause | Action |
| --- | --- |
| macOS deep-link handler not registered | Quit Ghast fully (Cmd-Q), relaunch from `Applications`, try again |
| Multiple Ghast versions installed | Remove older copies; deep-link only resolves to one app |
| Default browser handles the callback in unexpected ways | Try with Safari as default browser |

## Activation screen appears but you have no code

| Likely cause | Action |
| --- | --- |
| You're on a gated preview channel | Get the code from your invite source (Discord / X) |
| Account migrated from a different channel | Contact maintainers |

## Onboarding loops back to sign-in

| Likely cause | Action |
| --- | --- |
| Backend session not establishing | Check network; corporate proxies sometimes block the auth callback |
| Conflicting auth state in profile vault | Sign out completely, remove `~/Library/Application Support/Ghast/profiles/<broken>` if you can identify it, retry |

## Wallet step fails to bind

| Likely cause | Action |
| --- | --- |
| Wallet signing failed (typo in mnemonic) | Retry with the correct mnemonic |
| Network failure during the bind challenge | Retry; the challenge is regenerated |
| Two profiles trying to bind the same address | Use a different wallet for the second profile, or merge the profiles by deleting one |

## After successful sign-in, the wallet is unavailable

| Likely cause | Action |
| --- | --- |
| App was force-quit before vault key was re-issued | Sign in again |
| The encrypted wallet file is corrupted | The wallet may be unrecoverable from this device. If you have the mnemonic, create a new profile and import it. |

## Related pages

- [Sign In & Activation](/en/desktop/sign-in-and-activation)
- [First Run & Onboarding](/en/desktop/first-run)
- [Wallet & Key Custody](/en/web3/wallet-and-key-custody)
