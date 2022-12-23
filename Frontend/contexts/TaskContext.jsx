import { createContext, useContext, useState } from "react";

const TaskContext = createContext({
  openedEditTask: 1,
  openedCreateTask: 1,
  setOpenedEditTask: 1,
  setOpenedCreateTask: 1
});

export function TaskProvider({children}) {
  const [openedCreateTask, setOpenedCreateTask] = useState(false);
  const [openedEditTask, setOpenedEditTask] = useState(false);

  return (
    <TaskContext.Provider 
      value={{
        openedEditTask,
        openedCreateTask,
        setOpenedEditTask,
        setOpenedCreateTask
      }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTask() {
  return useContext(TaskContext);
}
