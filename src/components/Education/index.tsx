import ItemInfo from '../ItemInfo'
import styles from './Education.module.css'

const Education = () => {
  return (
    <div className={styles.container}>
      <h3>Educação</h3>

      <ItemInfo
        company='Facec'
        duration='2020 | 2022 '
        occupation='Análise e Desenvolvimento de Sistemas'
      />
    </div>
  )
}

export default Education