import { Box, Img } from '@chakra-ui/react'

export function ImageBox() {
  return (
    <Box paddingRight={'100'} transform={'auto'} translateY={'-10'}>
      <Img src="/airplane.svg" alt="Airplane" />
    </Box>
  )
}
