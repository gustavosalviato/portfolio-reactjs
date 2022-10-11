import styles from './App.module.css'
import MainContent from './components/MainContent'
import MyProjects from './components/MyProjects'
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <MainContent />


    </div>
  )
}

export default App
