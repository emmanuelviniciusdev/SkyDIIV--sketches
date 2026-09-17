import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { BreakpointBands } from './previews/BreakpointBands'

const meta = {
  title: 'Foundations/Breakpoints',
  component: BreakpointBands,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BreakpointBands>

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'breakpoints' })).toBeVisible()
    await expect(canvas.getByText('lg')).toBeVisible()
    await expect(canvas.getByText('1024px')).toBeVisible()
    await expect(canvas.getByText(/content max-width 1120px/)).toBeVisible()
  },
}
