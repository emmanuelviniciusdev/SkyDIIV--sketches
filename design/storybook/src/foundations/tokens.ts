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
  text: {
    body: '#626A77',
    muted: '#71694F',
    display: '#868E9B',
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
} as const

export const brandNames = {
  product: 'SkyDIIV',
  channels: 'SkyCHNNLS',
} as const
