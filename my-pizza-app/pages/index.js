import Head from 'next/head'
import Image from 'next/image'
import Featured from '../Components/Featured'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant India | Best pizza app in town</title>
        <meta name="description" content="Best pizza app in India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div>
  )
}
