import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within, userEvent, screen } from 'storybook/test'
import { Globe } from '@phosphor-icons/react'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const meta = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

function SeasonSelect({
  disabled,
  invalid,
}: {
  disabled?: boolean
  invalid?: boolean
}) {
  return (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="season">season</Label>
      <Select disabled={disabled}>
        <SelectTrigger id="season" aria-invalid={invalid || undefined}>
          <SelectValue placeholder="choose a season" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>wardrobe</SelectLabel>
            <SelectItem value="spring">spring</SelectItem>
            <SelectItem value="summer">summer</SelectItem>
            <SelectItem value="autumn">autumn</SelectItem>
            <SelectItem value="winter">winter</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectItem value="all">all seasons</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export const Default: Story = {
  render: () => <SeasonSelect />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('combobox', { name: 'season' })
    await expect(trigger).toBeVisible()
    await userEvent.click(trigger)
    const summer = await screen.findByRole('option', { name: 'summer' })
    await userEvent.click(summer)
    await expect(trigger).toHaveTextContent('summer')
  },
}

export const WithIcon: Story = {
  render: () => (
    <Select defaultValue="en-US">
      <SelectTrigger aria-label="language" className="w-fit min-w-48">
        <Globe weight="light" className="text-muted-foreground" aria-hidden />
        <SelectValue placeholder="language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt-BR">português (br)</SelectItem>
        <SelectItem value="es-PE">español (pe)</SelectItem>
        <SelectItem value="en-US">english (us)</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('combobox', { name: 'language' })
    await expect(trigger).toBeVisible()
    await expect(trigger.querySelectorAll('svg').length).toBeGreaterThan(1)
    await userEvent.click(trigger)
    const spanish = await screen.findByRole('option', { name: 'español (pe)' })
    await userEvent.click(spanish)
    await expect(trigger).toHaveTextContent('español (pe)')
  },
}

export const Invalid: Story = {
  render: () => <SeasonSelect invalid />,
}

export const Disabled: Story = {
  render: () => <SeasonSelect disabled />,
}
