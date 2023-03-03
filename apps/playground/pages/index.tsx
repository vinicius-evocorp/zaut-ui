import { Box, Button, Container, Flex, Heading, Text } from '@zaut-ui/react'
import Link from 'next/link'
import { Image as ImageIcon, Scan, Sun } from 'phosphor-react'

export default function Home() {
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
      <Flex direction="column" css={{ flex: 1 }}>
        <Box css={{ color: '$primary-600', mb: '$4' }}>
          <Scan size={80} />
        </Box>

        <Flex direction="column" gap="2">
          <Heading
            size="lg"
            css={{ fontWeight: '$medium', color: '$gray-900' }}
          >
            Assinatura do termo de adesão
          </Heading>
          <Text css={{ color: '$gray-500' }}>
            Vamos precisar de algumas imagens para confirmar sua identidade.
            Essa é uma medida de segurança para proteger sua conta.
          </Text>
        </Flex>

        <Heading size="sm" css={{ my: '$6', color: '$gray-900' }}>
          Dicas importantes:
        </Heading>

        <Flex gap="4" css={{ mb: '$6' }}>
          <ImageIcon size={20} weight="bold" />
          <Flex direction="column" gap="1" css={{ width: '100%' }}>
            <Heading
              size="xs"
              css={{ color: '$gray-900', fontWeight: '$medium' }}
            >
              Não tire foto de outra foto
            </Heading>
            <Text size="sm" css={{ color: '$gray-500' }}>
              Fazer isso geralmente não produz uma imagem clara e nítida, e pode
              resultar em reflexos ou distorções na imagem final.
            </Text>
          </Flex>
        </Flex>

        <Flex gap="4">
          <Sun size={20} weight="bold" />
          <Flex direction="column" gap="1" css={{ width: '100%' }}>
            <Heading
              size="xs"
              css={{ color: '$gray-900', fontWeight: '$medium' }}
            >
              Garanta a iluminação adequada
            </Heading>
            <Text size="sm" css={{ color: '$gray-500' }}>
              Evite ambientes totalmente escuros ou lugares com excesso de luz.
            </Text>
          </Flex>
        </Flex>

        <Box css={{ margin: 'auto 0 0' }}>
          <Link href="/step-one">
            <Button color="secondary" variant="outlined" fullWidth>
              Continuar
            </Button>
          </Link>
        </Box>

        <Text
          size="xs"
          css={{ color: '$gray-400', textAlign: 'center', mt: '$4' }}
        >
          Sua imagem será armazenada com segurança e só será utilizada para
          confirmar sua identidade.
        </Text>
      </Flex>
    </Container>
  )
}
