import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './button'

describe('Button', () => {
  it('renders the label and calls onClick', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={onClick}>continue</Button>)

    await user.click(screen.getByRole('button', { name: 'continue' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('exposes the variant on the control', () => {
    render(
      <Button variant="primary" disabled>
        unavailable
      </Button>,
    )

    const button = screen.getByRole('button', { name: 'unavailable' })
    expect(button).toBeDisabled()
    expect(button.className).toContain('bg-primary-accessible')
  })
})
