import { useState, useMemo, useContext } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Menu from '@material-ui/core/Menu'
import { Tooltip } from '@material-ui/core'
import data from '../public/bossdata/data.json'
import UserContext from './UserContext'

const ITEM_HEIGHT = 48
const bossData = data.boss

const allBosses = []
const trialBosses = []
const raidBosses = []

function populateOptions(expansion, language) {
  const { selectBoss } = useContext(UserContext)
  allBosses.length = 0
  trialBosses.length = 0
  raidBosses.length = 0
  trialBosses.push('Trials')
  raidBosses.push('Raids')
  bossData.forEach((boss) => {
    if (boss.expansion === expansion) {
      if (boss.type === 'Trial') {
        switch (language) {
          case 'jp':
            trialBosses.push(boss.bossNameJP)
            break
          case 'fr':
            trialBosses.push(boss.bossNameFR)
            break
          case 'de':
            trialBosses.push(boss.bossNameDE)
            break
          default:
            trialBosses.push(boss.bossName)
        }
      }
      if (boss.type === 'Raid') {
        switch (language) {
          case 'jp':
            raidBosses.push(boss.bossNameJP)
            break
          case 'fr':
            raidBosses.push(boss.bossNameFR)
            break
          case 'de':
            raidBosses.push(boss.bossNameDE)
            break
          default:
            raidBosses.push(boss.bossName)
        }
      }
    }
  })

  trialBosses.forEach((e) => {
    allBosses.push(e)
  })

  raidBosses.forEach((e) => {
    allBosses.push(e)
  })

  selectBoss(allBosses[1])
}

function BossMenu({ selectedIndex, setSelectedIndex }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const { selectBoss } = useContext(UserContext)

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    selectBoss(allBosses[index])
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div style={{ borderRadius: '0.5rem', background: 'white', color: 'black', fontSize: '1.2rem' }}>
      <List component="nav">
        <ListItem button onClick={handleClickListItem}>
          <ListItemText primary={allBosses[selectedIndex]} disableTypography style={{ fontSize: '0.75rem' }} />
          <FaCaretDown />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 5,
            width: '300px',
            marginTop: '0.7rem',
          },
        }}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {allBosses.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0 || index === trialBosses.length}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            style={{
              justifyContent: index === 0 || index === trialBosses.length ? 'center' : '',
              whiteSpace: 'pre-wrap',
              fontSize: '0.8rem',
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

const BossSelection = () => {
  const [expansion, setExpansion] = useState('Endwalker')
  const { lang } = useContext(UserContext)
  const [selectedIndex, setSelectedIndex] = useState(1)

  useMemo(() => {
    populateOptions(expansion, lang)
    setSelectedIndex(1)
  }, [expansion])

  useMemo(() => {
    populateOptions(expansion, lang)
    setSelectedIndex(1)
  }, [lang])

  return (
    <div>
      <p>Expansion:</p>
      <ButtonGroup style={{ height: '32px' }} aria-label="outlined primary button group" fullWidth>
        <Button
          style={{
            background: expansion === 'Endwalker' ? '#202d3f' : '#476997',
            fontWeight: 'bold',
            color: expansion === 'Endwalker' ? '#e5e4e2' : 'black',
          }}
          onClick={() => setExpansion('Endwalker')}
        >
          Endwalker
        </Button>
      </ButtonGroup>
      <br />
      <Tooltip title="Legacy Content is Temporarily Disabled." arrow>
        <ButtonGroup style={{ height: '32px' }} aria-label="outlined primary button group" fullWidth disabled>
          <Button
            style={{
              // background: expansion === 'Heavensward' ? '#123140' : '#368db5',
              background: expansion === 'Heavensward' ? '#d3d3d3' : '#d3d3d3',
              fontWeight: 'bold',
              color: expansion === 'Heavensward' ? 'white' : 'black',
            }}
            onClick={() => setExpansion('Heavensward')}
          >
            HW
          </Button>
          <Button
            style={{
              // background: expansion === 'Stormblood' ? '#736021' : '#fbd149',
              background: expansion === 'Stormblood' ? '#d3d3d3' : '#d3d3d3',
              fontWeight: 'bold',
              color: expansion === 'Stormblood' ? 'white' : 'black',
            }}
            onClick={() => setExpansion('Stormblood')}
          >
            SB
          </Button>
          <Button
            style={{
              // background: expansion === 'Shadowbringers' ? '#2e264a' : '#6654a5',
              background: expansion === 'Shadowbringers' ? '#d3d3d3' : '#d3d3d3',
              fontWeight: 'bold',
              color: expansion === 'Shadowbringers' ? 'white' : 'black',
            }}
            onClick={() => setExpansion('Shadowbringers')}
          >
            ShB
          </Button>
        </ButtonGroup>
      </Tooltip>
      <p />

      <BossMenu selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </div>
  )
}

export default BossSelection
