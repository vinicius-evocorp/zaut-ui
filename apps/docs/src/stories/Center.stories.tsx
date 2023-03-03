import type { Meta, StoryObj } from '@storybook/react'
import { Center, CenterProps, Text } from '@zaut-ui/react'

export default {
  title: 'Layout/Center',
  component: Center,
  parameters: {
    docs: {
      description: {
        component:
          'Center is a layout component that centers its child within itself.',
      },
    },
  },
  args: {
    children: <Text>This is the Center</Text>,
    css: {
      backgroundColor: '$secondary-500',
      color: '$white',
      height: '$28',
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<CenterProps>

export const Default: StoryObj<CenterProps> = {}
