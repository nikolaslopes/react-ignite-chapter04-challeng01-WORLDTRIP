import { Box, Flex, Heading } from '@chakra-ui/react'
import { IContinentBanner } from './types'

export function ContinentBanner({ main_image, name }: IContinentBanner) {
  return (
    <Flex
      as={'section'}
      width={'100%'}
      height={['150px', '200px', '250px', '500px']}
      border={'1px solid red'}
    >
      <Box>
        <Heading
          fontSize={['28px', '4xl', '5xl']}
          fontWeight={'600'}
          color={'gray.200'}
        >
          {name}
        </Heading>
      </Box>
    </Flex>
  )
}
