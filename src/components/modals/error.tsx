import { useEffect, useState } from 'react'
import UseTasks from '../../state/hooks/usetask'

function ErrorModal() {
  const { error } = UseTasks()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(error)
  }, [error])

  return (
    <dialog
      className="modal-wrapper"
      open={open}
    >
      &#129327; An Error Has Occured! &#129327;
      <button
        id="action-btn"
        aria-label="close modal"
        onClick={() => setOpen(false)}
        type="button"
      >
        OK
      </button>
    </dialog>
  )
}

export default ErrorModal
