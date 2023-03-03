import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@zaut-ui/react'
import Link from 'next/link'
import { AppleLogo, HouseSimple } from 'phosphor-react'

export default function StepOne() {
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
        <Flex direction="column" gap="2">
          <Heading css={{ fontWeight: '$regular', color: '$gray-900' }}>
            Para começar precisamos de uma{' '}
            <strong>foto da parte da frente do seu documento</strong>
          </Heading>
          <Text
            size="sm"
            css={{
              color: '$gray-500',
              '>strong': {
                color: '$primary-700',
              },
            }}
          >
            Utilize sua <strong>CNH ou RG</strong>. Esses são os documentos
            válidos no processo para <strong>confirmar sua identidade</strong>
          </Text>
        </Flex>

        <Box css={{ m: 'auto' }}>
          <IconButton disabled aria-label="Apple">
            <AppleLogo weight="fill" />
          </IconButton>
        </Box>

        <Box css={{ m: 'auto $0 $0' }}>
          <Link href="/camera">
            <Button color="secondary" variant="outlined" fullWidth>
              Vamos lá
            </Button>
          </Link>
        </Box>
      </Flex>
    </Container>
  )
}
