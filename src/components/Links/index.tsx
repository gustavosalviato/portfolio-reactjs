import styles from './Links.module.css'
import { FiMapPin } from 'react-icons/fi'
import { FiBriefcase } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'

const divnks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.icon}>
          <FiMapPin size={24} />
          <span>Brasil</span>
        </div>

        <div className={styles.icon}>
          <FiBriefcase size={24} />
          <span>Gerence Sistemas</span>
        </div>

        <div className={styles.icon}>
          <FiGithub size={24} />
          <span>gustavosalviato</span>
        </div>

        <div className={styles.icon}>
          <FiLinkedin size={24} />
          <span>gustavo-henrique-santos</span>
        </div>

        <div className={styles.icon}>
          <FiMail size={24} />
          <span>gustavosalviato8@gmail.com</span>
        </div>
      </div>
    </div>
  )

}

export default divnks