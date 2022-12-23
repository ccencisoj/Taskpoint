import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.left}>
        <img className={styles.logo} src="/logo/taskpoint1.svg" alt="taskpoint logo"/>
      </div>
      <div className={styles.right}></div>
    </div>
  )
}
