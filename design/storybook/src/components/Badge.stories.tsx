import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'
import { X } from '@phosphor-icons/react'

import { Badge, icon } from '@emmanuelviniciusdev/skydiiv-ui'

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
      options: ['default', 'secondary', 'destructive', 'outline', 'letter-s', 'letter-k', 'letter-y', 'letter-d', 'letter-i', 'letter-ii', 'letter-v'],
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
      <Badge variant="outline">outline</Badge>
      <Badge variant="destructive">destructive</Badge>
    </div>
  ),
}

export const LogoLetters: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="letter-s">s</Badge>
      <Badge variant="letter-k">k</Badge>
      <Badge variant="letter-y">y</Badge>
      <Badge variant="letter-d">d</Badge>
      <Badge variant="letter-i">i</Badge>
      <Badge variant="letter-ii">ii</Badge>
      <Badge variant="letter-v">v</Badge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('s')).toBeVisible()
    await expect(canvas.getByText('ii')).toBeVisible()
  },
}

export const Tags: Story = {
  name: 'As tags',
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">linen</Badge>
      <Badge variant="secondary">
        vintage
        <button
          type="button"
          aria-label="remove vintage"
          className="rounded-sm text-foreground"
        >
          <X weight={icon.weight} aria-hidden />
        </button>
      </Badge>
      <Badge variant="outline">capsule</Badge>
    </div>
  ),
}
