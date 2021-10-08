import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '@shared/globals'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
