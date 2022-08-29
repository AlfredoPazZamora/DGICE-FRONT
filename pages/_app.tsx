import '../styles/globals.css'
import type { AppProps } from 'next/app'
import client from '../src/apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )

  // return <Component {...pageProps} />
}

export default MyApp
