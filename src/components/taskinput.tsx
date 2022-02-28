import { ChangeEvent, useRef } from 'react'
import UseTasks from '../state/hooks/usetask'
import ActionButton from './inputs/actionbutton'

function TaskInput() {
  const { createTask } = UseTasks()
  const inputReference = useRef<HTMLInputElement>()
  const text = useRef<string>()

  const handleTaskSubmission = () => {
    createTask(text.current)
    text.current = ''
    inputReference.current.value = ''
  }
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    text.current = e.target.value
  }

  return (
    <div className="task-input-wrapper">
      <input
        onChange={handleTextInput}
        aria-label="task text input field"
        ref={inputReference}
        type="text"
      />
      <ActionButton action={() => handleTaskSubmission()} btnText="CREATE" type="action-btn" />
    </div>
  )
}

export default TaskInput
