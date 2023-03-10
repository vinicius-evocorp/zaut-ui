import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@zaut-ui-beta/react'
import { ArrowRight } from 'phosphor-react'

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
    variant: 'solid',
    size: 'md',
    fullWidth: false,
    disabled: false,
    children: 'Button',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['solid', 'outline', 'ghost', 'text', 'link'],
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
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Solid: StoryObj<ButtonProps> = {
  args: {
    variant: 'solid',
    children: 'Solid',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
    children: 'Text',
  },
}

export const Link: StoryObj<ButtonProps> = {
  args: {
    variant: 'link',
    children: 'Link',
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

export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    fullWidth: true,
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
