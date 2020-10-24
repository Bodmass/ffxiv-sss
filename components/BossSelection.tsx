import { useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Menu from '@material-ui/core/Menu'
import data from '../public/bossdata/data.json'

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '0.5rem',
    background: 'white',
    color: 'black',
  },
  paper: {},
  list: {
    fontSize: '3rem',
  },
}))

const ITEM_HEIGHT = 48
const bossData = data.boss

const allBosses = []
const trialBosses = []
const raidBosses = []

function populateOptions() {
  allBosses.length = 0
  trialBosses.length = 0
  raidBosses.length = 0
  trialBosses.push('Trials')
  raidBosses.push('Raids')
  bossData.forEach((boss) => {
    if (boss.type === 'Trial') {
      trialBosses.push(boss.bossName)
    }
    if (boss.type === 'Raid') {
      raidBosses.push(boss.bossName)
    }
  })

  trialBosses.forEach((e) => {
    allBosses.push(e)
  })

  raidBosses.forEach((e) => {
    allBosses.push(e)
  })
}

function SimpleListMenu() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button onClick={handleClickListItem}>
          <ListItemText primary={allBosses[selectedIndex]} />
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
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '300px',
          },
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
  const [expansion, setExpansion] = useState('Shadowbringers')

  useMemo(() => {
    populateOptions()
  }, [expansion])

  return (
    <div>
      <ButtonGroup color="primary" aria-label="outlined primary button group" fullWidth>
        <Button
          color={expansion === 'Shadowbringers' ? 'secondary' : 'primary'}
          variant={expansion === 'Shadowbringers' ? 'contained' : 'outlined'}
          onClick={() => setExpansion('Shadowbringers')}
        >
          Shadowbringers
        </Button>
        <Button
          color={expansion === 'Legacy' ? 'secondary' : 'primary'}
          variant={expansion === 'Legacy' ? 'contained' : 'outlined'}
          onClick={() => setExpansion('Legacy')}
        >
          Legacy
        </Button>
      </ButtonGroup>

      <SimpleListMenu />
    </div>
  )
}

export default BossSelection
