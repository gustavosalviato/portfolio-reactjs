import styles from './Post.module.css'

const Post = () => {
  return (
    <div className={styles.post}>
      <img src="https://avatars.githubusercontent.com/u/75762976?v=4" alt="" />

      <div className={styles.infoRepo}>
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing</h3>
        <h5 className={styles.duration}>2 Anos atrás</h5>

        <h5 className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, earum?</h5>

        <div className={styles.technologies}>
          <small>#react</small>
          <small>#react</small>
          <small>#react</small>
          <small>#react</small>
        </div>

      </div>
    </div>
  )
}

export default Post