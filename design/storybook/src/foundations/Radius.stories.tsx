import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { RadiusScale } from './previews/RadiusScale'

const meta = {
  title: 'Foundations/Radius',
  component: RadiusScale,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RadiusScale>

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'border radius' })).toBeVisible()
    await expect(canvas.getByText('radius-md')).toBeVisible()
    await expect(canvas.getByText(/4px/)).toBeVisible()
    await expect(canvas.getByText('radius-lg')).toBeVisible()
  },
}
