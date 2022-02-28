import { Request, Response } from 'express'
import { getTasksArray } from '../data/task'
import { TaskManagement } from '../services/taskservice'
import { asyncHandler } from '../helpers/asynchandler'

const tasks = getTasksArray()

export const getTasks = asyncHandler(async (request: Request, response: Response) => {
  response.status(200).json({ data: tasks })
})

export const updateTask = asyncHandler(async (request: Request, response: Response) => {
  const taskManagement = new TaskManagement()
  taskManagement.updateTask(request.params.id)
  response.status(200).json({ data: tasks })
})

export const createTask = asyncHandler(async (request: Request, response: Response) => {
  const taskDescription = request.body?.description as unknown as string
  const taskManagement = new TaskManagement()
  taskManagement.createTask(taskDescription)
  response.status(200).json({ data: tasks })
})

export const deleteTask = asyncHandler(async (request: Request, response: Response) => {
  const taskManagement = new TaskManagement()
  taskManagement.deleteTask(request.params.id)
  response.status(200).json({ data: tasks })
})
