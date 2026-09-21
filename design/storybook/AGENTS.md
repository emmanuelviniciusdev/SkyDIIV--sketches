<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# SkyDIIV Storybook

## Language

All documentation, UI copy, comments, and source in this package MUST be written in **en-US**. Do not add Portuguese (or any other locale) to docs, stories, MDX, READMEs, or code comments.

## Source of truth

Component implementations, tokens, emoticons, and component styles live in `design/ui/`. This package documents and demonstrates them. Import from `@emmanuelviniciusdev/skydiiv-ui`. Do not add or edit component implementations here.

## Documentation

Storybook docs describe the design system: tokens, scale, and usage principles. Do not mention packages, loaders, CSS properties, fallback stacks, current product screens, or one-off layout exceptions. Use HTML tables in MDX (GitHub-flavored Markdown tables do not render).
