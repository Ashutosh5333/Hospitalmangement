import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {  AddToCartData, GetRoomData } from '../../Redux/AppReducer/Action';
import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Progressloader from '../progressloader/Progress';

const Room = () => {
   const dispatch = useDispatch()
   const Room = useSelector(store =>  store.AppReducer.RoomData)
    

     useEffect(() =>{
        dispatch(GetRoomData)
     },[])

     const AddToCart = (el) => {
         dispatch(AddToCartData(el))
         .then((res) =>{
          console.log(res)
         })
     }


    
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
                          
                         <Box width={"90%"} m="auto" mt="5"p="10px" display={"flex"} justifyContent="space-around" >
                        <Heading fontSize={{ base: "1.3rem", md: "1rem", lg: "1.6rem" }}   fontWeight="500" textAlign={"start"}   > { ` $ ${el.price}`} </Heading>
                        <Text color="#444" textAlign={"start"}  fontWeight="600">{`  ${el.category}`}</Text>
                         </Box>


                       
                       </Box>

                       <Box  mt="10"> 
                        <Button background={"red.600"} variant="red" color="#FFFFFF" onClick={() =>AddToCart(el)}> Add To Cart  </Button>
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