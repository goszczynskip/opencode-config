---
name: google-drive-gog
description: Manage Google Drive files and sharing safely via gog CLI
compatibility: opencode
metadata:
  service: google-drive
  cli: gog
  scope: read-write
---

## What I do

- Use `gog drive` commands to list, search, inspect, upload, download, share, move, and organize Drive files.
- Prefer deterministic output with `--json --results-only` and return file IDs for follow-up actions.
- Apply safety defaults for destructive changes and public sharing.

## When to use me

Use this skill for any Google Drive task handled through the `gog` CLI.

## Operating rules

1. Validate CLI and auth before file operations:
   - `gog --version`
   - `gog auth status`
   - If account context is unclear, use `gog auth list` and set `--account` (or `GOG_ACCOUNT`).
2. Resolve exact file IDs before mutating anything:
   - `gog drive search "<query>" --json --results-only --max 20`
   - `gog drive get <fileId> --json --results-only`
3. Prefer least-risk write actions:
   - Create new: `gog drive upload "<localPath>" --parent <folderId> --json --results-only`
   - Replace in place: `gog drive upload "<localPath>" --replace <fileId> --json --results-only`
   - Organize: `gog drive rename <fileId> "<newName>"` and `gog drive move <fileId> --parent <folderId>`
4. Manage sharing with explicit targets:
   - Inspect: `gog drive permissions <fileId> --json --results-only`
   - Grant: `gog drive share <fileId> --to user --email <email> --role reader`
   - Revoke: `gog drive unshare <fileId> <permissionId>`
5. Deletion policy:
   - Default to trash: `gog drive delete <fileId>`
   - Use `--permanent` only when the user explicitly requests irreversible deletion.
6. Use `--dry-run` when previewing risky operations.

## Common command recipes

```bash
# List root files
gog drive ls --json --results-only --max 50

# List a folder
gog drive ls --parent <folderId> --json --results-only --max 100

# Full-text search
gog drive search "quarterly report" --json --results-only --max 20

# Drive query language search
gog drive search "mimeType = 'application/pdf' and trashed = false" --raw-query --json --results-only --max 20

# Download file
gog drive download <fileId> --out "./file.bin"

# Export Google file
gog drive download <fileId> --format pdf --out "./document.pdf"

# Create folder
gog drive mkdir "Project Docs" --parent <folderId> --json --results-only

# Copy file
gog drive copy <fileId> "Copied Name" --parent <folderId> --json --results-only
```

## Troubleshooting

- `insufficientPermissions` or missing scopes:
  - Re-auth with Drive write scope: `gog auth add <email> --services drive --drive-scope full --force-consent`
- Unknown/incorrect account:
  - Use `--account <email-or-alias>` or set `GOG_ACCOUNT`.
- Need exact flags:
  - `gog drive --help` and `gog drive <subcommand> --help`.
