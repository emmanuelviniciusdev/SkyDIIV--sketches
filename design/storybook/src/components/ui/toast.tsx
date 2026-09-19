import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from '@phosphor-icons/react'

import { cn } from '@/lib/utils'

const toastVariants = cva(
  'relative flex w-full max-w-sm items-start gap-3 overflow-hidden rounded-md border p-4 pr-10 shadow-none',
  {
    variants: {
      variant: {
        default: 'border-border bg-card text-foreground',
        destructive: 'border-destructive bg-card text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Toast({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof toastVariants>) {
  return (
    <div
      data-slot="toast"
      data-variant={variant ?? 'default'}
      role={variant === 'destructive' ? 'alert' : 'status'}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
}

function ToastBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="toast-body"
      className={cn('flex min-w-0 flex-1 flex-col gap-1', className)}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="toast-title"
      className={cn(
        'text-[13px] font-normal tracking-[0.04em] lowercase leading-none text-foreground',
        className,
      )}
      {...props}
    />
  )
}

function ToastDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="toast-description"
      className={cn(
        'text-[13px] font-light tracking-[0.02em] text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

function ToastAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="toast-action"
      className={cn('shrink-0 self-center', className)}
      {...props}
    />
  )
}

function ToastClose({ className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      type="button"
      data-slot="toast-close"
      aria-label="dismiss"
      className={cn(
        'absolute top-2 right-2 inline-flex size-7 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors duration-200 ease-out',
        'hover:text-foreground focus-visible:border focus-visible:border-foreground',
        className,
      )}
      {...props}
    >
      <X weight="light" className="size-4" aria-hidden />
    </button>
  )
}

export {
  Toast,
  ToastAction,
  ToastBody,
  ToastClose,
  ToastDescription,
  ToastTitle,
  toastVariants,
}
