import path from 'node:path'
import { fileURLToPath } from 'node:url'

import type { StorybookConfig } from '@storybook/nextjs-vite'
import { mergeConfig } from 'vite'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(dirname, '../../..')

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: [
    '../public',
    {
      from: '../../ui/src/assets/emoticons',
      to: '/emoticons',
    },
  ],
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      server: {
        fs: {
          allow: [repoRoot],
        },
      },
    })
  },
}

export default config
