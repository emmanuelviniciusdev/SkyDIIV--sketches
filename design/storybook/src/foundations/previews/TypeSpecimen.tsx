import { brandNames, colors, radius, spacing, typography } from '@emmanuelviniciusdev/skydiiv-ui'

import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

const scaleEntries = [
  ['display', typography.scale.display],
  ['h1', typography.scale.h1],
  ['h2', typography.scale.h2],
  ['body', typography.scale.body],
  ['small', typography.scale.small],
  ['micro', typography.scale.micro],
] as const

function fontSizeLabel(value: number | { min: number; max: number; default: number }) {
  return typeof value === 'number' ? `${value}px` : `${value.min}–${value.max}px`
}

function resolvedSize(value: number | { min: number; max: number; default: number }) {
  return typeof value === 'number' ? value : value.default
}

export function TypeSpecimen() {
  return (
    <FoundationFrame>
      <FoundationTitle>typography</FoundationTitle>
      <FoundationNote>
        Primary family: Inter. Headings stay light or regular. Quotations may be italic.
      </FoundationNote>

      <p
        className="typeface-name"
        style={{
          margin: `0 0 ${spacing[4]}px`,
          fontSize: resolvedSize(typography.scale.display.fontSize),
          fontWeight: typography.scale.display.fontWeight,
          letterSpacing: typography.scale.display.letterSpacing,
          lineHeight: typography.scale.display.lineHeight,
          color: colors.text.display,
        }}
      >
        Inter
      </p>

      <section style={{ marginBottom: spacing[4] }}>
        <h2
          style={{
            margin: `0 0 ${spacing[2]}px`,
            fontSize: typography.scale.h2.fontSize,
            fontWeight: typography.scale.h2.fontWeight,
            letterSpacing: typography.scale.h2.letterSpacing,
            lineHeight: typography.scale.h2.lineHeight,
            textTransform: 'lowercase',
          }}
        >
          scale
        </h2>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {scaleEntries.map(([name, level]) => (
            <li
              key={name}
              style={{
                marginBottom: spacing[2],
                paddingBottom: spacing[2],
                borderBottom: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: resolvedSize(level.fontSize),
                  fontWeight: level.fontWeight,
                  letterSpacing: level.letterSpacing,
                  lineHeight: level.lineHeight,
                  color: name === 'display' ? colors.text.display : colors.text.body,
                }}
              >
                {name === 'micro' ? 'tag metadata' : 'the organized wardrobe'}
              </p>
              <p
                style={{
                  margin: `${spacing[1]}px 0 0`,
                  fontSize: typography.scale.micro.fontSize,
                  letterSpacing: typography.scale.micro.letterSpacing,
                  color: colors.text.muted,
                }}
              >
                {name} · {fontSizeLabel(level.fontSize)} · weight {level.fontWeight} · tracking{' '}
                {level.letterSpacing} · leading {level.lineHeight}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2
          style={{
            margin: `0 0 ${spacing[2]}px`,
            fontSize: typography.scale.h2.fontSize,
            fontWeight: typography.scale.h2.fontWeight,
            letterSpacing: typography.scale.h2.letterSpacing,
            lineHeight: typography.scale.h2.lineHeight,
            textTransform: 'lowercase',
          }}
        >
          lowercase
        </h2>
        <div
          style={{
            display: 'grid',
            gap: spacing[2],
            padding: spacing.insetCard,
            background: colors.card,
            borderRadius: radius.lg,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
          }}
        >
          <p
            style={{
              margin: 0,
              textTransform: 'lowercase',
              fontSize: typography.scale.body.fontSize,
              letterSpacing: typography.scale.body.letterSpacing,
              lineHeight: typography.scale.body.lineHeight,
            }}
          >
            all text is lowercase, except product names, emails, and other specific names.
          </p>
          <p
            className="brand-name"
            style={{
              margin: 0,
              fontSize: typography.scale.h2.fontSize,
              letterSpacing: typography.scale.h2.letterSpacing,
            }}
          >
            {brandNames.product} / {brandNames.channels}
          </p>
        </div>
      </section>

      <section style={{ marginTop: spacing[4] }}>
        <h2
          style={{
            margin: `0 0 ${spacing[2]}px`,
            fontSize: typography.scale.h2.fontSize,
            fontWeight: typography.scale.h2.fontWeight,
            letterSpacing: typography.scale.h2.letterSpacing,
            lineHeight: typography.scale.h2.lineHeight,
            textTransform: 'lowercase',
          }}
        >
          quotation
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: 640,
            fontSize: typography.scale.body.fontSize,
            fontWeight: typography.fontWeight.light,
            letterSpacing: typography.scale.body.letterSpacing,
            lineHeight: typography.scale.body.lineHeight,
            fontStyle: 'italic',
            color: colors.text.muted,
          }}
        >
          quiet. intentional. slightly nostalgic.
        </p>
      </section>
    </FoundationFrame>
  )
}
