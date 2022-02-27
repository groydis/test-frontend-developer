import { Task } from '../@types/task'
import UseTasks from '../state/hooks/usetask'

type Props = {
  task: Task
}

function TaskItem({ task }: Props) {
  const { toggleCompleteTaskStatus, deleteTask } = UseTasks()
  const { id, description, isComplete } = task

  return (
    <div className="task-item-wrapper">
      <div>
        <button
          id="complete-btn"
          aria-label="task toggle complete button"
          onClick={() => toggleCompleteTaskStatus(id)}
          type="submit"
        >
          { !isComplete ? <p> </p> : <p>&#10004;</p> }
        </button>
        { !isComplete ? description : (
          <del>
            {' '}
            { description }
            {' '}
          </del>
        ) }
      </div>
      <button
        id="delete-btn"
        aria-label="task delete button"
        onClick={() => deleteTask(id)}
        type="submit"
      >
        &#128465;
      </button>
    </div>
  )
}

export default TaskItem
