import Navigation from './Navigation';
import styles from './Layout.module.scss';

export default function Layout({title, phrase, children}) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Navigation/>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.container_header}>
            <p className={styles.title}>{title}</p>
            <p className={styles.phrase}>{phrase}</p>
          </div>
          <div className={styles.container_main}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
