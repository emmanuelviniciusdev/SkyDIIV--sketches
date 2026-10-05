'use client'

import { Minus, Plus } from '@phosphor-icons/react'

import { cn } from '../lib/utils'
import { Button } from './button'
import { clamp, Slider, type SliderProps } from './slider'

export type ZoomControlProps = SliderProps & {
  decrementAriaLabel: string
  incrementAriaLabel: string
  /** Extra amount for ± buttons. Defaults to `step`. */
  buttonStep?: number
}

function ZoomControl({
  value,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  onValueChange,
  decrementAriaLabel,
  incrementAriaLabel,
  buttonStep,
  className,
  ...sliderProps
}: ZoomControlProps) {
  const amount = buttonStep ?? step
  const clamped = clamp(value, min, max)
  const atMin = clamped <= min
  const atMax = clamped >= max

  return (
    <div
      data-slot="zoom-control"
      data-disabled={disabled ? 'true' : undefined}
      className={cn(
        'flex h-9 w-full items-center gap-1 rounded-md border border-border bg-card px-1 shadow-none',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        icon={Minus}
        data-slot="zoom-control-decrement"
        aria-label={decrementAriaLabel}
        disabled={disabled || atMin}
        onClick={() => onValueChange(clamp(clamped - amount, min, max))}
      />
      <Slider
        {...sliderProps}
        className="min-w-0 flex-1"
        value={clamped}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={onValueChange}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        icon={Plus}
        data-slot="zoom-control-increment"
        aria-label={incrementAriaLabel}
        disabled={disabled || atMax}
        onClick={() => onValueChange(clamp(clamped + amount, min, max))}
      />
    </div>
  )
}

export { ZoomControl }
