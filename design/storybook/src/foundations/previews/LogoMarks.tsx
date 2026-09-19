import { SkyChannelsLogo, SkyDiivLogo } from '@/components/ui/logo'
import { colors, logo, radius, spacing, typography } from '../tokens'
import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

const letterRows = [logo.hash, ...logo.letters]

export function LogoMarks() {
  return (
    <FoundationFrame>
      <FoundationTitle>logos</FoundationTitle>
      <FoundationNote>
        Wordmarks keep mixed case. A hash prefixes both marks. Each product letter
        has its own vertical fade, with crumpled paper grain on the glyphs. The
        channels mark reuses the product prefix fades; the suffix is analog snow,
        extra bold.
      </FoundationNote>

      <section style={{ marginBottom: spacing[4] }}>
        <h2
          className="brand-name"
          style={{
            margin: `0 0 ${spacing[2]}px`,
            fontSize: typography.scale.h2.fontSize,
            fontWeight: typography.scale.h2.fontWeight,
            letterSpacing: typography.scale.h2.letterSpacing,
            textTransform: 'none',
          }}
        >
          SkyDIIV
        </h2>
        <div
          style={{
            display: 'grid',
            gap: spacing[3],
            padding: spacing.insetCard,
            background: colors.card,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
            borderRadius: radius.lg,
          }}
        >
          <SkyDiivLogo className="text-5xl sm:text-6xl" />
          <SkyDiivLogo className="text-xl" />
        </div>
      </section>

      <section style={{ marginBottom: spacing[4] }}>
        <h2
          className="brand-name"
          style={{
            margin: `0 0 ${spacing[2]}px`,
            fontSize: typography.scale.h2.fontSize,
            fontWeight: typography.scale.h2.fontWeight,
            letterSpacing: typography.scale.h2.letterSpacing,
            textTransform: 'none',
          }}
        >
          SkyCHNNLS
        </h2>
        <div
          style={{
            display: 'grid',
            gap: spacing[3],
            padding: spacing.insetCard,
            background: colors.card,
            border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
            borderRadius: radius.lg,
          }}
        >
          <SkyChannelsLogo className="text-5xl sm:text-6xl" />
          <SkyChannelsLogo className="text-xl" />
        </div>
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
          letter fades
        </h2>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
            gap: spacing[1],
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {letterRows.map((letter, index) => (
            <li
              key={`${letter.ch}-${index}`}
              className="brand-name"
              style={{
                padding: spacing[1],
                background: colors.card,
                border: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
                borderRadius: radius.md,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: typography.scale.h1.fontSize,
                  fontWeight: typography.fontWeight.regular,
                  lineHeight: 1.2,
                  backgroundImage: `linear-gradient(180deg, ${letter.top} 0%, ${letter.bottom} 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                {letter.ch}
              </p>
              <p
                style={{
                  margin: `${spacing[1]}px 0 0`,
                  fontSize: typography.scale.micro.fontSize,
                  letterSpacing: typography.scale.micro.letterSpacing,
                  color: colors.text.muted,
                }}
              >
                {letter.top}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </FoundationFrame>
  )
}
