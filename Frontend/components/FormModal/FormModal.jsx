import clsx from "clsx";
import { useEffect, useRef } from "react";
import { Button } from "../Button/Button";
import { Portal } from "../Portal/Portal";
import styles from "./FormModal.module.scss";
import { Textarea } from "../Textarea/Textarea";
import { Dropdown } from "../Dropdown/Dropdown";
import { TextField } from "../TextField/TextField";
import { useCallbackRef } from "use-callback-ref";

export function FormModal({title, inputs, mainPaddingBottom, actions, isVisible, onClose}) {

  const modalRef = useRef();
  const containerRef = useRef();
 
  useEffect(()=> {
    
    const handleClick = (ev)=> {
      const modal = modalRef.current;
      const container = containerRef.current;

      if(modal.contains(ev.target) && 
        !container.contains(ev.target)) {
        onClose();
      }
    }

    document.addEventListener("click", handleClick);
    return ()=> document.removeEventListener("click", handleClick);
  }, [])

  const styles_form_modal = clsx({
    [styles.form_modal]: true,
    [styles.is_hidden]: !isVisible,
    [styles.is_visible]: isVisible
  })

  return (
    <Portal>
      <div className={styles_form_modal} ref={modalRef}>
        <div className={styles.container} ref={containerRef}>
          <div className={styles.header}>
            <p className={styles.title}>{title}</p>
            <button className={styles.close} onClick={onClose}>
              <img className={styles.icon} src="/icon/close1.svg" alt="close"/>
            </button>
          </div>
          <div className={styles.main} 
            style={{paddingBottom: mainPaddingBottom}}>
        
            {inputs ? inputs.map((input)=> {
              const { id, type, as, name, label, placeholder, selectables } = input;

              if(as === "dropdown") {
                return (
                  <Dropdown
                    key={id}
                    name={name}
                    label={label}
                    selectables={selectables}
                  />
                )
              }else if(as === "textarea") {
                return (
                  <Textarea 
                    key={id} 
                    name={name}
                    minRows={4}
                    label={label}
                    type={type}
                    placeholder={placeholder}
                  />
                )
              }else {
                return (
                  <TextField
                    key={id}
                    type={type}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                )
              }
            }) : null}
          </div>
          <div className={styles.footer}>
            {actions ? actions.map((action)=> {
              const { id, as, label } = action;

              if(as === "secondarybutton") {
                return (  
                  <Button 
                    key={id}
                    fullWidth
                    tertiary
                    label={label}/>
                )
              }else {
                return (
                  <Button 
                    key={id}
                    fullWidth
                    primary
                    label={label}/>
                )
              }
            }) : null}
          </div>
        </div>
      </div>
    </Portal>
  )
}
