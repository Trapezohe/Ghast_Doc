---
title: Supported Models
description: How Ghast discovers models, what badges mean, and how to read provider capability declarations.
---

# Supported Models

Ghast doesn't ship with a fixed model list. Models come from the providers you enable — and what's available depends on what each provider declares.

## Where the list comes from

| Source | What it adds |
| --- | --- |
| **0G Router** | A curated set of models served by the Router endpoint. Updated periodically by the Router operator. |
| **0G Advanced (on-chain registry)** | Models declared by each enabled Advanced provider in their on-chain service entry. |
| **Plugins** | Models registered by installed plugins (e.g. a local Ollama plugin, a custom OpenAI-compatible plugin). |

The desktop client refreshes the lists periodically and on demand (when you open the model picker). For 0G Advanced, the list is read directly from the chain.

## Capability declaration

Each model exposes capability data that Ghast turns into picker badges:

| Field | Where it lives | Badge implications |
| --- | --- | --- |
| `supportedParameters: ["stream"]` | Provider response | Streaming badge |
| `supportedParameters: ["tools"]` or `["tool_choice"]` | Provider response | Tools badge — required for skills, MCP, Computer Use |
| `architecture.input_modalities.includes("image")` | On-chain (Advanced) or response | Vision badge |
| `architecture.output_modalities.includes("image")` | On-chain (Advanced) or response | Image-output badge |
| `supportedParameters: ["response_format"]` | Provider response | JSON badge |
| Name / description matching reasoning patterns | Either | Reasoning badge |
| Advanced provider (any) | On-chain | TEE badge |

If a model lacks a capability you need, the composer refuses to attach the corresponding input. For example, attaching an image to a non-vision model is blocked at the composer level, not silently dropped.

## Why no fixed list

There are a few reasons Ghast doesn't pin a static model list in the documentation:

- **Routers update.** What `0G Router` serves today may not be what it serves in three months. The picker is the source of truth.
- **Advanced providers are on-chain.** The set is governed by the chain registry, not the client.
- **Plugins are user-installed.** Ghast doesn't know what you'll add.

So this page describes *how* to read the picker, not *what's in it*. For the live list, open the model picker.

## Pricing per Advanced provider

Each Advanced provider declares pricing on-chain:

- Output token price
- (Sometimes) input token price
- Floor amount per transfer

Funding flows respect both the per-model floor and the global `MIN_TRANSFER_AMOUNT()`. See [Inference Modes](/en/web3/inference-modes) for the funding logic.

The picker doesn't show pricing inline; for cost comparison you can check Settings → Providers → 0G Advanced → [provider] → Pricing.

## Models the agent can use vs. the ones you can use

A few capabilities are gated:

| Feature | Required model capability |
| --- | --- |
| Skills, tools, MCP | Tools badge |
| Computer Use | Tools badge |
| Image attachments | Vision badge |
| Mermaid / diagram rendering | (Client-side, not model) |
| Structured generation | JSON badge |
| Extended thinking | Reasoning badge |

If you pick a model without one of these, the agent loses the capability for that turn. The composer disables the corresponding controls.

## Related pages

- [Inference Modes](/en/web3/inference-modes)
- [Model Selection](/en/desktop/model-selection)
- [Chat & Composer](/en/desktop/chat-and-composer)
