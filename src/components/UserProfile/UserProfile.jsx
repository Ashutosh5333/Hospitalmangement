import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';
import "../Style/userprofile.css"

const UserProfile = () => {

  

  return (
    <>
     <Box className='userprofile' border="1px solid red" height={"80vh"} width="95vw"  m="auto" display="flex" 
      justifyContent={"space-around"}  gap="10px" mt="10" p="10" boxShadow={"lg"} fontFamily="Playfair">

        <Box className='user-image'  width={{ base: "60%", md: "90v%", lg:"100%" }}  >
              <Image className='UImage'  src="https://media.istockphoto.com/id/1317946718/photo/health-issue-indian-woman.jpg?s=612x612&w=0&k=20&c=-QxEfEl7GGTalNVPYPaCZDiShojb_vzlhl6E5QdT5dE=" alt="user" />
        </Box>

         <Box className='Address-Section' width={{ base: "40vw", md: "60vw", lg:"60vw" }} height="50vh" display={"flex"} justifyContent="space-evenly">

             <Box  height={{ base: "35vh", md: "30vh", lg:"30vh" }}  width={{ base: "50vw", md: "40vw", lg:"30vw" }}  m="auto" p="15">
             <Text fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} textAlign="start" mt="5">  <span style={{fontWeight:"600" }}>Name: </span> Yasvanti</Text>
              <Text  fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} textAlign="start"  mt="5"><span style={{fontWeight:"600" }}>Age: </span>  25  </Text>
              <Text  fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} textAlign="start"  mt="5"> <span style={{fontWeight:"600" }}>Gender: </span> Female </Text>
             </Box>

             <Box   height={{ base: "35vh", md: "30vh", lg:"30vh" }}  width={{ base: "50vw", md: "40vw", lg:"30vw" }}  m="auto" p="5">
              <Text fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} textAlign="start"  mt="5"> <span style={{fontWeight:"600" }}>Address </span> :- Kanpur  </Text>
              <Text fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }}   textAlign="start" mt="5"> <span style={{fontWeight:"600" }}>Mobile</span>: - 9856797138 </Text>
             </Box>
             


         </Box>
            
            
     </Box>
    </>
  )

}

export default UserProfile