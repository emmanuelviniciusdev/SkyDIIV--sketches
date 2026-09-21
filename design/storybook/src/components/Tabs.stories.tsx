import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within, userEvent } from 'storybook/test'
import { Images, Note, TShirt } from '@phosphor-icons/react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@emmanuelviniciusdev/skydiiv-ui'

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="pieces" className="w-80">
      <TabsList>
        <TabsTrigger value="pieces">pieces</TabsTrigger>
        <TabsTrigger value="looks">looks</TabsTrigger>
        <TabsTrigger value="notes">notes</TabsTrigger>
      </TabsList>
      <TabsContent value="pieces">saved garments in this space.</TabsContent>
      <TabsContent value="looks">composed outfits and capsules.</TabsContent>
      <TabsContent value="notes">short remarks beside the work.</TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const looks = canvas.getByRole('tab', { name: 'looks' })
    await expect(canvas.getByRole('tab', { name: 'pieces' })).toHaveAttribute(
      'data-state',
      'active',
    )
    await userEvent.click(looks)
    await expect(looks).toHaveAttribute('data-state', 'active')
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(
      'composed outfits and capsules.',
    )
  },
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="pieces" className="w-80">
      <TabsList>
        <TabsTrigger value="pieces">
          <TShirt weight="light" aria-hidden />
          pieces
        </TabsTrigger>
        <TabsTrigger value="looks">
          <Images weight="light" aria-hidden />
          looks
        </TabsTrigger>
        <TabsTrigger value="notes">
          <Note weight="light" aria-hidden />
          notes
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pieces">saved garments in this space.</TabsContent>
      <TabsContent value="looks">composed outfits and capsules.</TabsContent>
      <TabsContent value="notes">short remarks beside the work.</TabsContent>
    </Tabs>
  ),
}

export const OnASurface: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>archive</CardTitle>
        <CardDescription>sections of a quiet page</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pieces">
          <TabsList>
            <TabsTrigger value="pieces">pieces</TabsTrigger>
            <TabsTrigger value="looks">looks</TabsTrigger>
            <TabsTrigger value="notes">notes</TabsTrigger>
          </TabsList>
          <TabsContent value="pieces" className="pt-3">
            saved garments in this space.
          </TabsContent>
          <TabsContent value="looks" className="pt-3">
            composed outfits and capsules.
          </TabsContent>
          <TabsContent value="notes" className="pt-3">
            short remarks beside the work.
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="pieces" className="w-80">
      <TabsList>
        <TabsTrigger value="pieces">pieces</TabsTrigger>
        <TabsTrigger value="looks">looks</TabsTrigger>
        <TabsTrigger value="notes" disabled>
          notes
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pieces">saved garments in this space.</TabsContent>
      <TabsContent value="looks">composed outfits and capsules.</TabsContent>
    </Tabs>
  ),
}
