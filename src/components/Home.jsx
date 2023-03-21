import React from 'react'
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import {data} from "./Data/data"



const Home = () => {

  return (
    <>
    <Box >

       <Box  width={{base : "80%", md :'95%', lg : '90%'}} margin="auto" position={"relative"} zIndex="-2">
           <Image src="https://regencyhealthcare.in/wp-content/uploads/2021/12/NWB_4@72x-100.jpg" alt="regencyImage" />
       </Box>
       <Box display="flex" width={"90%"} margin="auto">
          
          <SimpleGrid  columns={[2, 2, 4]} >
             {
               data.length>0 && data.map((el) => {
                return  <Box  key={el.id}  background="#DB2637"  width={{base : "90%", md :'95%', lg : '100%'}}  margin="auto" shadow={"lg"} height="40vh"> 
               <Box  width="95%" margin={"auto"} >
                 <Box mt="4">
                   <Text color="#FFFFFF" fontSize={"1.5rem"} fontWeight="600" textAlign={"start"} borderBottom="3px solid #fff"> {el.title} </Text>
                 </Box>
                  <Box mt="4">
                   <Text color="#FFFFFF" lineHeight={"1.5rem"} textAlign={"start"}>  {el.description} </Text>
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