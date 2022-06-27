import { Box, Flex, Img } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      width={'100%'}
      height={'8'}
      padding={'30'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Img
        width={['20', '24', '30', '36', '44']}
        src="/Logo.svg"
        alt="Logo World Trip"
      />
    </Flex>
  )
}
