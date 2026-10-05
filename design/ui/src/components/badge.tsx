import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-[11px] font-medium tracking-[0.04em] lowercase w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none overflow-hidden transition-colors duration-200 ease-out',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary-accessible text-primary-foreground',
        secondary: 'border-transparent bg-secondary-accessible text-secondary-foreground',
        destructive: 'border-transparent bg-destructive-accessible text-destructive-foreground',
        accent: 'border-transparent bg-accent-accessible text-accent-foreground',
        cool: 'border-transparent bg-cool-accessible text-primary-foreground',
        outline: 'border-border bg-card text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
