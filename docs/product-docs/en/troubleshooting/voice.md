---
title: Voice Issues
description: Diagnosing Whisper STT and Kokoro / Qwen TTS issues.
---

# Voice Issues

By symptom.

## Microphone button doesn't start recording

| Likely cause | Action |
| --- | --- |
| Microphone permission not granted | System Settings → Privacy & Security → Microphone → enable Ghast |
| Another app holds the microphone exclusively | Quit the other app, retry |
| Wrong input device | macOS audio input switched to a disconnected device — System Settings → Sound → Input |

## Transcription is empty or wrong

| Likely cause | Action |
| --- | --- |
| Model not yet downloaded | Settings → Whisper → pick a variant and wait for download |
| Wrong language pinned | Settings → Whisper → Language → auto-detect |
| Background noise too high | Use a headset, or move to a quieter room |
| Variant too small for the language | Try a larger Whisper variant |

## Transcription is very slow

| Likely cause | Action |
| --- | --- |
| CPU backend on a fast model | Settings → Whisper → switch backend to Metal (Apple Silicon) |
| Disk contention | Other heavy processes; check Activity Monitor |
| Variant much larger than needed | Try a smaller variant |

## TTS plays no audio

| Likely cause | Action |
| --- | --- |
| Audio output device disconnected | macOS Sound → Output |
| Engine selected but model not downloaded | Settings → TTS → wait for download |
| Qwen selected on Intel Mac | Qwen is Apple Silicon only; switch to Kokoro |
| Volume muted | Check macOS volume and the per-app volume |

## TTS voice sounds off / robotic

| Likely cause | Action |
| --- | --- |
| Voice misconfigured | Settings → TTS → try another voice in the same engine |
| Engine not the right fit for the language | Mandarin: use Qwen (Apple Silicon) for quality; Kokoro works across languages but may be less natural |

## Voice messages from Telegram / Discord aren't transcribed

| Likely cause | Action |
| --- | --- |
| Whisper model not downloaded | Settings → Whisper → pick a variant |
| Bridge didn't pull the audio | Check the bridge log; some platforms return audio asynchronously |
| Audio format not supported | Edge case; if Telegram OGG/OPUS fails to transcode, that's a bug — report it |

## Audio cuts off mid-sentence

| Likely cause | Action |
| --- | --- |
| Composer cancelled the recording (you typed something) | Press the mic again; don't type while dictating |
| Whisper streaming chunk timeout | Restart the app; this should not be a regular failure |

## Related pages

- [Voice (STT & TTS)](/en/desktop/voice)
- [Settings Reference](/en/reference/settings-reference)
