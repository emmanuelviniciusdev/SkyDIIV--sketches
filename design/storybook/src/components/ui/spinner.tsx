import * as React from 'react'

import { cn } from '@/lib/utils'

const TICK_COUNT = 12

const sizeClass = {
  sm: 'size-4',
  default: 'size-5',
  lg: 'size-8',
} as const

function Spinner({
  className,
  size = 'default',
  label = 'loading...',
  ...props
}: React.ComponentProps<'svg'> & {
  size?: keyof typeof sizeClass
  label?: string
}) {
  const hidden = props['aria-hidden'] === true || props['aria-hidden'] === 'true'

  return (
    <svg
      data-slot="spinner"
      viewBox="0 0 24 24"
      fill="currentColor"
      role={hidden ? undefined : 'status'}
      aria-label={hidden ? undefined : label}
      className={cn(sizeClass[size], 'text-foreground', className)}
      {...props}
    >
      {Array.from({ length: TICK_COUNT }, (_, index) => (
        <rect
          key={index}
          className="loading-spinner__tick"
          x="10.85"
          y="1.6"
          width="2.3"
          height="5.4"
          rx="1.15"
          transform={`rotate(${index * (360 / TICK_COUNT)} 12 12)`}
          style={{ animationDelay: `${-index / TICK_COUNT}s` }}
        />
      ))}
    </svg>
  )
}

export { Spinner }
