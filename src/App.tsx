import styles from './App.module.css'
import MyProjects from './components/MyProjects'
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className={styles.content}>
      <Sidebar />

      <MyProjects/>
    </div>
  )
}

export default App
