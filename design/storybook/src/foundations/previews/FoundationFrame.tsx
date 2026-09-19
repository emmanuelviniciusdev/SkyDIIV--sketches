import type { CSSProperties, ReactNode } from 'react'

import { colors, spacing, typography } from '../tokens'

export function FoundationFrame({
  children,
  style,
}: {
  children: ReactNode
  style?: CSSProperties
}) {
  return (
    <main
      style={{
        boxSizing: 'border-box',
        minHeight: '100%',
        padding: spacing[3],
        background: colors.background,
        color: colors.text.body,
        fontFamily: typography.fontFamily.sans,
        textTransform: 'lowercase',
        ...style,
      }}
    >
      {children}
    </main>
  )
}

export function FoundationTitle({ children }: { children: ReactNode }) {
  return (
    <h1
      style={{
        margin: `0 0 ${spacing[2]}px`,
        fontSize: typography.scale.h1.fontSize,
        fontWeight: typography.scale.h1.fontWeight,
        letterSpacing: typography.scale.h1.letterSpacing,
        lineHeight: typography.scale.h1.lineHeight,
        color: colors.text.body,
        textTransform: 'lowercase',
      }}
    >
      {children}
    </h1>
  )
}

export function FoundationNote({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        margin: `0 0 ${spacing[3]}px`,
        maxWidth: 720,
        fontSize: typography.scale.body.fontSize,
        fontWeight: typography.scale.body.fontWeight,
        letterSpacing: typography.scale.body.letterSpacing,
        lineHeight: typography.scale.body.lineHeight,
        color: colors.text.muted,
      }}
    >
      {children}
    </p>
  )
}
