import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Main from './components/Main'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/dashboard' element={<Dashboard/>} >
            <Route path='/dashboard' element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
