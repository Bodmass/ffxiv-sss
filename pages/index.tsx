import Head from 'next/head'
import Header from '../components/Header'
import Calculator from '../components/Calculator'
import Footer from '../components/Footer'
import LanguageSelection from '../components/LanguageSelection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FFXIV Stone, Sky, Sea Calculator</title>
        <meta
          name="description"
          content="Final Fantasy XIV Endwalker DPS Calculator for Stone, Sky, Sea. Updated for Patch 6.2 (23/08/2022)"
        />
        <meta name="keywords" content="FFXIV, Final Fantasy XIV, Final Fantasy 14, DPS, Calculator, Stone Sky Sea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="updateDetails">
        <body>
          <p>
            <b>Updated for Patch 6.2 (23/08/2022)</b>
          </p>
        </body>
      </div>
      <LanguageSelection />
      <Calculator />
      <Footer />
    </div>
  )
}
