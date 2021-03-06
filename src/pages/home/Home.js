import { useEffect } from 'react'

import { analytics } from '../../firebaseConfig'
import { logEvent } from 'firebase/analytics'

import Navbar from '../../components/navbar/Navbar'

import styles from './Home.module.css'

const Home = () => {
  useEffect(() => {
    logEvent(analytics, 'page_view', {
      title: 'Home',
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

export default Home