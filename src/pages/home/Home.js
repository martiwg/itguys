import { useEffect } from 'react'

import { logEvent } from 'firebase/analytics'
import { analytics } from '../../firebaseConfig'

import Navbar from '../../components/navbar/Navbar'
import Landing from '../../components/landing/Landing'
import Contact from '../../components/contact/Contact'
import About from '../../components/about/About'

import styles from './Home.module.css'

const Home = () => {
  useEffect(() => {
    logEvent(analytics, 'CE_page_view', {
      title: 'Home',
      path: window.location.pathname
    })
  }, [])

  return(
    <div className='globalContainer'>
      <div className='globalWrapper'>
        <Navbar />
        <Landing />
        <About/>
        <Contact />
      </div>
    </div>
  )
}

export default Home