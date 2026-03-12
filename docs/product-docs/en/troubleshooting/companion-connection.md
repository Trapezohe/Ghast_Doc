---
title: Companion Connection Issues
description: Troubleshooting guidance for Companion installation, detection, and pairing.
---

# Companion Connection Issues

This page handles the most common problems that occur during Companion installation, detection, and connection. When something goes wrong, first determine whether the OS blocked the installer or whether the issue appears after installation.

## Overview

This page splits failures into two categories: the installer is blocked by the operating system, or the extension cannot detect Companion after installation.

## Identify the symptom

| Observed behavior | Initial focus |
| --- | --- |
| The installer cannot open, or the system blocks it outright | Treat as an installation release/OS security issue |
| Installation finished but the extension still does not show Companion | Treat as a detection or connection issue |
| Auto pairing fails | Treat it as a connection issue first; do not reinstall immediately |
| Companion disconnects after a successful connection | Confirm Companion is still running on the machine |

## If the installer is blocked

Companion installers are distributed through the official Releases page, but they do not yet carry a code signing certificate. As a result, macOS and Windows may show security warnings.

Confirm both of the following before proceeding:

- The installer was downloaded from the [official Releases page](https://github.com/Trapezohe/companion_service/releases)
- The checksum matches `SHA256SUMS.txt`

Only after both checks pass should you allow the OS security prompt to continue.

| Operating system | Typical warning | Handling steps |
| --- | --- | --- |
| macOS | Gatekeeper states the developer cannot be identified or blocks the package | Go to **System Settings > Privacy & Security**, allow the installation, then reopen the package |
| Windows | SmartScreen reports "Windows protected your PC" | Choose **More info** and proceed only if the source is trusted |

Do not continue installation if you cannot verify the source or checksum.

## If installation finished but Companion is missing

If the installer has finished but the extension still does not list Companion, follow this order:

1. Return to the Companion page inside the extension and inspect the current status.
2. Try rerunning detection or restarting Companion.
3. Check whether the browser detects Companion after the restart.
4. If these steps fail, enter diagnostics, self-check, or the manual connection workflow.

The main idea is that, after installation completes, treat the problem as a connection issue instead of reinstalling.

## What auto-pairing failure means

Auto pairing failures normally indicate the extension did not finish connecting to the local Companion, not that the installer itself is defective. Approach it this way:

1. Confirm the installation is complete.
2. Ensure the OS no longer blocks Companion from launching or being detected.
3. Then proceed with diagnostics, auto detection retries, or manual connection.

Do not conflate "auto pairing failed" with "installation failed."

## If it still fails

If you have verified the installer source, handled OS warnings, and the extension still cannot detect Companion, move on to deeper checks:

- Review [Install and Auto-Pair](../companion/install-and-auto-pair.md) to reconfirm the standard connection order.
- Use the Companion diagnostics or self-check flow to validate the local status.
- If you are already in advanced troubleshooting, use command-line utilities such as `trapezohe-companion status` or `trapezohe-companion self-check`.

Companion issues should first be separated into "installer security/release issues" and "post-install connection issues." If the OS blocks the installer, verify the source and checksum before allowing the installation. If the installation already finished but the extension still cannot detect Companion, treat it as a connection issue rather than reinstalling.

## Related pages

- [Install Companion](../start-here/install-companion.md)
- [Install and Auto-Pair](../companion/install-and-auto-pair.md)
