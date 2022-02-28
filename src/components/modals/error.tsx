import { useEffect, useState } from 'react'
import UseTasks from '../../state/hooks/usetask'
import Emoji from '../emoji'
import CustomButton from '../inputs/custombutton'

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
      <Emoji symbol="boom" />
      {' '}
      An Error Has Occured!
      {' '}
      <Emoji symbol="boom" />
      <CustomButton action={() => setOpen(false)} btnText="OK" type="action-btn" />
    </dialog>
  )
}

export default ErrorModal
