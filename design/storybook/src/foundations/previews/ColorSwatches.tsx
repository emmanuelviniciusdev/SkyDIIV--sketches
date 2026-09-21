import { contrastRatio, controlContrastPairs, defaultTextPairs } from '../contrast'
import { colors, radius, spacing, typography } from '@emmanuelviniciusdev/SkyDIIV-UI'

import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

const brandSwatches = [
  { token: '--background', hex: colors.background, label: 'off-white' },
  { token: '--card', hex: colors.card, label: 'surface' },
  { token: '--grain', hex: colors.grain, label: 'grain white' },
  { token: '--foreground', hex: colors.foreground, label: 'slate gray' },
  { token: '--border', hex: colors.muted, label: 'stone warm' },
  { token: '--primary', hex: colors.primary, label: 'slate blue' },
  { token: '--secondary', hex: colors.secondary, label: 'terracotta' },
  { token: '--destructive', hex: colors.destructive, label: 'rose gray' },
  { token: '--accent', hex: colors.accent, label: 'lilac' },
  { token: '--cool', hex: colors.cool, label: 'cool blue-gray' },
  { token: '--nude', hex: colors.nude, label: 'nude warm' },
  { token: '--dusty', hex: colors.dusty, label: 'dusty blue' },
] as const

const textSwatches = [
  { token: '--text-body', hex: colors.text.body, label: 'body text' },
  { token: '--text-muted', hex: colors.text.muted, label: 'secondary text' },
  { token: '--text-display', hex: colors.text.display, label: 'display' },
  { token: '--text-on-primary', hex: colors.text.onPrimary, label: 'text on filled control' },
] as const

const controlSwatches = [
  { token: '--primary-accessible', hex: colors.primaryAccessible, label: 'primary fill' },
  {
    token: '--secondary-accessible',
    hex: colors.secondaryAccessible,
    label: 'secondary fill',
  },
  {
    token: '--destructive-accessible',
    hex: colors.destructiveAccessible,
    label: 'destructive fill',
  },
  {
    token: '--accent-accessible',
    hex: colors.accentAccessible,
    label: 'accent fill',
  },
] as const

function SwatchList({
  heading,
  items,
}: {
  heading: string
  items: readonly { token: string; hex: string; label: string }[]
}) {
  return (
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
        {heading}
      </h2>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: spacing[2],
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {items.map((item) => (
          <li
            key={item.token}
            style={{
              display: 'flex',
              gap: spacing[1],
              alignItems: 'center',
              padding: spacing[1],
              background: colors.card,
              border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
              borderRadius: radius.lg,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 48,
                height: 48,
                flexShrink: 0,
                background: item.hex,
                borderRadius: radius.md,
                border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
              }}
            />
            <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontSize: typography.scale.small.fontSize,
                  letterSpacing: typography.scale.small.letterSpacing,
                  color: colors.text.body,
                }}
              >
                {item.label}
              </span>
              <code
                style={{
                  fontSize: typography.scale.micro.fontSize,
                  letterSpacing: typography.scale.micro.letterSpacing,
                  color: colors.text.body,
                }}
              >
                {item.token}
              </code>
              <code
                style={{
                  fontSize: typography.scale.micro.fontSize,
                  letterSpacing: typography.scale.micro.letterSpacing,
                  color: colors.text.body,
                }}
              >
                {item.hex}
              </code>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function PairTable({
  heading,
  caption,
  pairs,
  showControl,
}: {
  heading: string
  caption: string
  pairs: readonly { name: string; foreground: string; background: string; largeText: boolean }[]
  showControl?: boolean
}) {
  return (
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
        {heading}
      </h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: typography.scale.small.fontSize,
          letterSpacing: typography.scale.small.letterSpacing,
        }}
      >
        <caption
          style={{
            captionSide: 'bottom',
            textAlign: 'left',
            paddingTop: spacing[1],
            color: colors.text.muted,
          }}
        >
          {caption}
        </caption>
        <thead>
          <tr>
            {['pair', 'foreground', 'background', 'ratio', ...(showControl ? ['control'] : [])].map(
              (header) => (
                <th
                  key={header}
                  scope="col"
                  style={{
                    textAlign: 'left',
                    padding: `${spacing[1]}px`,
                    borderBottom: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
                    fontWeight: typography.fontWeight.regular,
                    textTransform: 'lowercase',
                  }}
                >
                  {header}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {pairs.map((pair) => {
            const ratio = contrastRatio(pair.foreground, pair.background)
            return (
              <tr key={pair.name}>
                <th
                  scope="row"
                  style={{
                    textAlign: 'left',
                    padding: `${spacing[1]}px`,
                    fontWeight: typography.fontWeight.regular,
                    color: colors.text.body,
                  }}
                >
                  {pair.name}
                </th>
                <td style={{ padding: `${spacing[1]}px` }}>
                  <code>{pair.foreground}</code>
                </td>
                <td style={{ padding: `${spacing[1]}px` }}>
                  <code>{pair.background}</code>
                </td>
                <td style={{ padding: `${spacing[1]}px` }}>{ratio.toFixed(2)}:1</td>
                {showControl ? (
                  <td style={{ padding: `${spacing[1]}px`, color: colors.text.body }}>
                    compact fill
                  </td>
                ) : null}
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export function ColorSwatches() {
  return (
    <FoundationFrame>
      <FoundationTitle>colors</FoundationTitle>
      <FoundationNote>
        The brand palette stays faded. Default interface text uses slate gray and stone warm.
        Compact filled controls use the accessible fills.
      </FoundationNote>
      <SwatchList heading="brand palette" items={brandSwatches} />
      <SwatchList heading="default text" items={textSwatches} />
      <SwatchList heading="compact control fills" items={controlSwatches} />
      <PairTable
        heading="default text pairs"
        caption="Slate and stone on page and surface. These are the default reading colors."
        pairs={defaultTextPairs}
      />
      <PairTable
        heading="compact control pairs"
        caption="Accessible fills with on-primary text for compact filled actions."
        pairs={controlContrastPairs}
        showControl
      />
    </FoundationFrame>
  )
}
