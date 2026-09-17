import { describe, expect, it } from 'vitest'

import {
  breakpoints,
  colors,
  layout,
  radius,
  shadow,
  spacing,
  typography,
} from './tokens'

describe('foundation tokens', () => {
  it('keeps the documented brand palette', () => {
    expect(colors.background).toBe('#F4F4F2')
    expect(colors.card).toBe('#ECEAE4')
    expect(colors.grain).toBe('#FAFAF9')
    expect(colors.foreground).toBe('#B5BAC2')
    expect(colors.muted).toBe('#C2BCA8')
    expect(colors.primary).toBe('#6C92AB')
    expect(colors.secondary).toBe('#C79A79')
    expect(colors.destructive).toBe('#AD7974')
    expect(colors.accent).toBe('#B0A4C3')
    expect(colors.cool).toBe('#98AFC4')
    expect(colors.nude).toBe('#E4C59F')
    expect(colors.dusty).toBe('#BDD1DD')
  })

  it('does not use pure black or pure white', () => {
    const hexValues = [
      colors.background,
      colors.card,
      colors.grain,
      colors.foreground,
      colors.muted,
      colors.primary,
      colors.secondary,
      colors.destructive,
      colors.accent,
      colors.cool,
      colors.nude,
      colors.dusty,
      colors.text.body,
      colors.text.muted,
      colors.text.display,
      colors.text.onPrimary,
      colors.primaryAccessible,
    ]

    expect(hexValues).not.toContain('#000000')
    expect(hexValues).not.toContain('#FFFFFF')
  })

  it('uses Inter with a grotesque fallback stack', () => {
    expect(typography.fontFamily.sans).toBe(
      '"Inter Variable", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
    )
  })

  it('uses Inter weights from Light to Black', () => {
    expect(typography.fontWeight.light).toBe(300)
    expect(typography.fontWeight.regular).toBe(400)
    expect(typography.fontWeight.medium).toBe(500)
    expect(typography.fontWeight.bold).toBe(700)
    expect(typography.fontWeight.black).toBe(900)
  })

  it('keeps the documented type scale', () => {
    expect(typography.scale.display.fontSize).toEqual({ min: 48, max: 64, default: 56 })
    expect(typography.scale.h1.fontSize).toBe(32)
    expect(typography.scale.h2.fontSize).toBe(24)
    expect(typography.scale.body.fontSize).toBe(16)
    expect(typography.scale.small.fontSize).toBe(13)
    expect(typography.scale.micro.fontSize).toBe(11)
    expect(typography.scale.body.letterSpacing).toBe('0.01em')
    expect(typography.scale.body.lineHeight).toBe(1.6)
    expect(typography.scale.display.lineHeight).toBe(1.2)
  })

  it('uses an 8px spacing scale plus documented insets', () => {
    expect(spacing[1]).toBe(8)
    expect(spacing[2]).toBe(16)
    expect(spacing[3]).toBe(24)
    expect(spacing[4]).toBe(40)
    expect(spacing[5]).toBe(64)
    expect(spacing[6]).toBe(96)
    expect(spacing.insetButtonY).toBe(10)
    expect(spacing.insetButtonX).toBe(20)
    expect(spacing.insetCard).toBe(20)
    expect(spacing.gutter).toBe(24)
  })

  it('uses compact radii and never a pill radius', () => {
    expect(radius.sm).toBe(2)
    expect(radius.md).toBe(4)
    expect(radius.lg).toBe(6)
    expect(radius.xl).toBe(8)
    expect(Math.max(radius.sm, radius.md, radius.lg, radius.xl)).toBeLessThan(999)
  })

  it('disables box-shadow for UI elevation', () => {
    expect(shadow.none).toBe('none')
  })

  it('keeps the breakpoint and layout scale', () => {
    expect(breakpoints.sm).toBe(640)
    expect(breakpoints.md).toBe(768)
    expect(breakpoints.lg).toBe(1024)
    expect(breakpoints.xl).toBe(1280)
    expect(breakpoints['2xl']).toBe(1536)
    expect(layout.contentMaxWidth).toBe(1120)
    expect(layout.columns).toBe(12)
    expect(layout.gutter).toBe(24)
  })
})
