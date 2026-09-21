import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Navbar, NavbarBrand, NavbarEnd, NavbarStart } from './navbar'

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
})
