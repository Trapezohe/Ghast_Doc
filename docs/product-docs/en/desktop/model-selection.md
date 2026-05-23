---
title: Model Selection
description: How the model picker works, what capability badges mean, and how to enable additional providers.
---

# Model Selection

The model picker sits in the composer in the main window. It lists every model Ghast can route to right now, grouped by provider, with capability badges that tell you what each model can do.

## What appears in the picker

| Group | Source | When it shows |
| --- | --- | --- |
| **0G Router** | A managed routing endpoint operated by 0G | After you paste an API key from the [0G Compute Console](https://pc.0g.ai/) into Settings → Providers → Router |
| **0G Advanced** | Each provider you've enabled in Settings → Providers → Advanced | After you've enabled and funded a provider from your local wallet |
| **Plugin providers** | Providers registered by installed plugins | After a plugin registers them |

Every provider you've configured shows its model(s); selecting one binds the current turn (and subsequent turns until you switch) to that model.

## Capability badges

Models display badges that summarise what they can do. These badges come from:

- The model's declared `supportedParameters` (e.g. `stream`, `tools`, `response_format`).
- The model's declared `architecture.input_modalities` / `architecture.output_modalities`.
- Pattern matching on the model name / description for things like extended reasoning.

Common badges:

| Badge | Meaning |
| --- | --- |
| **Streaming** | Responses arrive token-by-token. Almost always on. |
| **Tools** | The model supports function calling. Required for skills, MCP tools, and Computer Use. |
| **Vision** | The model accepts image input. You can attach images directly. |
| **JSON** | The model supports a structured JSON output mode. |
| **Reasoning** | The model has an extended-reasoning mode you can dial in. |
| **TEE** | The provider runs inside a TEE (typically true for all Advanced providers). |

If a badge you need is missing, the composer will not silently disable the feature — it will refuse to attach an image to a non-vision model, for instance.

## Picking the right model

There is no universally right answer; below is a sensible default behaviour:

| You want to… | Pick |
| --- | --- |
| One key, many models, simplest billing | A Router model (pays from your 0G Compute Console balance) |
| A specific reasoning capability that a particular provider exposes | An Advanced provider whose model has the **Reasoning** badge |
| Attach screenshots or images | Any model with the **Vision** badge |
| Compare providers | Use both — Router for breadth, Advanced for specific providers |
| Use a model whose pricing or TEE attestation you want to verify on-chain | An Advanced provider; review its on-chain registry entry |

## Switching mid-conversation

Use the picker anytime. The new model receives the conversation context up to that point (subject to its own context window). Skills, tools, and memory continue to work — switching is a model swap, not a session reset.

If the new model has a smaller context window than what you've accumulated, Ghast will compact older turns before sending.

## Reasoning effort

Models that support extended reasoning expose a knob in the composer (typically Low / Medium / High). Higher effort = more reasoning tokens spent = slower but generally better responses. The effort setting is a per-turn override; the default lives in Settings → Models.

## Plugin providers

Installed plugins can register their own providers (e.g. a local Ollama bridge, a custom OpenAI-compatible endpoint). They show up in the model picker as a separate group with the plugin's icon. They're not gated by your 0G wallet — they have their own auth model defined by the plugin.

## What you don't see

- Live latency. Latency probes were not in production at the time of this manual; observe directly by sending messages.
- Per-turn cost in OG. The picker does not display a running cost estimate. Settings → Wallet shows balance and recent usage.

## Related pages

- [Inference Modes](/en/web3/inference-modes)
- [Chat & Composer](/en/desktop/chat-and-composer)
- [Reference: Supported Models](/en/reference/supported-models)
