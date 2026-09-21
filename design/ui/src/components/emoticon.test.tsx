import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { emoticonSrc } from '../emoticons'
import { Emoticon } from './emoticon'

describe('Emoticon', () => {
  it('renders the named KDDI mark', () => {
    render(<Emoticon id="sparkles" />)

    const mark = screen.getByRole('img', { name: 'sparkles' })
    expect(mark).toBeVisible()
    expect(mark).toHaveAttribute('src', emoticonSrc('sparkles'))
  })

  it('throws for an unknown id', () => {
    expect(() => render(<Emoticon id="not-a-mark" />)).toThrow(/Unknown emoticon/)
  })
})
