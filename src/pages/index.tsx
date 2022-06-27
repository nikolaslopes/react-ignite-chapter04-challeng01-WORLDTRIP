import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { TravelTips } from '../components/TravelTips'

const Home: NextPage = () => {
  return (
    <Flex flexDirection={'column'}>
      <Banner />
      <TravelTips />
    </Flex>
  )
}

export default Home
