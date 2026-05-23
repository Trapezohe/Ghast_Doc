---
title: Built-in App Playbooks
description: Specific app adapters that turn complex multi-step UI flows into a single tool call.
---

# Built-in App Playbooks

For some common macOS apps, generic "click here, type there" is the slow path. Ghast ships dedicated adapters — *playbooks* — that turn a multi-step UI flow into a single deterministic tool call with parameters.

This page lists what's bundled today. Coverage is intentionally narrow: each playbook is hand-built and tested, not auto-generated.

## Productivity

### Calendar (`com.apple.Calendar`)

- **`create_event`** — Generates an ICS file and dispatches it. Supports `dry_run` for validation. Requires `allow_calendar_write=true` after first user approval.

### Mail (`com.apple.mail`)

- **`compose`** — Open a new compose window pre-filled.
- **`compose_draft`** — Like compose, but via the `mailto:` URL scheme — works even when Mail is not the default handler.
- **`send_dry_run`** — Validate that a compose would succeed without sending.

### Notes (`com.apple.Notes`)

- **`open_note_url`** — Open a specific note via the `notes://` URL scheme.
- **`search_dry_run`** — Validate a search query against the Notes index without surfacing results into the UI.

### Finder (`com.apple.finder`)

- **`reveal`** — File-level adapter: reveal a path in Finder, scrolled into view.
- **`open_folder`** — Open a folder in a new Finder window.

### Safari (`com.apple.Safari`)

- **`open_url`** — Open a URL in Safari. (Generic UI click also works; this is faster and more reliable.)

## Music

Four music apps have dedicated playbooks for play / pause / next / previous via menubar AX (so playback stays correct even when the app is in the background):

- **QQ Music** (`com.tencent.QQMusicMac`) — `play_pause`, `previous_track`, `next_track`, `like_current_track`
- **NetEase Cloud Music** (`com.netease.163music`) — `play_song`, `play_playlist`, `play_daily_recommendation`, `open_route` (URL scheme)
- **Apple Music** (`com.apple.Music`) — `open_url`
- **Spotify** (`com.spotify.client`) — `play_uri`

## Messaging

- **WeChat** (`com.tencent.xinWeChat`) — `launch`
- **Slack** (`com.tinyspeck.slackmacgap`) — `open_channel`

These are intentionally minimal — chat content goes through the dedicated messaging bridges in Ghast, not through Computer Use.

## What playbooks give you

Three things that generic click/type can't match:

| Benefit | Why it matters |
| --- | --- |
| **Deterministic execution** | The adapter knows the exact UI path. Hand-tested. Less likely to drift when the app updates. |
| **Structured parameters** | The agent passes structured arguments (title, attendees, time) instead of typing into fields one at a time. |
| **Dry-run** | Validate without side effects. Catches bad inputs (malformed dates, missing attendees) before they hit the app. |

## What's *not* a playbook

Many apps you'd expect to have one don't — at the moment of writing:

- Messages, Maps, Photos, FaceTime, Reminders — generic click/type only.
- Most third-party apps — generic only.
- Browser content — use the Ghast Browser Relay extension instead.

That's by design. Adding a playbook means committing to maintaining it across app updates; the bundled set is the set we maintain.

## Extending the set

You can author skills that wrap generic Computer Use calls into your own playbook-like abstractions. See [Skills](/en/desktop/skills) for the authoring model. These don't become "playbooks" in the daemon's sense, but they give you the same single-call ergonomics from the agent's perspective.

## Related pages

- [Computer Use Overview](/en/computer-use/overview)
- [Per-App Approval Gate](/en/computer-use/approval-gate)
- [Safety Boundaries](/en/computer-use/safety-boundaries)
- [Skills](/en/desktop/skills)
