import { Box, Flex, Heading } from '@chakra-ui/react'

export function ContinentBanner() {
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
          aa
        </Heading>
      </Box>
    </Flex>
  )
}
