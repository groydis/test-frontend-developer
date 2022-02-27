import { useContext } from 'react'
import { Task } from '../../@types/task'
import {
  CreateTask,
  DeleteTask,
  ToggleCompleteTaskStatus,
  AllTasksCompleted,
} from '../../helpers/task'
import { TaskContext } from '../context/taskcontext'

type TaskHook = {
  tasks: Task[]
  createTask: (description: string) => void
  toggleCompleteTaskStatus: (id: string) => void
  deleteTask: (id: string) => void
  clearTasks: () => void
  error: boolean
  allTasksCompleted: boolean
}

function UseTasks(): TaskHook {
  const [{ error, tasks }, setTasks] = useContext(TaskContext)

  const createTask = (description: string) => setTasks([...tasks, CreateTask(description)])

  const toggleCompleteTaskStatus = (id: string) => setTasks(ToggleCompleteTaskStatus(id, tasks))

  const deleteTask = (id: string) => setTasks(DeleteTask(id, tasks))

  const clearTasks = () => setTasks([])

  const allTasksCompleted = AllTasksCompleted(tasks)

  return {
    tasks,
    createTask,
    toggleCompleteTaskStatus,
    deleteTask,
    clearTasks,
    error,
    allTasksCompleted,
  }
}

export default UseTasks
