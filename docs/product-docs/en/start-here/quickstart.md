---
title: Quickstart
---

# Quickstart

## Overview

This page provides the shortest supported onboarding path for Ghast AI.

## Quickstart path

1. Install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/ghast-ai/nnhdkkgpoeojjddikcjadgpkbfbjhcal).
2. Open the sidebar and sign in with a Google account.
3. Complete activation using the invitation code prompt if your account has not yet been activated.
4. Create or import a wallet, then set a local unlock password.
5. Follow any additional guidance to connect workspaces, remote control, or models; install Companion only when stronger local capabilities are clearly needed.
6. Open a supported page and begin using the sidebar chat.

If you only want to evaluate the product, reaching step 4 is usually enough to explore the core path.

## If this is your first time

### If you just want to try the product

- Install the extension.
- Sign in.
- Finish activation.
- Create or import a wallet.
- Begin chatting and using page-context features immediately.

This lighter sequence lets you confirm the core experience before adding local complexity.

### If you plan to integrate local capabilities quickly

- Finish the extension install, sign-in, and wallet setup.
- Download the Companion installer from the [official Releases page](https://github.com/Trapezohe/companion_service/releases).
- Verify the package against `SHA256SUMS.txt`.
- Install Companion and let the extension automatically detect it.
- Initially connect to the workspace using the default, more conservative boundaries.
- Gradually explore stronger local capabilities thereafter.

This path is better suited when the goal is workspace access, local automation, or a fuller local assistant workflow.

## How to read the onboarding steps

| Step | How to interpret it |
| --- | --- |
| Wallet | A critical foundation; prioritize this step early. |
| Workspace | Only necessary when you intend to use local workspace abilities. |
| Remote control | Configure this only if you require remote access. |
| Models | Refine this when you are preparing for production-level usage. |
| Companion | Install when you are ready to rely on more advanced local capabilities. |

Not every onboarding step carries the same priority.

## Before you continue

### Companion is not mandatory at the start

Ghast AI's core capabilities mostly work without Companion, so you can learn the extension before adding local components.

### Companion is distributed via release packages

When local capabilities are required, download the installer directly from the [official Releases page](https://github.com/Trapezohe/companion_service/releases). The standard path is to use the provided macOS `.pkg` or Windows `.msi` package rather than installing through a terminal.

### Expect system security prompts during installation

The current installers do not include a code-signing certificate, so macOS and Windows may warn that the software is unsigned. Treat these prompts as normal when the following are confirmed:

- The installer comes from the official Releases page.
- The checksum matches `SHA256SUMS.txt`.

Only proceed after confirming both points. The common prompts and recommended actions are:

| Operating system | Prompt | Recommended handling |
| --- | --- | --- |
| macOS | Gatekeeper reports an unidentified developer or blocks the installer | Confirm the source and checksum, open System Settings > Privacy & Security to allow this installation, and retry. |
| Windows | SmartScreen displays "Windows protected your PC" | Confirm the source and checksum, click "More info," and continue only if you trust the publisher. |

If you cannot verify the origin or the checksum, stop the installation.

## Recommended order

1. Complete extension installation, sign-in, and wallet configuration.
2. Experience chat and page-context capabilities on supported sites.
3. After confirming the product fits your needs, add Companion.
4. If Companion is installed, rely on the official installer and automatic detection.
5. Only then configure workspaces, remote control, and deeper local capabilities.

This approach lets you understand the product before expanding into deeper local capabilities.

Ghast AI currently recommends "extension first, Companion later." Ordinary users can begin using the product once installation, sign-in, and wallet setup are complete. Install Companion from the [official Releases page](https://github.com/Trapezohe/companion_service/releases) only when you need workspace or stronger local capabilities, and favor automatic detection.

## Related pages

- [Install the Extension](/en/extension/install-extension)
- [Sign In and Activation](/en/extension/sign-in-and-activation)
- [Wallet Setup](/en/extension/wallet-setup)
- [Install Companion](/en/start-here/install-companion)
