import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const [ token ,SetToken ]= useState(false)

   const  userToken = JSON.parse(localStorage.getItem("token"))
   

       if(userToken ==null){
         return <Navigate to="/login" />
       }
   return children
}

export default PrivateRoute