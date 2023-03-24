import {FormControl, Box, Input,  Heading,  Button, Text, Image,} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"

const Signup = () => {

    const handleChange = (e) =>{
       console.log(e.target.value)
    }
    
    const handleSubmit = () =>{

    }


  return (
    <>
    <Box  className='Signup'
 
     width={{base : "100%", md :'50%', lg : '40%'}} 
      
     margin={"auto"} mt="20px"> 

    <Box width="400px" m="auto" textAlign="center" px={8} mt={5} borderwidth={1}
    borderRadius={8} boxshadow="lg" mb={10}
     >

       <Heading style={{fontSize:"1.8em", fontWeight:"600", fontFamily:"sans-serif", fontStyle:"italic" }}> 
       <Box  margin="auto" justifyContent={"center"} marginLeft="70px" >
       <Image  src="https://regencyhealthcare.in/wp-content/uploads/2022/01/Regency-logo-250x75-1.png" />
             </Box>
      
       
       </Heading>
          
            <Link to="/login">
         <Button fontSize={"1.2em"} fontWeight="600" width="full" background={"blue.500"}  colorScheme="blue" color="#fff" mt="10"> Login in </Button>
            </Link>
         
         <br/>
         <br/>
        <FormControl>
         
          <Input type="email" placeholder="Email" 
          
          onChange={handleChange} 
           name="email"
           isRequired/>
        </FormControl>
        <br/>
        <FormControl>
        
          <Input type="name" placeholder="Full Name" 
             name="name"
             onChange={handleChange} 
           isRequired/>
        </FormControl>
        <br/>
        <FormControl>
      
          <Input type="text" placeholder="Mobile No" 
           name="number"
     onChange={handleChange} 
           isRequired/>
        </FormControl>
       
        <br/>
        <FormControl>
    
          <Input type='password' placeholder="Password"
           
          onChange={handleChange} 
           name="password"
           isRequired/>
        </FormControl>
     

              <br/>
        <Button width="full"  fontSize={"1.2em"} fontWeight="600" type="submit" onClick={handleSubmit} textAlign="center" background={"blue.500"}  colorScheme="blue">Sign up </Button>

           <Text style={{fontSize:"1rem", fontWeight:"500", color:"black"}}> By Signing up, you agree to our  </Text>
           <Text> <span style={{fontSize:"1rem", fontWeight:"600", color:"black"}}>Terms & Privacy Policy</span> </Text>
    </Box>

     
</Box>

    
    </>
  )
}

export default Signup