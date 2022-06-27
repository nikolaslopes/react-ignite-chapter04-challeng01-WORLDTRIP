import {
  Box,
  Flex,
  Heading,
  Img,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as={'section'}
      width={'100%'}
      height={['163px', '245px', '335px']}
      bgImage={'/background.svg'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
    >
      <VStack padding={'4'} alignItems={'flex-start'}>
        <Heading
          color={'gray.100'}
          fontWeight={'400'}
          size={['xl', '2xl', '3xl']}
          paddingBottom={'6'}
        >
          5 Continentes, infinitas possibilidades.
        </Heading>
        <Text color={'gray.200'}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </VStack>

      {isWideVersion && (
        <Box>
          <Img src="/airplane.svg" alt="Airplane" />
        </Box>
      )}
    </Flex>
  )
}

export default Home
