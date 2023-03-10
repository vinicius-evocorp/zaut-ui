import { Box, Flex, Heading, Text } from '@zaut-ui-beta/react'
import { colors } from '@zaut-ui-beta/tokens'
import { getContrast } from 'polished'

const contrast = colors.white

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <Box key={key} css={{ backgroundColor: color, padding: '$8' }}>
        <Flex
          justify="between"
          align="center"
          css={{
            color: getContrast(color, contrast) < 3.5 ? '$black' : '$white',
          }}
        >
          <Heading size="xs">${key}</Heading>
          <Text>{color}</Text>
        </Flex>
      </Box>
    )
  })
}
