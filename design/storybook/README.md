# Storybook

https://storybook.skydiiv.space

This package documents and demonstrates the SkyDIIV design system.

The components, tokens, and styles themselves live in the [UI package](../ui). This Storybook imports them from `@emmanuelviniciusdev/SkyDIIV-UI` to provide interactive documentation.

## Development

```sh
# Start the local Storybook server
pnpm storybook
```

## Testing

Storybook runs visual and interaction tests using Vitest and Playwright.

```sh
# Run tests
pnpm --filter SkyDIIV-Storybook test
```

## Deployment

Storybook is built statically and deployed to Cloudflare Pages automatically via GitHub Actions on merges to `main`.

```sh
# Build the static site locally
pnpm build-storybook
```
