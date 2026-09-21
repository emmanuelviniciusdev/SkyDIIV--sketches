import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../lib/utils'
import { logo } from '../tokens'

const avatarVariants = cva(
  'relative block shrink-0 overflow-hidden rounded-lg',
  {
    variants: {
      size: {
        sm: 'size-8 text-[13px]',
        default: 'size-10 text-lg',
        lg: 'size-16 text-2xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

function getLogoColorForLetter(letter: string): string {
  const lower = letter.toLocaleLowerCase('en-US')
  const match = logo.letters.find(
    (item) => item.ch.toLocaleLowerCase('en-US') === lower,
  )
  if (match) return match.top

  const code = letter.codePointAt(0) ?? 0
  return logo.letters[code % logo.letters.length].top
}

function getLogoColorForName(name: string | null | undefined): string {
  const initial = resolveInitial(name)
  if (initial === '?') return logo.letters[0].top
  return getLogoColorForLetter(initial)
}

function resolveInitial(name: string | null | undefined): string {
  const trimmed = name?.trim() ?? ''
  if (trimmed.length === 0) return '?'
  const char = Array.from(trimmed)[0]
  return char ? char.toLocaleUpperCase('en-US') : '?'
}

function Avatar({
  className,
  size = 'default',
  src,
  name,
  alt,
  ...props
}: Omit<React.ComponentProps<'span'>, 'children'> &
  VariantProps<typeof avatarVariants> & {
    src?: string | null
    name?: string | null
    alt?: string
  }) {
  const trimmedSrc = src?.trim() || null
  const initial = resolveInitial(name)
  const label = alt ?? (name ? `photo of ${name}` : 'profile photo')

  if (trimmedSrc) {
    return (
      <img
        data-slot="avatar"
        src={trimmedSrc}
        alt={label}
        className={cn(
          avatarVariants({ size }),
          'bg-card object-cover',
          className,
        )}
      />
    )
  }

  return (
    <span
      data-slot="avatar"
      role="img"
      aria-label={label}
      className={cn(
        avatarVariants({ size }),
        'flex items-center justify-center font-medium text-primary-foreground',
        className,
      )}
      style={{ backgroundColor: getLogoColorForName(name) }}
      {...props}
    >
      <span
        aria-hidden
        className="brand-name absolute inset-0 flex items-center justify-center leading-none uppercase"
      >
        {initial}
      </span>
    </span>
  )
}

export { Avatar, avatarVariants, getLogoColorForLetter, getLogoColorForName, resolveInitial }
