---
title: 模型选择
description: 模型选择器如何工作、能力徽章意味着什么、如何启用更多供应商。
---

# 模型选择

模型选择器位于主窗口 Composer 中。它列出当前 Ghast 能路由到的所有模型，按供应商分组，带能力徽章说明每个模型能做什么。

## Picker 里出现什么

| 分组 | 来源 | 何时出现 |
| --- | --- | --- |
| **0G Router** | 0G 运营的托管路由端点 | 在 Settings → Providers → Router 粘贴 [0G Compute Console](https://pc.0g.ai/) 的 API key 之后出现 |
| **0G Advanced** | 你在 Settings → Providers → Advanced 启用过的每个供应商 | 用本地钱包启用并充值后出现 |
| **插件供应商** | 已安装插件注册的供应商 | 插件注册后出现 |

每个已配置的供应商展示其模型；选中一个会把当前轮次（及之后的轮次直到你再切换）绑定到该模型。

## 能力徽章

模型上的徽章概括它的能力。徽章来源：

- 模型声明的 `supportedParameters`（如 `stream`、`tools`、`response_format`）。
- 模型声明的 `architecture.input_modalities` / `architecture.output_modalities`。
- 模型名 / 描述中的模式匹配（识别延长推理等）。

常见徽章：

| 徽章 | 含义 |
| --- | --- |
| **Streaming** | 响应按 token 流式返回。几乎总是开。 |
| **Tools** | 支持函数调用。技能、MCP 工具、Computer Use 都需要。 |
| **Vision** | 支持图像输入。可以直接附图。 |
| **JSON** | 支持结构化 JSON 输出模式。 |
| **Reasoning** | 有延长推理模式，可调节强度。 |
| **TEE** | 供应商在 TEE 中运行（通常 Advanced 供应商都是）。 |

如果需要的能力徽章缺失，Composer 不会悄悄禁用功能——比如它会拒绝把图像附到不支持 vision 的模型上。

## 怎么挑模型

没有放之四海皆准的答案；下面是合理的默认行为：

| 想… | 选 |
| --- | --- |
| 一把 key、多种模型、最简单的计费 | Router 模型（从你的 0G Compute Console 余额扣费） |
| 特定供应商专有的推理能力 | 带 **Reasoning** 徽章的 Advanced 模型 |
| 附截图或图像 | 任何带 **Vision** 徽章的模型 |
| 对比供应商 | 两个都用——Router 求广度，Advanced 求特定供应商 |
| 想在链上核对定价或 TEE 确认的模型 | Advanced 供应商；查它的链上注册条目 |

## 对话中途切换

随时可在 picker 中切换。新模型会收到截至切换点的对话上下文（受其自身上下文窗口限制）。技能、工具、记忆都继续工作——切换只是换模型，不是重置会话。

如果新模型的上下文窗口比你已累积的小，Ghast 会先压缩较早的轮次再发。

## Reasoning effort

支持延长推理的模型在 Composer 里暴露一个旋钮（通常 Low / Medium / High）。effort 越高，推理 token 消耗越多，回复越慢但通常更好。effort 是按轮次的覆盖；默认值在 Settings → Models 里设置。

## 插件供应商

已安装的插件可以注册自己的供应商（如本地 Ollama 桥接、自定义 OpenAI 兼容端点）。它们在 picker 中以单独分组出现，带插件图标。它们不受你的 0G 钱包门禁——插件定义自己的 auth 模型。

## 看不到什么

- 实时延迟。本手册编写时延迟探测尚未上线；直接发消息观察。
- 按轮次的 OG 成本。Picker 不显示实时成本估计。Settings → Wallet 里能看余额和近期用量。

## 相关页面

- [推理模式：Router 与 Advanced](/cn/web3/inference-modes)
- [对话与输入框](/cn/desktop/chat-and-composer)
- [参考：支持的模型](/cn/reference/supported-models)
