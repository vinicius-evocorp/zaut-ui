import { ComponentProps } from '@/types'

import { Flex, FlexProps } from './Flex'

export function Center(props: FlexProps) {
  const { align = 'center', justify = 'center', ...rest } = props

  return <Flex {...rest} align={align} justify={justify} />
}

export interface CenterProps extends ComponentProps<typeof Center> {}

Center.displayName = 'Center'
