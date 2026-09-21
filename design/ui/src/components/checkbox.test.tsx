import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'

import { Checkbox } from './checkbox'
import { Label } from './label'

function LabeledCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <Checkbox
        id="remember"
        checked={checked}
        onCheckedChange={(value) => setChecked(value === true)}
      />
      <Label htmlFor="remember">remember me</Label>
    </div>
  )
}

describe('Checkbox', () => {
  it('toggles from the associated label', async () => {
    const user = userEvent.setup()
    render(<LabeledCheckbox />)

    const checkbox = screen.getByRole('checkbox', { name: 'remember me' })
    expect(checkbox).not.toBeChecked()

    await user.click(screen.getByText('remember me'))
    expect(checkbox).toBeChecked()
  })
})
