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
            <h1>Get a quote</h1>
            {/* create a text with margin left and top */}
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur consectetur,
              </p>
            {/* <p> Fill up the form and the team will get back to you within 24 hours </p> */}
            <div className={styles.leftContainerText}>
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