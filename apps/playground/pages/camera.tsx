import { Box, Button, Container, Flex, Heading } from '@zaut-ui/react'

export default function Camera() {
  return (
    <Container
      size="sm"
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: '$h-screen',
        p: '$8',
      }}
    >
      <Flex direction="column" gap="10" css={{ flex: 1 }}>
        <Heading css={{ fontWeight: '$regular', color: '$gray-900' }}>
          Aproxime a <strong>camera</strong> do dispositivo para tirar a foto da
          <strong>parte da frente do seu documento</strong>
        </Heading>

        <Box
          css={{
            w: '$full',
            h: '$full',
            borderRadius: '$2xl',
            bgColor: '$black',
            overflow: 'hidden',
          }}
        />

        <Button>Tirar foto</Button>
      </Flex>
    </Container>
  )
}
