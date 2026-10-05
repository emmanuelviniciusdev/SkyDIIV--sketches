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

  it('uses the accent fill for secondary', () => {
    render(<Badge variant="secondary">oversized</Badge>)
    expect(screen.getByText('oversized').className).toContain('bg-accent-accessible')
    expect(screen.getByText('oversized').className).toContain('font-semibold')
  })

  it('uses each logo letter fill', () => {
    const { rerender } = render(<Badge variant="letter-s">s</Badge>)
    expect(screen.getByText('s').className).toContain('bg-logo-s')

    rerender(<Badge variant="letter-ii">ii</Badge>)
    expect(screen.getByText('ii').className).toContain('bg-logo-ii')
  })
})
