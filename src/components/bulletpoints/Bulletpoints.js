import styles from './Bulletpoints.module.css'

const BULLETPOINTS = [
  {
    title: 'Years of experience',
    text: 'All the team members are experienced in the field of software development. We have a strong team of developers and designers who are always ready to help you with your project.',
    svg:
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='100%' width='100%' fill='var(--color-primary-super-light)'>
        <path d="M352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z"/>
      </svg>,
  },
  {
    title: 'Fast delivery',
    text: 'We deliver all projects in the least amount of time possible. We are always on the lookout for new technologies and trying to improve our services.',
    svg:
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height='100%' width='100%' fill='var(--color-primary-super-light)'>
        <path d="M75.23 33.4L320 63.1L564.8 33.4C571.5 32.56 578 36.06 581.1 42.12L622.8 125.5C631.7 143.4 622.2 165.1 602.9 170.6L439.6 217.3C425.7 221.2 410.8 215.4 403.4 202.1L320 63.1L236.6 202.1C229.2 215.4 214.3 221.2 200.4 217.3L37.07 170.6C17.81 165.1 8.283 143.4 17.24 125.5L58.94 42.12C61.97 36.06 68.5 32.56 75.23 33.4H75.23zM321.1 128L375.9 219.4C390.8 244.2 420.5 255.1 448.4 248L576 211.6V378.5C576 400.5 561 419.7 539.6 425.1L335.5 476.1C325.3 478.7 314.7 478.7 304.5 476.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248C219.5 255.1 249.2 244.2 264.1 219.4L318.9 128H321.1z"/>
      </svg>,
  },
  {
    title: '24 hour availability',
    text: 'The team is always available to answer your questions and any consultation you need. Every day, at any time.',
    svg:
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='100%' width='100%' fill='var(--color-primary-super-light)'>
        <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM80 256C71.16 256 64 263.2 64 272V368C64 376.8 71.16 384 80 384H176C184.8 384 192 376.8 192 368V272C192 263.2 184.8 256 176 256H80z"/>
      </svg>,
  }
]

const Bulletpoints = () => {
  return(
    <div className={styles.container}>
      {
        BULLETPOINTS.map((bulletpoint, index) => {
          return(
            <div className={styles.bulletpoint} key={index}>
              <div className={styles.svgContainer}>
                <div className={styles.svgWrapper}>
                  {bulletpoint.svg}
                </div>
              </div>
              <div className={styles.title}>
                {bulletpoint.title}
              </div>
              <div className={styles.text}>
                {bulletpoint.text}
              </div>
              <div className={styles.number}>
                {index + 1}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default  Bulletpoints