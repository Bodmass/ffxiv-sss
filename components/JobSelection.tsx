import { useState, useContext } from 'react'
import UserContext from './UserContext'
import styles from './jobselection.module.css'

function JobButtons() {
  const { selectJob } = useContext(UserContext)
  const [jobSelected, setJobSelected] = useState('None')

  function Button({ job, fullname }) {
    return (
      <div className={styles.button}>
        <a
          className={styles.jobicon}
          onClick={() => {
            setJobSelected(fullname)
            selectJob(job)
          }}
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
      <div className={styles.joblist}>
        <div className={styles.jobroles}>
          <Button job="pld" fullname="Paladin" />
          <Button job="war" fullname="Warrior" />
          <Button job="drk" fullname="Dark Knight" />
          <Button job="gnb" fullname="Gunbreaker" />
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
  return <JobButtons />
}

export default JobSelection
