import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps, Flex } from '@zaut-ui-beta/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'The Avatar component is used to represent user, and displays the profile picture, initials or fallback icon.',
      },
    },
  },
  args: {
    src: 'https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    alt: 'John Duo',
    square: false,
    size: 'md',
    children: 'JD',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    square: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const Square: StoryObj<AvatarProps> = {
  args: {
    square: true,
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    children: null,
  },
  decorators: [
    (Story) => {
      return (
        <Flex gap="2">
          {Story()}
          <Avatar>JD</Avatar>
        </Flex>
      )
    },
  ],
}

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<AvatarProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
  },
}
