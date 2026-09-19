import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn, expect, within, userEvent } from 'storybook/test'
import { ArrowRight, Plus } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'continue',
    icon: ArrowRight,
    iconPosition: 'left',
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
    },
    disabled: { control: 'boolean' },
    icon: { control: false },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'continue' })
    await expect(button).toBeVisible()
    await expect(button.querySelector('svg')).toBeTruthy()
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default" icon={ArrowRight}>
        default
      </Button>
      <Button variant="primary" icon={ArrowRight}>
        primary
      </Button>
      <Button variant="outline" icon={ArrowRight}>
        outline
      </Button>
      <Button variant="ghost" icon={ArrowRight}>
        ghost
      </Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm" icon={ArrowRight}>
        small
      </Button>
      <Button size="default" icon={ArrowRight}>
        default
      </Button>
      <Button size="lg" icon={ArrowRight}>
        large
      </Button>
    </div>
  ),
}

export const Icons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="icon-sm" icon={Plus} aria-label="add small" />
      <Button size="icon" icon={Plus} aria-label="add" />
      <Button size="icon-lg" icon={Plus} aria-label="add large" />
      <Button icon={Plus}>with label</Button>
      <Button icon={ArrowRight} iconPosition="right">
        access
      </Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const access = canvas.getByRole('button', { name: 'access' })
    await expect(access.querySelector('svg')).toBe(access.lastElementChild)
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'unavailable',
    icon: ArrowRight,
  },
}
