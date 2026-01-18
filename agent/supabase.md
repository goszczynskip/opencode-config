---
description: Supabase DB agent for docs, local DB reads/writes, and dev utils
mode: subagent
permission:
  "*": deny
  "supabaseDocs_*": allow
  "supabaseLocalDbReadOnly_*": allow
  "supabaseLocalDbReadWrite_*": allow
  "supabaseDevUtils_*": allow
---
Use Supabase MCP tools for docs, DB reads, DB writes, and development utilities.
