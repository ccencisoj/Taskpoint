import clsx from "clsx";
import { useRouter } from "next/router";
import styles from "./Dropdown.module.scss";
import { useEffect, useId, useRef, useState } from "react";

export function Dropdown() {
  const selectables = [
    {id: "1", image: "/icon/bars1.svg", label: "Pendientes", value: "Pendientes"},
    {id: "2", image: "/icon/bars1.svg", label: "En progreso", value: "En progreso"},
    {id: "3", image: "/icon/bars1.svg", label: "Terminadas", value: "Terminadas"}
  ]
  
  const [selected, setSelected] = useState(selectables[0]);
  const [openedMenu, setOpenedMenu] = useState(false);
  const dropdownRef = useRef();

  const openMenu = ()=> {
    setOpenedMenu(true);
  }

  const closeMenu = ()=> {
    setOpenedMenu(false);
  }

  useEffect(()=> {
    const dropdown = dropdownRef.current;

    const handleClick = (ev)=> {
      if(!dropdown.contains(ev.target)) {
        closeMenu();
      }
    }

    window.addEventListener("click", handleClick);
    return ()=> window.removeEventListener("click", handleClick);
  }, [])

  const styles_dropdown = clsx({
    [styles.dropdown]: true,
    [styles.opened_menu]: openedMenu
  })

  return (
    <div className={styles_dropdown} ref={dropdownRef}>
      <p className={styles.label}>Estado</p>
      <div className={styles.container}>
        <div className={styles.selectable} onClick={()=> {
          openedMenu ? closeMenu() : openMenu()
        }}>
          <img className={styles.selected} src={selected.image} alt="image"/>
          <p className={styles.label}>{selected.label}</p>
          <img className={styles.arrow} src="/icon/arrow1.svg" alt="arrow" />
        </div>
        <div className={styles.menu}>
          {selectables ? selectables.map((selectable)=> {
            const { id, image, label, value, onSelect } = selectable;

            return (
              <div key={id} className={styles.selectable} 
                onClick={()=> {
                  if(onSelect) onSelect(selectable);
                  setSelected(selectable);
                  closeMenu();
                }}>
                <img className={styles.selected} src={image} alt="image"/>
                <p className={styles.label}>{label}</p>
              </div>
            )
          }) : null}
        </div>
      </div>
    </div>
  )
}
