import clsx from "clsx";
import Link from "next/link";
import { Formik } from "formik";
import styles from "./LoginForm.module.scss";
import { Button } from "../../components/Button/Button";
import { Textarea } from "../../components/Textarea/Textarea";
import { TextField } from "../../components/TextField/TextField";

export function LoginForm({
  windowResponsive,
  title, 
  description,
  footer, 
  inputs, 
  actions, 
  onSubmit
}) {

  const initialValues = {};
  
  if(inputs) {
    inputs.map((input)=> {
      const { name, defaultValue } = input;

      initialValues[name] = defaultValue || "";
    })
  }

  const styles_login_form = clsx({
    [styles.login_form]: true,
    [styles.window_responsive]: windowResponsive
  })

  return (
    <Formik
      onSubmit={(values)=> onSubmit(values)}
      initialValues={initialValues}>
      {({
        values,
        errors,
        handleChange, 
        handleBlur, 
        handleSubmit
      })=> (
        <form className={styles_login_form} onSubmit={handleSubmit}>
          <div className={styles.header}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.main}>
            <div className={styles.inputs}>
              {inputs ? inputs.map((input)=> {
                const { type, as, name, label, placeholder, defaultValue } = input;

                const props = {
                  type: type,
                  name: name,
                  label: label,
                  value: values[name],
                  error: errors[name],
                  placeholder: placeholder,
                  defaultValue: defaultValue,
                  onChange: handleChange,
                  onBlur: handleBlur
                };

                if(as === "textarea") {
                  return <Textarea key={label} {...props}/>
                }else {
                  return <TextField key={label} {...props}/>
                } 
              }): null}
            </div>
            <div className={styles.actions}>
              {actions ? actions.map((action)=> {
                const { type, as, label } = action;

                const props = {
                  type: type,
                  label: label,
                  fullWidth: true
                }

                return (
                  <Button key={label} primary {...props}>
                    {props.label}
                  </Button>
                )
              }) : null}
            </div>
          </div>
          <div className={styles.footer}>
            <p className={styles.href_description}>{footer?.hrefDescription}</p>
            <Link className={styles.href_label} href={footer?.href}>{footer?.hrefLabel}</Link>
          </div>
        </form>
      )}
    </Formik>
  )
}
