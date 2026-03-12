---
title: 远程通道状态参考
---

# 远程通道状态参考

## 当前 UI 状态值

| 状态 | 当前含义 |
| --- | --- |
| `needs_setup` | 尚未完成关键配置 |
| `configured` | 已有配置，但未必真正上线 |
| `live` | 已配置且当前可用 |

## 当前目录层面的状态字段

| 字段 | 当前用途 |
| --- | --- |
| `configured` | 表示通道已有必要配置 |
| `live` | 表示通道已实际联通 |
| `botConfigured` | Telegram Bot Token 已配置 |
| `linkedChatId` | Telegram 已绑定聊天 |
| `authTokenConfigured` | 非 Telegram pilot 通道的 token 已配置 |

## 相关页面

- [Telegram 设置](../remote-control/telegram-setup.md)
- [通道支持矩阵](../remote-control/channel-support-matrix.md)
