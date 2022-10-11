import MyProjects from '../MyProjects'
import Project from '../Project'
import styles from './MainContent.module.css'

const MainContent = () => {
  return (
    <main className={styles.main}>
      <MyProjects />
      <Project />
    </main>
  )
}

export default MainContent