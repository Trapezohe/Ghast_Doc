---
title: Companion 连接问题
---

# Companion 连接问题

## 本页说明

本页用于处理 Companion 安装、识别和连接阶段最常见的问题。遇到异常时，先判断它属于“安装被系统拦截”，还是“安装完成后没有成功连接”。

## 先判断是哪一类问题

| 现象 | 优先判断 |
| --- | --- |
| 安装包打不开，或系统直接阻止安装 | 这是安装放行问题，先处理系统安全提示 |
| 安装已经完成，但扩展里看不到 Companion | 这是识别或连接问题 |
| 自动配对失败 | 先按连接问题处理，不要先重复安装 |
| 连接后又掉线 | 先检查 Companion 是否仍在本机正常运行 |

## 安装包被系统拦截时怎么办

Companion 当前通过官方安装包分发，但安装包尚未附带代码签名证书，因此 macOS 和 Windows 可能在安装时显示安全风险提示。

先确认两件事：

- 安装包来自[官方 Releases 页面](https://github.com/Trapezohe/companion_service/releases)
- 安装包校验结果与 `SHA256SUMS.txt` 一致

只有在这两项都确认无误时，才应继续放行安装。

| 系统 | 常见提示 | 处理方式 |
| --- | --- | --- |
| macOS | Gatekeeper 提示无法验证开发者，或阻止打开安装包 | 前往“系统设置 > 隐私与安全性”，允许本次安装，再重新打开安装包 |
| Windows | SmartScreen 提示“Windows 已保护你的电脑” | 打开“更多信息”，仅在确认来源可信时继续运行 |

如果你无法确认来源，或校验结果不一致，不应继续安装。

## 已安装，但扩展没有识别 Companion

如果安装已经完成，但扩展中仍没有看到 Companion，建议按下面顺序处理：

1. 回到扩展中的 Companion 页面，重新查看当前状态。
2. 先尝试重新检测，或重新启动 Companion。
3. 再检查浏览器是否已经重新识别本机 Companion。
4. 仍未恢复时，再进入诊断、自检或手动连接流程。

这里最重要的判断是：如果安装已经完成，就优先把问题当作“连接问题”处理，而不是重新回到安装步骤。

## 自动配对失败时怎么理解

自动配对失败，通常表示扩展没有顺利接入本机 Companion，不代表安装包本身一定异常。

更稳妥的处理顺序是：

1. 先确认安装已经完成。
2. 再确认系统没有继续拦截 Companion 的启动或识别。
3. 最后再处理自动识别、诊断或手动连接。

也就是说，不要把“自动配对失败”和“安装失败”混为一类问题。

## 仍然无法恢复时

如果你已经确认安装来源、处理了系统安全提示，且扩展仍未识别 Companion，再进入更深入的排查：

- 查看[安装与自动配对](../companion/install-and-auto-pair.md)，重新核对标准接入顺序
- 查看[诊断与自检](../companion/diagnostics-and-self-check.md)，进入本地检查流程
- 如果你已经进入高级排查，再使用命令行查看当前状态，例如 `trapezohe-companion status` 或 `trapezohe-companion self-check`

Companion 的问题应先区分为“安装放行问题”和“安装后的连接问题”。如果系统拦截安装包，先确认来源与校验结果，再按系统提示放行；如果安装已经完成而扩展没有识别 Companion，则应优先按连接问题处理，而不是重复安装。

## 相关页面

- [安装 Companion](../start-here/install-companion.md)
- [安装与自动配对](../companion/install-and-auto-pair.md)
- [诊断与自检](../companion/diagnostics-and-self-check.md)
