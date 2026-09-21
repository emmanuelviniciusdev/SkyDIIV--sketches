# SkyDIIV--sketches

## Language

All documentation, UI copy, comments, and source in this repository MUST be written in **en-US**. Do not add Portuguese (or any other locale) to docs, stories, MDX, READMEs, or code comments.

## UI package

`design/ui/` is the only source of truth for design-system components, tokens, emoticons, and component styles. Publish that package as `@emmanuelviniciusdev/skydiiv-ui` on GitHub Packages. Storybook under `design/storybook` documents the package and must import from it. Do not add or edit component implementations in Storybook.
