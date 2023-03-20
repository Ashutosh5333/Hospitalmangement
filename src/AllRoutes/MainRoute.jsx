import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './../components/Dashboard';
import Login from './../components/Login';
import Signup from './../components/Signup';


const MainRoute = () => {

  return (
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route  path='/dash' element={<Dashboard/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
    </Routes>
  )
}

export default MainRoute