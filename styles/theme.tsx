import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  colors: {},
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        backgroundColor: '#020202',
      },
    }),
  },
})
