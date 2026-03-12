---
title: 安装与自动配对
---

# 安装与自动配对

## 本页说明

本页说明 Companion 的标准安装路径、自动配对的正常表现，以及安装或识别失败时的处理顺序。

## 标准安装路径

Companion 当前面向普通用户的标准路径，是从官方 Releases 页面直接下载安装包。

- 下载地址：[Trapezohe Companion Releases](https://github.com/Trapezohe/companion_service/releases)
- macOS：`trapezohe-companion-macos.pkg`
- Windows：`trapezohe-companion-windows.msi`
- 校验文件：`SHA256SUMS.txt`

这也是当前推荐的安装方式。对普通用户而言，不需要先通过 Terminal 手动安装。

## 安装时的安全提示

当前安装包尚未附带代码签名证书，因此系统可能在安装阶段显示安全风险提示。

处理原则很简单：

1. 先确认安装包来自官方 Releases 页面。
2. 再对照 `SHA256SUMS.txt` 核对安装包摘要。
3. 仅在来源和校验都确认无误时，按系统提示继续安装。

常见情况如下：

| 系统 | 常见提示 | 处理方式 |
| --- | --- | --- |
| macOS | Gatekeeper 阻止打开安装包，或提示无法验证开发者 | 确认来源与校验无误后，在“系统设置 > 隐私与安全性”中允许本次安装，再重新打开安装包 |
| Windows | SmartScreen 提示“Windows 已保护你的电脑” | 确认来源与校验无误后，打开“更多信息”，再决定是否继续运行 |

如果来源无法确认，不应继续安装。

## 自动配对怎么理解

安装完成后，扩展会优先自动识别本机 Companion。对普通用户来说，这意味着产品会尽量自动完成接入，而不是要求你先手动填写连接信息。

正常情况下，你只需要：

1. 安装对应系统的 Companion 安装包。
2. 回到扩展中的 Companion 页面。
3. 等待扩展识别本机 Companion。

## 第一次安装的建议顺序

如果你是第一次接入 Companion，建议按下面顺序使用：

1. 从官方 Releases 页面下载对应系统的安装包。
2. 对照 `SHA256SUMS.txt` 完成来源核验。
3. 完成安装，并按系统提示处理安全提醒。
4. 回到扩展，等待自动识别。
5. 识别成功后，先从默认更收敛的本地边界开始使用。

## 如果自动配对没有成功

自动识别失败，通常代表接入过程没有完成，不代表安装包本身一定异常。

建议按下面顺序处理：

1. 先回到扩展中的 Companion 页面查看当前状态。
2. 先尝试重新检测或重新启动 Companion。
3. 再进入诊断、自检或手动连接流程。

也就是说，自动配对失败时，优先把它当作连接问题处理，而不是重新判断整次安装是否有效。

Companion 当前的标准用户安装路径，是从官方 Releases 页面直接下载安装包，并由扩展优先完成自动识别。由于安装包尚未附带代码签名证书，系统安全提示属于预期现象；只有在来源和校验结果都确认无误时，才应继续放行安装。

## 相关页面

- [安装 Companion](../start-here/install-companion.md)
- [连接工作区](connect-a-workspace.md)
- [诊断与自检](diagnostics-and-self-check.md)
- [Native Messaging 与扩展配对](native-messaging.md)
- [Companion 连接问题](../troubleshooting/companion-connection.md)
