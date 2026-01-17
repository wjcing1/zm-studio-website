---
description: Auto-approve common safe commands
---

The following commands are safe to auto-run without user approval:

## Git Commands

// turbo-all

- `git status`
- `git add -A` or `git add .`
- `git commit -m "..."`
- `git log -n N`
- `git diff`
- `git branch`
- `git stash`

## NPM/Node Commands

// turbo-all

- `npm run dev`
- `npm run build`
- `npm install`
- `npm test`
- `npx ...`

## File Operations (Read-Only)

// turbo-all

- `ls`, `dir`
- `cat`, `type`
- `pwd`

## Development Server

// turbo-all

- Starting dev servers
- Running linters
- Running formatters
