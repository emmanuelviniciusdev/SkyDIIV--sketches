import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { GrainLayers } from './previews/GrainLayers'

const meta = {
  title: 'Foundations/Textures',
  component: GrainLayers,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof GrainLayers>

export default meta
type Story = StoryObj<typeof meta>

export const Grain: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'textures' })).toBeVisible()
    await expect(canvas.getByText('page grain')).toBeVisible()
    await expect(canvas.getByText('surface grain')).toBeVisible()
  },
}
