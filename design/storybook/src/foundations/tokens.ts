export const colors = {
  background: '#F4F4F2',
  card: '#ECEAE4',
  grain: '#FAFAF9',
  foreground: '#B5BAC2',
  muted: '#C2BCA8',
  primary: '#6C92AB',
  secondary: '#C79A79',
  destructive: '#AD7974',
  accent: '#B0A4C3',
  cool: '#98AFC4',
  nude: '#E4C59F',
  dusty: '#BDD1DD',
  primaryForeground: '#F4F4F2',
  secondaryForeground: '#F4F4F2',
  destructiveForeground: '#F4F4F2',
  accentForeground: '#F4F4F2',
  primaryAccessible: '#50748C',
  secondaryAccessible: '#886953',
  destructiveAccessible: '#906561',
  accentAccessible: '#746C81',
  text: {
    body: '#B5BAC2',
    muted: '#C2BCA8',
    display: '#B5BAC2',
    onPrimary: '#F4F4F2',
  },
} as const

export const typography = {
  fontFamily: {
    sans: '"Inter Variable", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  scale: {
    display: {
      fontSize: { min: 48, max: 64, default: 56 },
      fontWeight: 400,
      letterSpacing: '0.12em',
      lineHeight: 1.2,
    },
    h1: {
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: '0.08em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 24,
      fontWeight: 400,
      letterSpacing: '0.04em',
      lineHeight: 1.2,
    },
    body: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    },
    small: {
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: '0.02em',
      lineHeight: 1.6,
    },
    micro: {
      fontSize: 11,
      fontWeight: 400,
      letterSpacing: '0.04em',
      lineHeight: 1.6,
    },
  },
} as const

export const spacing = {
  1: 8,
  2: 16,
  3: 24,
  4: 40,
  5: 64,
  6: 96,
  insetButtonY: 10,
  insetButtonX: 20,
  insetCard: 20,
  gutter: 24,
} as const

export const radius = {
  sm: 2,
  md: 4,
  lg: 6,
  xl: 8,
} as const

export const shadow = {
  none: 'none',
} as const

export const texture = {
  grainSize: 90,
  pageOpacity: 0.04,
  surfaceOpacity: 0.4,
} as const

export const motion = {
  durationMs: 200,
  easing: 'ease',
} as const

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const layout = {
  contentMaxWidth: 1120,
  columns: 12,
  gutter: spacing.gutter,
  headerHeight: 56,
} as const

export const brandNames = {
  product: 'SkyDIIV',
  channels: 'SkyCHNNLS',
  channelsPrefix: 'Sky',
  channelsSuffix: 'CHNNLS',
} as const

export const logo = {
  hash: {
    ch: '#' as const,
    top: '#C8CCD2',
    bottom: '#E2E5E9',
  },
  letters: [
    { ch: 'S', top: '#AC7C76', bottom: '#C69689' },
    { ch: 'k', top: '#CAA07F', bottom: '#E4BC96' },
    { ch: 'y', top: '#B1B1A4', bottom: '#D0C3A9' },
    { ch: 'D', top: '#7496AD', bottom: '#9DB0BF' },
    { ch: 'I', top: '#85A5BF', bottom: '#AAB7C8' },
    { ch: 'I', top: '#B4BFD5', bottom: '#C5C0CD' },
    { ch: 'V', top: '#A39BBF', bottom: '#BDADC4' },
  ],
} as const
