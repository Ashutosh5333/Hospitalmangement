import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {useParams} from "react-router-dom"
import { BookAppointment, GetSingleDoctorData } from '../Redux/AppReducer/Action';
import { Box, Button, Image, Input, Text, useToast } from '@chakra-ui/react';
import "./Style/book.css"

const BookAppoinment = () => {
  const [isLoading,Setloading] = useState(false)
   const [single,Setsingle] = useState("")
  const toast = useToast()
   const dispatch = useDispatch()
    const  params = useParams();

    const [book ,SetBook] = useState({
         name:"",
         Doctor:"",
         Mobile:"",
         Date:"",
    })


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
  

   const handleChange = (e) =>{
     const {name,value} = e.target
      SetBook({...book,[name]:value})
   }
   

   const handleBookAppoinmet = () =>{
       dispatch(BookAppointment(book))
       .then((res) =>{
        //  console.log(res)
         toast({
          position : 'top',
          colorScheme : 'green',
          bg:"red",
          status : "success",
          description:"Your Appoinment is Booked"
        })
       })
   }




  return (
      <Box  width={"95%"} margin="auto" mt="10" border={"1px solid gray"}  >
      {/* ------------------ */}
       
        {
          isLoading  ?  <Image margin={"auto"} src="https://media.geeksforgeeks.org/wp-content/uploads/20200805182753/20200805182639.gif" /> : <Box className='Image-background' height="75vh" display="flex" justifyContent={"space-around"} gap="10px" boxShadow="lg"  >
              
              <Box  justifyContent="center"  m="auto"  >
              <Image className='doctor-image' src={single.pic}   width={{ base: "100%", md: "70%", lg: "100%" }} height={{ base: "50vh", md: "60vh", lg: "70vh" }} m="auto"  />
              </Box>

              <Box  margin="auto" >
                  <Text  fontSize={{ base: "1.2rem", md: "3rem", lg: "4rem" }} lineHeight={"4rem"} fontWeight="600"  fontFamily={"playfair Display"}>{single.name} </Text>
                  <Text  fontSize={{ base: ".8rem", md: "1.5rem", lg: "2rem" }} lineHeight={"4rem"} >{single.consultant} </Text>
              </Box>
            </Box> 
            
        }
           

         {/* ------------------ form --------------------- */}

       <Box    m="auto">
           
            <Box   width="90%" m="auto"  mt="1" background={"#f3f3f3"} p="10">               

              <Box  width="100%" m="auto" mt="20px" marginLeft={"10px"}>
                  <Text  textAlign={"start"} fontSize="1.2rem" color="#444444"> Have An Emergency ? </Text>
                  <Text textAlign={"start"} fontSize="2rem" fontWeight={"600"}  color="#444444" fontFamily={"playfair Display"}> Book your Appointment </Text>
              </Box>

               <Box  mt="20px" >
                  <Box  display={"flex"} justifyContent="space-around" gap={"10px"} className="input">
                      <Input placeholder='Your name *'  background={"#fff"} width="100%" name="name"  onChange={handleChange}/>
                      <Input placeholder='Doctor Name*' background={"#fff"} width="100%" name="Doctor" onChange={handleChange}/>
                  </Box>

                
                  <Box display={"flex"} justifyContent="space-around" gap={"10px"} mt="20px"  className="input">
                      <Input placeholder='Phone Number *' background={"#fff"} width="100%" name="Mobile" onChange={handleChange} />
                      <Input type={"datetime-local"}  background={"#fff"} width="100%" name="Date" onChange={handleChange} />
                  </Box>
               </Box>

                <Box  mt="10">
                      <button  className='book-now' onClick={handleBookAppoinmet}> Book Now  </button>
                </Box>

            
            </Box>
           


       </Box>



      </Box>
  )

}

export default BookAppoinment