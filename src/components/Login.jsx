import {FormControl, Box, Input,FormLabel,  Heading,  Button, Text, Image,} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import khushi from "../assests/khushi.png"

const Login = () => {

  const handleChange = () =>{

  }
  const handleSubmit = () =>{

  }

  return (
    <> 
    <Box 
        width={{base : "100%", md :'50%', lg : '40%'}} 
         
        margin={"auto"} mt="20px">  
  
   
       <Box width="400px" m="auto" textAlign="center" px={8} mt={10} borderwidth={1}
       borderRadius={8} boxshadow="lg"
        >
      
         
   
           <Heading style={{fontSize:"1.8em", fontWeight:"600", fontFamily:"sans-serif", letterSpacing:".2px" }}> 
             <Box  margin="auto" justifyContent={"center"} marginLeft="70px" >
             <Image  src="https://regencyhealthcare.in/wp-content/uploads/2022/01/Regency-logo-250x75-1.png" />
             </Box>
            
          </Heading>
          <br/>
          <br/>
            <Button fontSize={"1.2em"} fontWeight="600" width="full" background={"blue.500"}  colorScheme="blue" color="#fff" > Login in with Facebook </Button>
            <br/><br/>
                   <Text>  OR   </Text> 
            <br/>  
           <FormControl>
             <FormLabel variant="filled" my="10px"   > </FormLabel>
             <Input type="email" placeholder="Email" 
            
             onChange={handleChange}
              name="email"
              />
           </FormControl>
           <br/>  
           <FormControl>
             <FormLabel variant="filled" my="10px"></FormLabel>
             <Input type='password' placeholder="Password" 
         
             onChange={handleChange}
              name="password"
              />
           </FormControl>
           <br/>
           <Button type="submit" fontWeight="700" width="full" colorScheme="blue" color="#fff" onClick={handleSubmit}  textAlign="center" >Log in</Button>
           <br/>
           <br/>
             <Text style={{fontSize:"1em", color:"blue", fontWeight:"600" }}> Forgot password ? </Text>
             <br/>
       </Box>
   
   
   </Box>
   </>
  )
}

export default Login