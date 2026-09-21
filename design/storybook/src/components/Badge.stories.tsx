import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'
import { X } from '@phosphor-icons/react'

import { Badge } from '@emmanuelviniciusdev/SkyDIIV-UI'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'new',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'accent', 'cool', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('new')).toBeVisible()
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">default</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="accent">accent</Badge>
      <Badge variant="cool">cool</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="destructive">destructive</Badge>
    </div>
  ),
}

export const Tags: Story = {
  name: 'As tags',
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">linen</Badge>
      <Badge variant="secondary">oversized</Badge>
      <Badge variant="accent">
        vintage
        <button
          type="button"
          aria-label="remove vintage"
          className="rounded-sm text-foreground"
        >
          <X weight="light" aria-hidden />
        </button>
      </Badge>
      <Badge variant="cool">capsule</Badge>
    </div>
  ),
}
