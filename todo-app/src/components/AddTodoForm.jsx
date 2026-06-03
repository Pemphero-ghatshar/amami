import { useState } from 'react'

export default function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!title.trim()) {
      newErrors.title = 'Title is required'
    }
    if (title.trim().length > 100) {
      newErrors.title = 'Title must be less than 100 characters'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onAdd({
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
    })

    setTitle('')
    setDescription('')
    setPriority('medium')
    setDueDate('')
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} className="card slide-up">
      <h2 className="mb-4">Add New Task</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-semibold text-dark mb-2">
          Task Title *
        </label>
        <input
          id="title"
          type="text"
          className={`input-field ${errors.title ? 'border-danger' : ''}`}
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            if (errors.title) setErrors({ ...errors, title: '' })
          }}
          maxLength="100"
        />
        {errors.title && <p className="text-danger text-sm mt-1">{errors.title}</p>}
        <p className="text-gray-400 text-xs mt-1">{title.length}/100</p>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-semibold text-dark mb-2">
          Description
        </label>
        <textarea
          id="description"
          className="input-field"
          placeholder="Enter task description..."
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength="500"
        />
        <p className="text-gray-400 text-xs mt-1">{description.length}/500</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="priority" className="block text-sm font-semibold text-dark mb-2">
            Priority
          </label>
          <select
            id="priority"
            className="input-field"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-sm font-semibold text-dark mb-2">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            className="input-field"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn-primary w-full">
        Add Task
      </button>
    </form>
  )
}
