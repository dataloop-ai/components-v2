import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DlButton from './DlButton.vue'

const meta: Meta<typeof DlButton> = {
  title: 'Library/Components/DlButton',
  component: DlButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'flat'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success'],
    },
    disabled: {
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
type Story = StoryObj<typeof DlButton>

export const Filled: Story = {
  args: {
    label: 'Filled Button',
    variant: 'filled',
    color: 'primary',
    size: 'medium',
  },
}

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
  },
}

export const Flat: Story = {
  args: {
    label: 'Flat Button',
    variant: 'flat',
    color: 'primary',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    variant: 'filled',
    color: 'primary',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'filled',
    color: 'primary',
    size: 'large',
  },
}

export const Danger: Story = {
  args: {
    label: 'Delete',
    variant: 'filled',
    color: 'danger',
    size: 'medium',
  },
}

export const Success: Story = {
  args: {
    label: 'Confirm',
    variant: 'filled',
    color: 'success',
    size: 'medium',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'filled',
    color: 'primary',
    size: 'medium',
    disabled: true,
  },
}
