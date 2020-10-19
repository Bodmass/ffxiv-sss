import '../styles/globals.css'

import App from 'next/app'
import UserContext from '../components/UserContext'

export default class MyApp extends App {
  state = {
    job: null,
  }

  selectJob = (selectedJob) => {
    localStorage.setItem('user-job', selectedJob)

    this.setState({
      job: selectedJob,
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <UserContext.Provider value={{ job: this.state.job, selectJob: this.selectJob }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    )
  }
}
