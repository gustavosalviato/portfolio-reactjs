import Profile from '../Profile'
import Links from '../Links'
import styles from './Sidebar.module.css'
import Technologies from '../Technologies'
import Experiencies from '../Experiencies'
import Education from '../Education'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Profile />
      <Links />
      <Technologies />
      <Experiencies />
      <Education/>
    </aside>
  )
}


export default Sidebar