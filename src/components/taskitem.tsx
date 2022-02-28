import { Task } from '../@types/task'
import UseTasks from '../state/hooks/usetask'
import ActionButton from './inputs/actionbutton'
import Emoji from './emoji'

type Props = {
  task: Task
}

function TaskItem({ task }: Props) {
  const { toggleCompleteTaskStatus, deleteTask } = UseTasks()
  const { id, description, isComplete } = task

  return (
    <div className="task-item-wrapper">
      <div>
        <ActionButton
          action={() => toggleCompleteTaskStatus(id)}
          btnText={!isComplete ? <p> </p> : <p><Emoji symbol="&#10004;" /></p>}
          type="complete-btn"
        />
        { !isComplete ? description : (
          <del>
            {' '}
            { description }
            {' '}
          </del>
        ) }
      </div>
      <ActionButton action={() => deleteTask(id)} btnText={<Emoji symbol="&#128465;" />} type="delete-btn" />
    </div>
  )
}

export default TaskItem
