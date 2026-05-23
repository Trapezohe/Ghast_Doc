---
title: 内置应用 Playbook
description: 把复杂多步 UI 流程包装成单次工具调用的应用专用适配器。
---

# 内置应用 Playbook

对于一些常用 macOS 应用，通用的「这里点、那里键入」是慢路径。Ghast 内置了专用适配器——*Playbook*——把多步 UI 流程包装成带参数的确定性单次工具调用。

本页列出当前内置的 Playbook。覆盖刻意收窄：每个 Playbook 都是手写并测试过的，不是自动生成。

## 生产力

### 日历 (`com.apple.Calendar`)

- **`create_event`**——生成 ICS 文件并派发。支持 `dry_run` 做验证。首次用户批准后需 `allow_calendar_write=true`。

### 邮件 (`com.apple.mail`)

- **`compose`**——打开新建撰写窗，预填内容。
- **`compose_draft`**——同上，但通过 `mailto:` URL scheme——即使 Mail 不是默认 handler 也能用。
- **`send_dry_run`**——验证 compose 是否能成功而不实际发送。

### 备忘录 (`com.apple.Notes`)

- **`open_note_url`**——通过 `notes://` URL scheme 打开具体笔记。
- **`search_dry_run`**——对 Notes 索引验证查询而不在 UI 中显示结果。

### 访达 (`com.apple.finder`)

- **`reveal`**——文件级适配器：在 Finder 中定位路径并滚动到视野。
- **`open_folder`**——在新 Finder 窗口里打开文件夹。

### Safari (`com.apple.Safari`)

- **`open_url`**——在 Safari 打开 URL。（通用 UI 点击也能用；这个更快更稳。）

## 音乐

四个音乐应用各有专属 Playbook，通过菜单栏 AX 实现 播放 / 暂停 / 下一首 / 上一首（即使应用在后台也能保持播放正确）：

- **QQ 音乐** (`com.tencent.QQMusicMac`)——`play_pause`、`previous_track`、`next_track`、`like_current_track`
- **网易云音乐** (`com.netease.163music`)——`play_song`、`play_playlist`、`play_daily_recommendation`、`open_route`（URL scheme）
- **Apple Music** (`com.apple.Music`)——`open_url`
- **Spotify** (`com.spotify.client`)——`play_uri`

## 通讯

- **微信** (`com.tencent.xinWeChat`)——`launch`
- **Slack** (`com.tinyspeck.slackmacgap`)——`open_channel`

这两个故意保持极简——聊天内容走 Ghast 自己的消息桥接，不通过 Computer Use。

## Playbook 带来什么

通用 click/type 比不上的三件事：

| 优势 | 为什么重要 |
| --- | --- |
| **确定性执行** | 适配器知道精确的 UI 路径，手工测试过，应用升级时漂移概率小。 |
| **结构化参数** | Agent 传结构化参数（标题、参与者、时间），不用一字段一字段键入。 |
| **Dry-run** | 不产生副作用地验证。能在到达应用前抓住坏输入（错误日期、缺参与者）。 |

## 不在 Playbook 里的是什么

很多你期望有 Playbook 的应用并没有——本手册编写时：

- 信息、地图、照片、FaceTime、提醒事项——仅通用 click/type。
- 大多数第三方应用——仅通用。
- 浏览器内容——使用 Ghast Browser Relay 扩展。

这是有意的。增加一个 Playbook 意味着承诺跨应用升级维护它；内置那套就是我们维护的集合。

## 扩展

你可以写技能把通用 Computer Use 调用包装成你自己的"类 Playbook"抽象。详见 [Skills 技能](/cn/desktop/skills)。它们在守护进程意义上不是"Playbook"，但从 Agent 视角带来同样的单次调用体验。

## 相关页面

- [Computer Use 概览](/cn/computer-use/overview)
- [每应用审批 Gate](/cn/computer-use/approval-gate)
- [安全边界](/cn/computer-use/safety-boundaries)
- [Skills 技能](/cn/desktop/skills)
