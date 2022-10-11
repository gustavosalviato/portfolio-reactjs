import MyProjects from '../MyProjects'
import Post from '../Post'
import Project from '../Project'
import RecentProjects from '../RecentProjects'
import styles from './MainContent.module.css'

const MainContent = () => {
  return (
    <main className={styles.main}>
      <MyProjects />
      <div className={styles.grid}>
        <Project />
        <Project />
      </div>

      <RecentProjects />
      <Post />
    </main >
  )
}

export default MainContent