import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import {
  Card,
  LoadingEarth,
  Spinner,
} from '@emmanuelviniciusdev/SkyDIIV-UI'

const meta = {
  title: 'Feedback/Loading',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status', { name: 'loading...' })).toBeVisible()
    await expect(canvasElement.querySelector('[data-slot="spinner"]')).toBeTruthy()
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelectorAll('[data-slot="spinner"]').length).toBe(3)
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner />
      <span aria-hidden className="text-[13px] font-light tracking-[0.02em] text-muted-foreground">
        loading...
      </span>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status', { name: 'loading...' })).toBeVisible()
  },
}

export const OnCard: Story = {
  render: () => (
    <Card className="flex h-48 w-72 items-center justify-center">
      <Spinner size="lg" />
    </Card>
  ),
}

export const Earth: Story = {
  render: () => <LoadingEarth />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status', { name: 'loading...' })).toBeVisible()
    await expect(canvasElement.querySelector('img')).toBeTruthy()
  },
}
