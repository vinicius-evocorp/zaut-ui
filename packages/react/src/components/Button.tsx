import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const Button = styled('button', {
  all: 'unset',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  fontSize: '$sm',
  fontWeight: '$semibold',
  fontFamily: '$default',
  lineHeight: '$none',

  textAlign: 'center',
  textDecoration: 'none',
  boxSizing: 'border-box',
  border: '$borderWidths$1 $borderStyles$solid $colors$transparent',
  borderRadius: '$lg',

  cursor: 'pointer',

  transition: 'all 0.2s ease-in-out',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      primary: {},
      secondary: {},
    },
    variant: {
      solid: {},
      outline: {},
      ghost: {},
      text: {},
      link: {
        textDecoration: 'underline',
        textDecorationThickness: 2,
        textUnderlineOffset: 4,
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
      variant: 'solid',
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
      variant: 'outline',
      css: {
        color: '$primary-700',
        borderColor: '$primary-200',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary-50',
        },
      },
    },
    {
      color: 'primary',
      variant: 'ghost',
      css: {
        color: '$primary-800',
        backgroundColor: '$primary-50',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary-100',
        },
      },
    },
    {
      color: 'primary',
      variant: 'text',
      css: {
        color: '$primary-700',

        '&:not(:disabled):hover': {
          color: '$primary-800',
        },
      },
    },
    {
      color: 'primary',
      variant: 'link',
      css: {
        color: '$primary-700',

        '&:not(:disabled):hover': {
          color: '$primary-800',
        },
      },
    },
    {
      color: 'secondary',
      variant: 'solid',
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
      variant: 'outline',
      css: {
        color: '$secondary-500',
        borderColor: '$secondary-100',

        '&:not(:disabled):hover': {
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
          color: '$secondary-800',
        },
      },
    },
    {
      color: 'secondary',
      variant: 'link',
      css: {
        color: '$secondary-500',

        '&:not(:disabled):hover': {
          color: '$secondary-800',
        },
      },
    },
  ],

  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    size: 'md',
    fullWidth: false,
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
