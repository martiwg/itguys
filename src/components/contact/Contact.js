import fiverImage from '../../assets/images/fiver.png'
import mail from '../../assets/images/mail.png'
import styles from './Contact.module.css'

const Contact = () => {
  return(
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div>
          <div className={styles.title}>
            Get a quote
          </div>
          <div className={styles.subtitle}>
            Fill up the form and our Team will get back to you within 24 hours
          </div>
        </div>
        <div>
          <a
            className={styles.contactItem}
            href='tel:+34 654 733 733'
          >
          <div className={styles.contactSvg}>
            <svg width='100%' height='100%' fill='var(--color-primary)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
            </svg>
          </div>
            <div className={styles.contactText}>
                +34 654 733 733
            </div>
          </a>
          <a 
            className={styles.contactItem}
            href='mailto:itguys.contact@gmail.com'
          >
            <div className={styles.contactSvg}>
              <svg width='100%' height='100%' fill='var(--color-primary)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
              </svg>
            </div>
            <div className={styles.contactText}>
              itguys.contact@gmail.com
            </div>
          </a>
        </div>
        <a
          className={styles.socialsIcon}
          href='https://www.fiverr.com/itguyss'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width='1.5rem' height='1.5rem' fill='#cccbd6' version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
            <g>
              <path d="M432,416V160H176v-16c0-26.464,21.536-48,48-48h48V0h-48C144.608,0,80,64.608,80,144v16H16v96h64   v160H16v96h224v-96h-64V256h160.896v160H272v96h224v-96H432z"/>
              <circle cx="384" cy="48" r="48"/>
            </g>
          </svg>
        </a>
      </div>
      <div className={styles.rightSection}>
        
      </div>
    </div>
  )
}

export default Contact