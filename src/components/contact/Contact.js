import { useState, useRef } from 'react'

import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

import styles from './Contact.module.css'

const FOCUSED_TYPES = {
  NAME: 'name',
  EMAIL: 'email',
  MESSAGE: 'message',
  NONE: 'none'
}

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [focusedField, setFocusedField] = useState('')

  const [loading, setLoading] = useState(false)

  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleNameChange = (e) => {
    if(e.target.value.length > 50) return

    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    if(e.target.value.length > 100) return

    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    if(e.target.value.length > 2400) return

    setMessage(e.target.value)
  }

  const handleSubmit = async () => {
    if(loading) return

    if(name.length === 0){
      nameRef.current.focus()
      return
    }

    if(email.length === 0){
      emailRef.current.focus()
      return
    }

    if(message.length === 0){
      messageRef.current.focus()
      return
    }

    setLoading(true)

    try{
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        viewed: false,
        trashed: false,
        starred: false,
        timestamp: serverTimestamp(),
      })
      .then(() => {
        setName('')
        setEmail('')
        setMessage('')
      })
    }catch(err){
      console.log(err)
    }

    setLoading(false)
  }
    

  return(
    <section
      id='contact'
      className={styles.container}
    >
      <div className={styles.leftSection}>
        <div>
          <div className={styles.title}>
            Get a quote
          </div>
          <div className={styles.subtitle}>
            Fill up the form and our Team will get back to you within 24 hours with a budget offer!
          </div>
        </div>
        <div className={styles.contactWrapper}>
          <a
            className={styles.contactItem}
            href='tel:+34 653 559 770'
          >
          <div className={styles.contactSvg}>
            <svg width='100%' height='100%' fill='var(--color-primary)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
            </svg>
          </div>
            <div className={styles.contactText}>
              +34 653 559 770
            </div>
          </a>
          <a
            className={styles.contactItem}
            href='tel:+34 685 322 841'
          >
          <div className={styles.contactSvg}>
            <svg width='100%' height='100%' fill='var(--color-primary)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
            </svg>
          </div>
            <div className={styles.contactText}>
              +34 685 322 841
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
        <div className={styles.socialsWrapper}>
          <a
            className={styles.socialsIcon}
            href='https://www.fiverr.com/itguyss'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width='1.25rem' height='1.25rem' fill='#cccbd6' version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
              <g>
                <path d="M432,416V160H176v-16c0-26.464,21.536-48,48-48h48V0h-48C144.608,0,80,64.608,80,144v16H16v96h64   v160H16v96h224v-96h-64V256h160.896v160H272v96h224v-96H432z"/>
                <circle cx="384" cy="48" r="48"/>
              </g>
            </svg>
          </a>
          <a
            className={styles.socialsIcon}
            href='https://www.fiverr.com/itguyss'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg fill='#cccbd6' xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 512 153" version="1.1" preserveAspectRatio="xMidYMid">
              <g>
                <path d="M140.106589,96.6278184 C131.785652,96.6278184 123.989458,93.1045388 116.905417,87.3698389 L118.629575,79.2737921 L118.704539,78.9739385 C120.241288,70.3531479 125.113909,55.8852123 140.106589,55.8852123 C151.351098,55.8852123 160.496633,65.0307467 160.496633,76.2752562 C160.459151,87.482284 151.313616,96.6278184 140.106589,96.6278184 L140.106589,96.6278184 Z M140.106589,35.2327965 C120.953441,35.2327965 106.110688,47.6767204 100.076135,68.1417277 C90.8556369,54.310981 83.884041,37.7065886 79.7985359,23.7259151 L59.1836018,23.7259151 L59.1836018,77.3622255 C59.1836018,87.9320644 50.5628111,96.5528551 39.9929722,96.5528551 C29.4231332,96.5528551 20.8023426,87.9320644 20.8023426,77.3622255 L20.8023426,23.7259151 L0.187408492,23.7259151 L0.187408492,77.3622255 C0.112445095,99.3265007 17.9912152,117.355198 39.9554905,117.355198 C61.9197657,117.355198 79.7985359,99.3265007 79.7985359,77.3622255 L79.7985359,68.3666179 C83.8090776,76.7250366 88.7191801,85.1584187 94.6787701,92.6547584 L82.0474378,152.025769 L103.149634,152.025769 L112.295168,108.959297 C120.316252,114.09429 129.53675,117.317716 140.106589,117.317716 C162.708053,117.317716 181.111567,98.801757 181.111567,76.2002928 C181.111567,53.6363104 162.708053,35.2327965 140.106589,35.2327965 L140.106589,35.2327965 Z"/>
                <path d="M244.043338,37.5566618 L257.349341,91.1929722 L272.004685,37.5566618 L289.471157,37.5566618 L266.944656,115.068814 L249.478184,115.068814 L235.647438,61.0951684 L221.854173,115.031332 L204.387701,115.031332 L181.861201,37.5191801 L199.327672,37.5191801 L213.983016,91.1554905 L227.289019,37.5191801 L244.043338,37.5191801 L244.043338,37.5566618 Z M331.26325,35.2327965 C308.586823,35.2327965 290.220791,53.6363104 290.220791,76.2752562 C290.220791,98.9516837 308.624305,117.317716 331.26325,117.317716 C353.939678,117.317716 372.343192,98.9516837 372.343192,76.2752562 C372.343192,53.5988287 353.939678,35.2327965 331.26325,35.2327965 Z M331.26325,100.450952 C317.919766,100.450952 307.125037,89.6562225 307.125037,76.3127379 C307.125037,62.9692533 317.957247,52.1745242 331.26325,52.1745242 C344.606735,52.1745242 355.401464,62.9692533 355.401464,76.3127379 C355.401464,89.6187408 344.606735,100.450952 331.26325,100.450952 Z M422.231332,54.9106881 C410.499561,54.9106881 401.016691,64.4310395 401.016691,76.1253294 L401.016691,115.031332 L383.437775,115.031332 L383.437775,37.5566618 L401.016691,37.5566618 L401.016691,49.4758419 C401.016691,49.4758419 408.513031,37.5191801 423.918009,37.5191801 L429.315373,37.5191801 L429.315373,54.9106881 L422.231332,54.9106881 Z M481.227526,73.2767204 C493.708931,66.2301611 502.179795,52.8491947 502.179795,37.5191801 L484.600878,37.5191801 C484.600878,50.450366 474.106003,60.9452416 461.174817,60.9452416 L458.81347,60.9452416 L458.81347,0.149926794 L441.234553,0.149926794 L441.234553,115.031332 L458.81347,115.031332 L458.81347,78.5241581 L460.912445,78.5241581 C462.636603,78.5241581 464.885505,79.6486091 465.897511,81.0354319 L490.860322,115.031332 L511.925037,115.031332 L481.227526,73.2767204 Z"/>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.fieldsWrapper}>
          <div className={styles.formTitle}>
            Your Name
          </div>
          <div
            className={styles.field} 
            style={{border: focusedField === FOCUSED_TYPES.NAME ? '2px solid var(--color-primary)' : '2px solid var(--color-light)'}}
            onClick={() => {
              nameRef.current.focus()
            }}
            >
            <svg height='1rem' width='1rem' style={{transition: '.5s ease-in-out'}} fill={focusedField === FOCUSED_TYPES.NAME ? 'var(--color-primary)' : 'var(--color-light)'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
            </svg>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                emailRef.current.focus()
              }}
              className={styles.form}
              >
              <input
                type='text'
                placeholder='Name'
                maxLength={50}
                value={name}
                onChange={e => handleNameChange(e)}
                className={styles.input}
                ref={nameRef}
                onBlur={() => {
                  setFocusedField(FOCUSED_TYPES.NONE)
                }}
                onFocus={() => {
                  setFocusedField(FOCUSED_TYPES.NAME)
                }}
              />
            </form>
          </div>
          <div className={styles.formTitle}>
            Mail
          </div>
          <div
            className={styles.field}
            style={{border: focusedField === FOCUSED_TYPES.EMAIL ? '2px solid var(--color-primary)' : '2px solid var(--color-light)'}}
            onClick={() => {
              emailRef.current.focus()
            }}
          >
            <svg width='1rem' height='1rem' style={{transition: '.5s ease-in-out'}} fill={focusedField === FOCUSED_TYPES.EMAIL ? 'var(--color-primary)' : 'var(--color-light)'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
            </svg>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                messageRef.current.focus()
              }}
              className={styles.form}
            >
              <input
                type='text'
                placeholder='E-mail'
                maxLength={100}
                value={email}
                onChange={e => handleEmailChange(e)}
                className={styles.input}
                ref={emailRef}
                onBlur={() => {
                  setFocusedField(FOCUSED_TYPES.NONE)
                }}
                onFocus={() => {
                  setFocusedField(FOCUSED_TYPES.EMAIL)
                }}
              />
            </form>
          </div>
          <div className={styles.formTitle}>
            Tell us!
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
            className={styles.messageForm}
          >
            <textarea
              placeholder='Message'
              maxLength={2400}
              value={message}
              onChange={e => handleMessageChange(e)}
              ref={messageRef}
              className={styles.messageTextarea}
            />
          </form>
        </div>
        <div
          className={styles.sendBtn}
          style={{opacity: loading ? .5 : 1}}
          onClick={() => handleSubmit()}
        >
          Send Message
        </div>
      </div>
    </section>
  )
}

export default Contact