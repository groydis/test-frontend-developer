import { v4 as uuidv4 } from 'uuid'
import { getTasksArray } from '../data/task'
import type { Task } from '../interfaces/task'

export class TaskManagement {
  tasks: Task[]

  constructor () {
    this.tasks = getTasksArray()
  }

  createTask = (description: string): void => {
    console.info(description)
    const task: Task = {
      id: uuidv4(),
      description,
      isComplete: false,
    }
    this.tasks.push(task)
  }

  deleteTask = (id: string): void => {
    this.tasks.filter((task) => task.id !== id)
  }

  updateTask = (id: string): void => {
    const taskToUpdate: number = this.tasks.findIndex((task) => task.id === id)
    this.tasks[taskToUpdate].isComplete = !this.tasks[taskToUpdate].isComplete
  }
}
