import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Input } from './input'
import { Label } from './label'

describe('Input', () => {
  it('associates with a label', () => {
    render(
      <div>
        <Label htmlFor="email">email</Label>
        <Input id="email" placeholder="name@skydiiv.space" />
      </div>,
    )

    expect(screen.getByLabelText('email')).toHaveAttribute('placeholder', 'name@skydiiv.space')
  })
})
