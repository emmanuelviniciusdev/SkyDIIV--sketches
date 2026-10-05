'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '../lib/utils'

export type SliderProps = {
  value: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  onValueChange: (value: number) => void
  'aria-label'?: string
  'aria-labelledby'?: string
  id?: string
  className?: string
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function assertAccessibleName(
  ariaLabel: string | undefined,
  ariaLabelledby: string | undefined,
) {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  if (ariaLabel || ariaLabelledby) {
    return
  }

  throw new Error(
    'Slider requires aria-label or aria-labelledby so assistive tech can name the control.',
  )
}

function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  onValueChange,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  id,
  className,
}: SliderProps) {
  assertAccessibleName(ariaLabel, ariaLabelledby)

  const clamped = clamp(value, min, max)

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      value={[clamped]}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      orientation="horizontal"
      onValueChange={(values) => {
        const next = values[0]
        if (next === undefined) {
          return
        }
        onValueChange(clamp(next, min, max))
      }}
      className={cn(
        'relative flex h-full min-h-4 w-full touch-none select-none items-center',
        disabled && 'pointer-events-none',
        className,
      )}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative h-1 w-full grow overflow-hidden rounded-sm bg-transparent"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-full rounded-sm bg-primary-accessible"
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        data-slot="slider-thumb"
        id={id}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        className={cn(
          'block size-3.5 shrink-0 rounded-md border border-border bg-card shadow-none outline-none transition-colors duration-200 ease-out',
          'hover:border-foreground',
          'focus-visible:border-primary',
        )}
      />
    </SliderPrimitive.Root>
  )
}

export { Slider }
