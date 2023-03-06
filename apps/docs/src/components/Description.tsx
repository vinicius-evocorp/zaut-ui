import { ReactNode } from 'react'
import { Text } from '@zaut-ui-beta/react'

export function Description({ children }: { children?: ReactNode }) {
  return (
    <Text size="lg" css={{ color: '$gray-500', margin: '$4 $0' }}>
      {children}
    </Text>
  )
}
