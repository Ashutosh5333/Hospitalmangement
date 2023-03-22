import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

const BookAppoinment = () => {
    const  { id } = useParams();
    const [data, Setdata] = useState([])
    const [loading,Setloading] = useState(false)
    console.log(id)

  
    useEffect((_id) =>{
          Setloading(true)
        fetch(`https://tame-plum-narwhal-kilt.cyclic.app/doctor/${_id}`)
        .then((res) =>res.json())
        .then((res) =>{
            Setloading(false)
            Setdata(res)
        })
        .catch((err) =>console.log(err))
     },[id])

     console.log("data",data)



  return (
    <div>BookAppoinment</div>
  )

}

export default BookAppoinment