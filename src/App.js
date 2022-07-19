import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Work from './pages/work/Work'

const App = () => {
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
