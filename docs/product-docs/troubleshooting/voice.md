---
title: 语音问题
description: 诊断 Whisper STT 与 Kokoro / Qwen TTS 问题。
---

# 语音问题

按症状索引。

## 麦克风按钮不开始录音

| 可能原因 | 处理 |
| --- | --- |
| 未授予麦克风权限 | 系统设置 → 隐私与安全 → 麦克风 → 启用 Ghast |
| 另一应用独占麦克风 | 退出该应用，重试 |
| 输入设备错 | macOS 输入切到了未连接的设备——系统设置 → 声音 → 输入 |

## 转录为空或不准

| 可能原因 | 处理 |
| --- | --- |
| 模型尚未下载 | Settings → Whisper → 选变体并等下载 |
| 固定了错误语言 | Settings → Whisper → 语言 → 自动检测 |
| 背景噪音过高 | 用耳机，或换更安静的地方 |
| 变体相对语言太小 | 尝试更大的 Whisper 变体 |

## 转录很慢

| 可能原因 | 处理 |
| --- | --- |
| 在快模型上用 CPU 后端 | Settings → Whisper → 切到 Metal（Apple Silicon） |
| 磁盘争用 | 其他重负载进程；查活动监视器 |
| 变体比需要的大很多 | 尝试更小变体 |

## TTS 无声

| 可能原因 | 处理 |
| --- | --- |
| 输出设备断开 | macOS 声音 → 输出 |
| 选了引擎但模型未下载 | Settings → TTS → 等下载 |
| Intel Mac 上选了 Qwen | Qwen 仅 Apple Silicon；切回 Kokoro |
| 音量静音 | 查 macOS 音量与按应用音量 |

## TTS 音色奇怪 / 机械

| 可能原因 | 处理 |
| --- | --- |
| 音色配错 | Settings → TTS → 在同引擎下换另一音色 |
| 引擎不适配该语言 | 中文：Apple Silicon 上用 Qwen 质感更好；Kokoro 跨语言但可能不如自然 |

## Telegram / Discord 的语音没转录

| 可能原因 | 处理 |
| --- | --- |
| Whisper 模型未下载 | Settings → Whisper → 选变体 |
| 桥接没拉到音频 | 看桥接日志；部分平台异步返回音频 |
| 音频格式不支持 | 边缘情况；Telegram OGG/OPUS 转码失败是 bug——请报告 |

## 音频中途截断

| 可能原因 | 处理 |
| --- | --- |
| Composer 取消了录音（你打字了） | 再次点麦克；口述时不要打字 |
| Whisper 流式 chunk 超时 | 重启应用；这不应该是常规失败 |

## 相关页面

- [语音输入与输出](/cn/desktop/voice)
- [设置项参考](/cn/reference/settings-reference)
