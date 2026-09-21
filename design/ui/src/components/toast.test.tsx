import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Toast, ToastClose, ToastDescription, ToastTitle } from './toast'

describe('Toast', () => {
  it('renders a status message', () => {
    render(
      <Toast>
        <ToastTitle>saved</ToastTitle>
        <ToastDescription>changes are on the page</ToastDescription>
        <ToastClose />
      </Toast>,
    )

    expect(screen.getByRole('status')).toBeVisible()
    expect(screen.getByText('saved')).toBeVisible()
    expect(screen.getByRole('button', { name: 'dismiss' })).toBeVisible()
  })

  it('uses alert for the destructive variant', () => {
    render(
      <Toast variant="destructive">
        <ToastTitle>failed</ToastTitle>
      </Toast>,
    )

    expect(screen.getByRole('alert')).toBeVisible()
  })
})
