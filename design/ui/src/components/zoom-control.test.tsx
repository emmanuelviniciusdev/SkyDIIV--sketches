import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Label } from './label'
import { ZoomControl, type ZoomControlProps } from './zoom-control'

function hasForbiddenChrome(className: string) {
  const classes = className.split(/\s+/)
  return (
    classes.includes('rounded-full') ||
    classes.some((token) => token.startsWith('shadow-') && token !== 'shadow-none')
  )
}

function Harness({
  onValueChange,
  value: initialValue = 50,
  ...props
}: Partial<ZoomControlProps> & Pick<ZoomControlProps, 'onValueChange'>) {
  const [value, setValue] = useState(initialValue)

  return (
    <ZoomControl
      decrementAriaLabel="decrease"
      incrementAriaLabel="increase"
      aria-label="amount"
      {...props}
      value={value}
      onValueChange={(next) => {
        setValue(next)
        onValueChange(next)
      }}
    />
  )
}

describe('ZoomControl', () => {
  it('renders a slider with the given accessible name', () => {
    render(
      <ZoomControl
        value={50}
        onValueChange={() => {}}
        decrementAriaLabel="decrease"
        incrementAriaLabel="increase"
        aria-label="amount"
      />,
    )

    expect(screen.getByRole('slider', { name: 'amount' })).toBeInTheDocument()
  })

  it('calls onValueChange with a clamped number when buttons are clicked', async () => {
    const onValueChange = vi.fn()
    const user = userEvent.setup()

    const first = render(
      <Harness onValueChange={onValueChange} value={50} />,
    )

    await user.click(screen.getByRole('button', { name: 'increase' }))
    expect(onValueChange).toHaveBeenLastCalledWith(51)

    first.unmount()
    onValueChange.mockClear()

    const second = render(
      <Harness onValueChange={onValueChange} value={98} max={100} buttonStep={5} />,
    )
    await user.click(screen.getByRole('button', { name: 'increase' }))
    expect(onValueChange).toHaveBeenLastCalledWith(100)

    second.unmount()
    onValueChange.mockClear()

    render(
      <Harness onValueChange={onValueChange} value={2} min={0} buttonStep={5} />,
    )
    await user.click(screen.getByRole('button', { name: 'decrease' }))
    expect(onValueChange).toHaveBeenLastCalledWith(0)
  })

  it('disables decrement at min and increment at max', () => {
    const { rerender } = render(
      <ZoomControl
        value={0}
        onValueChange={() => {}}
        decrementAriaLabel="decrease"
        incrementAriaLabel="increase"
        aria-label="amount"
      />,
    )

    expect(screen.getByRole('button', { name: 'decrease' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'increase' })).toBeEnabled()

    rerender(
      <ZoomControl
        value={100}
        onValueChange={() => {}}
        decrementAriaLabel="decrease"
        incrementAriaLabel="increase"
        aria-label="amount"
      />,
    )

    expect(screen.getByRole('button', { name: 'decrease' })).toBeEnabled()
    expect(screen.getByRole('button', { name: 'increase' })).toBeDisabled()
  })

  it('does not call onValueChange when disabled', async () => {
    const onValueChange = vi.fn()
    const user = userEvent.setup()

    render(
      <ZoomControl
        value={50}
        disabled
        onValueChange={onValueChange}
        decrementAriaLabel="decrease"
        incrementAriaLabel="increase"
        aria-label="amount"
      />,
    )

    await user.click(screen.getByRole('button', { name: 'increase' }))
    await user.click(screen.getByRole('button', { name: 'decrease' }))

    expect(onValueChange).not.toHaveBeenCalled()
  })

  it('uses a card fill on the root without grain surface classes', () => {
    const { container } = render(
      <ZoomControl
        value={50}
        onValueChange={() => {}}
        decrementAriaLabel="decrease"
        incrementAriaLabel="increase"
        aria-label="amount"
      />,
    )

    const root = container.querySelector('[data-slot="zoom-control"]')
    expect(root?.className).toContain('bg-card')
    expect(root).not.toHaveClass('grain-surface')
    expect(root?.querySelector('.grain-surface__overlay')).toBeNull()
  })

  it('does not use a pill or drop shadow on the root or thumb', () => {
    const { container } = render(
      <ZoomControl
        value={50}
        onValueChange={() => {}}
        decrementAriaLabel="decrease"
        incrementAriaLabel="increase"
        aria-label="amount"
      />,
    )

    const root = container.querySelector('[data-slot="zoom-control"]')
    const thumb = container.querySelector('[data-slot="slider-thumb"]')

    expect(hasForbiddenChrome(root?.className ?? '')).toBe(false)
    expect(hasForbiddenChrome(thumb?.className ?? '')).toBe(false)
  })

  it('associates with a label', () => {
    render(
      <div>
        <Label id="zoom-label">zoom</Label>
        <ZoomControl
          aria-labelledby="zoom-label"
          value={1.5}
          min={1}
          max={3}
          onValueChange={() => {}}
          decrementAriaLabel="decrease"
          incrementAriaLabel="increase"
        />
      </div>,
    )

    expect(screen.getByLabelText('zoom')).toHaveAttribute('aria-valuenow', '1.5')
  })
})
