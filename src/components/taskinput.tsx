import { ChangeEvent, useRef } from 'react'
import UseTasks from '../state/hooks/usetask'

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
      <button
        id="action-btn"
        onClick={() => handleTaskSubmission()}
        type="submit"
        aria-label="create task button"
      >
        CREATE
      </button>
    </div>
  )
}

export default TaskInput
