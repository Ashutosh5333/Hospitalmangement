import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { GetSpecilityData } from '../Redux/AppReducer/Action';
import Progressloader from './progressloader/Progress';



const Specility = () => {
  const dispatch = useDispatch()
   const Specilitydata = useSelector((store) =>store.SpecilityData)
     console.log(Specilitydata)

   useEffect(() =>{
     dispatch(GetSpecilityData)
   },[])

  return (
    <>
     <Box mt="5">

<Box>
  <Image background-repeat="no-repeat" width={"100%"} height="40vh" src="https://regencyhealthcare.in/wp-content/uploads/2020/02/Doctor-Page-Banner-1200x408-1.png" />
   <Box position={"relative"} top="-40"   >
      <Heading textAlign={"start"}  fontSize={{ base: "2.2rem", md: "3rem", lg: "4rem" }}  fontFamily="Playfair" color="#fff" ml="10"> Specialities </Heading>
       <Text textAlign={"start"}  fontSize={{ base: "1rem", md: "1rem", lg: "1.2rem" }}  fontFamily="Playfair" color="#fff" ml="10" mt="10"  > Our domains of excellence </Text>
   </Box>
</Box>

<Box  width="90%" m="auto" mt="5">

  <SimpleGrid columns={[1, 2, 4]} spacing={6} > 
   {
    Specilitydata.length>0 ? 

    Specilitydata.length>0 && Specilitydata.map((el) => {
           return <Box key={el._id} background="#f1f1f1" paddingBottom={"20"}  >  
            
                  <Box  >  
                   <Box boxShadow='lg' border={"0.1px solid gray"}  width="100%"  margin={"auto"} justifyContent="center" justifyItems={"center"}>
                   <Image src={el.pic}  alt="doctorimage" width="100%"  height={{ base: "500px", md: "400px", lg: "300px" }} />
                  </Box>
                  
                
                   <Box width={"90%"} m="auto" mt="5"p="10px">
                  <Heading fontSize={"1.6rem"} fontWeight="500" textAlign={"start"}   > {el.title} </Heading>
                   </Box>
               
                <Box width={"90%"} m="auto" mt="5" p="10px">
                 <Text color="#444" textAlign={"start"} lineHeight={"1.7rem"} fontWeight="400">{el.About}</Text>
                </Box>
                 
                 </Box>
               
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

export default Specility