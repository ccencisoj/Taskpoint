import styles from "./TaskLayout.module.scss";
import { useTask } from "../../contexts/TaskContext";
import { Navigation } from "../../components/Navigation/Navigation";

export function TaskLayout({children, title}) {
  const { setOpenedCreateTask } = useTask();

  return (
    <div className={styles.task_layout}>
      <div className={styles.header}>
        <Navigation
          windowResponsive={true}
          logo="/logo/taskpoint1.svg"
          actions={[
            {
              type: "button", 
              as: "primarybutton", 
              label: "Crear tarea", 
              onClick: ()=> setOpenedCreateTask(true)
            }
          ]}
        />
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          {title ? <p className={styles.title}>{title}</p> : null}
          {children}
        </div>
      </div>
    </div>
  )
}
