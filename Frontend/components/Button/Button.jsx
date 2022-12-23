import clsx from "clsx";
import styles from "./Button.module.scss";

export function Button({ 
  fullWidth,
  primary,
  tertiary,
  label, 
  type, 
  onClick 
}) {

  const styles_button = clsx({
    [styles.button]: true,
    [styles.full_width]: fullWidth,
    [styles.primary]: primary,
    [styles.tertiary]: tertiary
  })

  return (
    <button className={styles_button} type={type || "button"} onClick={onClick}>
      <p className={styles.label}>{label}</p>
    </button>
  )
}
