---
title: Install Ghast AI Desktop
description: How to download, install, and launch the macOS desktop client.
---

# Install Ghast AI Desktop

The desktop client is distributed as a signed, notarised macOS DMG.

## Download

DMGs are produced by the release pipeline as:

```
Ghast-Desktop-${version}-${arch}.dmg
```

There are two architectures:

- **arm64** — Apple Silicon (M1, M2, M3, M4)
- **x64** — Intel

If you are unsure which to pick, click the Apple menu → About This Mac. The chip line will say either "Apple M…" (use arm64) or "Intel …" (use x64).

Internal preview DMGs ship to the preview channel; public release links will be published in the official channels (Discord / X) when the public download is live.

## Verify the download

The release pipeline produces a SHA-256 sum alongside each DMG. Before installing:

```bash
shasum -a 256 ~/Downloads/Ghast-Desktop-*.dmg
```

Compare the result against the value in the release notes. If they don't match, do not proceed — re-download or contact the maintainers.

## Install

1. Open the DMG. A window opens showing the **Ghast AI** application icon and a shortcut to your `Applications` folder.
2. Drag **Ghast AI** to `Applications`.
3. Eject the DMG (right-click → Eject).
4. Open `Applications` and double-click **Ghast AI**.

The first launch may be slower than subsequent ones because macOS verifies the notarisation ticket.

## First-launch system prompts

You should *not* see any "unknown developer" / Gatekeeper warning, because the DMG is signed with an Apple Developer ID and notarised by Apple. If you do see one:

- Confirm the SHA-256 against the release notes.
- If correct, allow the app in System Settings → Privacy & Security → "Open Anyway".
- If not, stop and re-download from the official source.

## What you do *not* need

- Homebrew — Ghast AI Desktop is a standard macOS app, not a CLI tool.
- An Xcode install — code signing and notarisation are done at build time, not on your machine.
- Rosetta — if you're on Apple Silicon, install the arm64 DMG. Rosetta is not required.

## Updates

Auto-update is on by default. Ghast checks for new versions every 30 minutes in the background. When an update is available, you'll see a status indicator and can choose when to install it. Updates download in the background and apply on next launch.

You can also check manually via Settings → About → Check for Updates.

## Uninstalling

To remove the app:

1. Quit Ghast AI.
2. Drag `Applications/Ghast AI.app` to the Trash.
3. (Optional) Remove the profile directory at `~/Library/Application Support/Ghast` to wipe all local data.

Uninstalling does **not** affect your wallet, your funded 0G balances, or your encrypted 0G Storage backups. Those live on-chain and on the storage network respectively. Re-installing and importing the same mnemonic restores access.

## Related pages

- [System Requirements](/en/start-here/system-requirements)
- [First Run & Onboarding](/en/desktop/first-run)
- [Sign In & Activation](/en/desktop/sign-in-and-activation)
