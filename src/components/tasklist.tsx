import TaskItem from './taskitem'
import UseTasks from '../state/hooks/usetask'

function TaskList() {
  const { tasks } = UseTasks()

  return (
    <div className="task-list-wrapper">
      {
        tasks.length > 0
          ? tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))
          : <div className="center-text"> You have no tasks to complete! </div>
      }
    </div>
  )
}

export default TaskList
