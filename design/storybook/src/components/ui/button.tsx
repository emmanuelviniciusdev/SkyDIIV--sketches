import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { Icon } from '@phosphor-icons/react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[13px] font-normal tracking-[0.04em] lowercase transition-colors duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-primary",
  {
    variants: {
      variant: {
        default: 'border border-border bg-card text-foreground hover:bg-background',
        primary:
          'border border-transparent bg-primary-accessible text-primary-foreground hover:bg-primary-accessible/90',
        outline: 'border border-border bg-background text-foreground hover:bg-card',
        ghost: 'border border-transparent bg-transparent text-foreground',
      },
      size: {
        default: 'px-5 py-2.5 has-[>svg]:px-4',
        sm: 'px-3 py-2 gap-1.5 has-[>svg]:px-2.5',
        lg: 'px-6 py-3 has-[>svg]:px-5',
        icon: 'size-9 p-0',
        'icon-sm': 'size-8 p-0',
        'icon-lg': 'size-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  icon: Icon,
  iconPosition = 'left',
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    icon: Icon
    iconPosition?: 'left' | 'right'
  }) {
  const Comp = asChild ? Slot : 'button'

  if (asChild) {
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Comp>
    )
  }

  const mark = <Icon weight="light" aria-hidden />

  return (
    <Comp
      data-slot="button"
      data-icon-position={iconPosition}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {iconPosition === 'right' ? (
        <>
          {children}
          {mark}
        </>
      ) : (
        <>
          {mark}
          {children}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
