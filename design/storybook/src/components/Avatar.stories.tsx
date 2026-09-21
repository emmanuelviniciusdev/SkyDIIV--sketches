import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { Avatar } from '@emmanuelviniciusdev/skydiiv-ui'

const EXAMPLE_NAME = 'yelyahwilliams'
const EXAMPLE_ALT = 'photo of yelyahwilliams'
const EXAMPLE_PHOTO = '/hayley.png'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: EXAMPLE_NAME,
    alt: EXAMPLE_ALT,
    size: 'lg',
    className: 'size-48 text-5xl',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Photo: Story = {
  args: {
    src: EXAMPLE_PHOTO,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const photo = canvas.getByRole('img', { name: EXAMPLE_ALT })
    await expect(photo).toBeVisible()
    await expect(photo).toHaveAttribute('src', EXAMPLE_PHOTO)
  },
}

export const Initial: Story = {
  args: {
    src: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const mark = canvas.getByRole('img', { name: EXAMPLE_ALT })
    await expect(mark).toBeVisible()
    await expect(canvas.getByText('Y')).toBeVisible()
    await expect(getComputedStyle(mark).backgroundColor).toBe('rgb(177, 177, 164)')
  },
}

export const LetterColors: Story = {
  render: () => (
    <div className="flex flex-nowrap items-end gap-3">
      {['S', 'k', 'y', 'D', 'I', 'V', 'H', 'W'].map((letter) => (
        <Avatar key={letter} size="lg" name={letter} alt={`letter ${letter}`} />
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img', { name: 'letter S' })).toBeVisible()
    await expect(canvas.getByRole('img', { name: 'letter y' })).toBeVisible()
    await expect(canvas.getByRole('img', { name: 'letter H' })).toBeVisible()
    await expect(canvas.getByRole('img', { name: 'letter W' })).toBeVisible()
    const yMark = canvas.getByRole('img', { name: 'letter y' })
    await expect(getComputedStyle(yMark).backgroundColor).toBe('rgb(177, 177, 164)')
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm" src={EXAMPLE_PHOTO} name={EXAMPLE_NAME} alt={EXAMPLE_ALT} />
      <Avatar size="default" src={EXAMPLE_PHOTO} name={EXAMPLE_NAME} alt={EXAMPLE_ALT} />
      <Avatar size="lg" src={EXAMPLE_PHOTO} name={EXAMPLE_NAME} alt={EXAMPLE_ALT} />
      <Avatar size="sm" name={EXAMPLE_NAME} alt={EXAMPLE_ALT} />
      <Avatar size="default" name={EXAMPLE_NAME} alt={EXAMPLE_ALT} />
      <Avatar size="lg" name={EXAMPLE_NAME} alt={EXAMPLE_ALT} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getAllByRole('img', { name: EXAMPLE_ALT })).toHaveLength(6)
    await expect(canvas.getAllByText('Y')).toHaveLength(3)
  },
}
