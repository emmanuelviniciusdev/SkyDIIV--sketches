import { CursorField } from '@/components/ui/cursor-field'
import { colors, radius, spacing, typography } from '../tokens'
import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

export function CursorTrail() {
  return (
    <FoundationFrame>
      <FoundationTitle>cursor</FoundationTitle>
      <FoundationNote>
        Moving the pointer leaves a trail of plus signs in slate gray. The marks
        fade and grow as they leave. The trail is atmosphere, not a control. When
        motion is reduced, there is no trail.
      </FoundationNote>

      <section style={{ marginBottom: spacing[4] }}>
        <h2
          style={{
            margin: `0 0 ${spacing[2]}px`,
            fontSize: typography.scale.h2.fontSize,
            fontWeight: typography.scale.h2.fontWeight,
            letterSpacing: typography.scale.h2.letterSpacing,
          }}
        >
          mark
        </h2>
        <p
          className="cursor-plus-specimen"
          aria-hidden="true"
          style={{
            margin: 0,
            fontSize: 22,
            lineHeight: 1,
            color: colors.text.body,
          }}
        >
          +
        </p>
      </section>

      <section>
        <h2
          style={{
            margin: `0 0 ${spacing[2]}px`,
            fontSize: typography.scale.h2.fontSize,
            fontWeight: typography.scale.h2.fontWeight,
            letterSpacing: typography.scale.h2.letterSpacing,
          }}
        >
          trail
        </h2>
        <CursorField
          style={{
            position: 'relative',
            minHeight: 360,
            overflow: 'hidden',
            background: colors.card,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
            borderRadius: radius.lg,
          }}
        >
          <p
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              placeItems: 'center',
              margin: 0,
              padding: spacing.insetCard,
              fontSize: typography.scale.body.fontSize,
              letterSpacing: typography.scale.body.letterSpacing,
              color: colors.text.muted,
              pointerEvents: 'none',
            }}
          >
            move the pointer across this field
          </p>
        </CursorField>
      </section>
    </FoundationFrame>
  )
}
