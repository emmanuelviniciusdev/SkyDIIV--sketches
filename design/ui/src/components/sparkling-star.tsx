'use client'

import * as React from 'react'

import { cn } from '../lib/utils'

function SparklingStar({
  className,
  overlay = true,
  ...props
}: React.ComponentProps<'span'> & {
  overlay?: boolean
}) {
  const filterId = React.useId().replace(/:/g, '')

  return (
    <span
      data-slot="sparkling-star"
      className={cn(
        'sparkling-star pointer-events-none z-10',
        overlay && 'absolute -top-1.5 -right-1.5',
        className,
      )}
      aria-hidden
      {...props}
    >
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="sparkling-star__icon size-4 overflow-visible"
        role="presentation"
      >
        <defs>
          <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter={`url(#${filterId})`}>
          <polygon
            points="32,10 36.95,27.05 54,32 36.95,36.95 32,54 27.05,36.95 10,32 27.05,27.05"
            fill="#F5C948"
          />
          <rect x="29.5" y="21" width="3" height="7" rx="0.5" fill="#FFF4C4" opacity="0.85" />
          <circle cx="39" cy="35" r="1.6" fill="#FFFAE6" opacity="0.8" />
        </g>
      </svg>
    </span>
  )
}

export { SparklingStar }
