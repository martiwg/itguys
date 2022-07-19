import fiverImage from '../../assets/images/fiver.png'
import mail from '../../assets/images/mail.png'
import styles from './Contact.module.css'

const Contact = () => {
  return(
    <div className={styles.container}>
      <div className={styles.secondContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.titleText}>Get a quote</div>
          <div className={styles.text}> Fill up the form and the team will get back to you within 24 hours </div>
          <div className={styles.leftContainerBox}>
            <div className={styles.leftContainerElement}>
              <img src={mail} alt='mail' className={styles.leftContainerImage} />
              <div className={styles.text}> itguys.contact@gmail.com </div>
            </div>
            <div className={styles.leftContainerElement}>
              <img src={fiverImage} alt='fiver' className={styles.leftContainerImage} />
              <div className={styles.text}> Fiver </div>
            </div>
          </div>
          
        </div>
        <div className={styles.rightContainer}>
          </div>
      </div>
    </div>
  )
}

export default Contact