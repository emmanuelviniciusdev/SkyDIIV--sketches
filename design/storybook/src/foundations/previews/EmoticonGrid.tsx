import { SparklingStar } from '@/components/ui/sparkling-star'

import { emoticonGroups, kddiEmoticons, type Emoticon } from '../Emoticons'
import { colors, radius, spacing, typography } from '../tokens'
import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

const emoticonMarkSize = 32

const cardStyle = {
  background: colors.card,
  border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
  borderRadius: radius.lg,
} as const

function EmoticonMark({ item }: { item: Emoticon }) {
  return (
    <img
      src={item.src}
      alt=""
      width={emoticonMarkSize}
      height={emoticonMarkSize}
      style={{
        width: emoticonMarkSize,
        height: emoticonMarkSize,
        objectFit: 'contain',
        imageRendering: 'pixelated',
      }}
    />
  )
}

function EmoticonTile({ item }: { item: Emoticon }) {
  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: spacing[1],
        padding: spacing[1],
        background: colors.card,
        border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
        borderRadius: radius.md,
      }}
    >
      <EmoticonMark item={item} />
      <p
        style={{
          margin: 0,
          textAlign: 'center',
          fontSize: typography.scale.micro.fontSize,
          letterSpacing: typography.scale.micro.letterSpacing,
          lineHeight: typography.scale.micro.lineHeight,
          color: colors.text.muted,
        }}
      >
        {item.name}
      </p>
    </li>
  )
}

export function EmoticonGrid() {
  return (
    <FoundationFrame>
      <FoundationTitle>emoticons</FoundationTitle>
      <FoundationNote>
        The set is historical KDDI pixel marks from the Unicode full emoji list.
        Keep them sharp. The yellow sparkling star belongs in the set, but it is
        not an emoji. It is a mark with a soft glow and a slow twinkle.
      </FoundationNote>

      <section style={{ marginBottom: spacing[4] }}>
        <h2
          style={{
            margin: `0 0 ${spacing[2]}px`,
            fontSize: typography.scale.h2.fontSize,
            fontWeight: typography.scale.h2.fontWeight,
            letterSpacing: typography.scale.h2.letterSpacing,
            lineHeight: typography.scale.h2.lineHeight,
          }}
        >
          sparkling star
        </h2>
        <div
          style={{
            display: 'inline-flex',
            padding: spacing.insetCard,
            overflow: 'visible',
            ...cardStyle,
          }}
        >
          <SparklingStar
            overlay={false}
            className="relative [&_.sparkling-star__icon]:size-12"
          />
        </div>
      </section>

      {emoticonGroups.map((group) => (
        <section key={group.name} style={{ marginBottom: spacing[4] }}>
          <h2
            style={{
              margin: `0 0 ${spacing[2]}px`,
              fontSize: typography.scale.h2.fontSize,
              fontWeight: typography.scale.h2.fontWeight,
              letterSpacing: typography.scale.h2.letterSpacing,
              lineHeight: typography.scale.h2.lineHeight,
            }}
          >
            {group.name}
          </h2>
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(104px, 1fr))',
              gap: spacing[1],
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {group.items.map((item) => (
              <EmoticonTile key={item.id} item={item} />
            ))}
          </ul>
        </section>
      ))}

      <p
        style={{
          margin: 0,
          fontSize: typography.scale.micro.fontSize,
          letterSpacing: typography.scale.micro.letterSpacing,
          color: colors.text.muted,
        }}
      >
        {kddiEmoticons.length} kddi marks
      </p>
    </FoundationFrame>
  )
}
