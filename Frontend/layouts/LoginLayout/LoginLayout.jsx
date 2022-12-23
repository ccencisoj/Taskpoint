import styles from "./LoginLayout.module.scss";
import { Navigation } from "../../components/Navigation/Navigation";

export function LoginLayout({children}) {
  return (
    <div className={styles.login_layout}>
      <div className={styles.header}>
        <Navigation
          shadow={false}
          windowResponsive={true}
          logo="/logo/taskpoint1.svg"
        />
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </div>
    </div>
  )
}
