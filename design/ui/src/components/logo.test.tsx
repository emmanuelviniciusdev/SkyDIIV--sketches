import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SkyChannelsLogo, SkyDiivLogo } from './logo'

describe('Logos', () => {
  it('labels the product mark', () => {
    render(<SkyDiivLogo />)
    expect(screen.getByRole('img', { name: 'SkyDIIV' })).toBeVisible()
  })

  it('labels the channels mark', () => {
    render(<SkyChannelsLogo />)
    expect(screen.getByRole('img', { name: '#SkyCHNNLS' })).toBeVisible()
  })
})
