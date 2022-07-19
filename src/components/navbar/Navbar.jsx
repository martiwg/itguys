import styles from './Navbar.module.css'

import logoImg from '../../assets/images/logo.png'

const Navbar = () => {
  return(
    <nav className={styles.container}>
      <img src={logoImg} className={styles.logoImg} alt='logo'/>
      <div className={styles.navLinks}>
        <div
          className={styles.navLink}
          >
          Home
        </div>
        <div
          className={styles.navLink}
        >
          About
        </div>
        <div
          className={styles.navLink}
        >
          Work
        </div>
        <div
          className={styles.navLink}
        >
          Contact
        </div>
      </div>
    </nav>
  )
}

export default Navbar