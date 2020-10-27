import { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import JobSelection from './JobSelection'
import BossSelection from './BossSelection'
import styles from './calculator.module.css'
import UserContext from './UserContext'
import data from '../public/bossdata/data.json'

const bossData = data.boss

function Calculate({ dStatus, dummyHP, dummyTime }) {
  let dps = 'h'

  const { job, boss } = useContext(UserContext)

  bossData.forEach((b) => {
    if (b.bossName === boss) {
      const jobsHP = b.jobs
      jobsHP.forEach((e) => {
        if (e.job === job) {
          if (dStatus === 'dead') {
            const bossTimeRemaining = 180 - dummyTime
            const damageDone = Math.trunc(Number(e.bossHp) / bossTimeRemaining)
            dps = `${damageDone}`
          }
          if (dStatus === 'alive') {
            const bossHealthMin = Number(e.bossHp) / 100
            const bossHealthCur = 100 - dummyHP
            const bossDifference = bossHealthMin * bossHealthCur
            const damageDone = Math.trunc(bossDifference / 180)
            dps = `${damageDone}`
          }
        }
      })
    }
  })

  return (
    <div className={styles.innercontainer}>
      <div style={{ display: dStatus === ' ' || job === null ? 'block' : 'none' }}>
        <p>
          <b>ERROR: </b>
          <ul style={{ display: dStatus !== 'alive' && dStatus !== 'dead' ? 'block' : 'none' }}>
            <li>You need to select whether you&apos;ve killed the dummy or not!</li>
          </ul>
          <ul style={{ display: job === null ? 'block' : 'none' }}>
            <li>You need to select a Job!</li>
          </ul>
        </p>
      </div>
      <div style={{ display: dStatus !== ' ' && job !== null ? 'block' : 'none' }}>
        <h2>You did {`${dps}`} DPS!</h2>
      </div>
    </div>
  )
}

const Calculator = () => {
  const [hpPercent, setHpPercent] = useState(0)
  const [bossTime, setBossTime] = useState(0)
  const [dummyStatus, setDummyStatus] = useState(' ')

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.innercontainersmaller}>
            <div className={styles.innercontainertitle}>
              <p>Select a Boss</p>
            </div>
            <BossSelection />

            <div className={styles.bossselectcontainer} />
          </div>
          <div className={styles.innercontainer}>
            <div className={styles.innercontainertitle}>
              <p>Select a Job</p>
            </div>
            <JobSelection />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.innercontainersmaller}>
            <div className={styles.innercontainertitle}>
              <p>Dummy Settings</p>
            </div>
            <p>Did you kill the Dummy?</p>
            <ButtonGroup style={{ height: '48px' }} aria-label="outlined primary button group" fullWidth>
              <Button
                onClick={() => {
                  setDummyStatus('dead')
                  setHpPercent(0)
                }}
                style={{ background: dummyStatus === 'dead' ? 'darkgrey' : 'white' }}
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  setDummyStatus('alive')
                  setBossTime(0)
                }}
                style={{ background: dummyStatus === 'alive' ? 'darkgrey' : 'white' }}
              >
                No
              </Button>
            </ButtonGroup>
            <div className={styles.inputcontainer} style={{ display: dummyStatus === 'dead' ? 'flex' : 'none' }}>
              <form
                noValidate
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <TextField
                  id="standard-number"
                  label="Time Remaning (Seconds)"
                  type="number"
                  value={`${bossTime}`}
                  defaultValue={`${bossTime}`}
                  onChange={(event) => {
                    setBossTime(Number(event.target.value))
                    const eventValue = event.target.value
                    if (Number(eventValue) > 180) {
                      setBossTime(180)
                    }
                    if (Number(eventValue) < 0) {
                      setBossTime(0)
                    }
                  }}
                  InputProps={{
                    style: {
                      background: 'black',
                      width: '250px',
                      height: '48px',
                      paddingLeft: '1rem',
                      color: 'white',
                      borderRadius: '1rem',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: 'white',
                    },
                  }}
                />
              </form>
            </div>
            <div className={styles.inputcontainer} style={{ display: dummyStatus === 'alive' ? 'flex' : 'none' }}>
              <form
                noValidate
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <TextField
                  id="standard-number"
                  label="Health Remaining (%)"
                  type="number"
                  value={`${hpPercent}`}
                  defaultValue={`${hpPercent}`}
                  onChange={(event) => {
                    setHpPercent(Number(event.target.value))
                    const eventValue = event.target.value
                    if (Number(eventValue) > 100) {
                      setHpPercent(100)
                    }
                    if (Number(eventValue) < 0) {
                      setHpPercent(0)
                    }
                  }}
                  InputProps={{
                    style: {
                      background: 'black',
                      width: '250px',
                      height: '48px',
                      paddingLeft: '1rem',
                      color: 'white',
                      borderRadius: '1rem',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: 'white',
                    },
                  }}
                />
              </form>
            </div>
          </div>
          <div className={styles.innercontainer}>
            <div className={styles.innercontainertitle}>
              <p>Results</p>
            </div>
            <Calculate dStatus={dummyStatus} dummyHP={hpPercent} dummyTime={bossTime} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
