---
title: 安装 Ghast AI Desktop
description: 如何下载、安装、启动 macOS 桌面客户端。
---

# 安装 Ghast AI Desktop

桌面客户端以签名 + notarized 的 macOS DMG 形式分发。

## 下载

发布流水线产物命名：

```
Ghast-Desktop-${version}-${arch}.dmg
```

两个架构可选：

- **arm64**——Apple Silicon（M1、M2、M3、M4）
- **x64**——Intel

不确定的话，点苹果菜单 → 关于本机。"芯片"那一行写 "Apple M…" 选 arm64，写 "Intel …" 选 x64。

内部预览版 DMG 发布在预览频道；正式版下载链接会在正式渠道（Discord / X）公布。

## 校验下载

发布流水线为每个 DMG 配套生成 SHA-256 校验和。安装前：

```bash
shasum -a 256 ~/Downloads/Ghast-Desktop-*.dmg
```

把结果对照发布说明里的数值。不一致就别装——重新下载或联系维护者。

## 安装

1. 双击 DMG，弹窗显示 **Ghast AI** 图标和 `应用程序` 文件夹快捷方式。
2. 把 **Ghast AI** 拖进 `应用程序`。
3. 在 Finder 中弹出 DMG（右键 → 推出）。
4. 打开 `应用程序`，双击 **Ghast AI**。

首次启动比后续慢一些，因为 macOS 在校验 notarization 票据。

## 首启系统弹窗

理论上**不会**出现"未知开发者" / Gatekeeper 警告，因为 DMG 由 Apple Developer ID 签名并经过苹果 notarize。如果真的出现：

- 先对照发布说明校验 SHA-256。
- 如果一致，到 系统设置 → 隐私与安全 中点 "Open Anyway"。
- 如果不一致，停下来，从官方源重新下载。

## 不需要的东西

- Homebrew——Ghast AI Desktop 是标准 macOS 应用，不是 CLI 工具。
- 装 Xcode——代码签名和 notarize 在打包时完成，不需要本机做。
- Rosetta——Apple Silicon 上请装 arm64 DMG。不需要 Rosetta。

## 升级

自动升级默认开启。Ghast 在后台每 30 分钟检查一次新版本。有新版本时会显示状态提示，你可以选择什么时候安装。下载在后台进行，重启时应用更新。

也可以通过 Settings → About → Check for Updates 手动检查。

## 卸载

要移除应用：

1. 退出 Ghast AI。
2. 把 `应用程序/Ghast AI.app` 拖进废纸篓。
3.（可选）删除 `~/Library/Application Support/Ghast` 下的 Profile 目录以清除本地数据。

卸载**不**影响你的钱包、已充值的 0G 余额、加密的 0G Storage 备份。这些分别在链上和存储网络上。重新安装并导入同一个助记词即可恢复。

## 相关页面

- [系统要求](/cn/start-here/system-requirements)
- [首次启动与引导](/cn/desktop/first-run)
- [登录与激活](/cn/desktop/sign-in-and-activation)
