import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, userEvent, within } from 'storybook/test'

import {
  Button,
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@emmanuelviniciusdev/skydiiv-ui'

const meta = {
  title: 'Overlay/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

function dialogFrom(canvasElement: HTMLElement) {
  return within(canvasElement.ownerDocument.body)
}

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="primary">archive look</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>archive look</ModalTitle>
          <ModalDescription>it will leave the current page.</ModalDescription>
        </ModalHeader>
        <ModalBody>the look stays in the archive and can be restored later.</ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="ghost" size="sm">
              cancel
            </Button>
          </ModalClose>
          <Button variant="primary" size="sm">
            archive
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'archive look' }))
    const page = dialogFrom(canvasElement)
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await expect(page.getByRole('button', { name: 'close' })).toBeVisible()
    await expect(page.getByText('it will leave the current page.')).toBeVisible()
    const overlay = canvasElement.ownerDocument.querySelector('[data-slot="modal-overlay"]')
    await expect(overlay?.className).toMatch(/backdrop-blur-md/)
    await expect(overlay?.className).toMatch(/bg-background\/60/)
  },
}

export const TitleOnly: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>edit piece</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>edit piece</ModalTitle>
        </ModalHeader>
        <ModalBody>update the name and notes for this garment.</ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="ghost" size="sm">
              cancel
            </Button>
          </ModalClose>
          <Button variant="primary" size="sm">
            save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const WithoutTitle: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>remove piece</Button>
      </ModalTrigger>
      <ModalContent aria-label="remove piece">
        <ModalBody>remove this piece from the space? this cannot be undone.</ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="ghost" size="sm">
              keep
            </Button>
          </ModalClose>
          <Button variant="primary" size="sm">
            remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const Confirm: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>sign out</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>sign out</ModalTitle>
          <ModalDescription>you can sign back in at any time.</ModalDescription>
        </ModalHeader>
        <ModalBody>open sessions on this device will close.</ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="ghost" size="sm">
              stay
            </Button>
          </ModalClose>
          <Button variant="primary" size="sm">
            sign out
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}
