import { colors, radius, spacing, typography } from '@emmanuelviniciusdev/skydiiv-ui'

import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

const steps = [
  ['radius-sm', radius.sm, 'compact controls'],
  ['radius-md', radius.md, 'buttons and inputs'],
  ['radius-lg', radius.lg, 'cards'],
  ['radius-xl', radius.xl, 'larger surfaces'],
] as const

export function RadiusScale() {
  return (
    <FoundationFrame>
      <FoundationTitle>border radius</FoundationTitle>
      <FoundationNote>
        Slightly rounded corners. Do not use a pill shape.
      </FoundationNote>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: spacing[2],
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {steps.map(([token, value, usage]) => (
          <li key={token} style={{ textAlign: 'center' }}>
            <div
              aria-hidden="true"
              style={{
                width: 96,
                height: 96,
                margin: '0 auto',
                background: colors.card,
                border: `1px solid ${colors.muted}`,
                borderRadius: value,
              }}
            />
            <p
              style={{
                margin: `${spacing[1]}px 0 0`,
                fontSize: typography.scale.small.fontSize,
                letterSpacing: typography.scale.small.letterSpacing,
              }}
            >
              <code>{token}</code> {value}px
            </p>
            <p
              style={{
                margin: 0,
                fontSize: typography.scale.micro.fontSize,
                color: colors.text.muted,
                textTransform: 'lowercase',
              }}
            >
              {usage}
            </p>
          </li>
        ))}
      </ul>
    </FoundationFrame>
  )
}
