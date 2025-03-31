import { useTodo } from '../List/TodoContext'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Search() {
  const { state, dispatch } = useTodo()

  return (
    <div className="relative mb-4">
      <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search tasks..."
        value={state.searchQuery}
        onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  )
}

export default Search