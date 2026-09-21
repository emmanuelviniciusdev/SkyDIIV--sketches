import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

describe('Tabs', () => {
  it('shows the selected panel', () => {
    render(
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">one</TabsTrigger>
          <TabsTrigger value="two">two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">first panel</TabsContent>
        <TabsContent value="two">second panel</TabsContent>
      </Tabs>,
    )

    expect(screen.getByRole('tab', { name: 'one' })).toHaveAttribute('data-state', 'active')
    expect(screen.getByText('first panel')).toBeVisible()
  })
})
