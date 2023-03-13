import { ComponentProps } from 'react'

import { User } from 'phosphor-react'

import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  variant?: ComponentProps<typeof AvatarContainer>['variant']
  size?: ComponentProps<typeof AvatarContainer>['size']
}

export function Avatar({ variant, size, css, children, ...rest }: AvatarProps) {
  return (
    <AvatarContainer size={size} variant={variant} css={css}>
      <AvatarImage {...rest} />

      <AvatarFallback delayMs={600}>
        {children || <User weight="bold" />}
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
