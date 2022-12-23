import styles from './TextField.module.scss';

export function TextField({
  label,
  error,
  value,
  name,
  type,
  placeholder,
  onChange,
  onBlur
}) {
  return (
    <div className={styles.text_field}>
      <p className={styles.label}>{label}</p>
      <input className={styles.input} 
        type={type || "text"} 
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}/>
      <p className={styles.error}>{error}</p>
    </div>
  ) 
}
