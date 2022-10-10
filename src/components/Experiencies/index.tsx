import ItemInfo from '../ItemInfo';
import styles from './Experiences.module.css';

const Experiencies = () => {
  return (
    <div className={styles.container}>
      <h3>Experiências</h3>

      <ItemInfo
        company="Gerence Sistemas"
        duration="2021 - Atualmente"
        occupation="Suporte | Front-End Developer"
      />

    </div>
  )

}

export default Experiencies