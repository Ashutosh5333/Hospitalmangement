import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './../components/Login';
import Signup from './../components/Signup';
import Home from './../components/Home';
import Roomcart from '../components/Roomcart';
import Doctor from '../components/Doctor';
import NotFound from '../NotFound';
import BookAppoinment from '../components/BookAppoinment';
import UserProfile from '../components/UserProfile/UserProfile';
import Room from './../components/Room/Room';
import Specility from '../components/Specility';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';


const MainRoute = () => {

  return (
    <Routes>
     <Route path='/' element={<Home/>} />
 
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     
     <Route  path="/cart" element={
      <PrivateRoute>  <Roomcart/> </PrivateRoute>
    } />

     <Route  path="/doctor" element={<Doctor/>} />
     
     <Route  path='/doctor/:id' element={
      <PrivateRoute>  <BookAppoinment/> </PrivateRoute>
    }/>

     <Route path='/userprofile' element={
      <PrivateRoute>
     <UserProfile/>
      </PrivateRoute>
     } />

     <Route path='/faculty' element={<Room/>} />
     <Route path='/specility' element={<Specility/>} />
     
     <Route  path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default MainRoute