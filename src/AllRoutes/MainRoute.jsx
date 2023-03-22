import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './../components/Dashboard';
import Login from './../components/Login';
import Signup from './../components/Signup';
import Home from './../components/Home';
import Cart from '../components/Cart';
import Doctor from '../components/Doctor';


const MainRoute = () => {

  return (
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route  path='/dash' element={<Dashboard/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route  path="/cart" element={<Cart/>} />
     <Route  path="/doctor" element={<Doctor/>} />
    </Routes>
  )
}

export default MainRoute