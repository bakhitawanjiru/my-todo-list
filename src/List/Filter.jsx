import { useTodo } from '../List/TodoContext'

function Filter() {
  const { state, dispatch } = useTodo()

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' }
  ]

  return (
    <div className="flex gap-2 mb-4">
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: filter.value })}
          className={`px-3 py-1 rounded-md ${
            state.filter === filter.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default Filter