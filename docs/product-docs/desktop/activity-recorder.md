---
title: 活动记录
description: 一个本地的屏幕文本记录器。它采样前台应用、用本地 OCR 从截图里抽出文本、丢掉图像、把文本索引起来，让 Agent 能回忆起你之前在做什么。
---

# 活动记录

活动记录器是让 Ghast 记住**你之前在做什么**——而不只是**你在对话里打过什么**——的关键组件。它是一个后台**本地记录器**：采样屏幕，用 macOS Vision OCR 在本地抽文本，把截图丢掉，仅保留脱敏后的文本和少量摘要放在 Agent 可搜索的索引里。

设计上两条原则：

- **本地**。采集、OCR、索引、摘要全部在本机完成。除非你给 activity 类别 opt-in 0G Storage 同步，否则不出机。
- **默认只留文本**。截图作为 OCR 输入用完即丢。**视觉历史**（保留截图文件）**默认关闭**，仅当你确实想要图像档案时才开。

Settings 页里它叫 *Activity Recorder*。副标题：*Locally extracts screen text and builds activity memory. Screen images are discarded by default; data stays on this device.*（"本地抽取屏幕文本并构建活动记忆。截图默认丢弃；数据留在本机。"）

## 它采集什么

启用后采样：

- **Front app**——前台 macOS 应用与 bundle id。
- **前台窗口标题**——通常是文档名、URL 或面板名。
- **浏览器 tab**——支持的浏览器里访问的 URL 与标题。
- **截图 → OCR 文本**——每次采样 tick 截一张图、OCR、然后丢掉（除非你开了视觉历史）。
- **Activity Segment**——连续的"在做什么"片段，按 idle 阈值开闭。一个 segment 把属于同一段聚焦工作的事件聚在一起。

它**不**采集：

- 按键或键入内容
- 剪贴板内容
- 鼠标移动
- 音频
- 持续屏幕视频

## Activity Segment

*Segment* 是记录器的记忆单元。你开始做事时打开，工作期间累积事件（焦点变化、OCR 文本、浏览器 tab），并在以下情况关闭：

- 你 idle 超过 **idle threshold**；
- 你锁屏；
- 一个被黑名单（静音）的应用切到前台；
- 记录器被禁用。

Agent 回答"我昨天下午 3 点在做什么"时，拉的就是某个 segment。

## 运行状态

状态面板显示其中之一：

| 状态 | Pill | 含义 |
| --- | --- | --- |
| **Off** | `disabled` | 记录器关闭，什么都不采。 |
| **Idle** | `idle` | 开启但当前未在抽取。准备就绪。 |
| **Indexing** | `indexing` | 正在记录——采样、OCR、索引。 |
| **Screen locked** | `screen locked` | 屏幕锁屏期间自动暂停。 |

状态 pill 旁边显示四个度量：**Front app**、**Text index**（大小）、**Segments**、**Visual history**。

## OCR（文本抽取）

OCR 是记录器的核心。每次截图都在本地经过 macOS Vision OCR；不调用任何云端 OCR 服务。

可配置项：

- **Extract text from screen captures**——OCR 主开关。仅 macOS。
- **OCR languages**——Vision 语言代码，逗号分隔（如 `en-US,zh-Hans`）。
- **OCR every Nth capture**——跳过中间帧的 OCR 以降低数据库负载（`1` = 每次都 OCR、`5` = 五次取一）。

进入搜索与记忆之前文本会做**脱敏**——记录器文本处理层会剥除敏感模式。

## Sampling 控件

记录器采样的激进程度在 *Sampling* 下可配：

| 旋钮 | 作用 |
| --- | --- |
| **Heartbeat interval (ms)** | 即便屏幕没变化也按这个间隔强制采一次。 |
| **Idle threshold (ms)** | 连续 idle 超过这个时长，关闭当前 segment。 |
| **Minimum capture gap (ms)** | 采样之间的最小间隔，给频繁变化场景做去抖。 |
| **Visual-change poll (ms)** | 按这个间隔检测动画 / 视频。`0` 关闭。 |
| **JPEG quality** | `1-100`，控制临时缓冲的截图质量（小值 → 更小文件）。 |

大部分参数在记录器运行时实时生效；segment / idle 时长变更会在下一个 segment 生效。

## 隐私：存储策略与应用黑名单

两道防线让隐私面尽可能小。

### 存储策略

默认情况下截图文件**不保留**。流程是：截图 → OCR → 丢图 → 保留脱敏文本 + 摘要 + 索引。

如果你想保留截图：

- **Keep visual history**——默认关。打开后 OCR 完成后保留截图文件。
- **Max visual storage**——保留截图的容量上限。超出上限时旧截图自动删除。

文本索引、segment 摘要、embeddings 不受影响，总是保留。

### 应用黑名单

有些应用你**不希望**被记录。黑名单让你列出 bundle（密码管理器、银行 app、任何敏感的）——当其中一个在前台时，记录器自动暂停**并丢弃正在处理的缓冲**。

加入方式两种：

- **Add from Applications…**——选择器，从应用的 `Info.plist` 读出正确的 bundle id。
- **Advanced: paste bundle id**——直接键入 bundle id。

记录器把黑名单当作 defence-in-depth：列表里的 bundle 不会进数据库，即使技术上截到屏。

## macOS 权限

Activity 面板在 **Screen Recording** 旁显示 **Ready** / **Needs access** 状态。没有屏幕录制权限，OCR 流水线读不到任何东西。

权限在 系统设置 → 隐私与安全 → 屏幕与系统音频录制 中授予。面板带 deep link 直达。

## Recent segments 与 Danger zone

- **Recent segments**——最近的 segment 列表，含时长、事件数、预览。点进一条可看其 OCR 文本与摘要。
- **Danger zone → Delete everything**——删除所有 segments、events、OCR 文本、摘要、embeddings、以及任何可选的视觉历史文件。记录器配置本身保留。**不可撤销。**

## 三种下游用途

Segment 关闭并被摘要化后，喂给：

1. **每日摘要**——*"今天主要在 Ghast Desktop 仓库工作，读了三篇 TEE 相关论文，在 Discord 和团队聊了很长时间。"*
2. **未结流提醒**——*"你早上 Mail 里有封草稿没发完——还想继续吗？"* 以真实活动为锚，不是泛泛催促。
3. **记忆召回上下文**——你问 *"昨天看的那个仓库叫什么？"* 时，记录器索引有答案。

活动派生记录在记忆库里带 `source: activity` 标签，可在 Settings → Memory 中过滤或排除。

## Agent 看到什么

Agent 不会拿到你活动的原始流。它看到：

- 适用时的每日摘要。
- 记忆召回查询命中带 activity 标签记录时的匹配记录。
- 你问"我下午 3 点在看什么？"时具体 segment 的 OCR 文本。

它不会在没有显式 prompt 的情况下自由浏览你的活动。

## 关闭与清理

| 你想… | 这样做 |
| --- | --- |
| 停止新捕获 | 关主开关。已有数据保留。 |
| 停止对敏感应用的捕获 | 把它加进隐私黑名单。 |
| 删除部分 segment | 在 *Recent segments* 里用按段删除。 |
| 全部删除 | *Danger zone → Delete everything*。 |

## 相关页面

- [Memory 记忆](/cn/desktop/memory)
- [设置总览](/cn/desktop/settings-overview)
- [安全：本地数据存储](/cn/security/local-data-storage)
- [Partner Mode：Initiative 主动性](/cn/partner-mode/initiative)
