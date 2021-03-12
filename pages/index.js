import Head from 'next/head'
import styles from '../styles/Home.module.css'

import DuckZone from "../components/duck.zone/index"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kile Donley</title>
        <link rel="icon" href=""/>
      </Head>

      <h1>Welcome</h1>
      <h2>Click for Ducks</h2>
      <DuckZone/>

    </div>
  )
}
