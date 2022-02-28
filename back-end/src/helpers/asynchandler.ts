import { Request, Response } from 'express'

export const asyncHandler = (fn: Function) => (
  (request: Request, response: Response, next: Function) => (
    fn(request, response, next).catch(next)
  )
)
