import { breakpoints, colors, layout, radius, spacing, typography } from '@emmanuelviniciusdev/SkyDIIV-UI'

import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

const bands = [
  ['sm', breakpoints.sm],
  ['md', breakpoints.md],
  ['lg', breakpoints.lg],
  ['xl', breakpoints.xl],
  ['2xl', breakpoints['2xl']],
] as const

export function BreakpointBands() {
  const max = breakpoints['2xl']

  return (
    <FoundationFrame>
      <FoundationTitle>breakpoints</FoundationTitle>
      <FoundationNote>
        From {breakpoints.sm}px to {breakpoints['2xl']}px. Content max-width is{' '}
        {layout.contentMaxWidth}px.
      </FoundationNote>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {bands.map(([name, value]) => (
          <li
            key={name}
            style={{
              marginBottom: spacing[1],
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: spacing[1],
                marginBottom: 4,
                fontSize: typography.scale.small.fontSize,
              }}
            >
              <code>{name}</code>
              <span>{value}px</span>
            </div>
            <div
              aria-hidden="true"
              style={{
                height: 12,
                width: `${(value / max) * 100}%`,
                background: colors.primaryAccessible,
                borderRadius: radius.sm,
              }}
            />
          </li>
        ))}
      </ul>
      <p
        style={{
          margin: `${spacing[3]}px 0 0`,
          maxWidth: layout.contentMaxWidth,
          padding: spacing.insetCard,
          background: colors.card,
          borderRadius: radius.lg,
          border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
          fontSize: typography.scale.small.fontSize,
        }}
      >
        content max-width {layout.contentMaxWidth}px · {layout.columns} columns · gutter{' '}
        {layout.gutter}px
      </p>
    </FoundationFrame>
  )
}
