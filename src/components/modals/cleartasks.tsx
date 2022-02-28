import { useEffect, useState } from 'react'
import UseTasks from '../../state/hooks/usetask'
import CustomButton from '../inputs/custombutton'
import Emoji from '../emoji'

function ClearTasksModal() {
  const { allTasksCompleted, clearTasks } = UseTasks()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(allTasksCompleted)
  }, [allTasksCompleted])

  return (
    <dialog
      className="modal-wrapper"
      open={open}
    >
      <p>
        <Emoji symbol="wow" />
        {' '}
        Well Done! Clear all tasks?
        {' '}
        <Emoji symbol="wow" />
      </p>
      <div>
        <CustomButton action={() => clearTasks()} btnText="CLEAR" type="action-btn" />
        <CustomButton action={() => setOpen(false)} btnText="CLOSE" type="action-btn" />
      </div>
    </dialog>
  )
}

export default ClearTasksModal
