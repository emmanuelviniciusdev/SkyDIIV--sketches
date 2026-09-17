import { colors, radius, shadow, spacing, typography } from '../tokens'
import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

export function ShadowLayers() {
  return (
    <FoundationFrame>
      <FoundationTitle>shadows</FoundationTitle>
      <FoundationNote>
        UI does not use drop shadows. Elevation comes from stacking page and surface colors.
      </FoundationNote>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: spacing[3],
        }}
      >
        <article
          style={{
            padding: spacing.insetCard,
            background: colors.background,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
            borderRadius: radius.lg,
            boxShadow: shadow.none,
          }}
        >
          <h2
            style={{
              margin: `0 0 ${spacing[1]}px`,
              fontSize: typography.scale.h2.fontSize,
              fontWeight: typography.scale.h2.fontWeight,
              letterSpacing: typography.scale.h2.letterSpacing,
              textTransform: 'lowercase',
            }}
          >
            page layer
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: typography.scale.small.fontSize,
              letterSpacing: typography.scale.small.letterSpacing,
            }}
          >
            background {colors.background} · shadow-none
          </p>
        </article>
        <article
          style={{
            padding: spacing.insetCard,
            background: colors.card,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
            borderRadius: radius.lg,
            boxShadow: shadow.none,
          }}
        >
          <h2
            style={{
              margin: `0 0 ${spacing[1]}px`,
              fontSize: typography.scale.h2.fontSize,
              fontWeight: typography.scale.h2.fontWeight,
              letterSpacing: typography.scale.h2.letterSpacing,
              textTransform: 'lowercase',
            }}
          >
            surface layer
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: typography.scale.small.fontSize,
              letterSpacing: typography.scale.small.letterSpacing,
            }}
          >
            card {colors.card} · shadow-none
          </p>
        </article>
      </div>
    </FoundationFrame>
  )
}
