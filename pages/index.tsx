import Head from 'next/head'
import Header from '../components/Header'
import JobSelection from '../components/JobSelection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FFXIV Stone, Sky, Sea Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <JobSelection />
    </div>
  )
}
