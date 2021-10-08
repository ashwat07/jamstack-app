import Head from 'next/head'
import React from 'react'
import Header from '@components/header'
// import styles from '../shared/Home.module.css'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Next App</title>
      </Head>

      <main>
        <Header />
      </main>
    </React.Fragment>
  )
}
