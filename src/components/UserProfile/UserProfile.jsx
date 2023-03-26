import React, { useEffect } from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "../Style/userprofile.css";
import { useDispatch, useSelector } from "react-redux";
import { GetUserData } from "../../Redux/AuthReducer/Action";

import { getAppointmentdata } from "../../Redux/AppReducer/Action";
import Userform from "./Userform";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userdetail = useSelector((store) => store.AuthReducer.Userdetail);
  console.log(userdetail)
  const BookAppoinment = useSelector(
    (store) => store.AppReducer.BookAppointmentData
  );


  useEffect(() => {
    dispatch(GetUserData);
  }, []);

  useEffect(() => {
    dispatch(getAppointmentdata);
  }, []);



  return (
    <>
      <Box mt="10">

      {
         userdetail.length> 0 ? 
        <Box>
          {userdetail.length > 0 &&
            userdetail.map((el) => {
              return (
                <Box
                  key={el._id}
                  className="userprofile"
                  width="95vw"
                  m="auto"
                  display="flex"
                  justifyContent={"space-around"}
                  gap="10px"
                  mt="10"
                  p="10"
                  boxShadow={"lg"}
                  fontFamily="Playfair"
                >
                  <Box
                    className="user-image"
                    width={{ base: "80%", md: "90v%", lg: "100%" }}
                  >
                    <Image className="UImage" src={el.pic} alt="Image" />
                  </Box>

                  <Box
                    className="Address-Section"
                    width={{ base: "70vw", md: "60vw", lg: "60vw" }}
                    height="50vh"
                    display={"flex"}
                    justifyContent="space-evenly"
                  >
                    <Box
                      height={{ base: "55vh", md: "30vh", lg: "30vh" }}
                      width={{ base: "50vw", md: "40vw", lg: "30vw" }}
                      m="auto"
                      p="5"
                    >
                      <Text
                        fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                        textAlign="start"
                        mt="5"
                      >
                        {" "}
                        <span style={{ fontWeight: "600" }}>Name: </span>{" "}
                        {el.name}
                      </Text>
                      <Text
                        fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                        textAlign="start"
                        mt="5"
                      >
                        <span style={{ fontWeight: "600" }}>Age: </span>{" "}
                        {el.Age}
                      </Text>
                      <Text
                        fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                        textAlign="start"
                        mt="5"
                      >
                        {" "}
                        <span style={{ fontWeight: "600" }}>Gender: </span>{" "}
                        {el.gender}
                      </Text>
                    </Box>

                    <Box
                      height={{ base: "55vh", md: "30vh", lg: "30vh" }}
                      width={{ base: "50vw", md: "40vw", lg: "30vw" }}
                      m="auto"
                      p="5"
                    >
                      <Text
                        fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                        textAlign="start"
                        mt="5"
                      >
                        {" "}
                        <span style={{ fontWeight: "600" }}>
                          State
                        </span> :- {el.State}{" "}
                      </Text>
                      <Text
                        fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                        textAlign="start"
                        mt="5"
                      >
                        {" "}
                        <span style={{ fontWeight: "600" }}>Mobile</span>: -{" "}
                        {el.PhNumber}{" "}
                      </Text>
                     
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box> :<Box margin={"auto"}>
            <Text fontSize={{ base: "1rem", md: "2rem", lg: "3.2rem" }}  fontFamily="Playfair" fontWeight={"600"}> Fill your Details </Text>
                       <Userform/>
            </Box>
      }



        <Box height={"40vh"} mt="10">
         
         {
          BookAppoinment.length >0 && BookAppoinment.map((ele) =>{
             return <Box key={ele._id} width="90%" m="auto" mt="1" background={"#f3f3f3"} p="10">
            <Box width="100%" m="auto" mt="20px" marginLeft={"10px"}>
              <Text
                textAlign={"start"}
                fontSize="2rem"
                fontWeight={"600"}
                color="#444444"
                fontFamily={"playfair Display"}
              >
                {" "}
                Your Appointment with {ele.Doctor}
              </Text>
              <Text    textAlign={"start"} fontWeight={"600"}
                color="#444444"
                fontFamily={"playfair Display"} fontSize={{ base: ".8rem", md: "1.5rem", lg: "2rem" }} mt="10"> Date  And Time : {ele.Date} </Text> 
         
            </Box>


          </Box>
          })

         }

        </Box>

        {/*  --------------  */}
      </Box>
         



    </>
  );
};

export default UserProfile;
