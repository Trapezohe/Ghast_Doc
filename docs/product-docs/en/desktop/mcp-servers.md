---
title: MCP Servers
description: Connect Model Context Protocol servers to expose external tools to the agent.
---

# MCP Servers

Model Context Protocol (MCP) is an open protocol for exposing tools and resources from external processes to an AI agent. Ghast is a first-class MCP client — you can connect any MCP-compatible server and its tools immediately become available in the composer's tool toggle.

## What you can connect

Two configuration styles:

### Stdio servers (local subprocess)

A command the desktop client spawns as a subprocess; communication is over stdin/stdout.

```json
{
  "servers": {
    "postgres": {
      "command": "/usr/local/bin/postgres-mcp",
      "args": ["--db", "production"],
      "env": { "PGPASSWORD": "$KEYCHAIN:postgres" }
    }
  }
}
```

Best for local tooling — file-system, database, internal CLIs, custom shims.

### URL servers (HTTP-based)

Remote MCP servers reached over HTTPS, with one of three transports:

| Transport | When it's used |
| --- | --- |
| **SSE** | Older HTTP-based MCP servers with Server-Sent Events |
| **Streamable HTTP** | Newer MCP servers using chunked HTTP streaming |
| **Plain HTTP** | Simple request/response MCP endpoints |

```json
{
  "servers": {
    "remote-api": {
      "url": "https://mcp.example.com/api",
      "headers": { "Authorization": "Bearer $VAULT:my-token" }
    }
  }
}
```

## Setting up a server

1. **Open** Settings → MCP.
2. **Click Add Server** and pick stdio or URL.
3. **Fill in** the command / URL and any auth headers or env vars.
4. **Test connection.** Ghast performs an `initialize` handshake and lists discovered tools.
5. **Save.** The server is now active.

If the server requires OAuth (some hosted MCPs do):

1. Click Connect to open the OAuth flow in a system browser.
2. Authorise in the third-party UI.
3. Return to Ghast — the OAuth token is captured automatically and stored in the Profile Vault.

## How tools appear in the composer

Once a server is connected:

- Its tools appear in the composer's tool toggle as `<servername>__<toolname>`.
- The agent can call them like any built-in tool.
- Results are rendered as collapsible cards in the chat.

You can toggle individual tools on/off per turn, or set defaults in Settings → MCP.

## Resources

MCP also supports *resources* — read-only blobs the server makes available (files, docs, dashboards). Resources from connected servers can be referenced in chat via the `@` mention picker, and the agent can read them as context.

## Removing or rotating a server

| Action | Effect |
| --- | --- |
| **Disable** | Tools and resources are hidden in the composer; subprocess keeps running until next restart |
| **Remove** | Subprocess killed, tools removed, server entry deleted |
| **Rotate auth** | Edit the env var or header value and reconnect |

OAuth tokens issued via Ghast's OAuth flow can be revoked from the third-party server's side; the next call will fail and prompt re-auth.

## Security notes

- MCP servers run with the same privileges as the desktop app (no extra sandbox).
- An stdio server is a subprocess; assess its trust like you would any local binary.
- A URL server sees only what the agent sends in tool calls. It does not have access to your memories or wallet.
- OAuth tokens, like other secrets, sit encrypted in the Profile Vault.

See [Security: Local Execution Boundary (covered in security pages)](/en/security/overview) for the full model.

## Related pages

- [Chat & Composer](/en/desktop/chat-and-composer)
- [Skills](/en/desktop/skills)
- [ACP & Agent Communication](/en/desktop/acp)
- [Reference: MCP Configuration](/en/reference/mcp-configuration)
- [Troubleshooting: MCP Connection](/en/troubleshooting/mcp-connection)
