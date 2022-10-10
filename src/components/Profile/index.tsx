 import styles from './Profile.module.css'

const Profile = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="https://avatars.githubusercontent.com/u/75762976?v=4" alt="user" />
        <p>Gustavo Henrique</p>
        <p>Front-End Developer</p>
      </div>
    </>
  )
}

export default Profile
