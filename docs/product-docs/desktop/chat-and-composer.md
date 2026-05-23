---
title: 对话与输入框
description: 主对话窗的输入框控件、流式响应、工具调用与会话生命周期。
---

# 对话与输入框

主窗口是你大多数时间停留的地方。本页讲解输入框（窗口底部的 Composer）以及一个轮次从输入到接收流式响应的完整过程。

## Composer 解剖

Composer 分两部分：上面是文本输入区（占位：*Ask, build, or run…*），下面是控件栏。栏分左右两簇——左簇是输入辅助按钮，右簇是状态与发送控件。

### 左簇（输入辅助）

| 控件 | 用途 |
| --- | --- |
| **Attach file** | 上传文件（PDF、DOCX、ZIP……）。附件用对应 viewer 渲染并喂给模型。 |
| **Commands** | 打开 Commands 菜单——工具、技能、MCP 服务、保存的 prompt 的统一入口。选择只对当前轮次生效。 |
| **Attach image** | 上传图片。视觉模型会以图像输入接收。 |
| **Voice input** | 点按开始录音。Whisper 本地转录，伴随实时音量电平。再按一次停止。 |

### 右簇（状态与发送）

| 控件 | 用途 |
| --- | --- |
| **Active tools** | 一个带计数（如 "3"）的小徽章，显示当前轮启用的工具数量。点开查看 / 调整。 |
| **Confirm before tools** | 一个切换。开 → Agent 在调用工具前暂停等待你批准；关 → 工具直接跑。 |
| **模型选择器** | 显示当前模型（如 *Ghast 2 Pro*）。点击切换；列出所有已配置供应商的模型。 |
| **Context ready** | 一个小指示器，在记忆 / 项目 / 工作区上下文组装完成后变成活跃状态。 |
| **Send** | 发送 prompt。流式响应期间按钮变成 **Stop**。 |

模型未配置时，模型选择器显示占位 *Select model…*，Send 按钮显示提示 *Choose or configure a model before sending. Drafts stay saved in this chat.*（"发送前请先选择或配置模型；草稿保留在此对话中"）。先去配置 Router 或 Advanced 供应商（[模型选择](/cn/desktop/model-selection)）。

## 一个轮次的过程

1. **输入或粘贴 prompt**。按需用 Attach file / image / voice。
2.（可选）打开 **Commands** 启用本轮的特定工具、技能、MCP 服务、保存的 prompt。
3.（可选）切换 **Confirm before tools**，让每次工具调用都过审批。
4. **按回车**（Shift-Enter 换行）或点 **Send**。
5. Composer 锁定，Agent 的响应卡片出现在它上方。
6. 响应逐块流式显示。工具调用以可折叠卡片显示在响应里——展开能看到调用、参数、结果。
7. Agent 完成后，Composer 解锁。

流式期间任何时候都可以按 **停止**。已生成的部分留在对话中；你可以继续发后续消息，也可以 **Retry** 重试上一轮。

## 记忆召回

每次开新对话（或 thread fork）发第一条消息时，Ghast 会：

- 用你消息的 embedding 在向量记忆库里查找。
- 取相似度阈值（默认 0.75）以上的 top 命中。
- 在响应卡片上方短暂显示一个"memory retrieval"阶段卡。
- 把它们作为上下文注入，让 Agent 的回复以它已经知道的信息为锚。

详见 [Memory 记忆](/cn/desktop/memory)。

## 上下文用量显示

Composer 暴露当前轮的 **Context usage** 拆分：

- **Input**——本轮你发送的（附件展开后）。
- **Output**——模型当前的输出计数。
- **Reasoning**——所选模型适用时。
- **Cached**——前缀有多少命中模型 prompt cache。
- **`used / total` tokens**——相对模型上下文窗口的实时用量。

接近窗口时，Ghast 会做**上下文压缩**：把更早的轮次摘要化替换进 prompt。Agent 不会"忘记"——摘要会被保留，并以折叠的"earlier"卡片呈现，可展开查看。

## 线程、Fork 与 Side Conversation

- **新线程**——侧栏点 New 开始一段干净对话，无任何已有上下文。
- **Thread Fork**——从任何一条消息可以分叉成新对话，继承到该点的上下文但独立演进。适合想试试不同方向、又不想丢掉当前分支的场景。
- **Side Conversation**——某些技能会和 Agent 开一个针对子任务的并行对话。主线程继续；side conversation 在目标完成后关闭。

## Artefacts

Agent 生成大块产物（长文件、代码块、图表）时，可以把它分流到对话旁边的 **Artefact 面板**。Artefacts 与对话一起持久化，可以在 Lightbox viewer 全屏查看。

## 相关页面

- [模型选择](/cn/desktop/model-selection)
- [Memory 记忆](/cn/desktop/memory)
- [Skills 技能](/cn/desktop/skills)
- [语音输入与输出](/cn/desktop/voice)
