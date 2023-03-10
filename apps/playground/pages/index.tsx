import { Center, Container, Heading, Text } from '@zaut-ui-beta/react'

export default function Home() {
  return (
    <Container size="sm" css={{ display: 'flex', height: '$h-screen' }}>
      <Center direction="column" css={{ flex: 1, textAlign: 'center' }}>
        <Heading size="xl" css={{ marginBottom: '$4' }}>
          🥳
        </Heading>

        <Heading as="h1" css={{ marginBottom: '$1' }}>
          Playground Zaut UI
        </Heading>

        <Text css={{ color: '$gray-500' }}>
          Test the components of Zaut&apos;s Design System.
        </Text>
      </Center>
    </Container>
  )
}
