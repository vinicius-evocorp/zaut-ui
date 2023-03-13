import { Center, Container, Flex, Heading, Text } from '@zaut-ui-beta/react'

export default function Home() {
  return (
    <Container size="sm" css={{ display: 'flex', height: '$h-screen' }}>
      <Center css={{ flex: 1 }}>
        <Flex direction="column" gap="6" css={{ flex: 1, textAlign: 'center' }}>
          <Heading size="xl">🥳</Heading>

          <Flex direction="column" gap="1">
            <Heading as="h1">Playground Zaut UI</Heading>

            <Text css={{ color: '$gray-400' }}>
              Test the components of Zaut&apos;s Design System.
            </Text>
          </Flex>
        </Flex>
      </Center>
    </Container>
  )
}
