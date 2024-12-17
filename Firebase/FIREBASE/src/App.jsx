import { useState } from 'react'
import './App.css'
import Singup from './Firebase/Singup'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './Firebase/Login'
import Dashboard from './Firebase/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Singup}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/dashboard' Component={Dashboard}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
