---
title: Install and Auto-Pair
description: Packaged Companion installation and pairing flow.
---

# Install and Auto-Pair

This page explains the packaged Companion installation route, the expected auto-pairing behavior, and how to respond when detection or pairing does not finish automatically.

## Overview

This covers the standard Companion installation order, the normal behavior of auto pairing, and how to proceed when the installer or the automatic connection flow stops before completion.

## Installation route

Companion is distributed to end users via the official Releases page. The recommended path is to download the installer directly and run it; there is no need for ordinary users to install via the command line or other manual steps.

- Download page: [Trapezohe Companion Releases](https://github.com/Trapezohe/companion_service/releases)
- macOS installer: `trapezohe-companion-macos.pkg`
- Windows installer: `trapezohe-companion-windows.msi`
- Checksum file: `SHA256SUMS.txt`

This is the preferred installation method for most users.

## Security prompts

Because the current installers do not yet carry a code signing certificate, both macOS and Windows may present warnings during installation. Treat this as expected behavior, but only proceed once you have confirmed the source and checksum.

Follow this verification order:

1. Confirm the installer was downloaded from the official Releases page.
2. Verify the checksum against `SHA256SUMS.txt`.
3. Only after both checks pass, continue through the OS security prompts.

Common warnings and responses:

| Operating system | Common warning | Handling suggestion |
| --- | --- | --- |
| macOS | Gatekeeper blocks opening the package or states the developer cannot be verified | After confirming source and checksum, allow the installation under **System Settings > Privacy & Security**, then reopen the installer |
| Windows | SmartScreen reports "Windows protected your PC" | After confirming source and checksum, choose **More info** and proceed only if you trust the installer |

If you cannot confirm the source, stop the installation.

## What auto-pairing means

After installation, the browser extension will prioritize detecting the locally running Companion. For most users, this means the product tries to connect automatically rather than asking for manual connection details.

The normal sequence is:

1. Install the Companion package for your operating system.
2. Return to the Companion page inside the extension.
3. Wait for the extension to detect the local Companion.

## Recommended order

For first-time users, follow this order:

1. Download the appropriate installer from the official Releases page.
2. Compare the download with `SHA256SUMS.txt` to verify authenticity.
3. Install Companion and address any OS security prompts as described above.
4. Return to the extension, wait for automatic detection, and allow the pairing to complete.
5. Once detection succeeds, begin with the default, more constrained local boundary before expanding access.

## If auto-pairing does not finish

Auto detection failures usually indicate the connection process did not finish; they do not necessarily mean the installer itself is broken. Follow this troubleshooting order:

1. Check the Companion page in the extension to view the current status.
2. Try re-running detection or restarting Companion.
3. If the issue persists, enter the diagnostics, self-check, or manual connection workflow.

When auto pairing does not complete, treat it as a connection issue first, rather than re-evaluating the entire installation.

Companion's standard user install path is to download the installer from the official Releases page; the extension attempts to detect the local Companion automatically. Because the installers currently lack code signing, OS security warnings are expected. Only proceed with the installer after confirming the source and checksum.

## Related pages

- [Install Companion](../start-here/install-companion.md)
- [Connect a Workspace](connect-a-workspace.md)
- [Companion Connection Issues](../troubleshooting/companion-connection.md)
