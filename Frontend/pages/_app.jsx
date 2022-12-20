import '../styles/globals.scss';
import '../styles/variables.scss';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import React from "react";
import { lightTheme } from "../themes/lightTheme";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
});

export default function App({Component, pageProps}) {
  return (
    <ThemeProvider theme={lightTheme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps}/>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
