import * as React from 'react'

import { cn } from '@/lib/utils'
import { brandNames, logo } from '@/foundations/tokens'

const CHANNELS_SNOW_IMAGE = '/tv-static.jpg' as const

function letterFillStyle(top: string, bottom: string) {
  return {
    backgroundImage: `linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`,
  }
}

const channelsSnowStyle = {
  backgroundImage: `url('${CHANNELS_SNOW_IMAGE}')`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
} as const satisfies React.CSSProperties

const skyLetters = logo.letters.slice(0, 3)

function SkyDiivLogo({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="logo"
      className={cn('skydiiv-logo font-medium', className)}
      aria-label={brandNames.product}
      role="img"
      {...props}
    >
      <span className="skydiiv-logo__fill" aria-hidden="true">
        <span
          className="skydiiv-logo__letter skydiiv-logo__hash"
          style={letterFillStyle(logo.hash.top, logo.hash.bottom)}
        >
          {logo.hash.ch}
        </span>
        {logo.letters.map((letter, index) => (
          <span
            key={`${letter.ch}-${index}`}
            className="skydiiv-logo__letter"
            style={letterFillStyle(letter.top, letter.bottom)}
          >
            {letter.ch}
          </span>
        ))}
      </span>
      <span className="skydiiv-logo__grain" aria-hidden="true">
        <span className="skydiiv-logo__hash">{logo.hash.ch}</span>
        {brandNames.product}
      </span>
    </span>
  )
}

function SkyChannelsLogo({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="channels-logo"
      className={cn('sky-channels-logo font-medium', className)}
      aria-label={`#${brandNames.channels}`}
      role="img"
      {...props}
    >
      <span className="sky-channels-logo__sky">
        <span className="skydiiv-logo__fill" aria-hidden="true">
          <span
            className="skydiiv-logo__letter skydiiv-logo__hash"
            style={letterFillStyle(logo.hash.top, logo.hash.bottom)}
          >
            {logo.hash.ch}
          </span>
          {skyLetters.map((letter, index) => (
            <span
              key={`${letter.ch}-${index}`}
              className="skydiiv-logo__letter"
              style={letterFillStyle(letter.top, letter.bottom)}
            >
              {letter.ch}
            </span>
          ))}
        </span>
        <span className="skydiiv-logo__grain" aria-hidden="true">
          <span className="skydiiv-logo__hash">{logo.hash.ch}</span>
          {brandNames.channelsPrefix}
        </span>
      </span>
      <span className="sky-chnnls" aria-hidden="true">
        <span className="sky-chnnls__base font-black" style={channelsSnowStyle}>
          {brandNames.channelsSuffix}
        </span>
      </span>
    </span>
  )
}

export { SkyChannelsLogo, SkyDiivLogo }
