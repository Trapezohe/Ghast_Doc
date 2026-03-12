---
title: Companion Network and Trust Boundary
description: Understand who Companion is exposed to by default, who can connect, and what this boundary does and does not protect.
---

# Companion Network and Trust Boundary

## Overview

Companion is Ghast AI's local capability layer. For most users, the key question is not how it is implemented. The real question is who it is exposed to by default, who can connect to it, and what this boundary can and cannot protect.

## The main takeaway

Companion is not a service that is open outward by default. It is first and foremost a local service meant for use on your own machine, not a shared entry point for the local network or the public internet.

That means:

- It is not a service that becomes directly reachable from the outside just because it is installed.
- The extension still needs local pairing and local verification before it can connect.
- Companion's first boundary is a trusted local-use path on the same machine.

## What this means in practice

From a user perspective, Companion's network and connection boundary can be reduced to three practical statements:

- It is meant for local-machine use by default.
- Not every program can connect to it directly.
- The extension and Companion have a separate local pairing relationship.

In other words, Companion should not be read as "a port on your computer that is openly shared outward by default." It is closer to a local capability layer reserved for trusted use paths on the same machine.

## What this boundary helps solve

This boundary mainly addresses the following:

- Companion does not naturally become a shared service for the local network.
- The extension cannot obtain access just by knowing a local address.
- Local capabilities do not become externally available merely because installation finished.

For ordinary users, the value is direct: Companion is designed as a local-machine capability layer, not as a default network service.

## What this boundary does not solve

This boundary does not replace the machine's own security posture.

You still need to keep these limits in mind:

- If the machine itself is no longer trustworthy, this boundary cannot solve that by itself.
- If you deliberately expose local pairing material, the boundary will not automatically withdraw that risk for you.
- The network boundary prevents default outward exposure, but it does not turn a local machine into a zero-risk environment.

## Recommended use

If your goal is to keep Ghast AI in its default boundary model, the steadier approach is:

1. Install and pair Companion through the standard flow.
2. Do not use it as if it were an outward-facing shared service.
3. Do not casually broaden the usage scope or copy local pairing material.
4. Leave any necessary expansion to permission mode or workspace settings rather than widening the network boundary first.

## How this relates to the rest of Security

Companion's network boundary is only the first layer of the overall security model. The actual size of the local capability surface still depends on additional choices:

- Whether you remain in `workspace` mode
- Whether you widen local execution scope
- Whether you enable remote control paths

This page is therefore best read together with local execution boundaries and permission modes.

Companion should currently be understood as a local capability layer for use on the same machine, not as a network service that is open outward by default. Its first boundary is trusted local use, while larger boundary changes happen later through permission mode and local execution scope.

## Related pages

- [Permission Modes: workspace and full](../companion/permission-modes.md)
- [Local Execution Boundary](local-execution-boundary.md)
- [Security Overview](overview.md)
- [Compared with OpenClaw](openclaw-comparison.md)
