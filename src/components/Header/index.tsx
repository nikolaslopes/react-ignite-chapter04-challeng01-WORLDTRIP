import { Box, Flex, Icon, Img } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi'

export function Header() {
  return (
    <Flex as={'header'} width={'100%'} height={['50px', '75px', '100px']}>
      <Flex
        width={'100%'}
        maxWidth={'1300px'}
        marginX={'auto'}
        paddingX={'2'}
        alignItems={'center'}
        justifyContent={'space-between'}
        border={'1px solid blue'}
      >
        <Icon
          as={FiChevronLeft}
          fontSize={'3xl'}
          color={'gray.800'}
          cursor="pointer"
        />
        <Flex flex={'1'} justifyContent={'center'}>
          <Img
            width={'auto'}
            height={['1.5rem', '2rem', '3rem']}
            src="/Logo.svg"
            alt="Logo World Trip"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
