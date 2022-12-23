import clsx from "clsx";
import { Button } from "../Button/Button";
import styles from "./Navigation.module.scss";

export function Navigation({logo, actions, shadow, fixed, sticky}) {

  const styles_navigation = clsx({
    [styles.navigation]: true,
    [styles.fixed]: fixed,
    [styles.sticky]: sticky,
    [styles.shadow]: !(shadow === false)
  })

  return (
    <div className={styles.navigation_container}>
      <div className={styles_navigation}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="logo"/>
        </div>
        <div className={styles.right}>
          {actions ? actions.map((action)=> {
            const { type, as, label, onClick } = action;

            const props = {
              type: type,
              label: label,
              onClick: onClick
            }

            if(as === "tertiarybutton") {
              return (
                <Button 
                  key={label} 
                  tertiary 
                  label={label} 
                  onClick={onClick}/>
              )
            }else {
              return (
                <Button 
                  key={label} 
                  primary 
                  label={label} 
                  onClick={onClick}/>
              )
            }
          }) : null}
        </div>
      </div>
    </div>
  )
}
