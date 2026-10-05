import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from './modal'

describe('Modal', () => {
  it('opens with a title, subtitle, body, footer, and close control', async () => {
    const user = userEvent.setup()

    render(
      <Modal>
        <ModalTrigger>open</ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>archive look</ModalTitle>
            <ModalDescription>it will leave this page.</ModalDescription>
          </ModalHeader>
          <ModalBody>the look stays in the archive.</ModalBody>
          <ModalFooter>
            <button type="button">keep</button>
          </ModalFooter>
        </ModalContent>
      </Modal>,
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'open' }))

    expect(screen.getByRole('dialog')).toBeVisible()
    expect(screen.getByText('archive look')).toBeVisible()
    expect(screen.getByText('it will leave this page.')).toBeVisible()
    expect(screen.getByText('the look stays in the archive.')).toBeVisible()
    expect(screen.getByRole('button', { name: 'keep' })).toBeVisible()
    expect(screen.getByRole('button', { name: 'close' })).toBeVisible()

    const overlay = document.querySelector('[data-slot="modal-overlay"]')
    expect(overlay).not.toBeNull()
    expect(overlay?.className).toContain('bg-background/60')
    expect(overlay?.className).toContain('backdrop-blur-md')
  })

  it('always shows a close control when title and subtitle are omitted', () => {
    render(
      <Modal defaultOpen>
        <ModalContent aria-label="confirm">
          <ModalBody>remove this piece from the space.</ModalBody>
          <ModalFooter>
            <button type="button">remove</button>
          </ModalFooter>
        </ModalContent>
      </Modal>,
    )

    expect(screen.getByRole('dialog', { name: 'confirm' })).toBeVisible()
    expect(screen.queryByText('archive look')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'close' })).toBeVisible()
  })

  it('closes from the icon control', async () => {
    const user = userEvent.setup()

    render(
      <Modal defaultOpen>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>archive look</ModalTitle>
          </ModalHeader>
          <ModalBody>the look stays in the archive.</ModalBody>
          <ModalFooter>
            <ModalClose>cancel</ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>,
    )

    await user.click(screen.getByRole('button', { name: 'close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
