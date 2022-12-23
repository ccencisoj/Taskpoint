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
import 'react-loading-skeleton/dist/skeleton.css';

import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from 'react-query';
import { TaskProvider } from '../contexts/TaskContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
});

export default function App({Component, pageProps}) {
  return (
      <SkeletonTheme baseColor="#e5e5ee" highlightColor="#fff">
        <TaskProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps}/>
          </QueryClientProvider>
        </TaskProvider>
      </SkeletonTheme>
  )
}
