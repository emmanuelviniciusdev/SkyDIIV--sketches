import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within, userEvent } from 'storybook/test'
import {
  ArrowRight,
  Gear,
  Globe,
  SignOut,
  User,
} from '@phosphor-icons/react'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
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
} from '@/components/ui/navbar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const meta = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

function LanguageSelect() {
  return (
    <Select defaultValue="en-US">
      <SelectTrigger aria-label="language" className="h-8 w-fit min-w-40 bg-card px-2.5">
        <Globe weight="light" className="text-muted-foreground" aria-hidden />
        <SelectValue placeholder="language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt-BR">português (br)</SelectItem>
        <SelectItem value="es-PE">español (pe)</SelectItem>
        <SelectItem value="en-US">english (us)</SelectItem>
      </SelectContent>
    </Select>
  )
}

export const Default: Story = {
  render: () => (
    <Navbar>
      <NavbarStart>
        <NavbarBrand>SkyDIIV</NavbarBrand>
      </NavbarStart>
      <NavbarEnd>
        <LanguageSelect />
        <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right">
          access
        </Button>
      </NavbarEnd>
    </Navbar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('SkyDIIV')).toBeVisible()
    await expect(canvas.getByRole('combobox', { name: 'language' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'access' })).toBeVisible()
    const access = canvas.getByRole('button', { name: 'access' })
    await expect(access.querySelector('svg')).toBe(access.lastElementChild)
  },
}

export const WithMenu: Story = {
  render: function WithMenuStory() {
    const [open, setOpen] = React.useState(false)

    return (
      <NavbarFrame className="min-h-64">
        <Navbar>
          <NavbarStart>
            <NavbarBrand>SkyDIIV</NavbarBrand>
          </NavbarStart>
          <NavbarEnd>
            <NavbarMenuButton
              open={open}
              aria-controls="navbar-menu"
              onClick={() => setOpen((value) => !value)}
            />
          </NavbarEnd>
        </Navbar>
        {open ? (
          <NavbarMenu id="navbar-menu">
            <NavbarMenuUser>
              <Avatar
                size="sm"
                src="/hayley.png"
                name="yelyahwilliams"
                alt="photo of yelyahwilliams"
              />
              <NavbarMenuUserName>yelyahwilliams</NavbarMenuUserName>
            </NavbarMenuUser>
            <NavbarMenuItem icon={User}>profile</NavbarMenuItem>
            <NavbarMenuItem icon={Gear}>preferences</NavbarMenuItem>
            <NavbarMenuItem icon={SignOut}>sign out</NavbarMenuItem>
          </NavbarMenu>
        ) : null}
      </NavbarFrame>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const menuButton = canvas.getByRole('button', { name: 'open menu' })
    await userEvent.click(menuButton)
    await expect(canvas.getByRole('button', { name: 'close menu' })).toBeVisible()
    await expect(canvas.getByRole('img', { name: 'photo of yelyahwilliams' })).toBeVisible()
    await expect(canvas.getByText('yelyahwilliams')).toBeVisible()
    const preferences = canvas.getByRole('button', { name: 'preferences' })
    await expect(preferences).toBeVisible()
    await expect(preferences.className).toMatch(/hover:bg-background/)
    await expect(preferences.className).toMatch(/hover:border-border/)
  },
}
