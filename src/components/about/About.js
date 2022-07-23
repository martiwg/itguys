import Navbar from '../navbar/Navbar'

import styles from './About.module.css'

const About = () => {
  return(
    <div className={styles.container}>
      <div className={styles.informationItem}>
        <div>
            <div className={styles.title}>
              About us
            </div>
            <div className={styles.subtitle}>
              We’re a team of Software Engineers from College that have gotten
               together to make a bit of money on the side by doing what we like, developing and delivering.
                This is our first take on freelancing as kind of an organisation but we’re still fully committed to it and we
                 offer day-to-day availability since there’s more than one of us. We believe in fulfilling our client’s needs by delivering 
                 the best performing product in the least amount of time possible which we also believe we can accomplish thanks to our four years of expertise 
                 in the field. Thank you for your trust.
            </div>
        </div>
      </div>
      <a
        className={styles.aboutImage}
        href='https://www.fiverr.com/itguyss'
        target='_blank'
        rel='noopener noreferrer'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width='12rem' height='12rem' fill='#cccbd6' version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
          <g>
            <path d="M432,416V160H176v-16c0-26.464,21.536-48,48-48h48V0h-48C144.608,0,80,64.608,80,144v16H16v96h64   v160H16v96h224v-96h-64V256h160.896v160H272v96h224v-96H432z"/>
            <circle cx="384" cy="48" r="48"/>
          </g>
        </svg>
      </a>
    </div>
  )
}

export default About