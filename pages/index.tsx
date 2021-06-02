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
        <body>
          <p style={{ textAlign: 'center' }}>
            <b>Updated for Patch 5.5 (13/04/2021)</b>
          </p>
          <p>
            <i>Due to the Level 51-80 Stat Squish, the numbers on the calculator are now inaccurate.</i>
          </p>
          <p>Please be patient for the 6.0 Update</p>
        </body>
      </div>
      <Calculator />
    </div>
  )
}
