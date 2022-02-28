import { Task } from '../@types/task'
import UseTasks from '../state/hooks/usetask'
import CustomButton from './inputs/custombutton'
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
        <CustomButton
          action={() => toggleCompleteTaskStatus(id)}
          btnText={!isComplete ? <p> </p> : <p><Emoji symbol="tick" /></p>}
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
      <CustomButton action={() => deleteTask(id)} btnText={<Emoji symbol="bin" />} type="delete-btn" />
    </div>
  )
}

export default TaskItem
