import { useEffect, useState } from 'react'
import UseTasks from '../../state/hooks/usetask'
import Emoji from '../emoji'
import ActionButton from '../inputs/actionbutton'

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
      <Emoji symbol="&#129327;" />
      {' '}
      An Error Has Occured!
      {' '}
      <Emoji symbol="&#129327;" />
      <ActionButton action={() => setOpen(false)} btnText="OK" type="action-btn" />
    </dialog>
  )
}

export default ErrorModal
