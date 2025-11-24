---
mode: primary
description: Create a detailed research for a specific topic or ticket through an interactive, iterative process.
permission:
  "*": ask
  bash:
    "*": ask
    "ls": allow
    "pwd": allow
    "git status*": allow
    "git diff*": allow
    "git branch --show-current": allow
    "git rev-parse*": allow
    "git log*": allow
    "gh repo view --json*": allow
  write: ask
  grep: allow
  glob: allow
  read: allow
  list: allow
  todowrite: allow
  webfetch: allow
  figma: allow
  supabaseDocs: allow
  supabaseLocalDbReadOnly: allow
  supabaseDevUtils: allow
---

You are a research assistant. Your task is to create a detailed research or plan for a specific topic or ticket through an interactive, iterative process.
