import {FormControl, Box, Input,FormLabel,  Heading,  Button, Text, Image} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useState ,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import { GetLogin } from '../Redux/AuthReducer/Action';



const Login = () => {
   const navigate = useNavigate()
  const dispatch = useDispatch();
  const [errors ,SetErrors] = useState({})
  const [IsSubmit ,SetIsSubmit] = useState(false)
  const toast = useToast()
  const [post ,SetPost] = useState({
     email:"",
     password:""
  })

  const handleChange = (e) =>{
    const {name,value}=e.target
    SetPost({...post,[name]:value})
  }
  
  const handleSubmit = () =>{
    SetErrors(validated(post))
    SetIsSubmit(true)
       dispatch(GetLogin(post))
       .then((res) =>{
        //  console.log(res)
          if(res.type =="LOGINUSERSUCESS"){
                if(res.payload.msg != "user logged in Sucessfully"){
                  toast({
                    position : 'top',
                    colorScheme : 'red',
                    bg:"red",
                    status : "success",
                    description:"Wrong credential"
                  })
                }else{
                  toast({
                    position : 'top',
                    colorScheme : 'green', 
                    status : "success",
                    title:"Login Successfully"
                  })
                
                  localStorage.setItem("token", JSON.stringify(res.payload.token))
                   localStorage.setItem("username",JSON.stringify(res.payload.displayname))
                  navigate("/")
                }
          }
      
       })
  }

     
  useEffect(() =>{

   if(Object.keys(errors).length === 0 && IsSubmit){
    
   }
  },[errors])

   const validated = (values) =>{
     const error ={}
     const regex = /^[^s@]+@[^\s@]+\.[^\^\^s@]{2,}$/i
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
     return error
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
             <Link to="/signup">
            <Button fontSize={"1.2em"} fontWeight="600" width="full" background={"blue.500"}  colorScheme="blue" color="#fff" >Create your Account</Button>
             </Link>
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
           <Text> {errors.email} </Text>
           <br/>  
           <FormControl>
             <FormLabel variant="filled" my="10px"></FormLabel>
             <Input type='password' placeholder="Password" 
         
             onChange={handleChange}
              name="password"
              />
           </FormControl>
           <Text> {errors.password} </Text>
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