import React, { useState } from 'react'
import { json, Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const [ token ,SetToken ]= useState(false)

   const  userToken = JSON.parse(localStorage.getItem("token"))
     console.log("userToken",userToken)

       if(userToken ==null){
         return <Navigate to="/login" />
       }
   return children
}

export default PrivateRoute