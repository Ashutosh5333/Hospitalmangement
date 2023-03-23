import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';


const UserProfile = () => {


  return (
    <>
     <Box border="1px solid red" height={"70vh"} display="flex"
      justifyContent={"space-around"}  gap="10px">

        <Box border={"1px solid blue"} width="30vw" height={"50vh"} >
              <Image  src="https://media.istockphoto.com/id/1317946718/photo/health-issue-indian-woman.jpg?s=612x612&w=0&k=20&c=-QxEfEl7GGTalNVPYPaCZDiShojb_vzlhl6E5QdT5dE=" alt="user" />
        </Box>

         <Box border={"1px solid black"} width="60vw" height="50vh" display={"flex"} justifyContent="space-around">

             <Box border={"1px solid blue"} height={{ base: "30vh", md: "35vh", lg:"40vh" }}  width={{ base: "30vw", md: "40vw", lg:"50vw" }}  m="auto">
             <Text fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }} textAlign="start" mt="5">  <span style={{fontWeight:"600" }}>Name: </span> Yasvanti</Text>
              <Text  fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }} textAlign="start"  mt="5"><span style={{fontWeight:"600" }}>Age: </span>  25  </Text>
              <Text  fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }} textAlign="start"  mt="5"> <span style={{fontWeight:"600" }}>Gender: </span> Female </Text>
             </Box>

             <Box border={"1px solid black"}   height={{ base: "30vh", md: "35vh", lg:"40vh" }}  width={{ base: "30vw", md: "40vw", lg:"50vw" }}  m="auto">
              <Text fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }} textAlign="start"  mt="5"> <span style={{fontWeight:"600" }}>Address </span> :- Kanpur  </Text>
              <Text fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}   textAlign="start" mt="5"> <span style={{fontWeight:"600" }}>Mobile</span>: - 9856797138 </Text>
             </Box>
             


         </Box>
            
            
     </Box>
    </>
  )

}

export default UserProfile