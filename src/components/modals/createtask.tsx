import { useEffect, useState } from 'react'
import UseTasks from '../../state/hooks/usetask'
import CustomButton from '../inputs/custombutton'
import TaskInput from '../inputs/taskinput'

function CreateTasksModal() {
  const { allTasksCompleted } = UseTasks()
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    setShowDialog(false && !allTasksCompleted)
  }, [allTasksCompleted])

  return (
    <div className="create-task-wrapper">
      { !showDialog ? <CustomButton action={() => setShowDialog(true)} btnText="CREATE" type="action-btn" /> : <br />}
      <dialog
        className="modal-wrapper"
        open={showDialog}
      >
        <TaskInput />
        <div>
          <CustomButton action={() => setShowDialog(false)} btnText="CLOSE" type="action-btn" />
        </div>
      </dialog>
    </div>
  )
}

export default CreateTasksModal
