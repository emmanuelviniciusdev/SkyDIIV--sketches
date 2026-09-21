import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Avatar, getLogoColorForLetter, getLogoColorForName, resolveInitial } from './avatar'
import { logo } from '../tokens'

describe('Avatar helpers', () => {
  it('resolves the first letter in en-US', () => {
    expect(resolveInitial('yelyahwilliams')).toBe('Y')
    expect(resolveInitial('  sky')).toBe('S')
    expect(resolveInitial('')).toBe('?')
    expect(resolveInitial(null)).toBe('?')
  })

  it('maps brand letters to logo colors', () => {
    expect(getLogoColorForLetter('S')).toBe(logo.letters[0].top)
    expect(getLogoColorForLetter('y')).toBe(logo.letters[2].top)
    expect(getLogoColorForName('yelyahwilliams')).toBe(getLogoColorForLetter('Y'))
    expect(getLogoColorForName('')).toBe(logo.letters[0].top)
  })
})

describe('Avatar', () => {
  it('renders a photo when src is set', () => {
    render(<Avatar src="/hayley.png" name="yelyahwilliams" alt="photo of yelyahwilliams" />)

    expect(screen.getByRole('img', { name: 'photo of yelyahwilliams' })).toHaveAttribute(
      'src',
      '/hayley.png',
    )
  })

  it('renders the initial when src is missing', () => {
    render(<Avatar name="yelyahwilliams" alt="photo of yelyahwilliams" />)

    expect(screen.getByRole('img', { name: 'photo of yelyahwilliams' })).toBeVisible()
    expect(screen.getByText('Y')).toBeVisible()
  })
})
