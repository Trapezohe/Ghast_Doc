---
title: 语音输入与输出
description: 本地 Whisper 转录与本地 TTS（Kokoro 与 Qwen）——做什么、在哪里开启、在哪里出现。
---

# 语音输入与输出

Ghast 双向支持语音——听（Whisper STT）和说（Kokoro 或 Qwen TTS）——且**都跑在本地**。转录与合成都不会让音频离开机器。

## 语音转文字（Whisper）

Whisper 是本地转录引擎。在进程内运行（通过 `@fugood/whisper.node`），可走 CPU 或 Metal（Apple Silicon），16 kHz 采样并自动重采样。

### 何处使用

- **Composer 麦克风**——点输入框上的麦克图标开始口述；转录流式填入输入框。
- **入站语音消息**——Telegram / Discord / 微信 的语音剪辑在 Agent 看到之前先转录。
- **Voice 技能**——对话里显式触发录音 / 转录。

### 设置

Settings → **Whisper**：

- **Backend**——CPU 或 Metal（仅 Apple Silicon）。
- **模型变体**——在大小/质量之间选择。
- **语言**——自动检测或固定到特定语言（Whisper 支持很多种）。

第一次使用语音输入时，Ghast 请求麦克风权限并按需下载所选模型。

## 文字转语音（TTS）

两种本地引擎，在 Settings → **TTS** 选择。

| 引擎 | 优势 | 可用性 |
| --- | --- | --- |
| **Kokoro** | 82M 模型，处处可跑，多语言支持 | 全部 Mac |
| **Qwen TTS (MLX)** | 质感更好，尤其是中文 | 仅 Apple Silicon |

### 何处听到

- **远程频道的语音回复**——用户发的是语音时，Agent 的回复可合成为语音回发。
- **Voice 技能**——对话里显式播放。
- **可选朗读模式**——免手工流。

### 选音色

每个引擎自带多个 voice。Settings → TTS 里的 picker 展示可选项；选择按引擎独立。换音色立刻对下一句生效。

## 带宽与体积

- Whisper 模型文件视变体在 ~50–500 MB；一次下载。
- TTS 模型文件类似规模。
- 推理在设备上完成。无按秒成本、无网络往返。

## 隐私

- 麦克风采集的音频在进程内转录后**丢弃**。无音频日志。
- 消息桥接的入站语音剪辑转录后只以文本形式存入对话历史（除非桥接本身保留了原消息 URL）。
- TTS 输出在内存中渲染，要么直接播放，要么发往远程频道；不持久化音频文件，除非你主动要求。

## 失败模式

| 症状 | 可能原因 | 处理 |
| --- | --- | --- |
| 麦克风输入失败 | 未授权 | 系统设置 → 隐私与安全 → 麦克风 |
| 转录质量差 | 固定了错的语言、模型变体偏小 | Settings → Whisper → 换更大模型或自动检测语言 |
| Intel 上 TTS 音色不对 | 选了 Qwen 但不可用 | Settings → TTS → 切回 Kokoro |
| Telegram 里没有语音 | Telegram 桥接没开语音 IO | Settings → Channels → Telegram，启用语音 |

## 相关页面

- [对话与输入框](/cn/desktop/chat-and-composer)
- [远程消息通道概览](/cn/remote-channels/overview)
- [设置总览](/cn/desktop/settings-overview)
- [故障排查：语音问题](/cn/troubleshooting/voice)
