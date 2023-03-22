import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Style/category.css"



const Category = () => {


  return (
    <>
     <Box  background="#fff" height={"10vh"}  display="flex" justifyContent={"space-around"} gap="5px" >
         <Box  margin="auto" className='category'  > 
          <Text className='text' fontSize={{ base: "10px", md: "18px", lg: "22px" }}   fontWeight="700" > About us  </Text>
         </Box>
         
         <Box    margin="auto" className='category'> 
         <Link to="/doctor">
          <Text  className='text'  fontSize={{ base: "10px", md: "18px", lg: "22px" }}  fontWeight="700"> Doctors </Text>
         </Link>
         </Box>

         <Box   margin="auto" className='category'> 
          <Text  className='text'  fontSize={{ base: "10px", md: "18px", lg: "22px" }}  fontWeight="700"> Specialities </Text>
         </Box>
         <Box   margin="auto" className='category'> 
          <Text   className='text' fontSize={{ base: "10px", md: "18px", lg: "22px" }}  fontWeight="700"> Health Packages </Text>
         </Box>
         <Box   margin="auto" className='category'> 
          <Text  className='text'  fontSize={{ base: "10px", md: "18px", lg: "22px" }}  fontWeight="700"> BlogsInvestors </Text>
         </Box>
        
         {/* <Box   margin="auto" className='category'> 
          <Text  className='text'  fontSize={{ base: "10px", md: "18px", lg: "22px" }}  fontWeight="700"> Relations Events </Text>
         </Box> */}
         

     </Box>
    </>
  )
}

export default Category