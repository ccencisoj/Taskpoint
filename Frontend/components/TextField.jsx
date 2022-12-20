import styles from './TextField.module.scss';

export function TextField({
  label,
  error,
  value,
  name,
  placeholder
}) {
  return (
    <div className={styles.text_field}>
      <p className={styles.label}>{label}</p>
      <input className={styles.input} 
        type="text" 
        name={name}
        placeholder={placeholder}/>
      <p className={styles.error}>{error}</p>
    </div>
  ) 
}
