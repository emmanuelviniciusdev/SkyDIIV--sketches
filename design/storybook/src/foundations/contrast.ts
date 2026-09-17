import { colors } from './tokens'

export type Rgb = readonly [number, number, number]

export function hexToRgb(hex: string): Rgb {
  const normalized = hex.trim().replace('#', '')
  const full =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized

  if (!/^[0-9a-fA-F]{6}$/.test(full)) {
    throw new Error(`Invalid hex color: ${hex}`)
  }

  return [
    Number.parseInt(full.slice(0, 2), 16),
    Number.parseInt(full.slice(2, 4), 16),
    Number.parseInt(full.slice(4, 6), 16),
  ]
}

function channelLuminance(channel: number): number {
  const value = channel / 255
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
}

export function relativeLuminance(hex: string): number {
  const [red, green, blue] = hexToRgb(hex)
  return (
    0.2126 * channelLuminance(red) +
    0.7152 * channelLuminance(green) +
    0.0722 * channelLuminance(blue)
  )
}

export function contrastRatio(foreground: string, background: string): number {
  const lighter = Math.max(relativeLuminance(foreground), relativeLuminance(background))
  const darker = Math.min(relativeLuminance(foreground), relativeLuminance(background))
  return (lighter + 0.05) / (darker + 0.05)
}

export function wcagAaMinimum(largeText = false): number {
  return largeText ? 3 : 4.5
}

export function meetsWcagAa(
  foreground: string,
  background: string,
  largeText = false,
): boolean {
  return contrastRatio(foreground, background) >= wcagAaMinimum(largeText)
}

export type ContrastPair = {
  name: string
  foreground: string
  background: string
  largeText: boolean
}

export const semanticContrastPairs = [
  {
    name: 'text-body on background',
    foreground: colors.text.body,
    background: colors.background,
    largeText: false,
  },
  {
    name: 'text-body on card',
    foreground: colors.text.body,
    background: colors.card,
    largeText: false,
  },
  {
    name: 'text-muted on background',
    foreground: colors.text.muted,
    background: colors.background,
    largeText: false,
  },
  {
    name: 'text-muted on card',
    foreground: colors.text.muted,
    background: colors.card,
    largeText: false,
  },
  {
    name: 'text-display on background',
    foreground: colors.text.display,
    background: colors.background,
    largeText: true,
  },
  {
    name: 'text-on-primary on primary-accessible',
    foreground: colors.text.onPrimary,
    background: colors.primaryAccessible,
    largeText: false,
  },
] as const satisfies readonly ContrastPair[]
