import Head from 'next/head'
import Header from '../components/Header'
import Calculator from '../components/Calculator'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FFXIV Stone, Sky, Sea Calculator</title>
        <meta
          name="description"
          content="Final Fantasy XIV Shadowbringers DPS Calculator for Stone, Sky, Sea. Updated for Patch 5.5 (13/04/2021)"
        />
        <meta name="keywords" content="FFXIV, Final Fantasy XIV, Final Fantasy 14, DPS, Calculator, Stone Sky Sea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="updateDetails">
        <p>
          <b>Updated for Patch 5.5 (13/04/2021)</b>
        </p>
      </div>
      <Calculator />
    </div>
  )
}
