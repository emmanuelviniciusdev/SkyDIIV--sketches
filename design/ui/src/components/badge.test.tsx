import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Badge } from './badge'

describe('Badge', () => {
  it('renders quiet status copy', () => {
    render(<Badge>draft</Badge>)
    expect(screen.getByText('draft')).toBeVisible()
  })

  it('applies the outline variant', () => {
    render(<Badge variant="outline">quiet</Badge>)
    expect(screen.getByText('quiet').className).toContain('border-border')
  })
})
