import { Center, Container, Heading, Text } from '@zaut-ui/react'

export default function Home() {
  return (
    <Container size="sm" css={{ display: 'flex', h: '$h-screen' }}>
      <Center css={{ flex: 1, flexDirection: 'column', textAlign: 'center' }}>
        <Heading size="xl" css={{ mb: '$4' }}>
          🥳
        </Heading>

        <Heading as="h1" css={{ mb: '$1' }}>
          Playground Zaut UI
        </Heading>

        <Text css={{ color: '$gray-500' }}>
          Test the components of Zaut&apos;s Design System.
        </Text>
      </Center>
    </Container>
  )
}
