import Head from 'next/head'
import Header from '../components/Header'
import Calculator from '../components/Calculator'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FFXIV Stone, Sky, Sea Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Calculator />
    </div>
  )
}
