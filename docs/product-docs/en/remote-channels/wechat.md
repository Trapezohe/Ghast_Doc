---
title: WeChat
description: Set up the WeChat bridge — scan a QR code with your personal WeChat account to link it to Ghast.
---

# WeChat

The WeChat bridge connects Ghast to a **personal WeChat account** through WeChat's official Clawbot endpoint (`ilinkai.weixin.qq.com`). There is **no Official Account, no mini-program, no webhook server, and no AppID / AppSecret** to set up — login is a one-shot QR scan from the WeChat mobile app, the same way you'd log into WeChat on a new device.

Once linked, messages from chats you've mapped flow into Ghast conversations; the agent's replies are sent back as regular WeChat messages from that account.

## Setup

### 1. Open the WeChat bridge panel

Settings → Channels → **Weixin** (Weixin bridge).

- Subtitle: *QR login, bridge runtime, model choice, and conversation routing.*

### 2. Generate the QR code

Click **Show QR code**. Ghast contacts the official Clawbot endpoint and renders a fresh QR code in the panel.

Status copy you'll see:

- *Generating QR code…* — Ghast is fetching the code.
- *Scan QR code with WeChat to log in.* — code is ready.
- *Waiting for scan…* — code is shown, no scan yet.
- *QR code expired* — refresh to generate a new one.

### 3. Scan it from your phone

Open the **WeChat mobile app**, tap the **+** in the top-right, choose **Scan**, and scan the QR code shown in Ghast. Confirm the device-link prompt on your phone the same way you would when logging into WeChat for desktop.

### 4. Wait for the login to complete

Ghast polls the Clawbot endpoint until the scan is confirmed. On success the status flips to **Logged in** and the bridge runtime starts polling for messages.

If the code times out before you finish scanning, click **Refresh** to generate a new one.

### 5. Map chats to a workspace

Once logged in, the panel lists the chats your account has access to (DMs and groups). For each chat:

- Pick a workspace.
- (Optional) set a default model — *AI model for WeChat conversations. Falls back to the global default if not set.*
- (Optional) override the system prompt or default skill set.
- Save.

Mapped chats now route messages into Ghast.

## Supported content

Because the bridge logs in as your account, content support tracks what the WeChat client itself supports for that account:

| Direction | Supported |
| --- | --- |
| Inbound text | Yes |
| Inbound images | Yes |
| Inbound voice | Yes (transcribed via Whisper) |
| Inbound files | Yes |
| Outbound text | Yes |
| Outbound voice | Yes (via TTS) |
| Outbound files / media | Yes (limited by what WeChat accepts from a regular client) |
| Reactions | Limited by the platform |

There is **no 48-hour customer-service window** to worry about — that constraint applies to Official Accounts, not to personal accounts. The bridge can send freely within WeChat's usual messaging rules.

## What the bridge sees

The bridge sees what your WeChat account sees:

- The DMs and groups your account is in.
- Their members and contents.
- Any group invitations and friend requests (typically left for you to confirm in the WeChat app).

It does **not** see chats your account isn't in.

## Privacy and logout

- The login session lives in the profile vault. It is not synced; it doesn't leave the machine.
- Logging out from Ghast (the **Logout** button) terminates the bridge session. It does **not** log out of WeChat itself on your phone.
- Logging out from your phone (WeChat → Settings → Account Security → Linked Devices → remove) will invalidate the bridge session on the next poll.

## Failure modes

| Symptom | Cause | Action |
| --- | --- | --- |
| QR doesn't render | Network can't reach `ilinkai.weixin.qq.com` | Check connectivity / proxy |
| QR expires before you scan | Normal — codes are short-lived | Click **Refresh** |
| Scan succeeds but bridge stays "Waiting…" | The confirm-on-phone step is pending | Tap **Confirm** on your phone's WeChat |
| Bridge drops shortly after login | The session was invalidated (e.g. you logged out elsewhere) | Re-scan from Ghast |
| Messages from a specific chat aren't routed | Chat isn't mapped | Map it in the panel |

## Related pages

- [Remote Channels Overview](/en/remote-channels/overview)
- [Approval Flow](/en/remote-channels/approval-flow)
- [Channel Support Matrix](/en/remote-channels/support-matrix)
