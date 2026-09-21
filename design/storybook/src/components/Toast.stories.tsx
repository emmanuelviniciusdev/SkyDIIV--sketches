import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'
import { ArrowCounterClockwise } from '@phosphor-icons/react'

import {
  Button,
  Toast,
  ToastAction,
  ToastBody,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from '@emmanuelviniciusdev/skydiiv-ui'

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toast>
      <ToastBody>
        <ToastTitle>preferences saved</ToastTitle>
        <ToastDescription>your preferences were updated.</ToastDescription>
      </ToastBody>
      <ToastClose />
    </Toast>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeVisible()
    await expect(canvas.getByText('preferences saved')).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'dismiss' })).toBeVisible()
  },
}

export const Destructive: Story = {
  render: () => (
    <Toast variant="destructive">
      <ToastBody>
        <ToastTitle>could not save</ToastTitle>
        <ToastDescription>try again in a moment.</ToastDescription>
      </ToastBody>
      <ToastClose />
    </Toast>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('alert')).toBeVisible()
    await expect(canvas.getByText('could not save')).toBeVisible()
  },
}

export const WithAction: Story = {
  render: () => (
    <Toast>
      <ToastBody>
        <ToastTitle>piece removed</ToastTitle>
        <ToastDescription>you can bring it back.</ToastDescription>
      </ToastBody>
      <ToastAction>
        <Button variant="ghost" size="sm" icon={ArrowCounterClockwise}>
          undo
        </Button>
      </ToastAction>
      <ToastClose />
    </Toast>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'undo' })).toBeVisible()
  },
}
