import type { Meta, StoryObj } from '@storybook/react'
import { Container, ContainerProps, Text } from '@zaut-ui-beta/react'

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          "Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid.",
      },
    },
  },
  args: {
    size: 'md',
    children: <Text>Container</Text>,
    css: {
      color: '$white',
      backgroundColor: '$red-600',
      borderRadius: '$lg',
      minHeight: '$96',
    },
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ContainerProps>

export const Default: StoryObj<ContainerProps> = {}

export const Small: StoryObj<ContainerProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<ContainerProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<ContainerProps> = {
  args: {
    size: 'lg',
  },
}

export const ExtraLarge: StoryObj<ContainerProps> = {
  args: {
    size: 'xl',
  },
}

export const Biggest: StoryObj<ContainerProps> = {
  args: {
    size: '2xl',
  },
}
