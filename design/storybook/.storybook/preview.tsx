import type { Preview } from '@storybook/nextjs-vite'

import { colors } from '../src/foundations/tokens'

import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'background',
      values: [
        { name: 'background', value: colors.background },
        { name: 'card', value: colors.card },
        { name: 'grain', value: colors.grain },
      ],
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          [
            'Colors',
            'Typography',
            'Logos',
            'Spacing',
            'Radius',
            'Shadows',
            'Textures',
            'Cursor',
            'Layout',
            'Breakpoints',
          ],
          'Components',
          ['Button', 'Badge', 'Card', 'Avatar'],
          'Forms',
          ['Label', 'Input', 'Select', 'Checkbox'],
          'Feedback',
          ['Toast', 'EmptyState', 'Loading'],
          'Navigation',
          ['Navbar', 'Tabs'],
        ],
      },
    },
    a11y: {
      test: 'error',
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

export default preview
