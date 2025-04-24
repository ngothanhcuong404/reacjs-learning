
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import TodoListPage from './pages/TodoListPage'
import About from './pages/About'
import CheckSizePage from './pages/CheckSizePage'
import TodoListReducerPage from './pages/TodoListReducerPage'

function App() {

  return (
    
   <BrowserRouter>
      <nav className="bg-gray-800 p-4 text-white flex justify-start gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/check-size">Check Size</Link>
        <Link to="/todo-list-reducer">Todo List Reducer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/check-size" element={<CheckSizePage></CheckSizePage>} />
        <Route path="/todo-list-reducer" element={<TodoListReducerPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
