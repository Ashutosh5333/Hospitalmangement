import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetRoomData } from '../../Redux/AppReducer/Action';
import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Progressloader from '../progressloader/Progress';

const Room = () => {
   const dispatch = useDispatch()
   const Room = useSelector(store =>  store.RoomData)
    console.log("Room Data" ,Room)

     useEffect(() =>{
        dispatch(GetRoomData)
     },[])

    
  return (
    <>
     <Box>
     <Box  width="90%" m="auto" mt="5">
        
        <SimpleGrid columns={[1, 2, 4]} spacing={6} > 
         {
          Room.length>0 ? 

          Room.length>0 && Room.map((el) => {
                 return <Box key={el._id} background="#f1f1f1" paddingBottom={"20"}  >  
                
                        <Box  >  
                         <Box boxShadow='lg' border={"0.1px solid gray"}  width="100%"  margin={"auto"} justifyContent="center" justifyItems={"center"}>
                         <Image src={el.pic}  alt="doctorimage" width="100%"  height={{ base: "500px", md: "400px", lg: "300px" }} />
                        </Box>
                          
                         <Box width={"90%"} m="auto" mt="5"p="10px">
                        <Heading fontSize={"1.6rem"} fontWeight="500" textAlign={"start"}   > { ` $ ${el.price}`} </Heading>
                         </Box>
                     
                      <Box width={"90%"} m="auto" mt="5" p="10px">
                       <Text color="#444" textAlign={"start"} lineHeight={"2.7rem"} fontWeight="600">{` ** ${el.category}`}</Text>
                      </Box>
                       
                       </Box>

                       <Box  mt="10"> 
                        <Button background={"red.600"} variant="red" color="#FFFFFF" > Book  </Button>
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

export default Room