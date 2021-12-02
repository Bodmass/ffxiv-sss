import { FaGithub, FaGlobe, FaTwitter } from 'react-icons/fa'
import { SiKoFi } from 'react-icons/si'
import styles from './header.module.css'

function HeaderList() {
  function HeaderIcon({ children, link }) {
    return (
      <div className={styles.icon}>
        <a href={link}> {children}</a>
      </div>
    )
  }
  return (
    <div className={styles.icons}>
      <HeaderIcon link="https://azizarar.com">
        <FaGlobe />
      </HeaderIcon>
      <HeaderIcon link="https://github.com/Bodmass/ffxiv-sss">
        <FaGithub />
      </HeaderIcon>
      <HeaderIcon link="https://twitter.com/bodmassad">
        <FaTwitter />
      </HeaderIcon>
      <HeaderIcon link="https://ko-fi.com/bodmass">
        <SiKoFi />
      </HeaderIcon>
    </div>
  )
}

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="../images/ssslogo.png" alt="" />
      </div>
      <HeaderList />
    </div>
  )
}

export default Header
