import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-9 w-full min-w-0 rounded-md border border-border bg-background px-3 text-[13px] font-normal tracking-[0.02em] lowercase text-foreground shadow-none outline-none transition-colors duration-200 ease-out',
        'placeholder:text-muted-foreground/70',
        'focus-visible:border-foreground',
        'aria-invalid:border-destructive',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'file:border-0 file:bg-transparent file:text-[13px] file:font-normal file:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
