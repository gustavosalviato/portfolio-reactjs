import Profile from '../Profile'
import Links from '../Links'
import styles from './Sidebar.module.css'
import Technologies from '../Technologies'
import Experiencies from '../Experiencies'
import Education from '../Education'
import Footer from '../Footer'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Profile />
      <Links />
      <Technologies />
      <Experiencies />
      <Education />
      <Footer/>
    </aside>
  )
}


export default Sidebar