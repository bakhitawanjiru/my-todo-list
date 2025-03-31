import { useTodo } from '../List/TodoContext'
import { TrashIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

function List() {
  const { state, dispatch } = useTodo() || { state: { todos: [], filter: 'all', searchQuery: '' } }
  const { todos = [], filter = 'all', searchQuery = '' } = state

  if (!Array.isArray(todos)) {
    return <div>Loading...</div>
  }

  const filteredTodos = todos
    .filter(todo => {
      if (filter === 'active') return !todo.completed
      if (filter === 'completed') return todo.completed
      return true
    })
    .filter(todo =>
      todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <ul className="space-y-3">
      {filteredTodos.length === 0 ? (
        <li className="text-center text-gray-500">No tasks found</li>
      ) : (
        filteredTodos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                className={`w-5 h-5 rounded-full border ${
                  todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'
                }`}
              >
                {todo.completed && (
                  <CheckCircleIcon className="w-5 h-5 text-white" />
                )}
              </button>
              <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
              className="text-red-500 hover:text-red-600"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </li>
        ))
      )}
    </ul>
  )
}

export default List