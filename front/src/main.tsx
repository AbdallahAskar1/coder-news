import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClientProvider,QueryClient} from 'react-query'
import { ChakraProvider, } from '@chakra-ui/react'
import * as t from './themes.ts' 

import App from './App.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={t.theme}>
       <App />
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
