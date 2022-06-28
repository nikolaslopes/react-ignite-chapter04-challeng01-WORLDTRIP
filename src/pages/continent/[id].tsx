import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { ContinentBanner } from '../../components/ContinentBanner'

export default function Continent() {
  return (
    <Flex>
      <Head>
        <title>worldtrip | teste</title>
      </Head>

      <ContinentBanner />
    </Flex>
  )
}
