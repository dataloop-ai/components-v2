import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DlAlert from './DlAlert.vue'

const meta: Meta<typeof DlAlert> = {
  title: 'Library/Components/DlAlert',
  component: DlAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
    },
    closable: {
      control: 'boolean',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/hYO14NfmXfbeh8jF8Pv1cq/Design-system-2026?node-id=0-1&t=vctxuHclX2T3paQs-1',
    },
  },
}

export default meta
type Story = StoryObj<typeof DlAlert>

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'This is an informational alert message.',
    closable: false,
  },
}

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully.',
    closable: false,
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please review before proceeding.',
    closable: true,
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    closable: true,
  },
}

export const Closable: Story = {
  args: {
    type: 'info',
    title: 'Dismissible Alert',
    message: 'Click the X to close this alert.',
    closable: true,
  },
}

export const NoTitle: Story = {
  args: {
    type: 'info',
    message: 'This is an alert without a title.',
    closable: false,
  },
}
