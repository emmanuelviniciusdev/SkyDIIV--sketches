---
name: bump-version-skydiiv-ui
description: >-
  Set the @emmanuelviniciusdev/skydiiv-ui package version in
  design/ui/package.json to an explicit semver. Use when the user asks to bump,
  set, or release the skydiiv-ui or UI library version.
---

# Bump skydiiv-ui version

Update only the `version` field of `design/ui/package.json` (`name`: `@emmanuelviniciusdev/skydiiv-ui`). Do not change `skydiiv-storybook`, lockfiles, or git history.

That version is what GitHub Packages publishes on merge to `main`. Do not publish from this skill.

## Target version

The user must give an explicit version such as `1.1.0`. If they did not, ask for it and stop.

Accept `MAJOR.MINOR.PATCH` with an optional prerelease (`1.1.0-rc.1`). Reject anything else.

## Steps

1. Read `design/ui/package.json` and note the current `version`.
2. If it already equals the target, say so and stop.
3. Replace only that `version` string. Leave every other field unchanged.
4. Re-read the file and confirm the new `version`.

## Example

User: bump skydiiv-ui to 1.1.0

Current `"version": "1.0.0"` → write `"version": "1.1.0"` in `design/ui/package.json` only.

## Output

Report current version → new version and the file changed. Do not create a commit. If the user also wants a commit message, use the `suggest-commit-message` skill.
