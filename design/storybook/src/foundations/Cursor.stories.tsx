import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { CursorTrail } from './previews/CursorTrail'

const meta = {
  title: 'Foundations/Cursor',
  component: CursorTrail,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CursorTrail>

export default meta
type Story = StoryObj<typeof meta>

export const Trail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'cursor' })).toBeVisible()
    await expect(canvas.getByRole('heading', { name: 'mark' })).toBeVisible()
    await expect(canvas.getByText('move the pointer across this field')).toBeVisible()
  },
}
