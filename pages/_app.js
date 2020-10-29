import '../styles/globals.css'
import { useEffect } from 'react'
import App from 'next/app'
import { useRouter } from 'next/router'
import UserContext from '../components/UserContext'
import * as gtag from '../lib/gtag'

function Analytics({ children }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <>{children}</>
}

export default class MyApp extends App {
  state = {
    job: null,
    boss: null,
  }

  selectBoss = (selectedBoss) => {
    this.setState({
      boss: selectedBoss,
    })
  }

  selectJob = (selectedJob) => {
    this.setState({
      job: selectedJob,
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Analytics>
        <UserContext.Provider
          value={{ job: this.state.job, selectJob: this.selectJob, boss: this.state.boss, selectBoss: this.selectBoss }}
        >
          <Component {...pageProps} />
        </UserContext.Provider>
      </Analytics>
    )
  }
}
