import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { TypeSpecimen } from './previews/TypeSpecimen'

const meta = {
  title: 'Foundations/Typography',
  component: TypeSpecimen,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TypeSpecimen>

export default meta
type Story = StoryObj<typeof meta>

export const Specimen: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'typography' })).toBeVisible()
    await expect(canvas.getByText('Inter')).toBeVisible()
    await expect(canvas.getByText(/SkyDIIV/)).toBeVisible()
    await expect(canvas.getByRole('heading', { name: 'lowercase' })).toBeVisible()
  },
}
