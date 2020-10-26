import { useState, useContext } from 'react'
import UserContext from './UserContext'
import styles from './jobselection.module.css'

function Button({ job, fullname, setJobSelected, selectJob, jobSelected }) {
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

function JobButtons() {
  const { selectJob } = useContext(UserContext)
  const [jobSelected, setJobSelected] = useState('None')

  return (
    <div>
      <div className={styles.joblist}>
        <div className={styles.jobroles}>
          <Button
            job="pld"
            fullname="Paladin"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="war"
            fullname="Warrior"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="drk"
            fullname="Dark Knight"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="gnb"
            fullname="Gunbreaker"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
        </div>
        <div className={styles.jobroles}>
          <Button
            job="whm"
            fullname="White Mage"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="sch"
            fullname="Scholar"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="ast"
            fullname="Astrologian"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
        </div>
        <div className={styles.jobroles}>
          <Button
            job="mnk"
            fullname="Monk"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="drg"
            fullname="Dragoon"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="nin"
            fullname="Ninja"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="sam"
            fullname="Samurai"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
        </div>
        <div className={styles.jobroles}>
          <Button
            job="brd"
            fullname="Bard"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="mch"
            fullname="Machinist"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="dnc"
            fullname="Dancer"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
        </div>
        <div className={styles.jobroles}>
          <Button
            job="blm"
            fullname="Black Mage"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="smn"
            fullname="Summoner"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
          <Button
            job="rdm"
            fullname="Red Mage"
            selectJob={selectJob}
            jobSelected={jobSelected}
            setJobSelected={setJobSelected}
          />
        </div>
      </div>
    </div>
  )
}

const JobSelection = () => {
  return <JobButtons />
}

export default JobSelection
