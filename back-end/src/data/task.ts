import { Task } from '../interfaces/task'

// TODO: Replace with Database Connection to Tasks
const tasks: Task[] = []
export const getTasksArray = (): Task[] => tasks
