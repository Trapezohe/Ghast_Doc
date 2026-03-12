---
title: 快速开始
---

# 快速开始

## 本页说明

本页提供 Ghast AI 当前最直接的上手路径，适合第一次安装和第一次使用时参考。

## 最短上手路径

1. 从 [Chrome Web Store](https://chromewebstore.google.com/detail/ghast-ai/nnhdkkgpoeojjddikcjadgpkbfbjhcal) 安装扩展。
2. 打开侧边栏，使用 Google 账号登录。
3. 如果账号还没有完成激活，先按页面提示完成邀请码步骤。
4. 创建钱包，或导入已有钱包，并设置本地解锁密码。
5. 按需完成工作区、远程控制、模型等后续引导；只有在明确需要本地能力时，再安装 Companion。
6. 打开一个受支持的页面，在 `Chat` 中直接开始使用。

如果你只是想先看产品是否适合自己，做到第 4 步通常就已经可以开始体验基础使用路径。

## 第一次使用时，建议怎么走

### 只想先体验产品

推荐顺序：

- 安装扩展
- 登录
- 完成激活
- 创建或导入钱包
- 直接开始聊天和页面使用

这条路径最轻，适合先确认 Ghast AI 的基础体验是否符合你的预期。

### 希望尽快接入本地能力

推荐顺序：

- 完成扩展安装和钱包设置
- 从[官方 Releases 页面](https://github.com/Trapezohe/companion_service/releases)下载安装 Companion 安装包
- 先确认来源和 `SHA256SUMS.txt` 校验文件
- 安装完成后，让扩展优先自动识别 Companion
- 先按默认更收敛的方式连接工作区
- 再逐步使用更强的本地能力

如果你的目标是工作区、本地能力和更深的自动化，这会是更合适的起点。

## 引导步骤该怎么理解

当前引导流程里的不同步骤，并不都代表“必须立刻完成”。

| 步骤 | 建议理解方式 |
| --- | --- |
| 钱包 | 基础能力的关键步骤，建议优先完成 |
| 工作区 | 只有在你准备使用本地工作区能力时才真正重要 |
| 远程控制 | 有远程使用需求时再继续配置 |
| 模型 | 准备正式使用模型时再完善 |
| Companion | 想获得更强本地能力时再安装 |

也就是说，首次上手不需要把所有步骤都当成同等优先级。

## 使用前需要知道的三件事

### Companion 不是一开始必须安装

Ghast AI 当前的很多基础能力不依赖 Companion，因此你完全可以先只安装扩展，熟悉产品之后再决定是否继续接入本地能力。

### Companion 当前通过安装包分发

如果你需要本地能力，当前标准路径是从[官方 Releases 页面](https://github.com/Trapezohe/companion_service/releases)直接下载安装包，而不是先通过 Terminal 安装。

### Companion 安装时可能出现系统安全提示

Companion 安装包当前尚未附带代码签名证书，因此 macOS 或 Windows 可能提示安全风险。只有在确认下载来源来自[官方 Releases 页面](https://github.com/Trapezohe/companion_service/releases)，且校验结果与 `SHA256SUMS.txt` 一致时，才应继续安装。

## 推荐的开始方式

如果你不确定应该怎么开始，建议按下面这条最稳妥的顺序使用：

1. 先完成扩展安装、登录和钱包设置。
2. 先在支持页面上体验聊天和页面结合能力。
3. 确认产品适合自己后，再安装 Companion。
4. 如果安装 Companion，优先使用官方安装包与自动识别。
5. 最后再去配置工作区、远程控制和更强的本地能力。

这样做的好处是，你可以先用最低成本建立对产品的整体认识，再逐步增加能力深度。

Ghast AI 当前推荐采用“先扩展、后 Companion；先基础体验、后本地能力”的上手方式。对普通用户而言，先完成安装、登录和钱包设置即可开始使用；只有在明确需要工作区或更强本地能力时，再从[官方 Releases 页面](https://github.com/Trapezohe/companion_service/releases)下载安装 Companion，并优先使用自动识别。

## 相关页面

- [安装扩展](../extension/install-extension.md)
- [登录与激活](../extension/sign-in-and-activation.md)
- [钱包设置](../extension/wallet-setup.md)
- [安装 Companion](install-companion.md)
