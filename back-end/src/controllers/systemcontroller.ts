import { Request, Response } from 'express'
import { asyncHandler } from '../helpers/asynchandler'

export const healthCheck = asyncHandler(async (request: Request, response: Response) => {
  response.status(200).json({ healthy: true })
})
