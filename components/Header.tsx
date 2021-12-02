import { FaGithub, FaGlobe, FaTwitter } from 'react-icons/fa'
import styles from './header.module.css'

function HeaderIcon({ children, link }) {
  return (
    <div className={styles.icon}>
      <a href={link}> {children}</a>
    </div>
  )
}

function HeaderImage({ children, link }) {
  return (
    <div className={styles.iconimg}>
      <a href={link}> {children}</a>
    </div>
  )
}

function HeaderList() {
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
      <HeaderImage link="https://ko-fi.com/bodmass">
        <img src="../images/kofi.png" alt="" height="24px" />
      </HeaderImage>
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
