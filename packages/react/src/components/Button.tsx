import { ComponentProps } from '@/types'
import { styled } from '@stitches/react'

export const Button = styled('button', {
  all: 'unset',

  borderRadius: '$lg',
  fontSize: '$sm',
  fontWeight: '$semibold',
  fontFamily: '$default',
  textAlign: 'center',
  textTransform: 'uppercase',
  textDecoration: 'none',
  boxSizing: 'border-box',
  border: '$borderWidths$2 $borderStyles$solid $colors$transparent',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  transition: 'all 0.2s ease-in-out',

  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      primary: {},
      secondary: {},
    },
    variant: {
      contained: {},
      outlined: {
        backgroundColor: '$transparent',
      },
      ghost: {
        borderColor: '$transparent',
        backgroundColor: '$transparent',
      },
      text: {
        backgroundColor: '$transparent',
      },
    },
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
    fullWidth: {
      true: {
        width: '$full',
      },
    },
  },

  compoundVariants: [
    {
      color: 'primary',
      variant: 'contained',
      css: {
        color: '$gray-900',
        backgroundColor: '$primary-500',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary-600',
        },
      },
    },
    {
      color: 'primary',
      variant: 'outlined',
      css: {
        color: '$primary-700',
        borderColor: '$primary-200',

        '&:not(:disabled):hover': {
          borderColor: '$primary-200',
          backgroundColor: '$primary-100',
        },
      },
    },
    {
      color: 'primary',
      variant: 'ghost',
      css: {
        color: '$primary-800',
        backgroundColor: '$primary-100',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary-200',
        },
      },
    },
    {
      color: 'primary',
      variant: 'text',
      css: {
        color: '$primary-700',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary-100',
        },
      },
    },
    {
      color: 'secondary',
      variant: 'contained',
      css: {
        color: '$white',
        backgroundColor: '$secondary-500',

        '&:not(:disabled):hover': {
          backgroundColor: '$secondary-600',
        },
      },
    },
    {
      color: 'secondary',
      variant: 'outlined',
      css: {
        color: '$secondary-500',
        borderColor: '$secondary-100',

        '&:not(:disabled):hover': {
          borderColor: '$secondary-100',
          backgroundColor: '$secondary-50',
        },
      },
    },
    {
      color: 'secondary',
      variant: 'ghost',
      css: {
        color: '$secondary-500',
        backgroundColor: '$secondary-50',

        '&:not(:disabled):hover': {
          backgroundColor: '$secondary-100',
        },
      },
    },
    {
      color: 'secondary',
      variant: 'text',
      css: {
        color: '$secondary-500',

        '&:not(:disabled):hover': {
          backgroundColor: '$secondary-50',
        },
      },
    },
  ],

  defaultVariants: {
    color: 'primary',
    variant: 'contained',
    size: 'md',
    fullWidth: false,
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
