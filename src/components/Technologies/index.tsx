import TechItem from '../TechItem'
import styles from './Technologies.module.css'
import mock from './mock'

const Technologies = () => {
  return (
    <div className={styles.container}>
      <h3>Tecnologias</h3>

      <div className={styles.technologies}>
        {mock.map((item, index) => (
          <TechItem
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Technologies