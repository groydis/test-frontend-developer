import TaskList from '../components/tasklist'
import { TaskContextProvider } from '../state/context/taskcontext'
import Header from '../components/header'

function App() {
  return (
    <TaskContextProvider>
      <div className="page-wrapper">
        <Header />
        <TaskList />
      </div>
    </TaskContextProvider>
  )
}

export default App
