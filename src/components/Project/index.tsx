import styles from './Project.module.css'
import { FiFolder } from 'react-icons/fi'
import { FiStar } from 'react-icons/fi'
import { FiGitBranch } from 'react-icons/fi'

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.topContainer}>
        <FiFolder size={20} />
        <h4>name-project</h4>
      </div>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!</p>

      <div style={{ display: 'flex ', alignItems: 'center', gap: '0.5rem' }}>
        <FiStar size={20} />
        <h5>100</h5>

        <FiGitBranch size={20} />
        <h5>100</h5>


        <div className={styles.language} >
          <div className={styles.circle} />
          <span>
            JavaScript
          </span>

        </div>

      </div>

    </div>
  )
}

export default Project