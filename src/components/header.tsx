import Emoji from './emoji'
import CreateTasksModal from './modals/createtask'

function Header() {
  return (
    <header>
      <h1 className="title-text-wrapper">
        <Emoji symbol="list" />
        {' '}
        Todo List
      </h1>
      <CreateTasksModal />
    </header>
  )
}

export default Header
