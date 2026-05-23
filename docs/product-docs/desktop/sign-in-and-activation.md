---
title: 登录与激活
description: 邮箱验证码与 Google OAuth 登录、session 生命周期、（如适用的）激活码。
---

# 登录与激活

本页讲解桌面端登录流程、每条路径产出什么、常见失败模式怎么应对。

## 两种登录方式

### 邮箱 + 验证码

1. 在 Sign In 屏幕输入邮箱。
2. 点击 **发送验证码**。
3. 去邮箱里查 6 位数字验证码（立即发送，通常几秒内到）。
4. 在下一屏输入验证码。
5. 客户端与后端校验后进入 *Authorising* 状态。
6. 成功后：首次会进入 Onboarding；后续启动直接进主窗口。

验证码过期就再申请一次。重发倒计时会显示在屏幕上。

### Google OAuth

1. 点击 **用 Google 登录**。
2. 系统浏览器打开 Google OAuth 授权页。
3. 同意后，Google 重定向到桌面客户端注册的 deep link。
4. 客户端接到重定向，用 code 换 session，进入 *Authorising*。

OAuth 更快，但需要已绑定 Google 账号。

## 登录产出什么

成功登录后：

- 后端 session token（存到 Profile Vault）。
- 后端签发的**Profile Vault Key**，只放在内存里。这是用来加密 `wallet.json` 的 AES-256-GCM 密钥。
- 本地 SQLite 中你的 Profile 记录。

要强调：后端**不会**接收或存储你的钱包密钥。钱包创建发生在 Onboarding——登录**之后**——并且完全在本地完成。

## 激活码

某些部署渠道（如封闭预览）需要激活码。需要激活时：

- 登录后、Onboarding 完成前，会出现 **Activation** 屏。
- 粘贴激活码并确认。
- 后端记录激活与账号的关联。

激活后不需要再次输入。换设备时同账号即可激活迁移。

不需要激活的渠道会完全跳过这一屏。

## Session 生命周期

- Session token 存在 Profile Vault 里，由后端按自己的节奏刷新。
- Vault Key（用于解密 `wallet.json`）**每次登录时重新签发**。仅保存在内存；退出登录、切换 Profile、关闭应用时被擦除。
- 因此：关闭并重新打开应用会保持登录态；显式退出登录后，再用钱包就必须重新登录。

## 退出登录

Settings → Account → **Sign out**：

- 把 session token 从磁盘移除。
- 从内存擦除 Vault Key。
- 本地 SQLite、记忆、加密的 `wallet.json` 都保留——但你不再登录就解密不了。

如果想彻底清理，把 `~/Library/Application Support/Ghast/profiles/<profileId>/` 也一起删。

## 常见失败模式

| 症状 | 可能原因 | 处理 |
| --- | --- | --- |
| 收不到验证码 | 进了垃圾邮件 / 邮件商较慢 | 等 30 秒、查垃圾邮箱，然后重新申请 |
| 5 分钟后输入验证码被拒 | 过期 | 重新申请 |
| Google OAuth 没回到应用 | macOS deep link handler 未注册 | 重开应用再试；若持续出现，见 [故障排查：登录与激活](/cn/troubleshooting/login-and-activation) |
| 提示需要激活码但你没有 | 你在需要激活的渠道里 | 联系激活源（Discord / X 客服） |
| 重启后钱包不可用 | 应用被强制退出，Vault Key 没重新签发 | 重新登录 |

## 相关页面

- [首次启动与引导](/cn/desktop/first-run)
- [Profile 与工作区](/cn/desktop/profiles-and-workspaces)
- [故障排查：登录与激活](/cn/troubleshooting/login-and-activation)
- [安全：钱包与密钥托管](/cn/security/wallet-key-custody)
