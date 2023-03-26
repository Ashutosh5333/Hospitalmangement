import { Box, Button, Image, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetCartData } from '../Redux/AppReducer/Action'
import "./Style/payment.css"
import { useState } from 'react';



const Payment = () => {
  const dispatch = useDispatch()
  const [total , SetTotal ] = useState(0)
 const Roomcart = useSelector(store =>  store.AppReducer.CartItem)
    // console.log( "roomcart",Roomcart)
 
    useEffect(() =>{
      dispatch(GetCartData)
     
   },[])

    const totalPrice  = () =>{
       const  quantiy =1
       var  ans =0
        Roomcart.map((el) =>{
         ans += el.price * quantiy 
        })
        SetTotal(ans)
    }
    // console.log(total)

     useEffect(() =>{
       totalPrice()
     },)
    



  return (
    <>
     <Box  className='Container' width="95%" m="auto" mt="10" display={"flex"} justifyContent="space-between" gap="5" mb="20">
           
           <Box  width={{ base: "70%", md: "70%", lg: "85%" }} >
           <Text fontSize={{ base: "2rem", md: "1.5rem", lg: "2rem" }} fontWeight="600" color="#444" fontFamily={"playfair"} > Payment Page  </Text>
           {
             Roomcart.length>0 && Roomcart.map((el) =>{
              return  <Box key={el._id} className='payment' width={{ base: "70%", md: "90%", lg: "100%" }} m="auto" mt="10" display={"flex"} justifyContent="space-around" gap={"5"} >
                          <Image m="auto" width={{ base: "70%", md: "80%", lg: "90%" }} src={el.pic} alt="payment-image" />
                         <Text className='payment-text' color="#444" fontFamily={"playfair"} m="auto" textAlign={"center"} fontSize={{ base: "1rem", md: "1.2rem", lg: "2rem" }} fontWeight={"600"}> 24 hour </Text> 
                        <Text className='payment-text' color="#444" fontFamily={"playfair"} m="auto" textAlign={"center"} fontSize={{ base: "1rem", md: "1.2rem", lg: "2rem" }} fontWeight={"600"}> {el.category}</Text> 

                        <Text className='payment-text' color="#444" fontFamily={"playfair"} m="auto" textAlign={"center"} fontSize={{ base: "1rem", md: "1.2rem", lg: "2rem" }} fontWeight={"600"}>{ `Rs ${el.price} `}</Text>
                    </Box>
             })
           }
           </Box>


           <Box  className='confirmpayment' width={{ base: "60%", md: "30%", lg: "25%" }} p="5" boxShadow={"lg"} >
               <Text color="#444" fontFamily={"playfair"} m="auto" textAlign={"start"} fontSize={{ base: "0.8rem", md: "1.2rem", lg: "2rem" }} fontWeight={"600"} mt="5">Your cart Quantity ({Roomcart.length}) </Text>
                <Text color="#444" fontFamily={"playfair"} m="auto" textAlign={"start"} fontSize={{ base: ".8rem", md: "1.2rem", lg: "2rem" }} fontWeight={"600"} mt="5"> Time :- 24hour only  </Text>
             
                <Text color="#444" fontFamily={"playfair"} m="auto" textAlign={"start"} fontSize={{ base: ".8rem", md: "1.2rem", lg: "2rem" }} fontWeight={"600"} mt="5"> Disount : - 00  </Text>
                <Text color="#444" fontFamily={"playfair"} m="auto" textAlign={"start"} fontSize={{ base: ".8rem", md: "1.2rem", lg: "2rem" }} fontWeight={"600"} mt="5"> Total Price : - {total} </Text>

                <Button colorScheme={"green"} mt="5"> Payment </Button>
           </Box>
           
          

          
     </Box>


    </>
  )
}

export default Payment