import { useEffect, useState } from 'react'
import UseTasks from '../../state/hooks/usetask'
import ActionButton from '../inputs/actionbutton'
import TaskInput from '../taskinput'

function CreateTasksModal() {
  const { allTasksCompleted } = UseTasks()
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    setShowDialog(false && !allTasksCompleted)
  }, [true && allTasksCompleted])

  return (
    <div className="create-task-wrapper">
      { !showDialog ? <ActionButton action={() => setShowDialog(true)} btnText="CREATE" type="action-btn" /> : <br />}
      <dialog
        className="modal-wrapper"
        open={showDialog}
      >
        <TaskInput />
        <div>
          <ActionButton action={() => setShowDialog(false)} btnText="CLOSE" type="action-btn" />
        </div>
      </dialog>
    </div>
  )
}

export default CreateTasksModal
