import { colors, layout, radius, spacing, typography } from '../tokens'
import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

const scale = [
  ['space-1', spacing[1]],
  ['space-2', spacing[2]],
  ['space-3', spacing[3]],
  ['space-4', spacing[4]],
  ['space-5', spacing[5]],
  ['space-6', spacing[6]],
] as const

export function SpacingScale() {
  const max = spacing[6]

  return (
    <FoundationFrame>
      <FoundationTitle>spacing</FoundationTitle>
      <FoundationNote>
        Scale in multiples of 8px. Whitespace is part of the layout. {layout.columns}-column
        grid, {layout.gutter}px gutter.
      </FoundationNote>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {scale.map(([token, value]) => (
          <li
            key={token}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 72px 1fr',
              gap: spacing[1],
              alignItems: 'center',
              marginBottom: spacing[1],
            }}
          >
            <code style={{ fontSize: typography.scale.small.fontSize }}>{token}</code>
            <span style={{ fontSize: typography.scale.small.fontSize }}>{value}px</span>
            <span
              aria-hidden="true"
              style={{
                display: 'block',
                width: `${(value / max) * 100}%`,
                height: 16,
                background: colors.primaryAccessible,
                borderRadius: radius.sm,
              }}
            />
          </li>
        ))}
      </ul>
      <div
        style={{
          marginTop: spacing[3],
          display: 'grid',
          gap: spacing[2],
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        }}
      >
        <div
          style={{
            padding: `${spacing.insetButtonY}px ${spacing.insetButtonX}px`,
            background: colors.card,
            borderRadius: radius.md,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
            fontSize: typography.scale.small.fontSize,
          }}
        >
          space-inset-button {spacing.insetButtonY}px {spacing.insetButtonX}px
        </div>
        <div
          style={{
            padding: spacing.insetCard,
            background: colors.card,
            borderRadius: radius.lg,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
            fontSize: typography.scale.small.fontSize,
          }}
        >
          space-inset-card {spacing.insetCard}px
        </div>
      </div>
    </FoundationFrame>
  )
}
