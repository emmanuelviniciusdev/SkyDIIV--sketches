import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within, userEvent, fn } from 'storybook/test'
import { MagnifyingGlass, Plus, TShirt } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'
import {
  EmptyState,
  EmptyStateAction,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from '@/components/ui/empty-state'

const onAddPieces = fn()

const meta = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <EmptyState className="w-[360px]">
      <EmptyStateIcon>
        <TShirt weight="light" aria-hidden />
      </EmptyStateIcon>
      <EmptyStateTitle>no pieces yet</EmptyStateTitle>
      <EmptyStateDescription>
        add pieces to start building this space.
      </EmptyStateDescription>
    </EmptyState>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('no pieces yet')).toBeVisible()
    await expect(canvas.getByText('add pieces to start building this space.')).toBeVisible()
  },
}

export const WithAction: Story = {
  render: () => (
    <EmptyState className="w-[360px]">
      <EmptyStateIcon>
        <TShirt weight="light" aria-hidden />
      </EmptyStateIcon>
      <EmptyStateTitle>no pieces yet</EmptyStateTitle>
      <EmptyStateDescription>
        add pieces to start building this space.
      </EmptyStateDescription>
      <EmptyStateAction>
        <Button variant="primary" icon={Plus} onClick={onAddPieces}>
          add pieces
        </Button>
      </EmptyStateAction>
    </EmptyState>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const action = canvas.getByRole('button', { name: 'add pieces' })
    await userEvent.click(action)
    await expect(onAddPieces).toHaveBeenCalled()
  },
}

export const NoResults: Story = {
  render: () => (
    <EmptyState className="w-[360px]">
      <EmptyStateIcon>
        <MagnifyingGlass weight="light" aria-hidden />
      </EmptyStateIcon>
      <EmptyStateTitle>no matches</EmptyStateTitle>
      <EmptyStateDescription>
        try a different search or clear the filters.
      </EmptyStateDescription>
    </EmptyState>
  ),
}
