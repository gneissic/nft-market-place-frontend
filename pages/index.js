import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AutoHeader from '../components/Header/AutoHeader'
import LotteryEntrance from '../components/Header/lottery/LotteryEntrance'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nft Market place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <p>Hello</p>
    </div>
  )
}
