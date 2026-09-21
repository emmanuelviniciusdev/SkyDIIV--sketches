import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'
import { Copy, ShareNetwork } from '@phosphor-icons/react'

import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@emmanuelviniciusdev/skydiiv-ui'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>preferences</CardTitle>
        <CardDescription>quiet surface for grouped content</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[13px] font-light">
          cards hold related fields, summaries, and short actions without competing
          with the page.
        </p>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('preferences')).toBeVisible()
    await expect(canvas.getByText('quiet surface for grouped content')).toBeVisible()
  },
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>access key</CardTitle>
        <CardDescription>invite someone into the space</CardDescription>
        <CardAction>
          <Button variant="default" size="sm" icon={Copy}>
            copy
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-[13px] font-light">skydiiv-invite-example</p>
      </CardContent>
      <CardFooter className="border-t">
        <Button variant="primary" size="sm" icon={ShareNetwork}>
          share
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[280px]">
      <CardContent>
        <p className="text-[13px] font-light">a minimal card with content padding only.</p>
      </CardContent>
    </Card>
  ),
}
