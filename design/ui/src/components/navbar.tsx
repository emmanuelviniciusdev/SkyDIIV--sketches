import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { List, X } from '@phosphor-icons/react'

import { cn } from '../lib/utils'
import { Button } from './button'

function Navbar({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="navbar"
      className={cn(
        'flex h-14 w-full items-center justify-between border-b border-border bg-background px-4 shadow-none sm:px-6',
        className,
      )}
      {...props}
    />
  )
}

function NavbarFrame({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-frame"
      className={cn('relative bg-background', className)}
      {...props}
    />
  )
}

function NavbarBrand({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="navbar-brand"
      className={cn(
        'brand-name text-[13px] font-normal tracking-[0.02em] text-foreground',
        className,
      )}
      {...props}
    />
  )
}

function NavbarStart({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-start"
      className={cn('flex min-w-0 items-center gap-3', className)}
      {...props}
    />
  )
}

function NavbarEnd({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-end"
      className={cn('flex items-center gap-3', className)}
      {...props}
    />
  )
}

function NavbarMenuButton({
  open = false,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'icon' | 'children'> & {
  open?: boolean
}) {
  const Icon = open ? X : List

  return (
    <Button
      type="button"
      variant="default"
      size="icon-sm"
      icon={Icon}
      aria-label={open ? 'close menu' : 'open menu'}
      aria-expanded={open}
      className={className}
      {...props}
    />
  )
}

function NavbarMenu({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot="navbar-menu"
      className={cn(
        'absolute top-14 right-4 z-10 mt-1 flex w-64 flex-col gap-1 rounded-md border border-border bg-card p-2 shadow-none sm:right-6',
        className,
      )}
      {...props}
    />
  )
}

function NavbarMenuUser({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-menu-user"
      className={cn(
        'mb-1 flex items-center gap-3 border-b border-border px-2 pb-3 pt-1',
        className,
      )}
      {...props}
    />
  )
}

function NavbarMenuUserName({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="navbar-menu-user-name"
      className={cn(
        'min-w-0 truncate text-[13px] font-normal tracking-[0.02em] text-foreground',
        className,
      )}
      {...props}
    />
  )
}

function NavbarMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="ghost"
      size="sm"
      data-slot="navbar-menu-item"
      className={cn(
        'w-full justify-start hover:border-border hover:bg-background',
        className,
      )}
      {...props}
    />
  )
}

export {
  Navbar,
  NavbarBrand,
  NavbarEnd,
  NavbarFrame,
  NavbarMenu,
  NavbarMenuButton,
  NavbarMenuItem,
  NavbarMenuUser,
  NavbarMenuUserName,
  NavbarStart,
}
