import { useEffect, useState } from 'react'
import UseTasks from '../../state/hooks/usetask'
import ActionButton from '../inputs/actionbutton'
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
        <Emoji symbol="&#129321;" />
        {' '}
        Well Done! Clear all tasks?
        {' '}
        <Emoji symbol="&#129321;" />
      </p>
      <div>
        <ActionButton action={() => clearTasks()} btnText="CLEAR" type="action-btn" />
        <ActionButton action={() => setOpen(false)} btnText="CLOSE" type="action-btn" />
      </div>
    </dialog>
  )
}

export default ClearTasksModal
