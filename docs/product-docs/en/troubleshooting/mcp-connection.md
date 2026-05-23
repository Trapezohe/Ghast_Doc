---
title: MCP Connection
description: Diagnosing MCP server connect, OAuth, and tool issues.
---

# MCP Connection

By symptom.

## Server fails to connect — stdio

| Likely cause | Action |
| --- | --- |
| `command` path doesn't exist | Verify the absolute path; check `which <command>` in Terminal |
| Command requires env vars not in config | Add to `env` block; use `$KEYCHAIN:name` for secrets |
| Subprocess exits immediately | Run the command manually with the same args; read stderr |
| Wrong working directory | Set `cwd` explicitly |

## Server fails to connect — URL

| Likely cause | Action |
| --- | --- |
| URL unreachable | `curl <url>` from the same machine; check firewall / proxy |
| Wrong transport | Try `sse`, `streamable-http`, then `http` |
| TLS error | The server's cert must be valid; self-signed certs are not accepted |
| Wrong header / token | Verify the header format the server expects |

## OAuth flow fails to complete

| Likely cause | Action |
| --- | --- |
| Browser doesn't return to Ghast | Same root cause as Google OAuth — Ghast's deep-link handler may need re-registration; reinstall Ghast |
| Mismatched redirect URI | The OAuth provider's redirect must match Ghast's deep link |
| Wrong scopes | Verify `scopes` array against the provider's documentation |

## Tools don't appear after connect

| Likely cause | Action |
| --- | --- |
| Server connected but failed `tools/list` call | Restart the server; check stderr for MCP errors |
| Tool registration race | Reopen the composer; tools refresh on open |
| `defaultDisabled` list excludes them | Settings → MCP → [server] → enable in tool defaults |

## Tool calls return errors

| Likely cause | Action |
| --- | --- |
| Server-side error (real failure) | Inspect the error card in the chat — server's message verbatim |
| Permission missing on the server's side (e.g. file path outside allowed roots) | Reconfigure server allowed paths |
| Timeout | Long-running tool calls have a per-call timeout; chunked tools are better |

## Connect succeeds but tool list is empty

| Likely cause | Action |
| --- | --- |
| Server doesn't expose any tools | Some MCPs are resource-only; check what the server provides |
| Manifest mismatch | Update the server to current MCP spec |

## OAuth token has expired

| Likely cause | Action |
| --- | --- |
| Access token aged out | Refresh token should auto-renew; if it doesn't, click **Reconnect** in Settings |
| Refresh token revoked from the provider's side | Re-run the OAuth flow |

## Stdio server eats CPU

| Likely cause | Action |
| --- | --- |
| Misbehaving subprocess | Identify with `ps aux | grep <command>`; restart or remove |
| Tight polling loop in the server | Server-side bug — report to the server's maintainers |

## Related pages

- [MCP Servers](/en/desktop/mcp-servers)
- [Reference: MCP Configuration](/en/reference/mcp-configuration)
- [ACP & Agent Communication](/en/desktop/acp)
