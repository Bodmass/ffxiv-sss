import Head from 'next/head'
import { GA_TRACKING_ID } from '../lib/gtag'
import Header from '../components/Header'
import Calculator from '../components/Calculator'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FFXIV Stone, Sky, Sea Calculator</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script>
          {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      `}
        </script>
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
