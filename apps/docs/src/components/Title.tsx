import { ReactNode } from 'react'
import { Heading } from '@zaut-ui/react'

export function Title({ children }: { children?: ReactNode }) {
  return (
    <Heading as="h1" size="lg" css={{ color: '$gray-900' }}>
      {children}
    </Heading>
  )
}
