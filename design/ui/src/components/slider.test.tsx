import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Label } from './label'
import { Slider } from './slider'

function hasForbiddenChrome(className: string) {
  const classes = className.split(/\s+/)
  return (
    classes.includes('rounded-full') ||
    classes.some((token) => token.startsWith('shadow-') && token !== 'shadow-none')
  )
}

describe('Slider', () => {
  it('renders a slider with the given accessible name', () => {
    render(<Slider value={40} onValueChange={() => {}} aria-label="amount" />)

    expect(screen.getByRole('slider', { name: 'amount' })).toHaveAttribute(
      'aria-valuenow',
      '40',
    )
  })

  it('associates with a label', () => {
    render(
      <div>
        <Label id="amount-label">amount</Label>
        <Slider
          aria-labelledby="amount-label"
          value={25}
          onValueChange={() => {}}
        />
      </div>,
    )

    expect(screen.getByLabelText('amount')).toHaveAttribute('aria-valuenow', '25')
  })

  it('throws in development without an accessible name', () => {
    expect(() =>
      render(<Slider value={50} onValueChange={() => {}} />),
    ).toThrow(/aria-label or aria-labelledby/)
  })

  it('does not use a pill or drop shadow on the thumb', () => {
    const { container } = render(
      <Slider value={50} onValueChange={() => {}} aria-label="amount" />,
    )

    const thumb = container.querySelector('[data-slot="slider-thumb"]')
    expect(thumb).toBeTruthy()
    expect(hasForbiddenChrome(thumb?.className ?? '')).toBe(false)
  })
})
