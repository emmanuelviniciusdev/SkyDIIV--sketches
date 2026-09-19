import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { LayoutRecipes } from './previews/LayoutRecipes'

const meta = {
  title: 'Foundations/Layout',
  component: LayoutRecipes,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LayoutRecipes>

export default meta
type Story = StoryObj<typeof meta>

export const Recipes: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'layout' })).toBeVisible()
    await expect(canvas.getByText('linen')).toBeVisible()
    const save = canvas.getByRole('button', { name: 'save' })
    await expect(save).toBeVisible()
    await expect(save.querySelector('svg')).toBeTruthy()
  },
}
