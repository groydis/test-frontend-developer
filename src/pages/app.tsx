import { TaskContextProvider } from '../state/context/taskcontext'

function App() {
  return (
    <TaskContextProvider>
      <div className="page-wrapper">
        <h1>&#128221; Todo List</h1>
      </div>
    </TaskContextProvider>
  )
}

export default App
