import Navbar from '../../components/navbar/Navbar'
import fiverImage from '../../assets/images/fiver.png'
import styles from './Contact.module.css'

const Contact = () => {
  return(
    <div className='globalContainer'>
      <div className='globalWrapper'>
        <Navbar />
        <ContactUs />
      </div>
    </div>
  )
}

const ContactUs = () => {
    return(
      // <div className={styles.container}>
      //   <a href="https://es.fiverr.com/itguyss
      //   " target="_blank" rel="noopener noreferrer">
      //     <img src={fiverImage} className={styles.fiverImage} alt="fiver" />
      //   </a>
      //   <a href="https://es.fiverr.com/itguyss
      //   " target="_blank" rel="noopener noreferrer">
      //     <img src={fiverImage} className={styles.fiverImage} alt="fiver" />
      //   </a>
      // </div>

      <div className={styles.container}>
        <div className={styles.secondContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.leftContainerTitle}>
              <h1>Contact</h1>
            </div>
            <div className={styles.leftContainerText}>
              <p>
                Si quieres contactar conmigo, puedes hacerlo a través de cualquiera de los siguientes medios:
              </p>
              <p>
                <a href="mailto:
                ">
                  <img src={fiverImage} className={styles.fiverImage} alt="fiver" />
                </a>
                <a href="mailto:
                ">
                  <img src={fiverImage} className={styles.fiverImage} alt="fiver" />
                </a>
              </p>
            </div>
          </div>
          <div className={styles.rightContainer}>
            </div>
        </div>
      </div>
    )
}


export default Contact