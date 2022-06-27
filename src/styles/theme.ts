import { background, extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      900: '#FFBA08',
      800: 'rgba(255, 186, 8, 0.5)',
    },
    gray: {
      900: '#47585B',
      800: '#999999',
      200: '#DADADA',
      100: '#F5F8FA',
    },
  },
  fonts: {
    headings: `'Poppins', sans-serif`,
    body: `'Poppinwws', sans-serif`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
      },
    },
  },
})
