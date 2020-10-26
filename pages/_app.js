import '../styles/globals.css'

import App from 'next/app'
import UserContext from '../components/UserContext'

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
      <UserContext.Provider
        value={{ job: this.state.job, selectJob: this.selectJob, boss: this.state.boss, selectBoss: this.selectBoss }}
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    )
  }
}
