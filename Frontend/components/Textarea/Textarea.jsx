import styles from './Textarea.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

export function Textarea({
  error,
  label,
  name,
  minRows,
  placeholder,
  onChange,
  onBlur
}) {
  return (
    <div className={styles.textarea}>
      <p className={styles.label}>{label}</p>
      <TextareaAutosize 
        minRows={minRows}
        className={styles.input} 
        name={name}
        type="text" 
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}/>
      <p className={styles.error}>{error}</p>
    </div>
  ) 
}
