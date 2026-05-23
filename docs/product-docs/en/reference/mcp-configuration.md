---
title: MCP Configuration
description: The shape of the MCP server config — fields, transports, and special features.
---

# MCP Configuration

This page is the reference for the MCP server config schema. Operational setup is in [MCP Servers](/en/desktop/mcp-servers).

## Top-level shape

MCP configuration lives in Settings → MCP and is persisted to the profile's SQLite database. Conceptually:

```json
{
  "servers": {
    "<name>": { /* server config */ }
  }
}
```

Each server has a unique `name`. The name becomes the prefix for tool IDs (`<name>__<tool>`) in the composer's tool toggle.

## Stdio server

For a local command:

```json
{
  "servers": {
    "filesystem": {
      "command": "/usr/local/bin/fs-mcp",
      "args": ["--root", "/Users/me/Documents"],
      "env": {
        "DEBUG": "1",
        "TOKEN": "$KEYCHAIN:fs-token"
      },
      "cwd": "/Users/me/Documents",
      "enabled": true
    }
  }
}
```

| Field | Required | Notes |
| --- | --- | --- |
| `command` | yes | Path to the executable |
| `args` | no | Argv list |
| `env` | no | Env vars; `$KEYCHAIN:name` reads from Keychain, `$VAULT:name` reads from Profile Vault |
| `cwd` | no | Working directory |
| `enabled` | no | Defaults to true |

## URL server

For a remote MCP endpoint:

```json
{
  "servers": {
    "remote-api": {
      "url": "https://mcp.example.com/api",
      "transport": "sse",
      "headers": {
        "Authorization": "Bearer $VAULT:my-token"
      },
      "enabled": true
    }
  }
}
```

| Field | Required | Notes |
| --- | --- | --- |
| `url` | yes | HTTPS endpoint |
| `transport` | no | `sse` (default for legacy MCPs), `streamable-http`, or `http` |
| `headers` | no | Static or vault-interpolated header values |
| `oauth` | no | If present, triggers an OAuth flow on first connect; resulting token stored in vault |
| `enabled` | no | Defaults to true |

## OAuth-enabled URL server

```json
{
  "servers": {
    "calendar-mcp": {
      "url": "https://calendar.example.com/mcp",
      "oauth": {
        "authorizationUrl": "https://calendar.example.com/oauth/authorize",
        "tokenUrl": "https://calendar.example.com/oauth/token",
        "clientId": "ghast-desktop",
        "scopes": ["calendar.read", "calendar.write"]
      },
      "enabled": true
    }
  }
}
```

On Connect, Ghast:

1. Opens the `authorizationUrl` in a system browser.
2. Captures the redirect.
3. Exchanges code for token at `tokenUrl`.
4. Stores the token (and refresh token if any) in the Profile Vault.
5. Adds the token to every subsequent request.

## Tool defaults

After a server is connected, its tools auto-populate in the composer's tool toggle. Defaults can be set per-server:

```json
{
  "servers": {
    "filesystem": {
      "command": "/usr/local/bin/fs-mcp",
      "defaultEnabled": ["read_file", "list_dir"],
      "defaultDisabled": ["delete_file"]
    }
  }
}
```

These prefill the toggle state. Users can still override per turn.

## Resources

If the server exposes resources, they appear in the composer's `@` mention picker as `@<servername>/<resource>`. Resource access is read-only.

## Secrets handling

Vault interpolation (`$VAULT:name`) and Keychain lookup (`$KEYCHAIN:name`) keep tokens out of the JSON. Tokens written by an OAuth flow are stored encrypted, not in the JSON config visible in Settings.

## Common patterns

| Pattern | Example |
| --- | --- |
| Local CLI wrapper | `"command": "/usr/local/bin/git-mcp"` |
| Python script | `"command": "python", "args": ["-m", "mymcp"]` |
| Node script | `"command": "node", "args": ["/path/to/mcp.js"]` |
| Bun-bundled script | `"command": "/opt/homebrew/bin/bun", "args": ["run", "/path/to/mcp.ts"]` |
| Hosted MCP (no OAuth) | `"url": "https://api.example.com/mcp", "headers": { "Authorization": "Bearer $VAULT:api-key" }` |
| Hosted MCP (OAuth) | `"url": "...", "oauth": { ... }` |

## Limits

- Max number of concurrently connected servers: practically uncapped, but performance degrades past ~20.
- Tools per server: no hard cap.
- Resources per server: same.

## Related pages

- [MCP Servers](/en/desktop/mcp-servers)
- [Settings Reference](/en/reference/settings-reference)
- [Troubleshooting: MCP Connection](/en/troubleshooting/mcp-connection)
