import { colors, radius, spacing, texture, typography } from '../tokens'
import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

export function GrainLayers() {
  return (
    <FoundationFrame>
      <FoundationTitle>textures</FoundationTitle>
      <FoundationNote>
        Paper grain sits on the page at very low opacity. Surfaces may layer the
        same grain more strongly. It is not a drop shadow.
      </FoundationNote>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: spacing[3],
        }}
      >
        <article
          style={{
            padding: spacing.insetCard,
            background: colors.background,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
            borderRadius: radius.lg,
          }}
        >
          <h2
            style={{
              margin: `0 0 ${spacing[1]}px`,
              fontSize: typography.scale.h2.fontSize,
              fontWeight: typography.scale.h2.fontWeight,
              letterSpacing: typography.scale.h2.letterSpacing,
            }}
          >
            page grain
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: typography.scale.small.fontSize,
              letterSpacing: typography.scale.small.letterSpacing,
              color: colors.text.muted,
            }}
          >
            opacity {texture.pageOpacity} · tile {texture.grainSize}px
          </p>
        </article>
        <article
          className="grain-surface"
          style={{
            padding: spacing.insetCard,
            background: colors.card,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
            borderRadius: radius.lg,
          }}
        >
          <span className="grain-surface__overlay" aria-hidden="true" />
          <h2
            style={{
              position: 'relative',
              margin: `0 0 ${spacing[1]}px`,
              fontSize: typography.scale.h2.fontSize,
              fontWeight: typography.scale.h2.fontWeight,
              letterSpacing: typography.scale.h2.letterSpacing,
            }}
          >
            surface grain
          </h2>
          <p
            style={{
              position: 'relative',
              margin: 0,
              fontSize: typography.scale.small.fontSize,
              letterSpacing: typography.scale.small.letterSpacing,
              color: colors.text.muted,
            }}
          >
            overlay {texture.surfaceOpacity} · paper grain
          </p>
        </article>
      </div>
    </FoundationFrame>
  )
}
