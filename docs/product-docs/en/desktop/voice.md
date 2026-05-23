---
title: Voice (STT & TTS)
description: Local Whisper transcription and local TTS (Kokoro and Qwen) — what they do, where they're enabled, and where they show up.
---

# Voice (STT & TTS)

Ghast does voice both ways — listening (Whisper STT) and talking (Kokoro or Qwen TTS) — and runs both **locally** on your machine. No audio leaves the device for transcription or synthesis.

## Speech-to-Text (Whisper)

Whisper is the local transcription engine. It runs in-process (via `@fugood/whisper.node`) on either CPU or Metal (Apple Silicon), at 16 kHz with automatic resampling.

### Where you'll use it

- **Composer microphone** — press the mic in the composer to dictate; transcription streams into the input.
- **Inbound voice messages** — Telegram / Discord / WeChat voice clips are transcribed before the agent sees them.
- **Voice skill** — explicit recording / transcription invoked from chat.

### Settings

Settings → **Whisper**:

- **Backend** — CPU or Metal (Apple Silicon only).
- **Model variant** — choose between size/quality tradeoffs.
- **Language** — auto-detect or pin a specific language (Whisper supports many; common ones in the picker).

The first time you use voice input, Ghast requests microphone permission and (on demand) downloads the chosen model.

## Text-to-Speech (TTS)

Two local engines, picked by you in Settings → **TTS**.

| Engine | Strengths | Availability |
| --- | --- | --- |
| **Kokoro** | 82M model, runs anywhere, supports multiple languages | All Macs |
| **Qwen TTS (MLX)** | Higher quality, especially for Mandarin | Apple Silicon only |

### Where you'll hear it

- **Voice replies in remote channels** — when the user's message was voice, the agent's reply can be synthesised back to voice.
- **Voice skill** — explicit playback in chat.
- **Optional read-aloud** — for hands-free workflows.

### Voice selection

Each engine ships several voices. The picker in Settings → TTS shows what's available; selection is per-engine. Voice changes apply immediately to the next utterance.

## Bandwidth and footprint

- Whisper model files are ~50–500 MB depending on variant; downloaded once.
- TTS model files are similar in scale.
- Inference happens on-device. No per-second cost; no network round-trip.

## Privacy

- Audio captured from the microphone is transcribed in-process and **discarded**. There is no audio log.
- Inbound voice clips from messaging bridges are transcribed and stored only as text in conversation history (unless the original message URL is also retained by the bridge).
- TTS output is rendered in-memory and either played directly or sent to the remote channel; no audio file is persisted unless you ask for one.

## Failure modes

| Symptom | Likely cause | Action |
| --- | --- | --- |
| Mic input fails | Permission not granted | System Settings → Privacy & Security → Microphone |
| Transcription quality is poor | Wrong language pinned, low-quality model variant | Settings → Whisper → switch to a larger variant or auto-detect language |
| TTS voice sounds wrong on Intel | Qwen is selected but not available | Settings → TTS → switch to Kokoro |
| Voice in Telegram is missing | The Telegram bridge isn't configured for voice IO | Settings → Channels → Telegram, enable voice |

## Related pages

- [Chat & Composer](/en/desktop/chat-and-composer)
- [Remote Channels: Overview](/en/remote-channels/overview)
- [Settings Overview](/en/desktop/settings-overview)
- [Troubleshooting: Voice Issues](/en/troubleshooting/voice)
