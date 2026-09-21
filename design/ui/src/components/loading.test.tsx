import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LoadingEarth } from './loading-earth'
import { Spinner } from './spinner'

describe('Spinner', () => {
  it('exposes a status name', () => {
    render(<Spinner />)
    expect(screen.getByRole('status', { name: 'loading...' })).toBeVisible()
  })
})

describe('LoadingEarth', () => {
  it('exposes a status name and the earth mark', () => {
    render(<LoadingEarth />)

    expect(screen.getByRole('status', { name: 'loading...' })).toBeVisible()
    expect(screen.getByRole('status', { name: 'loading...' }).querySelector('img')).toBeTruthy()
  })
})
