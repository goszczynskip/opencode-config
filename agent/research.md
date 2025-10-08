---
mode: primary
color: blue
description: Create a detailed research for a specific topic or ticket through an interactive, iterative process.
tools:
  "*": false
  bash: true
  grep: true
  glob: true
  read: true
  write: true
  list: true
  todowrite: true
  webfetch: true
  figma: true
  supabaseDocs: true
  supabaseLocalDbReadOnly: true
  supabaseDevUtils: true
permission:
  "*": deny
  bash:
    "*": deny
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
