---
title: Activity Recorder
description: A local screen-text recorder. It samples the frontmost app, extracts text from screenshots with on-device OCR, throws the images away, and indexes the text so the agent can recall what you were working on.
---

# Activity Recorder

The Activity Recorder is what makes Ghast remember *what you were doing*, not just *what you typed in chat*. It is a background **local recorder** that samples your screen, extracts text on-device with macOS Vision OCR, throws the screenshots away, and keeps the redacted text and a few summaries in an indexed store the agent can search.

Two things define its design:

- **Local.** Capture, OCR, indexing, summaries all happen on this device. Nothing leaves unless you opt into 0G Storage sync for the activity category.
- **Text-only by default.** Screenshots are used as OCR input and discarded after analysis. Visual history (keeping the screenshot files) is **off by default** and only useful if you specifically want a visual archive.

The Settings page calls it *Activity Recorder*. The subtitle reads: *Locally extracts screen text and builds activity memory. Screen images are discarded by default; data stays on this device.*

## What gets captured

When the recorder is on, it samples:

- **Front app** — the frontmost macOS application and its bundle id.
- **Frontmost window title** — usually the document, URL, or panel name.
- **Browser tabs** — visited URLs and titles from supported browsers.
- **Screenshot → OCR text** — a screenshot is taken at each sampling tick, OCR'd, and then discarded (unless you turned on visual history).
- **Activity segments** — contiguous "what you were doing" segments, opened and closed using an idle threshold. A segment groups events that belong to the same focused stretch of work.

What it does **not** capture:

- Keystrokes or typed content
- Clipboard contents
- Mouse movement
- Audio
- Continuous screen video

## Activity segments

A *segment* is the recorder's unit of memory. It opens when you start doing something, accumulates events (focus changes, OCR text, browser tabs) while you keep working, and closes when:

- You idle past the **idle threshold**, or
- You lock the screen, or
- A muted (blacklisted) app comes to the front, or
- The recorder is disabled.

When the agent recalls "what was I working on at 3pm yesterday?", it's pulling a segment.

## Status states

The status panel shows one of:

| State | Pill | Meaning |
| --- | --- | --- |
| **Off** | `disabled` | Recorder switched off. Nothing being sampled. |
| **Idle** | `idle` | Switched on but not currently extracting. Ready to record. |
| **Indexing** | `indexing` | Recording — sampling, OCR-ing, indexing. |
| **Screen locked** | `screen locked` | Auto-paused while the screen is locked. |

Alongside the state pill the panel shows four metrics: **Front app**, **Text index** (size), **Segments**, **Visual history**.

## OCR (text extraction)

OCR is the core of the recorder. Each capture goes through macOS Vision OCR locally; nothing is sent to a cloud OCR service.

Configurable knobs:

- **Extract text from screen captures** — master toggle for OCR. macOS only.
- **OCR languages** — Vision language codes, comma-separated (e.g. `en-US,zh-Hans`).
- **OCR every Nth capture** — skip OCR on intermediate frames to reduce database load (`1` = every capture, `5` = one in five).

Text is **redacted** before being used for search and memory (sensitive patterns stripped at the recorder's text-handling layer).

## Sampling controls

How aggressively the recorder samples is configurable under *Sampling*:

| Knob | What it does |
| --- | --- |
| **Heartbeat interval (ms)** | Force a capture this often even when nothing changes. |
| **Idle threshold (ms)** | Close an open segment after this much continuous idle time. |
| **Minimum capture gap (ms)** | Floor on how rapidly captures can happen — debounces busy moments. |
| **Visual-change poll (ms)** | Detect animations / video on this interval. `0` disables. |
| **JPEG quality** | `1-100`; controls the quality of the temporary capture buffer (lower = smaller files). |

Most of these update live while the recorder is running; segment / idle timer changes apply on the next segment.

## Privacy: storage policy and app blacklist

Two things keep the privacy surface small.

### Storage policy

By default, screenshot files are **not retained**. The flow is: take screenshot → OCR → discard image → keep redacted text + summaries + indexes.

You can opt into keeping the screenshots:

- **Keep visual history** — off by default. Turn on only if you want Ghast to keep screenshot files after OCR.
- **Max visual storage** — cap on retained screenshot bytes. Oldest screenshot files are auto-deleted past this cap.

The text index, segment summaries, and embeddings are kept regardless.

### App blacklist

Some apps you do **not** want recorded. The blacklist lets you list bundles (password managers, banking apps, anything sensitive) — when one of them is frontmost, the recorder auto-pauses **and drops the in-flight capture buffer**.

You can add apps two ways:

- **Add from Applications…** — picker that reads the app's `Info.plist` for the right bundle id.
- **Advanced: paste bundle id** — when you want to type one directly.

The recorder treats the blacklist as defence-in-depth: bundles on the list never enter the database in the first place, even if the screen was technically captured.

## macOS permissions

The Activity panel surfaces permission state with a **Ready** / **Needs access** indicator next to **Screen Recording**. Without screen recording permission the OCR pipeline has nothing to read.

Permissions are granted in System Settings → Privacy & Security → Screen & System Audio Recording. The panel deep-links to the right place.

## Recent segments and danger zone

- **Recent segments** — a list view of the most recent segments with duration, event count, and a preview. Click into one to see its OCR text and summary.
- **Danger zone → Delete everything** — removes all segments, events, OCR text, summaries, embeddings, and any optional visual history files. The recorder configuration itself stays in place. Cannot be undone.

## Three downstream uses

Once a segment is closed and summarised, it feeds:

1. **Daily summaries** — *"Today you mostly worked on the Ghast Desktop repo, read three papers on TEEs, and had a long chat with the team in Discord."*
2. **Open-loop reminders** — *"You left a draft email open in Mail this morning — still want to send it?"* Anchored to real activity, not generic nags.
3. **Memory-recall context** — when you ask *"what was that repo I looked at yesterday?"*, the recorder's index has the answer.

Activity-derived records are tagged with `source: activity` in the memory store so you can filter or exclude them in Settings → Memory.

## What the agent sees

The agent does not get a raw stream of your activity. It sees:

- The daily summary when relevant.
- The matched record when a memory-recall query lands on an activity-tagged record.
- A specific segment's OCR text when you ask, *"what was I looking at at 3pm?"*

It cannot browse your activity freely without an explicit prompt that asks it to.

## Disabling and clearing

| You want… | Do this |
| --- | --- |
| Stop new captures | Toggle the master switch off. Existing data is preserved. |
| Stop new captures from a sensitive app | Add it to the privacy blacklist. |
| Delete some segments | Use the per-segment delete in *Recent segments*. |
| Delete everything | *Danger zone → Delete everything*. |

## Related pages

- [Memory](/en/desktop/memory)
- [Settings Overview](/en/desktop/settings-overview)
- [Security: Local Data Storage](/en/security/local-data-storage)
- [Partner Mode: Initiative & Open Loops](/en/partner-mode/initiative)
