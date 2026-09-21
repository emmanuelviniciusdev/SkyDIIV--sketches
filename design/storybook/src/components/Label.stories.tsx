import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import {
  Input,
  Label,
} from '@emmanuelviniciusdev/SkyDIIV-UI'

const meta = {
  title: 'Forms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'display name',
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('display name')).toBeVisible()
  },
}

export const WithControl: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="email">email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText('email')).toBeVisible()
  },
}
