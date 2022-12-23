import { useState } from "react";
import { Tabs } from "../components/Tabs/Tabs";
import { Tasks } from "../components/Tasks/Tasks";
import { requiredUser } from "../helpers/requiredUser";
import { useTask } from "../contexts/TaskContext";
import { FormModal } from "../components/FormModal/FormModal";
import { TaskLayout } from "../layouts/TaskLayout/TaskLayout";

export default function TasksPage() {
  const { 
    openedEditTask,
    openedCreateTask, 
    setOpenedEditTask,
    setOpenedCreateTask
  } = useTask();

  const taskStates = [
    {id: "1", label: "Pendientes", value: "Pendientes"},
    {id: "2", label: "En progreso", value: "Pendientes"},
    {id: "3", label: "Terminadas", value: "Pendientes"},
  ]

  const [tasks, setTasks] = useState([
    {id: "1", title: "Molestar a la gata", description: "hola mundo", onEdit: ()=> setOpenedEditTask(true)},
    {id: "2", title: "Molestar a la gata", description: "hola mundo", onEdit: ()=> setOpenedEditTask(true)},
    {id: "3", title: "Molestar a la gata", description: "hola mundo", onEdit: ()=> setOpenedEditTask(true)},
    {id: "4", title: "Molestar a la gata", description: "hola mundo", onEdit: ()=> setOpenedEditTask(true)},
    {id: "5", title: "Molestar a la gata", description: "hola mundo", onEdit: ()=> setOpenedEditTask(true)},
  ])

  const handleSelectTaskState = (taskState)=> {
    console.log(taskState);
  }

  const handleDeleteTask = (task)=> {
    setTasks((tasks)=> tasks.filter((_task)=> !(_task.id === task.id)));
  }

  const taskStatesTabs = taskStates.map((taskState)=> ({
    ...taskState, 
    onSelect: handleSelectTaskState
  }))

  const tasksItems = tasks.map((task)=> ({
    ...task, 
    onDelete: handleDeleteTask
  }))

  return (
    <TaskLayout title="Mis tareas">
      <Tabs
        initial={taskStatesTabs[0]}
        tabs={taskStatesTabs}  
      />
      <Tasks
        windowResponsive={true}
        tasks={tasksItems}
      />
      <FormModal
        isVisible={openedCreateTask}
        onClose={()=> setOpenedCreateTask(false)}
        mainPaddingBottom="30vh"
        title="Crear tarea"
        inputs={[
          {id: "1", type: "text", as: "textfield", name: "title", label: "Titulo", placeholder: "ej: Molestar a la gata"},
          {id: "2", type: "text", as: "textarea", name: "description", label: "Descripcion", placeholder: "ej: Molestar a la gata", },
          {
            id: "3",
            type: "text", 
            as: "dropdown", 
            name: "description", 
            label: "Estado", 
            selectables: [
              {id: "1", image: "/icon/bars1.svg", label: "Pendiente", value: "Pendientes"},
              {id: "2", image: "/icon/sun1.svg", label: "En progreso", value: "En progreso"},
              {id: "3", image: "/icon/sun2.svg", label: "Terminada", value: "Terminadas"},
            ]
          }
        ]}
        actions={[
          {id: "1", as: "primarybutton", label: "Crear tarea"},
          {id: "2", as: "secondarybutton", label: "Cancelar"},
        ]}
      />
      <FormModal
        isVisible={openedEditTask}
        onClose={()=> setOpenedEditTask(false)}
        mainPaddingBottom="30vh"
        title="Crear tarea"
        inputs={[
          {id: "1", type: "text", as: "textfield", name: "title", label: "Titulo", placeholder: "ej: Molestar a la gata"},
          {id: "2", type: "text", as: "textarea", name: "description", label: "Descripcion", placeholder: "ej: Molestar a la gata", },
          {
            id: "3",
            type: "text", 
            as: "dropdown", 
            name: "description", 
            label: "Estado", 
            selectables: [
              {id: "1", image: "/icon/bars1.svg", label: "Pendiente", value: "Pendientes"},
              {id: "2", image: "/icon/sun1.svg", label: "En progreso", value: "En progreso"},
              {id: "3", image: "/icon/sun2.svg", label: "Terminada", value: "Terminadas"},
            ]
          }
        ]}
        actions={[
          {id: "1", as: "primarybutton", label: "Crear tarea"},
          {id: "2", as: "secondarybutton", label: "Cancelar"},
        ]}
      />
    </TaskLayout>
  )
}

export const getServerSideProps = requiredUser;