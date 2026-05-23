---
title: Profiles & Workspaces
description: How profiles isolate data, when to create multiple, and what workspaces do inside a profile.
---

# Profiles & Workspaces

Ghast separates "who you are" from "what you're working on" with two concepts: **profiles** and **workspaces**.

## Profile = wallet + identity

A profile is the top-level container. Each profile owns:

- A wallet (one address per profile)
- A Profile Vault (its own encryption key, issued at sign-in)
- A SQLite database (conversations, memories, settings)
- Bridge credentials (per platform tokens)
- An MCP configuration
- A 0G Storage sync configuration (which categories sync, on what schedule)

Two profiles are fully isolated. They cannot read each other's data, share a wallet, or share memories.

### When to use multiple profiles

| Reason | Recommendation |
| --- | --- |
| Strong work / personal split | Two profiles. Different wallets if you want different funding sources. |
| Multiple wallets you want to use independently | One profile per wallet. |
| Testing a different configuration | A separate profile keeps the experiment isolated. |
| Different language preferences for different contexts | Profiles store the UI language; you can use this to switch contexts. |

### When *not* to use multiple profiles

- Just because you have multiple projects. Workspaces (below) handle that.
- To "share" a wallet across machines — use 0G Storage sync instead.

### Managing profiles

Settings → Account shows the current profile. **Add Profile** triggers a new onboarding flow. **Switch** changes the active profile, which:

- Wipes the previous Vault Key from memory.
- Asks the backend for a new Vault Key for the new profile.
- Reloads the SQLite database, settings, and UI state from the new profile's directory.

The previous profile is not signed out; just suspended. You can switch back without re-onboarding.

## Workspace = a project inside a profile

A workspace is a *project-scoped* context inside a profile. Workspaces share:

- The same wallet
- The same memory store (but tagged per workspace where applicable)
- The same bridge credentials
- The same settings

They differ in:

- The set of conversations and todos shown
- The currently-mapped messaging channels
- Optional per-workspace prompts and skill defaults

A typical use:

- Profile = "Songsu"
- Workspaces: "Ghast Desktop", "Side Project", "Personal Notes"

You see the workspace switcher in the main window's sidebar. Each workspace presents its own conversation list; the global memory store and bridge channels are filtered to the active workspace where it makes sense.

### What workspaces are *not*

- They are not separate accounts. The wallet, vault, and backend session are shared.
- They are not separate skill installs. Skills are installed at the profile level.
- They are not sandboxed at the OS level. Computer Use approvals and MCP servers are profile-wide.

## File layout

```
~/Library/Application Support/Ghast/
├── profiles/
│   ├── <profileId-1>/
│   │   ├── ghast.db           ← SQLite (per-workspace data is rows in shared tables)
│   │   ├── wallet.json        ← Encrypted wallet
│   │   ├── live-browser.json  ← Chrome extension token
│   │   └── …
│   └── <profileId-2>/
│       └── …
└── computer-use.sock          ← shared Unix socket for the daemon
```

The Computer Use daemon's socket is shared at the user level, but the daemon enforces approval state per profile.

## Related pages

- [Sign In & Activation](/en/desktop/sign-in-and-activation)
- [Memory](/en/desktop/memory)
- [Settings Overview](/en/desktop/settings-overview)
- [Security: Local Data Storage](/en/security/local-data-storage)
