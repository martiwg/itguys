import styles from './Home.module.css'

import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return(
    <div className='globalContainer'>
      <div className='globalWrapper'>
        <Navbar />
      </div>
    </div>
  )
}

export default Home