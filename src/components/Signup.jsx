import {FormControl, Box, useToast, Input,  Heading,  Button, Text, Image,} from '@chakra-ui/react'
import React, { useState ,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import $, { error } from "jquery"
import { useDispatch } from 'react-redux';
import { GetSignup } from '../Redux/AuthReducer/Action';


const Signup = () => {
 const dispatch = useDispatch()
 const navigate= useNavigate()
 const [errors ,SetErrors] = useState({})
 const [IsSubmit ,SetIsSubmit] = useState(false)
 const toast=useToast()
    const [post ,SetPost] = useState({
       name:"",
       email:"",
       password:"",
       PhNumber:"",
       Address:"",
    })
 
  

    const handleChange = (e) =>{
      const {name,value}=e.target
      SetPost({...post,[name]:value})
    }
  

    const handleSubmit = () =>{
        
        SetErrors(validated(post))
        SetIsSubmit(true)
        dispatch(GetSignup(post))
        .then((res) =>{
         
          if(res.type === "SINGUPUSERSUCESS" && res.payload !== "user Already exits try Another email" ){
               
            toast({
              position : 'top',
              colorScheme : 'green', 
              status : "success",
              title:"user created Successfully Account"
          })
              navigate("/login")
      }
      else{
      
        toast({
          position : 'top',
          colorScheme : 'green', 
          status : "success",
          title:res.payload
      })
      }
        })
        .catch((err)=>{
         console.log(err)
        })
   
    }
        
    useEffect(() =>{
  
     if(Object.keys(errors).length === 0 && IsSubmit){
        
     }
    },[errors])

     const validated = (values) =>{
       const error ={}
       const regex = /^[^s@]+@[^\s@]+\.[^\^\^s@]{2,}$/i
        if(!values.name){
         error.name="Username is required"
        }
        if(!values.email){
          error.email="Useremail is required"
         }else if (!regex.test(values.email)){
          error.email="This  is Not required email format"
         }
         if(!values.password){
          error.password="UserPassword is required"
         }else if (values.password.length<4){
          error.password="password must be more than 4 charecter"
         }else if (values.password.length>10){
          error.password="password can not exceed more than 10 charecter"
         }
         if(!values.PhNumber){
          error.PhNumber="UserNumber is required"
         }
         if(!values.Address){
          error.Address="UserAddress is required"
         }
       return error
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
        
          <Input type="name" placeholder="Full Name" 
             name="name"
             onChange={handleChange} 
           isRequired/>
        </FormControl>
          <Text> {errors.name} </Text>
        <br/>
        <FormControl>
         
          <Input type="email" placeholder="Email" 
          
          onChange={handleChange} 
           name="email"
           isRequired/>
        </FormControl>
        <Text> {errors.email} </Text>
        <br/>
   
        <FormControl>
    
          <Input type='password' placeholder="Password"
           
          onChange={handleChange} 
           name="password"
           isRequired/>
        </FormControl>
        <Text> {errors.password} </Text>
         <br/>
        <FormControl>
      
          <Input type="text" placeholder="Mobile No" 
           name="PhNumber"
                 onChange={handleChange} 
           isRequired/>
        </FormControl>
        <Text> {errors.PhNumber} </Text>
        <br/>
        <FormControl>
      
          <Input type="text" placeholder="Address" 
           name="Address"
                 onChange={handleChange} 
           isRequired/>
        </FormControl>
        <Text> {errors.Address} </Text>
     

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