import React, { useEffect, useState } from 'react'
import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { GetDoctorData } from '../Redux/AppReducer/Action';
 

const Doctor = () => {
    
    const [isLoading,Setloading] = useState(false)
     const dispatch = useDispatch()
    const Doctor = useSelector((store) => store.Doctordata)
     console.log( "redux",Doctor)

       useEffect(() =>{
         Setloading(true)
          dispatch(GetDoctorData)
          Setloading(false)
       },[])
  
  return (
    <>
     <Box mt="5">

         <Box>
           <Image background-repeat="no-repeat" width={"100%"} src="https://regencyhealthcare.in/wp-content/uploads/2020/02/Doctor-Page-Banner-1200x408-1.png" />
         </Box>

         <Box  width="90%" m="auto" mt="5">

           <SimpleGrid columns={[1, 2, 4]} spacing={6} > 
            {
              isLoading ? <h1> Loading .......</h1> :
                Doctor.length>0 && Doctor.map((el) => {
                    return <Box key={el._id} border="1px solid red" background="#f1f1f1" paddingBottom={"20"}  >  
                       <Link to={`/doctor/${el._id}`}> 
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
                           <Heading fontSize={"1.6rem"} fontWeight="500" textAlign={"start"}     font-Family="Playfair Display"> {el.name} </Heading>
                            </Box>
                        
                         <Box width={"90%"} m="auto" mt="5" p="10px">
                          <Text color="#444" textAlign={"start"} lineHeight={"1.7rem"} fontWeight="400">{el.About}</Text>
                         </Box>
                         </Link>
                    
                    </Box>
                 })
                  
               
            }
          </SimpleGrid>

         </Box>


     </Box> 
    </>
  )
}

export default Doctor