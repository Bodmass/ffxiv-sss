import { useState } from 'react'
import styles from './jobselection.module.css'

function JobButtons() {
  const [jobSelected, setJobSelected] = useState('No Job Selected')
  function Button({ job, fullname }) {
    return (
      <div className={styles.button}>
        <a
          className={styles.jobicon}
          onClick={() => setJobSelected(fullname)}
          onKeyPress={() => setJobSelected(fullname)}
          role="button"
          tabIndex={0}
          style={{ filter: jobSelected === fullname ? 'grayscale(0)' : 'grayscale(1)' }}
        >
          <img src={`../images/job-icons/${job}.png`} alt="" draggable="false" />
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.innercontainertitle}>
        <p>Selected Job: {`${jobSelected}`}</p>
      </div>
      <div className={styles.joblist}>
        <div className={styles.jobroles}>
          <Button job="pld" fullname="Paladin" />
          <Button job="war" fullname="Warrior" />
          <Button job="drk" fullname="Dark Knight" />
        </div>
        <div className={styles.jobroles}>
          <Button job="whm" fullname="White Mage" />
          <Button job="sch" fullname="Scholar" />
          <Button job="ast" fullname="Astrologian" />
        </div>
        <div className={styles.jobroles}>
          <Button job="mnk" fullname="Monk" />
          <Button job="drg" fullname="Dragoon" />
          <Button job="nin" fullname="Ninja" />
          <Button job="sam" fullname="Samurai" />
        </div>
        <div className={styles.jobroles}>
          <Button job="brd" fullname="Bard" />
          <Button job="mch" fullname="Machinist" />
          <Button job="dnc" fullname="Dancer" />
        </div>
        <div className={styles.jobroles}>
          <Button job="blm" fullname="Black Mage" />
          <Button job="smn" fullname="Summoner" />
          <Button job="rdm" fullname="Red Mage" />
        </div>
      </div>
    </div>
  )
}

const JobSelection = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.innercontainer}>
            <div className={styles.innercontainertitle}>
              <p>Select a Boss</p>
            </div>
            <div className={styles.bossselectcontainer} />
          </div>
          <div className={styles.innercontainer}>
            <JobButtons />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.innercontainer}>
            <div className={styles.innercontainertitle}>
              <p>Dummy Settings</p>
            </div>
            Test
          </div>
          <div className={styles.innercontainer}>
            <div className={styles.innercontainertitle}>
              <p>Results</p>
            </div>
            Test
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobSelection
