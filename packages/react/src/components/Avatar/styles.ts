import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '@/styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  variants: {
    square: {
      true: {
        borderRadius: '$lg',
      },
    },
    size: {
      sm: {
        size: '$6',
      },
      md: {
        size: '$10',
      },
      lg: {
        size: '$14',
      },
    },
  },

  defaultVariants: {
    square: false,
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  size: '$full',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  size: '$full',
  color: '$white',
  backgroundColor: '$gray-500',

  fontFamily: '$default',
  fontWeight: '$medium',
})
