import { Box, Button, Image, Link, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { GetCartData } from '../Redux/AppReducer/Action'
import "./Style/payment.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Payment = () => {
  const dispatch = useDispatch()
  const [total , SetTotal ] = useState(0)
  const navigate = useNavigate()
 const Roomcart = useSelector(store =>  store.AppReducer.CartItem)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
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
   

     useEffect(() =>{
       totalPrice()
     },)

     const handlehome = () =>{
      navigate("/")
     }
    



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

             
                <Button  colorScheme={"green"} onClick={onOpen}>
                Confirm payment
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
             Confirm payment
            </AlertDialogHeader>

            <AlertDialogBody>
             Thank you for Visiting Our websites 
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
               <Link to="/" >
              <Button colorScheme='red' onClick={handlehome} textDecoration={"none"} ml={3}>
                Done
              </Button>
               </Link>

            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
           </Box>
           
          

          
     </Box>


    </>
  )
}

export default Payment