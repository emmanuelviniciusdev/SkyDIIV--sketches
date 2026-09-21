import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within, userEvent } from 'storybook/test'

import {
  Input,
  Label,
} from '@emmanuelviniciusdev/skydiiv-ui'

const meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'your name',
    defaultValue: '',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search'],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('your name')
    await expect(input).toBeVisible()
    await userEvent.type(input, 'sky')
    await expect(input).toHaveValue('sky')
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="display-name">display name</Label>
      <Input id="display-name" placeholder="your name" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('display name')
    await expect(input).toBeVisible()
  },
}

export const Invalid: Story = {
  args: {
    defaultValue: 'bad value',
    'aria-invalid': true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'locked',
  },
}
