import * as React from 'react'

import { cn } from '../lib/utils'

const earthMark = new URL('../assets/earth.png', import.meta.url).href

const SPARKLES = [
  { className: '-left-3 top-3', delay: '0s', size: 'sm' },
  { className: '-right-2 top-1', delay: '0.55s', size: 'md' },
  { className: '-left-1 bottom-4', delay: '1.1s', size: 'sm' },
  { className: 'right-0 bottom-2', delay: '0.85s', size: 'sm' },
  { className: 'left-1/2 -top-2 -translate-x-1/2', delay: '1.35s', size: 'md' },
  { className: '-right-4 top-1/2 -translate-y-1/2', delay: '0.25s', size: 'sm' },
] as const

function Sparkle({
  className,
  delay,
  size,
}: {
  className: string
  delay: string
  size: 'sm' | 'md'
}) {
  return (
    <span
      className={cn(
        'loading-earth__sparkle pointer-events-none absolute',
        className,
      )}
      style={{ animationDelay: delay }}
      aria-hidden
    >
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(size === 'md' ? 'size-4' : 'size-3.5', 'overflow-visible')}
        role="presentation"
      >
        <polygon
          points="32,10 36.95,27.05 54,32 36.95,36.95 32,54 27.05,36.95 10,32 27.05,27.05"
          fill="#F3F5FA"
        />
      </svg>
    </span>
  )
}

function LoadingEarth({
  className,
  label = 'loading...',
  ...props
}: React.ComponentProps<'div'> & {
  label?: string
}) {
  return (
    <div
      data-slot="loading-earth"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
      className={cn(
        'flex flex-col items-center justify-center gap-4',
        className,
      )}
      {...props}
    >
      <span
        className="relative inline-flex items-center justify-center"
        aria-hidden
      >
        <img
          src={earthMark}
          alt=""
          width={128}
          height={128}
          className="loading-earth__mark h-32 w-32 object-contain"
        />
        {SPARKLES.map((sparkle) => (
          <Sparkle key={sparkle.delay + sparkle.className} {...sparkle} />
        ))}
      </span>
      <p className="text-[13px] font-light tracking-[0.02em] text-muted-foreground">
        {label}
      </p>
    </div>
  )
}

export { LoadingEarth }
