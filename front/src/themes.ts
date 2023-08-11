// 1. Import `extendTheme`
import { extendTheme,withDefaultColorScheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ddd",
      300: '#acd', 500: '#D36D34',600:'#A73F05',700:'#D36D34',
      900: "#ddd",
    },
  },
},
  withDefaultColorScheme({colorScheme:'brand'})
)