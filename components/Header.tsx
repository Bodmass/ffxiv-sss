import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="../images/ssslogo.png" alt="" />
      </div>
    </div>
  )
}

export default Header
