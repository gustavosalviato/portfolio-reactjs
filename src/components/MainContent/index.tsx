import MyProjects from '../MyProjects'
import styles from './MainContent.module.css'

const MainContent = () => {
  return (
    <main className={styles.main}>
      <MyProjects />
    </main>
  )
}

export default MainContent