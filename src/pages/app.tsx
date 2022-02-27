import TaskInput from '../components/taskinput'
import TaskList from '../components/tasklist'
import { TaskContextProvider } from '../state/context/taskcontext'

function App() {
  return (
    <TaskContextProvider>
      <div className="page-wrapper">
        <h1>&#128221; Todo List</h1>
        <TaskList />
        <TaskInput />
      </div>
    </TaskContextProvider>
  )
}

export default App
