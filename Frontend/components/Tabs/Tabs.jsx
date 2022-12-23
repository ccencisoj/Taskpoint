import clsx from 'clsx';
import { useId, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Tabs.module.scss';

export function Tabs({initial, tabs, onSelect}) {
  const parentId = useId();
  const [focusedItem, setFocusedItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(initial || tabs[0] || null);

  return (
    <div className={styles.tabs} onMouseLeave={()=> setFocusedItem(null)}>
      {tabs ? tabs.map((item)=> {

        const isFocused = focusedItem?.id === item.id;
        const isSelected = selectedItem?.id === item.id;

        const styles_item = clsx({
          [styles.item]: true,
          [styles.selected]: isSelected
        })

        return (
          <div key={item.id} 
            className={styles_item} 
            onClick={()=> {
              setSelectedItem(item);
              if(onSelect) onSelect(item);
            }} 
            onMouseEnter={()=> setFocusedItem(item)} 
            onMouseLeave={()=> setFocusedItem(null)}>
            <p className={styles.label}>{item.label}</p>
            {isSelected ? 
              <motion.div 
                transition={{duration: 0.15}}
                className={styles.bar} 
                layoutId={parentId + "tabs"}
              ></motion.div> : null}
            {isFocused ?
              <motion.div
                transition={{duration: 0.15}}
                className={styles.highlight}
                layoutId={parentId + "highlight"}
              ></motion.div> : null}
          </div>
        )
    }) : null}
    </div>
  )
}
