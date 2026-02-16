import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DlBadge from './DlBadge.vue'

const meta: Meta<typeof DlBadge> = {
  title: 'Library/Components/DlBadge',
  component: DlBadge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/REPLACE_WITH_YOUR_FILE_KEY/ComponentLibrary?node-id=0-3',
    },
  },
}

export default meta
type Story = StoryObj<typeof DlBadge>

export const Primary: Story = {
  args: {
    label: 'Primary',
    color: 'primary',
    size: 'medium',
    variant: 'filled',
  },
}

export const Success: Story = {
  args: {
    label: 'Active',
    color: 'success',
    size: 'medium',
    variant: 'filled',
  },
}

export const Warning: Story = {
  args: {
    label: 'Pending',
    color: 'warning',
    size: 'medium',
    variant: 'filled',
  },
}

export const Danger: Story = {
  args: {
    label: 'Failed',
    color: 'danger',
    size: 'medium',
    variant: 'filled',
  },
}

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    color: 'primary',
    size: 'medium',
    variant: 'outlined',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    color: 'info',
    size: 'small',
    variant: 'filled',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Badge',
    color: 'secondary',
    size: 'large',
    variant: 'filled',
  },
}
