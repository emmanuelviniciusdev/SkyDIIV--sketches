import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within, userEvent } from 'storybook/test'

import {
  Label,
  ZoomControl,
  type ZoomControlProps,
} from '@emmanuelviniciusdev/skydiiv-ui'

function ZoomControlDemo({
  value: initialValue = 50,
  decrementAriaLabel = 'decrease',
  incrementAriaLabel = 'increase',
  ...props
}: Partial<ZoomControlProps>) {
  const [value, setValue] = useState(initialValue)

  return (
    <ZoomControl
      aria-label="amount"
      {...props}
      value={value}
      onValueChange={setValue}
      decrementAriaLabel={decrementAriaLabel}
      incrementAriaLabel={incrementAriaLabel}
    />
  )
}

const meta = {
  title: 'Components/ZoomControl',
  component: ZoomControl,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ZoomControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <ZoomControlDemo value={50} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const slider = canvas.getByRole('slider', { name: 'amount' })
    await expect(slider).toBeVisible()
    await expect(slider).toHaveAttribute('aria-valuenow', '50')
    await userEvent.click(canvas.getByRole('button', { name: 'increase' }))
    await expect(slider).toHaveAttribute('aria-valuenow', '51')
  },
}

export const ZoomCrop: Story = {
  render: () => (
    <div className="w-72">
      <ZoomControlDemo
        value={2}
        min={1}
        max={3}
        step={0.05}
        buttonStep={0.1}
        aria-label="zoom"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const slider = canvas.getByRole('slider', { name: 'zoom' })
    await expect(slider).toHaveAttribute('aria-valuenow', '2')
    await userEvent.click(canvas.getByRole('button', { name: 'increase' }))
    await expect(slider).toHaveAttribute('aria-valuenow', '2.1')
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="w-72">
      <ZoomControlDemo value={50} disabled />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('slider', { name: 'amount' })).toHaveAttribute(
      'data-disabled',
    )
    await expect(canvas.getByRole('button', { name: 'decrease' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'increase' })).toBeDisabled()
  },
}

export const AtMin: Story = {
  render: () => (
    <div className="w-72">
      <ZoomControlDemo value={0} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'decrease' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'increase' })).toBeEnabled()
  },
}

export const AtMax: Story = {
  render: () => (
    <div className="w-72">
      <ZoomControlDemo value={100} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'decrease' })).toBeEnabled()
    await expect(canvas.getByRole('button', { name: 'increase' })).toBeDisabled()
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <LabeledZoom />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText('zoom')).toBeVisible()
  },
}

function LabeledZoom() {
  const [value, setValue] = useState(2)

  return (
    <>
      <Label id="photo-zoom-label">zoom</Label>
      <ZoomControl
        aria-labelledby="photo-zoom-label"
        value={value}
        min={1}
        max={3}
        step={0.05}
        buttonStep={0.1}
        onValueChange={setValue}
        decrementAriaLabel="decrease"
        incrementAriaLabel="increase"
      />
    </>
  )
}
