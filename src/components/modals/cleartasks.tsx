import { useEffect, useState } from 'react'
import UseTasks from '../../state/hooks/usetask'

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
      <p> &#129321;All Tasks Completed! &#129321; </p>
      <div>
        <button
          id="action-btn"
          aria-label="clear tasks button"
          onClick={() => clearTasks()}
          type="submit"
        >
          CLEAR
        </button>
        <button
          id="action-btn"
          aria-label="cancel modal button"
          onClick={() => setOpen(false)}
          type="button"
        >
          CLOSE
        </button>
      </div>
    </dialog>
  )
}

export default ClearTasksModal
