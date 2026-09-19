import { ArrowSquareOut, FloppyDiskBack } from '@phosphor-icons/react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { colors, layout, radius, spacing, typography } from '../tokens'
import { FoundationFrame, FoundationNote, FoundationTitle } from './FoundationFrame'

export function LayoutRecipes() {
  return (
    <FoundationFrame style={{ padding: 0 }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: layout.headerHeight,
          padding: `0 ${spacing[3]}px`,
          borderBottom: `1px solid color-mix(in srgb, ${colors.muted} 40%, transparent)`,
          background: colors.background,
        }}
      >
        <span
          className="brand-name"
          style={{
            fontSize: typography.scale.small.fontSize,
            letterSpacing: typography.scale.small.letterSpacing,
            fontWeight: typography.fontWeight.regular,
          }}
        >
          SkyDIIV
        </span>
        <Button variant="ghost" size="sm" icon={ArrowSquareOut}>
          open
        </Button>
      </header>

      <div style={{ padding: spacing[3] }}>
        <FoundationTitle>layout</FoundationTitle>
        <FoundationNote>
          A thin header with a hairline, italic quotations, and tinted tags.
          Whitespace is part of the composition.
        </FoundationNote>

        <p
          style={{
            margin: `0 0 ${spacing[4]}px`,
            maxWidth: 520,
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

        <Card style={{ maxWidth: 360, borderRadius: radius.lg }}>
          <CardHeader>
            <CardTitle>capsule notes</CardTitle>
            <CardDescription>grouped content on a quiet surface</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[1] }}>
              <Badge variant="default">linen</Badge>
              <Badge variant="secondary">oversized</Badge>
              <Badge variant="accent">vintage</Badge>
              <Badge variant="cool">capsule</Badge>
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <Button variant="default" size="sm" icon={FloppyDiskBack}>
              save
            </Button>
          </CardFooter>
        </Card>
      </div>
    </FoundationFrame>
  )
}
