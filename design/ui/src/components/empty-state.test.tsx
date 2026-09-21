import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import {
  EmptyState,
  EmptyStateAction,
  EmptyStateDescription,
  EmptyStateTitle,
} from './empty-state'

describe('EmptyState', () => {
  it('renders the title, description, and action region', () => {
    render(
      <EmptyState>
        <EmptyStateTitle>nothing here</EmptyStateTitle>
        <EmptyStateDescription>try another filter</EmptyStateDescription>
        <EmptyStateAction>
          <button type="button">clear</button>
        </EmptyStateAction>
      </EmptyState>,
    )

    expect(screen.getByText('nothing here')).toBeVisible()
    expect(screen.getByText('try another filter')).toBeVisible()
    expect(screen.getByRole('button', { name: 'clear' })).toBeVisible()
  })
})
