import { describe, expect, it } from 'vitest'

import { cn } from './utils'

describe('cn', () => {
  it('merges tailwind classes with the last conflict winning', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('drops falsy values', () => {
    expect(cn('block', false && 'hidden', undefined, 'text-foreground')).toBe(
      'block text-foreground',
    )
  })
})
