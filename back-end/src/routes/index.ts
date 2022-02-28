import { Router } from 'express'

import * as systemController from '../controllers/systemcontroller'
import * as taskController from '../controllers/taskcontroller'

export const routes = (router: Router): Router => {
  router.get('/health', systemController.healthCheck)
  router.get('/tasks', taskController.getTasks)
  router.post('/tasks', taskController.createTask)
  router.put('/tasks/:id', taskController.updateTask)
  router.delete('/tasks/:id', taskController.deleteTask)
  return router
}
