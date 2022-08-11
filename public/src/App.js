import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'
import SetAvatar from './components/setAvatar'
import PageNotFound from './pages/PageNotFound'
=======
import SetAvatar from './components/setAvatar'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'

>>>>>>> ca4ea018ced3ad464a15faf3b0d04bb20cae3cb2
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
