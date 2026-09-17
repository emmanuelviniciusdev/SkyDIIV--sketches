import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { ShadowLayers } from './previews/ShadowLayers'

const meta = {
  title: 'Foundations/Shadows',
  component: ShadowLayers,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ShadowLayers>

export default meta
type Story = StoryObj<typeof meta>

export const Layers: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'shadows' })).toBeVisible()
    await expect(canvas.getAllByText(/shadow-none/).length).toBeGreaterThan(0)
    await expect(canvas.getByText(/#ECEAE4/)).toBeVisible()
  },
}
