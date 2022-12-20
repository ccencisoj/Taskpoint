import styles from './FormContainer.module.scss';

export default function FormContainer({children}) {
  return (
    <div className={styles.form_container}>
      {children}
    </div>
  )
}
