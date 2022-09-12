import '../styles/globals.css'
import type { AppProps } from 'next/app'
import client from '../src/apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// Config fontawesome 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

//Tailwind
// import 'tailwindcss/defaultConfig'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )

  // return <Component {...pageProps} />
}

export default MyApp
