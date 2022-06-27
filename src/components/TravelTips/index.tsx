import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Item } from './Item'

export function TravelTips() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Grid
      as={'section'}
      templateColumns={{ base: '1fr 1fr', md: 'repeat(5, 1fr)' }}
      gap={{ base: '4', md: '6' }}
      width={'100%'}
      maxWidth={'1300px'}
      marginX={'auto'}
      paddingX={'12'}
      marginY={{ base: '9', md: '9', lg: '28' }}
    >
      <GridItem>
        <Item text={'vida noturna'} />
      </GridItem>
      <GridItem>
        <Item text={'praia'} />
      </GridItem>
      <GridItem>
        <Item text={'moderno'} />
      </GridItem>
      <GridItem>
        <Item text={'clássico'} />
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Item text={'e mais...'} />
      </GridItem>
    </Grid>
  )
}
