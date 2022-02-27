import { v4 as uuidv4 } from 'uuid'
import { Task } from '../../@types/task'

// Creates a Task object with a unique id
export const CreateTask = (description: string): Task => ({
  id: uuidv4(),
  description,
  isComplete: false,
})

// Deletes a Task with the matching passed unique id
export const DeleteTask = (id: string, tasks: Task[]) => tasks.filter((task) => task.id !== id)

// Toggles Task isComplete
export const ToggleCompleteTaskStatus = (id: string, tasks: Task[]): Task[] => {
  const updatedTasks: Task[] = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        isComplete: !task.isComplete,
      }
    }
    return task
  })

  return updatedTasks
}
