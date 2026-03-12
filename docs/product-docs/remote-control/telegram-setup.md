---
title: Telegram 设置
---

# Telegram 设置

## 本页说明

本页说明如何把 Telegram 作为 Ghast AI 的远程入口，以及普通用户第一次接入时应按什么顺序完成配置。

## 先判断你现在需不需要这页

Telegram 远程入口更适合下面这些情况：

- 你离开浏览器后，仍希望继续通过 Telegram 找到 Ghast AI。
- 你已经把扩展主路径跑通，准备进入远程使用阶段。
- 你愿意接受远程入口会带来额外审批和边界控制。

如果你主要还是在浏览器侧边栏里使用 Ghast AI，通常不需要优先处理这页。

## 开始前先确认什么

在配置 Telegram 之前，建议先确认：

1. 扩展已经安装、登录并完成激活。
2. 你已经知道远程控制属于按需接入的附加入口。
3. 你准备使用自己的 Telegram Bot Token。

如果这些前提还没成立，应先回到主路径，而不是先开远程通道。

## 标准配置顺序

当前更稳妥的配置顺序如下：

1. 打开 `设置 > 远程控制`。
2. 在 Telegram 中通过 `@BotFather` 创建个人机器人，并取得 Bot Token。
3. 把 Token 粘贴到扩展中并保存，等待扩展识别你的机器人用户名。

对应界面如下：

![Telegram Bot Token 配置界面](../assets/screenshots/telegram-bot-token.png)

*图：Telegram Bot Token 配置界面*

4. 打开对应机器人，在 Telegram 中发送一次 `/start`。
5. 回到扩展，确认聊天已经完成关联；必要时点击重新检查。

对应状态如下：

![Telegram 聊天关联等待状态](../assets/screenshots/telegram-chat-link.png)

*图：Telegram 聊天关联等待状态*

## 什么情况下才算配置完成

对普通用户而言，以下几项成立时，才能把 Telegram 路径视为完成：

- Bot Token 已保存。
- 扩展已经识别到对应机器人用户名。
- Telegram 聊天已经完成关联。
- 你已经可以按需启用远程模式。

如果只完成了前两项，这条路径通常还没有真正接通。

## 为什么有时看起来“配了但还不能用”

最常见的原因不是产品异常，而是配置还停留在“Bot 已保存，但聊天还未关联”的阶段。

因此，更合适的理解方式是：

- 只保存 Token，不等于远程入口已经可用。
- 只有聊天绑定完成后，Telegram 才真正成为可用远程通道。

Telegram 是 Ghast AI 当前面向普通用户的主要远程入口。对普通用户而言，更适合将其理解为按需接入的附加使用通道，并在完成 Bot 配置与聊天关联后，再作为正式远程入口使用。

## 相关页面

- [远程控制模型](../core-concepts/remote-control-model.md)
- [审批流](approval-flow.md)
- [远程执行者与来源标记](provenance-and-actor.md)
- [远程通道状态参考](../reference/remote-channel-status-reference.md)
