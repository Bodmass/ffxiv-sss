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
      <div className="updateDetails">
        <p>
          <b>Updated for Patch 5.3 (17/08/2020)</b>
        </p>
      </div>
      <Calculator />
    </div>
  )
}
