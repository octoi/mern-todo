import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  }
})

export default function Chakra({ children }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
