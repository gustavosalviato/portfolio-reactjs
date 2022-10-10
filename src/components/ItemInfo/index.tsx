import styles from './ItemInfo.module.css'

type ItemInfoProps = {
  company: string,
  duration: string,
  occupation: string
}

const ItemInfo = ({ company, duration, occupation }: ItemInfoProps) => {
  return (
    <ul className={styles.item}>
      <li>
        <h4>{company}</h4>
        <span>{duration}</span>
        <span>{occupation}</span>
      </li>
    </ul>
  )
}

export default ItemInfo