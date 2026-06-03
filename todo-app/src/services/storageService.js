// Local Storage Service
const STORAGE_KEY = 'todos'

export const storageService = {
  getTodos: () => {
    try {
      const todos = localStorage.getItem(STORAGE_KEY)
      return todos ? JSON.parse(todos) : []
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return []
    }
  },

  saveTodos: (todos) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  },

  addTodo: (todo) => {
    const todos = storageService.getTodos()
    const newTodo = {
      id: Date.now(),
      title: todo.title,
      description: todo.description,
      priority: todo.priority || 'medium',
      dueDate: todo.dueDate || null,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    todos.unshift(newTodo)
    storageService.saveTodos(todos)
    return newTodo
  },

  updateTodo: (id, updates) => {
    const todos = storageService.getTodos()
    const index = todos.findIndex((t) => t.id === id)
    if (index !== -1) {
      todos[index] = { ...todos[index], ...updates }
      storageService.saveTodos(todos)
      return todos[index]
    }
    return null
  },

  deleteTodo: (id) => {
    const todos = storageService.getTodos()
    const filtered = todos.filter((t) => t.id !== id)
    storageService.saveTodos(filtered)
  },

  toggleTodo: (id) => {
    const todos = storageService.getTodos()
    const todo = todos.find((t) => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
      storageService.saveTodos(todos)
      return todo
    }
    return null
  },

  clearAllTodos: () => {
    localStorage.removeItem(STORAGE_KEY)
  },

  deleteCompletedTodos: () => {
    const todos = storageService.getTodos()
    const active = todos.filter((t) => !t.completed)
    storageService.saveTodos(active)
    return active.length
  },

  getStats: () => {
    const todos = storageService.getTodos()
    return {
      total: todos.length,
      completed: todos.filter((t) => t.completed).length,
      pending: todos.filter((t) => !t.completed).length,
      high: todos.filter((t) => t.priority === 'high' && !t.completed).length,
    }
  },
}
