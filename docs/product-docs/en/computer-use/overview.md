---
title: Computer Use Overview
description: What Computer Use does, how it's architected, and what it costs you to enable.
---

# Computer Use Overview

Computer Use is what turns Ghast from "an assistant that talks about your Mac" into "an assistant that uses your Mac." It lets the agent click buttons, type into windows, take screenshots, and drive macOS applications — including ones that have no API.

## What the agent can do

Through Computer Use, the agent gets access to:

- **11 core primitives** — skyshot (AX tree + screenshot), click (incl. double/triple), type, press_key (chords), scroll, drag, set_value, select_text, read, permissions, session lifecycle.
- **30+ advanced tools** — context menus, status bar, menu bar, app launching, window management, clipboard read/write, file reveal/open_with, URL opening, wait-for-element/text/window, JS injection inside Chrome/Safari/Brave/Edge, AX probing, and harness traces.
- **App-specific playbooks** — dedicated adapters for Calendar, Mail, Notes, Finder, Safari, plus QQ Music, NetEase Music, Apple Music, Spotify, WeChat, and Slack.

## Why a separate daemon

Computer Use is implemented as a separate Swift helper application (`Ghast Computer Use.app`) bundled inside the main app's resources, not as code inside the Electron main process.

Reasons:

- **Permission separation.** The Swift daemon is the only process that needs Accessibility permission. The main Electron app does not.
- **Stability.** A crash inside Accessibility APIs (which happens) doesn't take down your chat.
- **Performance.** AX tree walks and CoreGraphics event posting are faster from a native binary than from Node.

The daemon listens on a local Unix socket at `~/Library/Application Support/Ghast/computer-use.sock`. The Electron client opens it on demand and talks NDJSON RPC over it. Other agents (Claude Desktop, Codex, scripts) can talk to the same daemon via the MCP wrapper at `bin/ghast-computer-use-mcp.mjs`.

## How a turn flows

1. Agent decides it needs to act on a Mac app.
2. Composer surfaces a Computer Use card showing the planned action (e.g. "click Send in Mail").
3. If this is the first modifying action against that app in this profile, the **approval gate** appears — you choose Allow Once / Allow Always / Deny.
4. If approved, the request goes to the Swift daemon, which:
   - Verifies the action isn't on the hard blocklist.
   - Looks up the target element (AX query or coordinate snapshot pin).
   - Executes the click / type / drag via AX or CoreGraphics.
   - Returns the result (success + post-action AX state, or a typed error).
5. The agent reads the result and continues its turn.

## What it costs you

| Cost | What it is |
| --- | --- |
| **macOS permissions** | Accessibility (mandatory), Screen Recording (for full-fidelity screenshots), Microphone (only if you also use voice) |
| **Per-app approval** | One modal per app per profile, for the first modifying action. Allow Always caches forever. |
| **Performance** | A small CPU hit while the daemon walks the AX tree of the active app. Negligible at human cadence. |
| **Trust** | The daemon can drive any app where macOS allows AX automation. Take a moment to confirm permissions before granting Always. |

## What it does *not* do

To be explicit:

- **Not a remote-control protocol.** Computer Use is for the agent driving your Mac, not for someone else to drive it.
- **Not a recorder.** It does not stream what you're doing. It executes the agent's instructions in response to your prompts.
- **Not a keyboard hijack.** Event injection uses AX primitives and per-PID CGEvent delivery, not raw HID. Your real mouse and keyboard remain yours.
- **Not unbounded.** A hard blocklist (`CUPolicy`) in the daemon refuses actions against password managers, sensitive system tools, and a few other categories regardless of UI approval.

## When to enable it

Computer Use is **off** until you grant Accessibility. Reasonable triggers to enable:

- You want the agent to actually finish tasks ("draft this email", "add this to my calendar", "play this song").
- You want UI automation tied to specific app playbooks (e.g. Calendar event creation as a single tool call).

If your usage is purely text — generating documents, summarising research, chatting with team members through bridges — you do not need Computer Use.

## Related pages

- [macOS Permissions](/en/computer-use/macos-permissions)
- [Per-App Approval Gate](/en/computer-use/approval-gate)
- [Built-in App Playbooks](/en/computer-use/built-in-playbooks)
- [Safety Boundaries](/en/computer-use/safety-boundaries)
- [Security: Computer Use Boundary](/en/security/computer-use-boundary)
