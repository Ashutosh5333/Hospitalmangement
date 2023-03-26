import React, { useEffect, useState } from "react";
import axios from "axios"
import {  Modal,  ModalOverlay,  ModalContent,  ModalBody,  Box,  Text,  Button,  useDisclosure,Input,  Image,} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";

const Userform = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [image, SetImage] = useState("");
   const [name,SetName] = useState("")
   const [email,Setemail] = useState("")
   const [Age,SetAge] = useState("")
   const [gender,Setgender] = useState("")
   const [State,SetState] = useState("")
   const [PhNumber,SetPhNumber] = useState("")
      const [url, SetUrl] = useState("");
      const token = JSON.parse(localStorage.getItem("token"))

      const payload ={
           name,
           email,
           Age,
           gender,
           State,
           PhNumber,
           pic:url
      }

         useEffect(() =>{
           if(url){
            axios.post(`https://tame-plum-narwhal-kilt.cyclic.app/userdetail/create`, payload,{
              headers:{
                 "Content-Type":"application/json",
                 "Authorization":`Bearer ${token}`
               },
             })
             .then((res) =>{
              console.log(res)
             }).catch((err) =>{
              console.log(err)
             })
           }
         },[url])

   const postImage = () =>{
    const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","hospital")
      data.append("cloud_name","dgvfiwlap")
      fetch("https://api.cloudinary.com/v1_1/dgvfiwlap/image/upload",{
        method:"post",
        body:data
      })
      .then(res =>res.json())
      .then(data =>{
         SetUrl(data.url)
        console.log(data.url)
      }).catch(err =>{
        console.log(err)
      })
   }
//  console.log(url)

  const handleSubmit = () => {
      postImage()
  };

  return (
    <>
      <Box onClick={onOpen} m="auto" justifyItems={"center"}>
        <Image justifyContent={"center"} m="auto" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41jLBhDISxL._SY355_.jpg" alt="userimage" />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />

        <ModalContent>
          <Box
            display="flex"
            justifyContent={"space-between"}
          >
            <Box fontSize={"35px"}>
              <BiArrowBack />
            </Box>
            <Button fontSize={"1.2rem"} color="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>

          <ModalBody>
            <Box>
            <Box    m="auto">
           
           <Box   width="90%" m="auto"  mt="1" background={"#f3f3f3"} p="10">               

             <Box  width="100%" m="auto" mt="20px" marginLeft={"10px"}>
                 <Text textAlign={"start"} fontSize="2rem" fontWeight={"600"}  color="#444444" fontFamily={"playfair Display"}> Fill you Details </Text>
             </Box>

              <Box  mt="20px" >
                 <Box  display={"flex"} justifyContent="space-around" gap={"10px"} className="input">
                     <Input placeholder='Your name *'  background={"#fff"} width="100%" name="name" onChange={(e) =>SetName(e.target.value)} />
                     <Input placeholder='Your Email *' background={"#fff"} width="100%" name="email" onChange={(e) =>Setemail(e.target.value)} />
                 </Box>

                 <Box display={"flex"} justifyContent="space-around" gap={"10px"} mt="20px"  className="input">
                     <Input placeholder='Age*' background={"#fff"} width="100%" name="Age"  onChange={(e) =>SetAge(e.target.value)}/>
                     <Input placeholder='gender*' background={"#fff"} width="100%" name="gender"  onChange={(e) =>Setgender(e.target.value)}/>
                 </Box>
                 <Box display={"flex"} justifyContent="space-around" gap={"10px"} mt="20px"  className="input">
                     <Input type="text" placeholder="State"  background={"#fff"} width="100%" name="state"  onChange={(e) =>SetState(e.target.value)}/>
                     <Input placeholder='Phone Number *' background={"#fff"} width="100%" name="Mobile"  onChange={(e) =>SetPhNumber(e.target.value)}/>
                 </Box>
              </Box>

           </Box>
          


      </Box>

{/* ------- Image -----  */}

              <Box
                // border="1px solid black"
                borderRadius={10}
                margin={"auto"}
                mt="4"
                fontWeight={"500"}
                color="#fff"
                fontSize={"1em"}
                backgroundColor={"blue.500"}
              >
                <label style={{ margin: "auto", textAlign: "center" }}>
                  <h4> Select from gallery </h4>

                  <input
                    type="file"
                    style={{ display: "none", margin: "auto" }}
                    name="image"
                    onChange={(e) => SetImage(e.target.files[0])}
                    // onChange={(e) => console.log(e.target.files[0])}
                  />
                </label>
              </Box>


            </Box>
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </>
  );
};

export default Userform;
