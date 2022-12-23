import styles from './FieldsContainer.module.scss';

export function FieldsContainer({children}) {
  return (
    <div className={styles.fields_container}>
      {children}
    </div>
  )
}
