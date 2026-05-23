---
title: 支持的模型
description: Ghast 如何发现模型、徽章含义、怎么读供应商能力声明。
---

# 支持的模型

Ghast 不带固定模型列表。模型来自你启用的供应商——可用范围取决于每个供应商声明了什么。

## 列表从哪里来

| 来源 | 增加什么 |
| --- | --- |
| **0G Router** | Router 端点服务的精选模型集。Router 运营方周期性更新。 |
| **0G Advanced（链上注册表）** | 每个已启用 Advanced 供应商在其链上服务条目中声明的模型。 |
| **插件** | 已安装插件注册的模型（如本地 Ollama 插件、自定义 OpenAI 兼容插件）。 |

桌面客户端周期性刷新列表，并在你打开模型选择器时按需刷新。0G Advanced 直接从链上读。

## 能力声明

每个模型暴露的能力数据被 Ghast 转为 picker 徽章：

| 字段 | 在哪 | 徽章含义 |
| --- | --- | --- |
| `supportedParameters: ["stream"]` | 供应商响应 | Streaming 徽章 |
| `supportedParameters: ["tools"]` 或 `["tool_choice"]` | 供应商响应 | Tools 徽章——技能、MCP、Computer Use 需要 |
| `architecture.input_modalities.includes("image")` | 链上（Advanced）或响应 | Vision 徽章 |
| `architecture.output_modalities.includes("image")` | 链上（Advanced）或响应 | 图像输出徽章 |
| `supportedParameters: ["response_format"]` | 供应商响应 | JSON 徽章 |
| 名称 / 描述含 reasoning 关键词 | 任一 | Reasoning 徽章 |
| 任何 Advanced 供应商 | 链上 | TEE 徽章 |

如果模型缺少你需要的能力，Composer 会拒绝附上相应输入。例如，给不支持 vision 的模型附图，会在 Composer 层被拦截，而不是悄悄丢弃。

## 为什么没有固定列表

Ghast 不在文档里固定静态模型列表的原因：

- **Router 会更新**。Router 今天服务什么，未必是三个月后的样子。Picker 是真相来源。
- **Advanced 供应商在链上**。集合由链上注册表治理，不在客户端。
- **插件是用户安装的**。Ghast 不知道你会装什么。

所以本页讲**怎么读** picker，不讲**里面是什么**。看实时列表打开 picker。

## 每个 Advanced 供应商的定价

每个 Advanced 供应商在链上声明定价：

- 输出 token 价
- （有时）输入 token 价
- 每笔转账下限

充值流程同时遵守每模型下限与全局 `MIN_TRANSFER_AMOUNT()`。详见 [推理模式](/cn/web3/inference-modes)。

Picker 不内嵌定价；要做成本对比可在 Settings → Providers → 0G Advanced → [供应商] → Pricing 查看。

## Agent 能用的模型 vs. 你能用的模型

部分功能有能力门禁：

| 功能 | 所需模型能力 |
| --- | --- |
| 技能、工具、MCP | Tools 徽章 |
| Computer Use | Tools 徽章 |
| 图像附件 | Vision 徽章 |
| Mermaid / 图表渲染 | （客户端侧，与模型无关） |
| 结构化生成 | JSON 徽章 |
| 延长推理 | Reasoning 徽章 |

不带某能力的模型在该轮次内丧失对应能力。Composer 禁用相关控件。

## 相关页面

- [推理模式：Router 与 Advanced](/cn/web3/inference-modes)
- [模型选择](/cn/desktop/model-selection)
- [对话与输入框](/cn/desktop/chat-and-composer)
