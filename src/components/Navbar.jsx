import React from 'react'
import {Box,Flex,IconButton,useDisclosure,Stack,Text,Image,Input, Tooltip} from '@chakra-ui/react';
import {Link, Navigate} from "react-router-dom"
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {BsCartCheck, BsSearch} from "react-icons/bs"
import {FaUserCircle} from "react-icons/fa"
import {BiLogIn} from "react-icons/bi"
import khushi from "../assests/khushi.png"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

 
     const username = JSON.parse(localStorage.getItem("username"))
  
      const handleLogout = () =>{
          localStorage.clear()
          return <Navigate to="/" />
      }


  return (
    <>
     <Box px={4}  className='ChackraNavBar' shadow='2xl' borderBottom={{base : '0px', md :'1px solid black'}} padding='10px' position={"relative"} >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
              
            <Flex width={{base : "20%", md :'13%', lg : '10%'}} justifyContent={'center'} >
             <Link to='/'><Image src={khushi} width='50px' m='auto'/></Link>
            </Flex>

              <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '90%', lg : '95%'}} justifyContent='space-around' alignItems='center' padding='10px'>
               
               <Flex width={{base : 0, md : "20%", lg :'10%'}} justifyContent='space-around' gap='10px' >
               <Link to="/dash"><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}}>Standard </Text></Link>
               <Link to="/dash"><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}}>Premium </Text></Link>
               </Flex>

               <Flex width={{base : '0', md : '60%', lg :'65%'}} border={'1px solid black'} padding='5px' alignItems='center'>
                <Text ml='10px'><BsSearch/></Text>
                <Input borderRadius='0px' border='0px' placeholder='SEARCH' variant="unstyled" padding='5px'/>
               </Flex>

               <Flex width={{base : "", md  : '25%', lg :'15%'}} justifyContent='space-around' fontSize='25px'>
               <Tooltip bg='#CBD5E0' color='black'  label={ username == null ?  'Login' : "LogOut"}><Link to="/login"><Text  onClick={handleLogout} ><BiLogIn/></Text></Link></Tooltip>
               <Tooltip bg='#CBD5E0' color='black' label='Cart'><Link to='/cart'><Text><BsCartCheck/></Text></Link></Tooltip>
               <Tooltip bg='#CBD5E0' color='black' label={ username == '' ?  'Profile' : username}><Link to="/userprofile"><Text><FaUserCircle/></Text></Link></Tooltip>
              </Flex>
              </Flex>
          </Flex> 
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }} >
              <Stack as={'nav'} spacing={4}>
                  <Link to='/dash'><Text>Standard</Text></Link>
                  <Link to='/dash'><Text>Premium</Text></Link>
                  <Link to='/cart'><Text>CART</Text></Link>
                  <Link to='/signup'><Text>SIGN UP</Text></Link>
                  <Link to='/login'><Text>LOG IN</Text></Link>
              </Stack>
            </Box>
          ) : null}
        </Box>

    </>
  )
}

export default Navbar