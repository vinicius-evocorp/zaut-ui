import { ArrowRight } from 'phosphor-react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@zaut-ui-beta/react'

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.',
      },
    },
  },
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'md',
    disabled: false,
    children: 'Button',
    fullWidth: false,
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['contained', 'outlined', 'ghost', 'text'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Contained: StoryObj<ButtonProps> = {
  args: {
    variant: 'contained',
  },
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
}

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Button With Icon
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
