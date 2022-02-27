import {
  createContext, ReactChild, useMemo, useState,
} from 'react'
import { Task } from '../../@types/task'

type State = {error: boolean, tasks: Task[]}

const initalState: State = { error: false, tasks: [] }

type Action = (tasks: Task[]) => void
type Context = [State, Action]

export const TaskContext = createContext<Context>(null)

type Props = {
  children: ReactChild
}

export function TaskContextProvider({ children }: Props) {
  const [context, setContext] = useState(initalState)

  const errorHandler = (tasks: Task[]) => {
    try {
      setContext({ error: false, tasks })
    } catch (e) {
      setContext({ error: true, tasks })
    }
  }

  const value: Context = useMemo(() => [context, errorHandler], [context])

  return (
    <TaskContext.Provider value={value}>
      { children }
    </TaskContext.Provider>
  )
}
