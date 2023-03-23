import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {useParams} from "react-router-dom"
import { GetSingleDoctorData } from '../Redux/AppReducer/Action';
import { Box, Button, Image, Input, Text } from '@chakra-ui/react';
import "./Style/book.css"

const BookAppoinment = () => {
  const [isLoading,Setloading] = useState(false)
   const [single,Setsingle] = useState("")
   const dispatch = useDispatch()
    const  params = useParams();

  useEffect(() =>{
      Setloading(true)
    dispatch(GetSingleDoctorData(params.id))
    .then((res) =>{
      Setloading(false)
       Setsingle(res.payload)
    })
    .catch((err) =>{
      console.log(err)
    })
  },[params.id])
   console.log(single)


  return (
      <Box  width={"95%"} margin="auto" mt="10" border={"1px solid gray"}  >
      {/* ------------------ */}
            <Box className='Image-background' height="75vh" display="flex" justifyContent={"space-around"} gap="10px" boxShadow="lg"  >
              
              <Box  justifyContent="center"  m="auto"  >
              <Image className='doctor-image' src={single.pic}   width={{ base: "100%", md: "70%", lg: "100%" }} height={{ base: "300px", md: "450px", lg: "500px" }} m="auto"  />
              </Box>

              <Box  margin="auto" >
                  <Text  fontSize={{ base: "1.2rem", md: "3rem", lg: "4rem" }} lineHeight={"4rem"} fontWeight="600"  fontFamily={"playfair Display"}>{single.name} </Text>
                  <Text  fontSize={{ base: ".8rem", md: "1.5rem", lg: "2rem" }} lineHeight={"4rem"} >{single.consultant} </Text>
              </Box>
            </Box>

         {/* --------------------------------------- */}

       <Box    m="auto">
           
            <Box   width="90%" m="auto" height={"75vh"} mt="1" background={"#f3f3f3"} p="10">               

              <Box  width="100%" m="auto" mt="20px" marginLeft={"10px"}>
                  <Text  textAlign={"start"} fontSize="1.2rem" color="#444444"> Have An Emergency ? </Text>
                  <Text textAlign={"start"} fontSize="2rem" fontWeight={"600"}  color="#444444" fontFamily={"playfair Display"}> Book your Appointment </Text>
              </Box>

               <Box  mt="20px" >
                  <Box  display={"flex"} justifyContent="space-around" gap={"10px"} className="input">
                      <Input placeholder='Your name *'  background={"#fff"} width="100%"/>
                      <Input placeholder='Your Email *' background={"#fff"} width="100%"/>
                  </Box>

                  <Box display={"flex"} justifyContent="space-around" gap={"10px"} mt="20px"  className="input">
                      <Input placeholder='Phone Number *' background={"#fff"} width="100%"/>
                      <Input type={"datetime-local"}  background={"#fff"} width="100%"/>
                  </Box>
               </Box>

                <Box  mt="10">
                      <button  className='book-now'> Book Now  </button>
                </Box>

            
            </Box>
           


       </Box>



      </Box>
  )

}

export default BookAppoinment