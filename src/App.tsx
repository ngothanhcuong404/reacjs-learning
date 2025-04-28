
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import TodoListPage from './pages/TodoListPage'
import About from './pages/About'
import CheckSizePage from './pages/CheckSizePage'
import TodoListReducerPage from './pages/TodoListReducerPage'
import TodoProvider from './hooks/Todo/TodoProvider'
import WikiSearchPage from './pages/WikiSearchPage'
import UserProvider from './hooks/User/UserProvider'

import LoginPage from './pages/LoginPage'
import UsersPage from './component/UserStatus'

function App() {


  return (
    <UserProvider>

      <TodoProvider>
        <BrowserRouter>
          <nav className="bg-gray-800 p-4 text-white flex justify-start gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/check-size">Check Size</Link>
            <Link to="/todo-list-basic">Todo List basic</Link>
            <Link to="/wiki-search">Wiki Search</Link>
            <UsersPage></UsersPage>
          </nav>

          <Routes>
            <Route path="/" element={<TodoListReducerPage />} />
            <Route path="/about" element={<About></About>} />
            <Route path="/check-size" element={<CheckSizePage></CheckSizePage>} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/todo-list-basic" element={<TodoListPage />} />
            <Route path="/wiki-search" element={<WikiSearchPage />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>

    </UserProvider>
  )
}

export default App
