import { useContext } from 'react'
import JobSelection from './JobSelection'
import BossSelection from './BossSelection'
import styles from './calculator.module.css'
import UserContext from './UserContext'

const Calculator = () => {
  const { job: selectedJob } = useContext(UserContext)
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.innercontainer}>
            <div className={styles.innercontainertitle}>
              <p>Select a Boss</p>
            </div>
            <BossSelection />

            <div className={styles.bossselectcontainer} />
          </div>
          <div className={styles.innercontainer}>
            <div className={styles.innercontainertitle}>
              <p>Selected Job: {`${selectedJob}`}</p>
            </div>
            <JobSelection />
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

export default Calculator
