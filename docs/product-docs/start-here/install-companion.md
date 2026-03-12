---
title: 安装 Companion
---

# 安装 Companion

## 本页说明

本页说明 Companion 的适用场景、标准安装方式，以及安装过程中可能遇到的系统安全提示。

## 什么时候安装

如果你当前只需要聊天、页面理解、记忆、钱包和基础模型能力，可以先只安装扩展。

当你的使用目标开始涉及以下能力时，再安装 Companion：

- 连接工作区
- 使用更强的本地能力
- 进入更深入的自动化流程
- 使用更完整的本地助手体验

## 标准安装方式

Companion 当前的标准用户安装路径，是从官方 Releases 页面直接下载安装包；不要求先通过 Terminal 安装。

- 下载地址：[Trapezohe Companion Releases](https://github.com/Trapezohe/companion_service/releases)
- macOS 安装包：`trapezohe-companion-macos.pkg`
- Windows 安装包：`trapezohe-companion-windows.msi`
- 校验文件：`SHA256SUMS.txt`

对应界面如下：

![Companion 安装引导页面](../assets/screenshots/install-companion.png)

*图：Companion 安装引导页面*

## 下载前确认

建议按下面顺序处理：

1. 只从官方 Releases 页面下载安装包。
2. 对照 `SHA256SUMS.txt` 核对安装包摘要。
3. 确认来源无误后，再继续安装。

如果安装包来源不明确，或校验结果不一致，不应继续安装。

## 安装时的系统安全提示

当前安装包尚未附带代码签名证书，因此 macOS 和 Windows 都可能提示安全风险。这属于当前分发方式下的预期现象，不等同于安装包本身异常。

在继续之前，先确认两件事：

- 安装包来自官方 Releases 页面
- 安装包校验结果与 `SHA256SUMS.txt` 一致

确认以上两点后，可按系统提示继续处理：

| 系统 | 常见提示 | 建议处理方式 |
| --- | --- | --- |
| macOS | Gatekeeper 提示无法验证开发者或阻止打开安装包 | 确认来源与校验无误后，前往“系统设置 > 隐私与安全性”，允许本次安装，再重新打开安装包 |
| Windows | SmartScreen 提示“Windows 已保护你的电脑” | 确认来源与校验无误后，打开“更多信息”，仅在确认来源可信时继续运行 |

如果你无法确认安装包来源，或不确定是否应该放行，请不要继续安装。

## 安装完成后

安装完成后，建议按下面顺序继续：

1. 回到扩展中的 Companion 页面。
2. 查看扩展是否已经识别本机 Companion。
3. 识别成功后，先按默认更收敛的本地边界开始使用。

大多数用户不需要在第一次安装时手动处理底层连接细节。

Companion 是 Ghast AI 的本地能力层。当前标准安装方式为从官方 Releases 页面直接下载安装包；由于安装包尚未附带代码签名证书，系统安全提示属于预期现象。处理此类提示前，应先确认下载来源和校验结果；安装完成后，优先使用扩展的自动识别与默认更收敛的本地边界。

## 相关页面

- [安装与自动配对](../companion/install-and-auto-pair.md)
- [连接工作区](../companion/connect-a-workspace.md)
- [权限模式：workspace 与 full](../companion/permission-modes.md)
- [Companion 连接问题](../troubleshooting/companion-connection.md)
