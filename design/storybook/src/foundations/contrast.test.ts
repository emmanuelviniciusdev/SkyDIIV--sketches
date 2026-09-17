import { describe, expect, it } from 'vitest'

import {
  contrastRatio,
  hexToRgb,
  meetsWcagAa,
  relativeLuminance,
  semanticContrastPairs,
  wcagAaMinimum,
} from './contrast'

describe('contrast utilities', () => {
  it('parses hex colors', () => {
    expect(hexToRgb('#F4F4F2')).toEqual([244, 244, 242])
    expect(hexToRgb('#000')).toEqual([0, 0, 0])
  })

  it('rejects invalid hex', () => {
    expect(() => hexToRgb('blue')).toThrow(/Invalid hex color/)
  })

  it('returns 21:1 for black on white', () => {
    expect(contrastRatio('#000000', '#FFFFFF')).toBeCloseTo(21, 5)
    expect(relativeLuminance('#FFFFFF')).toBeCloseTo(1, 5)
    expect(relativeLuminance('#000000')).toBeCloseTo(0, 5)
  })

  it('uses 4.5:1 for body text and 3:1 for large text', () => {
    expect(wcagAaMinimum(false)).toBe(4.5)
    expect(wcagAaMinimum(true)).toBe(3)
  })
})

describe('semantic contrast pairs', () => {
  it('meets WCAG AA for every documented pair', () => {
    for (const pair of semanticContrastPairs) {
      expect(
        meetsWcagAa(pair.foreground, pair.background, pair.largeText),
        `${pair.name} ${pair.foreground} on ${pair.background}`,
      ).toBe(true)
      expect(contrastRatio(pair.foreground, pair.background)).toBeGreaterThanOrEqual(
        wcagAaMinimum(pair.largeText),
      )
    }
  })
})
