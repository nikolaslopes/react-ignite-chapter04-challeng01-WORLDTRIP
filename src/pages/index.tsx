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
      <Flex
        width={'100%'}
        marginX={'auto'}
        justifyContent={'space-between'}
        paddingX={'10'}
        paddingY={'14'}
      >
        <VStack
          width={'100%'}
          maxWidth={{ sm: '524px', md: '720px' }}
          alignItems={'flex-start'}
          justifyContent={'center'}
          spacing={'4'}
        >
          <Heading
            color={'gray.100'}
            fontWeight={'400'}
            fontSize={{
              base: '2xl',
              sm: '4xl',
              md: '5xl',
              lg: '5xl',
              xl: '6xl',
            }}
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
            color={'gray.200'}
            fontSize={{
              base: '0.8rem',
              sm: '0.9rem',
              md: '1rem',
              lg: '1.2rem',
              xl: '1.2rem',
            }}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>

        {isWideVersion && (
          <Box paddingRight={'100'} transform={'auto'} translateY={'-10'}>
            <Img src="/airplane.svg" alt="Airplane" />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

export default Home
