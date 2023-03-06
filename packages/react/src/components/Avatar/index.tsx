import { ComponentProps } from 'react'
import { User } from 'phosphor-react'

import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  square?: ComponentProps<typeof AvatarContainer>['square']
  size?: ComponentProps<typeof AvatarContainer>['size']
}

export function Avatar({ square, size, children, css, ...rest }: AvatarProps) {
  return (
    <AvatarContainer size={size} square={square} css={css}>
      <AvatarImage {...rest} />

      <AvatarFallback delayMs={600}>
        {children || <User weight="bold" />}
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
