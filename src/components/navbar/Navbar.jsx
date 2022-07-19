import styles from './Navbar.module.css'

import logoImg from '../../assets/images/logo.png'

const Navbar = () => {
  return(
    <nav className={styles.container}>
      <img src={logoImg} className={styles.logoImg} alt='logo'/>
      <div className={styles.navLinks}>
        <a
          className={styles.navLink}
          href='/'
          rel='noopener noreferrer'
          >
          Home
        </a>
        <a
          className={styles.navLink}
          href='/about'
          rel='noopener noreferrer'
        >
          About
        </a>
        <a
          className={styles.navLink}
          href='/work'
          rel='noopener noreferrer'
        >
          Work
        </a>
        <a
          className={styles.navLink}
          href='/contact'
          rel='noopener noreferrer'
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar