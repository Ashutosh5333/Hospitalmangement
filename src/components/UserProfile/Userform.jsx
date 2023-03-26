import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,  Text,  Button,  useDisclosure,
  Input,} from "@chakra-ui/react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";

const Userform = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, SetImage] = useState("");
  const [url, SetUrl] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <Box onClick={onOpen}>
        <MdOutlineCreateNewFolder fontSize={"5rem"}/>
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
                 {/* <Text  textAlign={"start"} fontSize="1.2rem" color="#444444"> Have An Emergency ? </Text> */}
                 <Text textAlign={"start"} fontSize="2rem" fontWeight={"600"}  color="#444444" fontFamily={"playfair Display"}> Fill you Details </Text>
             </Box>

              <Box  mt="20px" >
                 <Box  display={"flex"} justifyContent="space-around" gap={"10px"} className="input">
                     <Input placeholder='Your name *'  background={"#fff"} width="100%" name="name" />
                     <Input placeholder='Your Email *' background={"#fff"} width="100%" name="email"  />
                 </Box>

                 <Box display={"flex"} justifyContent="space-around" gap={"10px"} mt="20px"  className="input">
                     <Input placeholder='Age*' background={"#fff"} width="100%" name="Age" />
                     <Input placeholder='gender*' background={"#fff"} width="100%" name="gender" />
                 </Box>
                 <Box display={"flex"} justifyContent="space-around" gap={"10px"} mt="20px"  className="input">
                     <Input type="text" placeholder="State"  background={"#fff"} width="100%" name="state"  />
                     <Input placeholder='Phone Number *' background={"#fff"} width="100%" name="Mobile"  />
                 </Box>
              </Box>

           </Box>
          


      </Box>


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
