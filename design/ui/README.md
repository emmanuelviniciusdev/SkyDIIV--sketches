# User Interfaces

The main components, tokens, and styles of the SkyDIIV design system.

## Install

GitHub Packages needs a token with `read:packages`. Add a project `.npmrc`:

```
@emmanuelviniciusdev:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

```sh
pnpm add @emmanuelviniciusdev/SkyDIIV-UI
```

Peer dependencies: `react`, `react-dom`, and Tailwind CSS v4.

The package ships TypeScript source. Next.js apps should transpile it:

```ts
const nextConfig = {
  transpilePackages: ['@emmanuelviniciusdev/SkyDIIV-UI'],
}
```

Import Inter Variable alongside the package styles. `@fontsource-variable/inter` is installed with this package.

## Usage

Import the stylesheet next to Tailwind, then import components from the package:

```css
@import "tailwindcss";
@import "@fontsource-variable/inter/wght.css";
@import "@fontsource-variable/inter/wght-italic.css";
@import "@emmanuelviniciusdev/SkyDIIV-UI/styles.css";
```

```tsx
import { Button } from '@emmanuelviniciusdev/SkyDIIV-UI'

export function Example() {
  return <Button variant="primary">continue</Button>
}
```

Tokens live in the same package:

```ts
import { colors, spacing, typography } from '@emmanuelviniciusdev/SkyDIIV-UI'
```

KDDI pixel emoticons ship with the package. `src` is a resolved asset URL.

```tsx
import { Emoticon, emoticonById, emoticons } from '@emmanuelviniciusdev/SkyDIIV-UI'

export function Example() {
  return <Emoticon id="sparkles" />
}
```

Raw GIFs are also available as `@emmanuelviniciusdev/SkyDIIV-UI/emoticons/sparkles.gif`.

`styles.css` registers the theme, base layer, component CSS, and a Tailwind `@source` for this package. Apps that already import Tailwind should not import `tailwindcss` a second time through another entry.

The token-only file is `@emmanuelviniciusdev/SkyDIIV-UI/theme.css`.

## Test

From the repository root:

```sh
pnpm --filter @emmanuelviniciusdev/SkyDIIV-UI test
```

## Publish

Publishing runs from GitHub Actions on `main` when `design/ui/` changes, and can be started by hand. The workflow skips already-published versions. Local publish:

```sh
pnpm --filter @emmanuelviniciusdev/SkyDIIV-UI publish --access public
```
