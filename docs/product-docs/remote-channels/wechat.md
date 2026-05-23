---
title: 微信
description: 配置微信桥接——用个人微信扫码登录，把微信账号桥接到 Ghast。
---

# 微信

微信桥接通过微信官方的 Clawbot 端点（`ilinkai.weixin.qq.com`）连接到 **个人微信账号**。**不涉及公众号、不涉及小程序、不需要 Webhook 服务、不需要 AppID / AppSecret**——登录就是用手机微信扫一下二维码，和你在新设备上登录微信桌面端是同一个流程。

桥接完成后，你映射过的聊天里的消息流入 Ghast 会话；Agent 的回复以该账号发送的普通微信消息形式返回。

## 配置

### 1. 打开微信桥接面板

Settings → Channels → **Weixin**（Weixin bridge）。

- 副标题：*QR login, bridge runtime, model choice, and conversation routing.*（"QR 登录、桥接运行时、模型选择、会话路由"）

### 2. 生成二维码

点 **Show QR code**。Ghast 调用 Clawbot 端点，在面板里渲染出一张新二维码。

会出现的状态文案：

- *Generating QR code…*——Ghast 正在请求二维码。
- *Scan QR code with WeChat to log in.*——二维码已就绪。
- *Waiting for scan…*——二维码已显示，尚未被扫。
- *QR code expired*——刷新即可生成新的。

### 3. 用手机扫码

打开**手机微信**，右上角点 **+**，选 **扫一扫**，扫 Ghast 显示的二维码。在手机上像登录微信桌面端那样确认设备授权。

### 4. 等待登录完成

Ghast 轮询 Clawbot 端点直到扫码确认。成功后状态切到 **Logged in**，桥接运行时开始轮询消息。

二维码在扫完之前超时的话，点 **Refresh** 生成新的。

### 5. 把聊天映射到工作区

登录成功后，面板列出你账号可见的聊天（DM 与群）。对每个聊天：

- 选一个工作区。
- （可选）设定默认模型——*AI model for WeChat conversations. Falls back to the global default if not set.*（"微信对话用的 AI 模型，未设时回退到全局默认"）。
- （可选）覆盖 system prompt 或默认技能集。
- 保存。

映射过的聊天即时开始把消息路由进 Ghast。

## 支持的内容

因为桥接是以你的账号身份登录的，内容支持范围跟着该账号在 WeChat 客户端里能做的事走：

| 方向 | 支持 |
| --- | --- |
| 入站文本 | 是 |
| 入站图片 | 是 |
| 入站语音 | 是（用 Whisper 转录） |
| 入站文件 | 是 |
| 出站文本 | 是 |
| 出站语音 | 是（通过 TTS） |
| 出站文件 / 媒体 | 是（受 WeChat 对普通客户端发送的限制） |
| Reaction | 受平台限制 |

**不存在所谓 48 小时客服窗口**——那是公众号的限制，与个人账号无关。桥接可以在 WeChat 通常的消息规则范围内自由发送。

## 桥接能看到什么

桥接看到的就是你的微信账号能看到的：

- 你账号所在的 DM 和群。
- 它们的成员与内容。
- 任何群邀请与好友请求（通常留给你在微信 app 里自己确认）。

它**看不到**你账号不在的聊天。

## 隐私与登出

- 登录 session 保存在 Profile Vault。不同步、不离开机器。
- 在 Ghast 里点 **Logout** 终止桥接 session。它**不**会让你手机上的微信也登出。
- 在手机端登出（微信 → 设置 → 账号与安全 → 登录设备管理 → 移除）会在下次轮询时使桥接 session 失效。

## 失败模式

| 症状 | 原因 | 处理 |
| --- | --- | --- |
| 二维码不出现 | 网络访问不了 `ilinkai.weixin.qq.com` | 检查连通性 / 代理 |
| 二维码扫之前过期 | 正常——二维码生命期很短 | 点 **Refresh** |
| 扫码成功但桥接卡在 "Waiting…" | 手机端的确认步骤还没点 | 在手机微信上点 **确认** |
| 登录后桥接很快掉线 | session 被使其他地方踢掉 | 在 Ghast 里重新扫码 |
| 某个聊天的消息没路由 | 没映射 | 在面板里映射 |

## 相关页面

- [远程消息通道概览](/cn/remote-channels/overview)
- [审批流](/cn/remote-channels/approval-flow)
- [通道支持矩阵](/cn/remote-channels/support-matrix)
