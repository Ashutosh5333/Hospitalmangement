import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { GetDoctorData } from '../Redux/AppReducer/Action';
import Progressloader from './progressloader/Progress';

 

const Doctor = () => {
    
    const [isLoading,Setloading] = useState(false)
     const dispatch = useDispatch()
    const Doctor = useSelector((store) => store.Doctordata)
    

       useEffect(() =>{
         Setloading(true)
          dispatch(GetDoctorData)
          Setloading(false)
       },[])
  
  return (
    <>
     <Box mt="5">

         <Box>
           <Image background-repeat="no-repeat" width={"100%"} height="35vh" src="https://regencyhealthcare.in/wp-content/uploads/2020/02/Doctor-Page-Banner-1200x408-1.png" />
            <Box position={"relative"} top="-40"  >
               <Heading textAlign={"start"}  fontSize={{ base: "2.2rem", md: "3rem", lg: "4rem" }}  fontFamily="Playfair" color="#fff" ml="10"> Get To Know Our Specialists </Heading>
                <Text textAlign={"start"}  fontSize={{ base: "1rem", md: "1rem", lg: "1.2rem" }}  fontFamily="Playfair" color="#fff" ml="10" mt="10" > Regency Health prides itself on a melange of super-specialized team of doctors with eons of experience. </Text>
            </Box>
         </Box>

         <Box  width="90%" m="auto" mt="5">
        
           <SimpleGrid columns={[1, 2, 4]} spacing={6} > 
            {
              Doctor.length>0 ? 

                Doctor.length>0 && Doctor.map((el) => {
                    return <Box key={el._id} background="#f1f1f1" paddingBottom={"20"}  >  
                       <Link to={`/doctor/${el._id}`} > 
                           <Box  >  
                            <Box boxShadow='lg' border={"0.1px solid gray"}  width="100%"  margin={"auto"} justifyContent="center" justifyItems={"center"}>
                            <Image src={el.pic}  alt="doctorimage" width="100%"  height={{ base: "500px", md: "400px", lg: "300px" }} />
                           </Box>
                             <Box border={"0.1px solid gray"}  width="80px" height={"80px"} borderRadius="50px" mt="-40px" ml="20px" position={"relative"} background="gray.300" >
                                <Image src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/medical-icon.png" alt="setho" width={"50px"} m="auto"  mt="20px"/>
                             </Box>
                            <Box    width={"90%"} m="auto" mt="5" p="10px">
                           <Text textAlign={"start"} fontSize={"1.2rem"} fontWeight="400"  color="#444"> {el.consultant} </Text> 
                            </Box>
                            <Box width={"90%"} m="auto" mt="5"p="10px">
                           <Heading fontSize={"1.6rem"} fontWeight="500" textAlign={"start"}   > {el.name} </Heading>
                            </Box>
                        
                         <Box width={"90%"} m="auto" mt="5" p="10px">
                          <Text color="#444" textAlign={"start"} lineHeight={"1.7rem"} fontWeight="400">{el.About}</Text>
                         </Box>
                          
                          </Box>

                          <Box  mt="10"> 
                           <Button background={"red.600"} variant="red" color="#FFFFFF"> Book Appointment </Button>
                          </Box>
                         </Link>
                    
                    </Box> 

                 })
                 : <Box  m="auto"> 
                      <Progressloader />
                 </Box>
               
            }
          </SimpleGrid>

         </Box>


     </Box> 
    </>
  )
}

export default Doctor