import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCartData, GetCartData } from '../Redux/AppReducer/Action'
import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Progressloader from './progressloader/Progress';
import { useToast } from '@chakra-ui/react'
import { Link, Navigate, useNavigate} from 'react-router-dom';

const Roomcart = () => {
  const dispatch = useDispatch()
   const navigate = useNavigate
   const toast = useToast()
  const Roomcart = useSelector(store =>  store.AppReducer.CartItem)
    

  
    const DEleteCart = (_id) =>{
      dispatch(DeleteCartData(_id))
      .then((r)=>{
        console.log(r)
        toast({
          position : 'top',
          colorScheme : 'red', 
          status : "success",
          title:"deleted "
        })
        window.location.reload()
      }).catch( (err) =>{
         console.log(err)
      })
    }

    useEffect(() =>{
      dispatch(GetCartData)
      
   },[])

  

  return (
    <>
     <Box>
     <Box  width="90%" m="auto" mt="5">

       {
         Roomcart.length>0 ?   <SimpleGrid columns={[1, 2, 4]} spacing={6} > 
         {
          Roomcart.length>0 ? 

          Roomcart.length>0 && Roomcart.map((el) => {
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
                        <Button background={"red.600"} variant="red" color="#FFFFFF" onClick={() =>DEleteCart(el._id)}> Delete </Button>
                       </Box>
                    
                 </Box> 

              })
              : <Box  m="auto"> 
                   <Progressloader /> 
              </Box>
            
         }
       </SimpleGrid> :  <Box margin={"auto"}>
            <Text fontSize={{ base: "1rem", md: "2rem", lg: "3.2rem" }}  fontFamily="Playfair" fontWeight={"600"}> Cart is Empty </Text>
             <Image justifyContent={"center"} src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="Emptycart" />
       </Box>


       }


      
      </Box>

          <Link to="/payment">
         <Box mt="20"  >
            <Button p="10" colorScheme={"red"} fontSize={"2rem"} textAlign="end" justifyContent={"flex-end"} > Confirm </Button>
          </Box>
          </Link>

     </Box>



    </>
  )
}

export default Roomcart