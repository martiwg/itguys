import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { logEvent } from 'firebase/analytics'

import Home from './pages/home/Home'
import Work from './pages/work/Work'

import { analytics } from './firebaseConfig'

const App = () => {
  useEffect(() => {
    logEvent(analytics, 'visit')
  }, [])

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  )
}

export default App
