import { Task } from '../../@types/task'
import {
  CreateTask,
  DeleteTask,
  ToggleCompleteTaskStatus,
  AllTasksCompleted,
} from '../task'

describe('CreateTask', () => {
  test('create a valid task', () => {
    const testTaskDescription = 'This is a test, please ignore!'
    const task = CreateTask(testTaskDescription)
    expect(task).toHaveProperty('id')
    expect(task).toHaveProperty('description')
    expect(task.description).toBe(testTaskDescription)
    expect(task).toHaveProperty('isComplete')
    expect(task.isComplete).toBe(false)
  })
  test('creates tasks with unique ids', () => {
    const tasks: Task[] = []

    for (let x = 0; x < 10; x += 1) {
      const testTaskDescription = `This is a test, please ignore! test: ${x}`
      const task = CreateTask(testTaskDescription)
      tasks.push(task)
    }
    const isArrayUnique = (arr: any): boolean => Array.isArray(arr) && new Set(arr).size === arr.length
    expect(tasks.length).toBe(10)
    expect(isArrayUnique(tasks)).toBeTruthy()
  })
})

describe('DeleteTask', () => {
  test('remove a single task', () => {
    const tasks: Task[] = [{
      id: 'abc-123',
      isComplete: true,
      description: 'This is a test, please ignore!',
    }, {
      id: 'efg-456',
      isComplete: true,
      description: 'This is another test, please ignore!',
    }]
    const result = DeleteTask('abc-123', tasks)
    expect(result.length).toBe(1)
    expect(result[0].id).toBe('efg-456')
  })
})

describe('ToggleCompleteTaskStatus', () => {
  test('should update isComplete property on a task', () => {
    const tasks: Task[] = [{
      id: 'abc-123',
      isComplete: true,
      description: 'This is a test, please ignore!',
    }, {
      id: 'efg-456',
      isComplete: true,
      description: 'This is another test, please ignore!',
    }]
    const result = ToggleCompleteTaskStatus('abc-123', tasks)
    expect(result[0].isComplete).toBe(false)
    expect(result[1].isComplete).toBe(true)
  })

  test('should not update isComplete property on any task', () => {
    const tasks: Task[] = [{
      id: 'abc-123',
      isComplete: true,
      description: 'This is a test, please ignore!',
    }, {
      id: 'efg-456',
      isComplete: true,
      description: 'This is another test, please ignore!',
    }]
    const result = ToggleCompleteTaskStatus('hij-789', tasks)
    expect(result[0].isComplete).toBe(true)
    expect(result[1].isComplete).toBe(true)
  })
})

describe('AllTasksCompleted', () => {
  test('should return true', () => {
    const tasks: Task[] = [{
      id: 'abc-123',
      isComplete: true,
      description: 'This is a test, please ignore!',
    }, {
      id: 'efg-456',
      isComplete: true,
      description: 'This is another test, please ignore!',
    }]
    const result = AllTasksCompleted(tasks)
    expect(result).toBe(true)
  })

  test('should return false', () => {
    const tasks: Task[] = [{
      id: 'abc-123',
      isComplete: true,
      description: 'This is a test, please ignore!',
    }, {
      id: 'efg-456',
      isComplete: false,
      description: 'This is another test, please ignore!',
    }]
    const result = AllTasksCompleted(tasks)
    expect(result).toBe(false)
  })
})
