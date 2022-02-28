import Emoji from './emoji'
import CreateTasksModal from './modals/createtask'

function Header() {
  return (
    <header>
      <h1 className="title-text-wrapper">
        <Emoji symbol="&#128221;" />
        {' '}
        Todo List
      </h1>
      <CreateTasksModal />
    </header>
  )
}

export default Header
