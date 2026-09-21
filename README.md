![](./assets/sky+cole.png)

I created this repo to share everything I think is worth making public about the SkyDIIV project that isn't directly related to the backend side (check out the [backstage repo](https://github.com/emmanuelviniciusdev/SkyDIIV--backstage) for that). Feel free to poke around :v

### Hyperlinks
- https://skydiiv.space
- https://storybook.skydiiv.space

### Packages

| Path | Role |
| --- | --- |
| [`design/ui/`](./design/ui) | Design-system source of truth. Published to GitHub Packages as `@emmanuelviniciusdev/SkyDIIV-UI`. |
| [`design/storybook/`](./design/storybook) | Storybook docs and visual tests. Imports components from `design/ui/`. |

```sh
pnpm install
pnpm --filter @emmanuelviniciusdev/SkyDIIV-UI test
pnpm storybook
```

Install the UI package from GitHub Packages with a token that has `read:packages`. See [`design/ui/README.md`](./design/ui/README.md).
