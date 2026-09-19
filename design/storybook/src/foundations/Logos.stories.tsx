import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { LogoMarks } from './previews/LogoMarks'

const meta = {
  title: 'Foundations/Logos',
  component: LogoMarks,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LogoMarks>

export default meta
type Story = StoryObj<typeof meta>

export const Marks: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'logos' })).toBeVisible()
    const productMarks = canvas.getAllByRole('img', { name: 'SkyDIIV' })
    const channelMarks = canvas.getAllByRole('img', { name: '#SkyCHNNLS' })
    await expect(productMarks).toHaveLength(2)
    await expect(channelMarks).toHaveLength(2)
    await expect(productMarks[0]).toBeVisible()
    await expect(channelMarks[0]).toBeVisible()
    const productLetter = productMarks[0].querySelector(
      '.skydiiv-logo__letter:not(.skydiiv-logo__hash)',
    )
    const channelSkyLetter = channelMarks[0].querySelector(
      '.skydiiv-logo__letter:not(.skydiiv-logo__hash)',
    )
    await expect(productLetter).not.toHaveClass('font-semibold')
    await expect(channelSkyLetter).not.toHaveClass('font-semibold')
    await expect(canvas.getByRole('heading', { name: 'letter fades' })).toBeVisible()
  },
}
