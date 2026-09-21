import * as React from 'react'

import { cn } from '../lib/utils'

function EmptyState({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-state"
      className={cn(
        'flex w-full flex-col items-center justify-center py-16 text-center',
        className,
      )}
      {...props}
    />
  )
}

function EmptyStateIcon({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-state-icon"
      className={cn(
        'mb-4 text-muted-foreground [&_svg]:size-12 [&_svg]:shrink-0',
        className,
      )}
      {...props}
    />
  )
}

function EmptyStateTitle({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="empty-state-title"
      className={cn(
        'mb-2 font-normal tracking-[0.04em] lowercase text-foreground',
        className,
      )}
      {...props}
    />
  )
}

function EmptyStateDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="empty-state-description"
      className={cn(
        'mb-6 max-w-sm text-[13px] font-light tracking-[0.02em] text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

function EmptyStateAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-state-action"
      className={cn('flex items-center justify-center', className)}
      {...props}
    />
  )
}

export {
  EmptyState,
  EmptyStateAction,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
}
