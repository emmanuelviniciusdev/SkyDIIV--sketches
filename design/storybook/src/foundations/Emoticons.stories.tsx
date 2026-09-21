import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { kddiEmoticons } from '@emmanuelviniciusdev/SkyDIIV-UI'
import { EmoticonGrid } from './previews/EmoticonGrid'

const meta = {
  title: 'Foundations/Emoticons',
  component: EmoticonGrid,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof EmoticonGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Repository: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'emoticons' })).toBeVisible()
    await expect(canvas.getByRole('heading', { name: 'sparkling star' })).toBeVisible()
    await expect(canvasElement.querySelector('[data-slot="sparkling-star"]')).toBeTruthy()
    await expect(canvasElement.querySelector('.sparkling-star')).toBeTruthy()
    await expect(canvas.getByText('sparkles')).toBeVisible()
    await expect(
      canvas.getByRole('heading', { name: 'Smileys & Emotion' }),
    ).toBeVisible()
    await expect(canvas.getByText('630 kddi marks')).toBeVisible()
    expect(canvasElement.querySelectorAll('img')).toHaveLength(kddiEmoticons.length)
  },
}
