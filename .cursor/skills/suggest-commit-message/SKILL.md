---
name: suggest-commit-message
description: >-
  Suggest a Conventional Commits message from the current git diff without
  creating a commit. Use when the user asks for a commit message, a conventional
  commit, or help naming staged or unstaged changes.
---

# Suggest commit message

Propose one Conventional Commits subject for the current working tree. Do not stage files. Do not create a commit.

## Inspect

Run these in parallel:

```bash
git status
git diff
git diff --staged
git log -10 --pretty=format:'%s'
```

Prefer **staged** changes when anything is staged. Otherwise use the unstaged diff. If both exist and they are unrelated, say so and propose one message per logical change.

If there are no changes, say so and stop.

## Format

```
type(scope): subject
```

Omit `(scope)` when the change is repo-wide or has no clear package.

| Part | Rules |
|------|--------|
| `type` | `feat` `fix` `docs` `style` `refactor` `perf` `test` `build` `ci` `chore` `revert` |
| `scope` | `ui` for `design/ui`, `storybook` for `design/storybook`, `ci` for `.github/workflows` |
| breaking | Put `!` after `type` or `type(scope)` when the change is breaking |
| `subject` | en-US, imperative, lowercase first letter, no trailing period, about 72 characters |

Match this repository's history: subject line only. Add a body only for a breaking change, with a `BREAKING CHANGE:` footer.

## Examples

```
feat(storybook): add emoticons repository
fix(ui): resolve emoticon GIF URLs from package assets
chore(storybook): replace the SkyDIIV mark with the Storybook logo
refactor(ci)!: split verification by package and rename to skydiiv-ui/skydiiv-storybook
docs: update README.md
```

## Output

Show exactly one primary suggestion in a fenced block. If the diff mixes unrelated work, list alternatives underneath. Do not commit.
