---
title: Web Capture and Redaction
description: Understand when Ghast AI reads current page information, what it brings in, and what gets filtered first.
---

# Web Capture and Redaction

## Overview

This page explains when Ghast AI reads information from the current page, what scope it typically reads, and what is processed before that information is brought into the system.

For most users, the main conclusion is straightforward: Ghast AI does not capture every webpage by default, and it does not bring all page content into chat unchanged.

## When the current page is read

Page-related capabilities only work on supported sites. The current scope mainly covers Web3 sites and a small set of related social contexts.

That means:

- Not every website automatically becomes a context source.
- Page-understanding capability follows a defined scope.
- If the current page is outside the supported range, Ghast AI will not read it in the same way.

## What is usually brought in

When a page falls within the supported range, Ghast AI mainly uses information such as:

- The current page URL
- The page title
- The page type
- Structured key information associated with the current page

The practical interpretation is that Ghast AI reads the information it needs to understand the page, not the entire webpage as an unrestricted input source.

## What gets processed first

Before the page URL enters the system, Ghast AI first processes certain common sensitive parameters, including login tokens, access tokens, session identifiers, password-style parameters, and private-key-style parameters.

The point of that processing is:

- To avoid passing through obviously sensitive link data unchanged
- To make page context focus more on understanding the page than on preserving raw sensitive URL fields

## What this boundary means for users

This boundary provides three practical benefits:

- The page-capture scope is limited rather than fully open across the web
- Some highly sensitive URL parameters are filtered first
- Page-related capability is easier to understand and predict

## What this boundary does not do for you

You still need to keep several limits in mind:

- It does not mean every sensitive detail on the page is automatically removed.
- It does not mean every site receives the same page-understanding treatment.
- It does not mean you can ignore the sensitivity of the page you are viewing.

In other words, this boundary provides default containment. It does not replace user judgment.

## Recommended use

If you want to preserve the default boundary, the steadier approach is:

1. Rely on page context only when you actually need it.
2. Keep basic judgment about information that is already sensitive on the page itself.
3. Do not interpret redaction as a guarantee that everything visible on the page is now risk-free.

Ghast AI currently reads page context only on supported sites and processes some common sensitive URL parameters before use. Page-related capability should therefore be understood as a limited-scope, contain-first design rather than a default full-web capture model.

## Related pages

- [Chrome Permissions and Host Permissions](chrome-permissions.md)
- [Security Overview](overview.md)
- [Compared with OpenClaw](openclaw-comparison.md)
