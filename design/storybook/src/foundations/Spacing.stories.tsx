import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { SpacingScale } from './previews/SpacingScale'

const meta = {
  title: 'Foundations/Spacing',
  component: SpacingScale,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SpacingScale>

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'spacing' })).toBeVisible()
    await expect(canvas.getByText('space-1')).toBeVisible()
    await expect(canvas.getByText('8px')).toBeVisible()
    await expect(canvas.getByText(/space-inset-card 20px/)).toBeVisible()
  },
}
