import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Navbar, NavbarBrand, NavbarEnd, NavbarMenuItem, NavbarStart } from './navbar'

describe('Navbar', () => {
  it('renders brand and end content', () => {
    render(
      <Navbar>
        <NavbarStart>
          <NavbarBrand>SkyDIIV</NavbarBrand>
        </NavbarStart>
        <NavbarEnd>
          <button type="button">menu</button>
        </NavbarEnd>
      </Navbar>,
    )

    expect(screen.getByText('SkyDIIV')).toBeVisible()
    expect(screen.getByRole('button', { name: 'menu' })).toBeVisible()
  })

  it('keeps the primary hover fill on selected menu items', () => {
    render(<NavbarMenuItem variant="primary">current page</NavbarMenuItem>)

    const item = screen.getByRole('button', { name: 'current page' })
    expect(item.className).not.toContain('hover:bg-background')
    expect(item.className).toContain('hover:bg-primary-accessible/90')
  })

  it('keeps the quiet hover on ghost menu items', () => {
    render(<NavbarMenuItem>other page</NavbarMenuItem>)

    const item = screen.getByRole('button', { name: 'other page' })
    expect(item.className).toContain('hover:bg-background')
  })
})
