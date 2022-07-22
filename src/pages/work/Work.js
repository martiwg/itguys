import { useEffect } from 'react'

import { logEvent } from 'firebase/analytics'
import { analytics } from '../../firebaseConfig'

import Navbar from '../../components/navbar/Navbar'

import styles from './Work.module.css'

const Work = () => {
  useEffect(() => {
    logEvent(analytics, 'CE_page_view', {
      title: 'Work',
      path: window.location.pathname
    })
  }, [])

  return(
    <div className='globalContainer'>
      <div className='globalWrapper'>
        <Navbar />
      </div>
    </div>
  )
}

export default Work