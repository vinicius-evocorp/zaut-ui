import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const IconButton = styled('button', {
  all: 'unset',

  display: 'block',
  margin: '$0',
  color: '$gray-600',
  backgroundColor: '$gray-100',
  borderRadius: '$lg',
  lineHeight: '$none',
  cursor: 'pointer',

  transition: 'all 0.2s ease-in-out',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    color: '$gray-900',
    backgroundColor: '$gray-200',
  },

  variants: {
    size: {
      sm: {
        padding: '$0 $3',
        minHeight: '$8',

        svg: {
          width: '$4',
          height: '$4',
        },
      },
      md: {
        padding: '$0 $4',
        minHeight: '$12',

        svg: {
          width: '$5',
          height: '$5',
        },
      },
      lg: {
        padding: '$0 $6',
        minHeight: '$16',
        fontSize: '$lg',

        svg: {
          width: '$6',
          height: '$6',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface IconButtonProps extends ComponentProps<typeof IconButton> {}

IconButton.displayName = 'IconButton'
