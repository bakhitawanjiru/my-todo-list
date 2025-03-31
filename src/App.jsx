import { useState } from 'react'
import Search from './List/Search'
import Filter from './List/Filter'
import List from './List/Lists'
import Todo from './List/todo'
import { TodoProvider } from './List/TodoContext'
import './App.css'

function App() {
  return (
    <TodoProvider>
      <div >
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
            
             My Todo List 
            
          </h1>
          
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 card-hover">
            <div className="space-y-8">
              <div className="transform transition hover:scale-[1.01]">
                <Todo />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="w-full md:w-2/3">
                  <Search />
                </div>
                <div className="w-full md:w-1/3">
                  <Filter />
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-200/50 pt-8">
                <List />
              </div>
            </div>
          </div>
          
          <footer className="text-center mt-12 text-gray-600 text-sm font-medium">
            <p className="flex items-center justify-center gap-2">
              
            </p>
          </footer>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App