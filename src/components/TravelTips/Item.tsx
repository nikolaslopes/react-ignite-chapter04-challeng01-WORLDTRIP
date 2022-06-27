import { Box, Flex, Img, Text, useBreakpointValue } from '@chakra-ui/react'

export interface ItemProps {
  text: string
}

export function Item({ text }: ItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex
      flexDirection={{ base: 'row', md: 'column' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {isWideVersion ? (
        <Img
          src="/icons/beach.svg"
          alt="Icon"
          width={{ base: '20px', md: '75px', lg: 'auto' }}
        />
      ) : (
        <Box
          backgroundColor={'yellow.900'}
          width={'2'}
          height={'2'}
          marginRight={'2'}
          borderRadius={'50%'}
        />
      )}
      <Text
        fontSize={{ base: 'lg', md: 'lg', lg: '2xl' }}
        fontWeight={{ base: 'medium', md: 'semibold' }}
        lineHeight={'6'}
        textAlign={'center'}
        marginTop={isWideVersion ? '4' : 0}
      >
        {text}
      </Text>
    </Flex>
  )
}
