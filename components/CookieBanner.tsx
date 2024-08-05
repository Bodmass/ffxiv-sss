import { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import styles from './cookiebanner.module.css'

function cookieConsentGiven() {
  if (!localStorage.getItem('cookieConsent')) {
    return 'undecided'
  }
  return localStorage.getItem('cookieConsent')
}

const CookieBanner = () => {
  const [consentGiven, setConsentGiven] = useState('')

  useEffect(() => {
    setConsentGiven(cookieConsentGiven())
  }, [])

  const AcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setConsentGiven('accepted')
  }

  const DeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setConsentGiven('declined')
  }

  return (
    <>
      {consentGiven === 'undecided' && (
        <div className={styles.banner}>
          <span>This site uses cookies to enhance the user experience and to analyse our website traffic.</span>
          <div className={styles.bannerButtons}>
            <ButtonGroup style={{ height: '48px' }} aria-label="outlined primary button group" fullWidth>
              <Button onClick={AcceptCookies} style={{ background: 'white', margin: '5px' }}>
                Accept
              </Button>
              <Button onClick={DeclineCookies} style={{ background: 'white', margin: '5px' }}>
                Decline
              </Button>
            </ButtonGroup>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieBanner
