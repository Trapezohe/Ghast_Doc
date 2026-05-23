---
title: Sign In & Activation
description: Email-code and Google OAuth sign-in, session lifecycle, and (if applicable) activation codes.
---

# Sign In & Activation

This page describes the desktop sign-in flow, what each path produces, and how to recover from common failure modes.

## Two ways to sign in

### Email + verification code

1. Enter your email in the Sign In screen.
2. Click **Send code**.
3. Check your inbox for a 6-digit code (sent immediately; arrival usually within seconds).
4. Enter the code in the next screen.
5. The client validates the code with the backend and returns to you in an *Authorising* state.
6. On success, you proceed to onboarding (first time) or directly to the main window (subsequent runs).

If the code expires, request a new one. The countdown for resend is shown on screen.

### Google OAuth

1. Click **Sign in with Google**.
2. A system browser opens to Google's OAuth consent screen.
3. After consent, Google redirects back to a deep link the desktop client registered.
4. The client picks up the redirect, exchanges the code for a session, and returns to *Authorising*.

OAuth is faster but requires a Google account associated with your usage.

## What sign-in creates

After successful sign-in:

- A backend session token (stored in the profile vault).
- A **profile vault key** issued by the backend, held only in memory. This is the AES-256-GCM key that encrypts your `wallet.json`.
- A row in the local SQLite for your profile.

Importantly, the backend does **not** receive or store your wallet key. Wallet creation happens in onboarding, *after* sign-in, locally.

## Activation codes

Some deployment channels (e.g. closed previews) require an activation code. When activation is required:

- After sign-in but before onboarding completes, the **Activation** screen appears.
- Paste the code and confirm.
- The backend records the activation against your account.

Once activated, you do not need to re-enter the code. Switching machines uses the same account; activation transfers with it.

If your channel does not require activation, this screen is skipped entirely.

## Session lifetime

- The session token lives in the profile vault and is refreshed by the backend on its own schedule.
- The vault key — used to decrypt `wallet.json` — is *re-issued every time you sign in*. It is held only in memory and wiped when you sign out, switch profile, or close the app.
- This means: closing and reopening the app keeps you signed in; explicitly signing out requires re-signing-in to use the wallet again.

## Signing out

Settings → Account → **Sign out**:

- Removes the session token from disk.
- Wipes the vault key from memory.
- Leaves your local SQLite, memories, and encrypted `wallet.json` intact — but you cannot decrypt them again without signing back in.

If you want a true cleanup, also remove the profile directory at `~/Library/Application Support/Ghast/profiles/<profileId>/`.

## Common failure modes

| Symptom | Likely cause | Action |
| --- | --- | --- |
| Code doesn't arrive | Spam folder, slow provider | Wait 30s, check spam, then request a new code |
| Code is rejected after 5 min | Expired | Request a new code |
| Google OAuth doesn't return to the app | macOS deep-link handler not registered | Reopen the app, try again; if persistent, see [Troubleshooting: Login & Activation](/en/troubleshooting/login-and-activation) |
| "Activation code required" without a code | You're on a channel that needs activation | Contact your activation source (Discord / X support) |
| Wallet unavailable after restart | App was force-quit before vault key was re-issued | Sign in again |

## Related pages

- [First Run & Onboarding](/en/desktop/first-run)
- [Profiles & Workspaces](/en/desktop/profiles-and-workspaces)
- [Troubleshooting: Login & Activation](/en/troubleshooting/login-and-activation)
- [Security: Wallet & Key Custody](/en/security/wallet-key-custody)
