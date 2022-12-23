import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./Tasks.module.scss";

export function Tasks({ tasks, windowResponsive, isLoading }) {

  const styles_tasks = clsx({
    [styles.tasks]: true,
    [styles.window_responsive]: windowResponsive
  })

  return (
    <div className={styles_tasks}>
      {tasks ? tasks.map((task)=> {
        const { id, title, description, onEdit, onDelete } = task;

        return (
          <motion.div layout="position" key={id} className={styles.task_card}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.actions}>
              <button className={styles.action} onClick={()=> onEdit(task)}>
                <img className={styles.icon} src="/icon/edit1.svg" alt="icon"/>
              </button>
              <button className={styles.action} onClick={()=> onDelete(task)}>
                <img className={styles.icon} src="/icon/trash1.svg" alt="icon"/>
              </button>
            </div>
          </motion.div>
        )
      }) : null}
    </div>
  )
}
