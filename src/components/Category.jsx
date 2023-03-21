import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Category = () => {


  return (
    <>
     <Box  background="#fff" height={"10vh"}  display="flex" justifyContent={"space-around"} gap="10px" >
         <Box  margin="auto" > 
          <Text fontSize={"1.5rem"} color="gray.600" fontWeight="700" > About us  </Text>
         </Box>
         <Box    margin="auto"> 
          <Text  fontSize={"1.5rem"} color="gray.600" fontWeight="700"> Doctors </Text>
         </Box>
         <Box   margin="auto"> 
          <Text  fontSize={"1.5rem"} color="gray.600" fontWeight="700"> Specialities </Text>
         </Box>
         <Box   margin="auto"> 
          <Text  fontSize={"1.5rem"} color="gray.600" fontWeight="700"> Health Packages </Text>
         </Box>
         <Box   margin="auto"> 
          <Text  fontSize={"1.5rem"} color="gray.600" fontWeight="700"> BlogsInvestors </Text>
         </Box>
         <Box   margin="auto"> 
          <Text  fontSize={"1.5rem"} color="gray.600" fontWeight="700"> Relations Events </Text>
         </Box>
         

     </Box>
    </>
  )
}

export default Category