import Head from 'next/head'
import Header from '../components/Header'
import Calculator from '../components/Calculator'
import Footer from '../components/Footer'
import LanguageSelection from '../components/LanguageSelection'
import CookieBanner from '../components/CookieBanner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FFXIV Stone, Sky, Sea Calculator</title>
        <meta
          name="description"
          content="Final Fantasy XIV Dawntrail DPS Calculator for Stone, Sky, Sea. Updated for Patch 7.0 (28/06/2024)"
        />
        <meta
          name="keywords"
          content="FFXIV, Final Fantasy XIV, Final Fantasy 14, DPS, Calculator, Stone Sky Sea, The Trial of Spire"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="updateDetails">
        <body>
          <p>
            <b>Updated for Patch 7.0 (28/06/2024)</b>
          </p>
        </body>
      </div>
      <LanguageSelection />
      <Calculator />
      <Footer />
      <CookieBanner />
    </div>
  )
}
