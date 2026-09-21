import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Card, CardDescription, CardHeader, CardTitle } from './card'

describe('Card', () => {
  it('renders title and description', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>signal</CardTitle>
          <CardDescription>a quiet surface</CardDescription>
        </CardHeader>
      </Card>,
    )

    expect(screen.getByText('signal')).toBeVisible()
    expect(screen.getByText('a quiet surface')).toBeVisible()
  })
})
