import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { ColorSwatches } from './previews/ColorSwatches'

const meta = {
  title: 'Foundations/Colors',
  component: ColorSwatches,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ColorSwatches>

export default meta
type Story = StoryObj<typeof meta>

export const Palette: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'colors' })).toBeVisible()
    await expect(canvas.getByText('--background')).toBeVisible()
    await expect(canvas.getByText('--text-body')).toBeVisible()
    await expect(canvas.getAllByText('#F4F4F2').length).toBeGreaterThan(0)
    await expect(canvas.getAllByText('#B5BAC2').length).toBeGreaterThan(0)
    await expect(canvas.getByText('text-body on background')).toBeVisible()
  },
}
