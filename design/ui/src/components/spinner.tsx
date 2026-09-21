import * as React from 'react'

import { cn } from '../lib/utils'

const sizeClass = {
  sm: 'size-4',
  default: 'size-6',
  lg: 'size-8',
} as const

const TICKS = [
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 1 },
  { x: 3, y: 2 },
  { x: 2, y: 3 },
  { x: 1, y: 3 },
  { x: 0, y: 2 },
  { x: 0, y: 1 },
] as const

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
      role={hidden ? undefined : 'status'}
      aria-label={hidden ? undefined : label}
      viewBox="0 0 4 4"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={cn(
        'spinner-pixel text-muted-foreground',
        sizeClass[size],
        className,
      )}
      {...props}
    >
      {TICKS.map((cell, index) => (
        <rect
          key={`${cell.x}-${cell.y}`}
          data-tick
          x={cell.x}
          y={cell.y}
          width={1}
          height={1}
          style={{ animationDelay: `${(-index * 0.8) / TICKS.length}s` }}
        />
      ))}
    </svg>
  )
}

export { Spinner }
