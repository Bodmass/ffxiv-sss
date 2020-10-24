import { useState, useMemo } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { FaCaretDown } from 'react-icons/fa'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Menu from '@material-ui/core/Menu'
import data from '../public/bossdata/data.json'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: '0.5rem',
      background: 'white',
      color: 'black',
      fontSize: theme.typography.fontSize,
    },
  })
)

const ITEM_HEIGHT = 48
const bossData = data.boss

const allBosses = []
const trialBosses = []
const raidBosses = []

function populateOptions(expansion) {
  allBosses.length = 0
  trialBosses.length = 0
  raidBosses.length = 0
  trialBosses.push('Trials')
  raidBosses.push('Raids')
  bossData.forEach((boss) => {
    if (boss.expansion === expansion) {
      if (boss.type === 'Trial') {
        trialBosses.push(boss.bossName)
      }
      if (boss.type === 'Raid') {
        raidBosses.push(boss.bossName)
      }
    }
  })

  trialBosses.forEach((e) => {
    allBosses.push(e)
  })

  raidBosses.forEach((e) => {
    allBosses.push(e)
  })
}

function BossMenu({ selectedIndex, setSelectedIndex }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

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
  const [selectedIndex, setSelectedIndex] = useState(1)

  useMemo(() => {
    populateOptions(expansion)
    setSelectedIndex(1)
  }, [expansion])

  return (
    <div>
      <ButtonGroup color="primary" aria-label="outlined primary button group" fullWidth>
        <Button
          color={expansion === 'Shadowbringers' ? 'primary' : 'secondary'}
          variant={expansion === 'Shadowbringers' ? 'contained' : 'outlined'}
          onClick={() => setExpansion('Shadowbringers')}
        >
          Shadowbringers
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup color="primary" aria-label="outlined primary button group" fullWidth>
        <Button
          color={expansion === 'Stormblood' ? 'primary' : 'secondary'}
          variant={expansion === 'Stormblood' ? 'contained' : 'outlined'}
          onClick={() => setExpansion('Stormblood')}
        >
          Stormblood
        </Button>
        <Button
          color={expansion === 'Heavensward' ? 'primary' : 'secondary'}
          variant={expansion === 'Heavensward' ? 'contained' : 'outlined'}
          onClick={() => setExpansion('Heavensward')}
        >
          Heavensward
        </Button>
      </ButtonGroup>

      <BossMenu selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </div>
  )
}

export default BossSelection
