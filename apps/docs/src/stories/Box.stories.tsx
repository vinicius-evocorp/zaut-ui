import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@zaut-ui/react'

export default {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          'Box is the most abstract component of all. By default it renders a `div` element',
      },
    },
  },
  args: {
    css: {
      padding: '$4',
      borderRadius: '$lg',
      color: '$white',
      backgroundColor: '$secondary-500',
    },
    children: <Text>This is the Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
