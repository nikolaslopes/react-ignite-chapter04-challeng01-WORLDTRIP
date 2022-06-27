import { Box, Center, Divider, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { TravelTips } from '../components/TravelTips'

const Home: NextPage = () => {
  return (
    <Flex flexDirection={'column'}>
      <Banner />
      <TravelTips />

      <Box
        borderWidth={'1px'}
        borderStyle={'solid'}
        borderColor={'gray.900'}
        width={{ base: '10', md: '16' }}
        marginY={'12'}
        alignSelf={'center'}
      />
    </Flex>
  )
}

export default Home
