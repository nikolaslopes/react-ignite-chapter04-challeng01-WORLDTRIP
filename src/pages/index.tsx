import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { ContinentsSlider } from '../components/ContinentSlider'
import { TravelTips } from '../components/TravelTips'

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

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

      <Heading
        fontWeight={'500'}
        textAlign={'center'}
        fontSize={{ base: 'lg', sm: '2xl', md: '3xl' }}
        color={'gray.900'}
      >
        Vamos nessa? {!isWideVersion && <br />} Então escolha seu continente
      </Heading>

      <Flex paddingY={'12'}>
        <ContinentsSlider />
      </Flex>
    </Flex>
  )
}

export default Home
