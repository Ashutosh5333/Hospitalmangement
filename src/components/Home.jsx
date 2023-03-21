import React from 'react'
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import {data} from "./Data/data"
// console.log(data)


const Home = () => {

  return (
    <>
    <Box border="1px solid red" >

       <Box  width={{base : "70%", md :'85%', lg : '90%'}} margin="auto" position={"relative"} zIndex="-2">
           <Image src="https://regencyhealthcare.in/wp-content/uploads/2021/12/NWB_4@72x-100.jpg" alt="regencyImage" />
       </Box>
       <Box border={"1px solid green"}  display="flex" width={"90%"} margin="auto">
          
          <SimpleGrid  columns={[2, 4, 4]} spacing={6}>
             {
               data.length>0 && data.map((el) => {
                return  <Box  key={el.id} border={"5px solid red"}  width={"100%"} margin="auto" > 
               <Box border={"2px solid yellow"} width="90%" margin={"auto"} height="35vh">
                 <Box mt="4">
                   <Text textAlign={"start"}> {el.title} </Text>
                 </Box>
                  <Box mt="4">
                   <Text textAlign={"start"}> {el.description} </Text>
                  </Box>
               </Box>
            </Box>
               })
             } 
           

          </SimpleGrid>

            {/* <Box border={"5px solid red"}  width={"25%"} margin="auto" > 
             <Text>First A</Text>
            </Box>
            <Box border={"5px solid red"}  width={"25%"} margin="auto" > 
             <Text>First A</Text>
            </Box>
            <Box border={"5px solid red"}   width={"25%"} margin="auto"> 
             <Text>First A</Text>
            </Box> */}

       </Box>

    </Box>
    </>
  )
}

export default Home