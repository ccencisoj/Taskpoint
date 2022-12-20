import styles from './Textarea.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

export function Textarea({
  error,
  value,
  name,
  minRows,
  placeholder
}) {
  return (
    <div className={styles.textarea}>
      <TextareaAutosize 
        minRows={minRows}
        className={styles.input} 
        name={name}
        type="text" 
        placeholder={placeholder}/>
      <p className={styles.error}>{error}</p>
    </div>
  ) 
}
