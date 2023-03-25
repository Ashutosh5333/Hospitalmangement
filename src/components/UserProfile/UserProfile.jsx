import React, { useEffect } from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "../Style/userprofile.css";
import { useDispatch, useSelector } from "react-redux";
import { GetUserData } from "../../Redux/AuthReducer/Action";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userdetail = useSelector((store) => store.AuthReducer.Userdetail);

  useEffect(() => {
    dispatch(GetUserData);
  });

  return (
    <>
      <Box 
      // border="5px solid black"
       mt="10">
        <Box >
          {userdetail.length > 0 &&
            userdetail.map((el) => {
              return (
                <Box
                  key={el._id}
                  className="userprofile"
                  // border="1px solid red"
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
                    // border="3px solid yellow"
                    width={{ base: "70vw", md: "60vw", lg: "60vw" }}
                    height="50vh"
                    display={"flex"}
                    justifyContent="space-evenly"
                  >
                    <Box
                      // border="2px solid blue"
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
                        <span style={{ fontWeight: "600" }}>Age: </span> {el.Age}
                      </Text>
                      <Text
                        fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                        textAlign="start"
                        mt="5"
                      >
                        {" "}
                        <span style={{ fontWeight: "600" }}>
                          Gender:{" "}
                        </span> {el.gender}
                      </Text>
                    </Box>

                    <Box
                      // border="2px solid blue"
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
                          Address{" "}
                        </span> :- {el.Address}{" "}
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
        </Box>

        <Box 
        // border="3px solid yellow" 
        height={"40vh"} mt="10">
          <Heading fontFamily="Playfair"> Your Appointment Time </Heading>

          <TableContainer>
            <Table size="sm">
              <Thead height={"6vh"} fontFamily="Playfair">
                <Tr background={"blue"}>
                  <Th color="#fff">Monday</Th>
                  <Th color="#fff">Tuesday</Th>
                  <Th color="#fff">Wednesday</Th>
                  <Th color="#fff">Thursday</Th>
                  <Th color="#fff">Friday</Th>
                  <Th color="#fff">Saturday</Th>
                  <Th color="#fff">Sunday</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres </Td>
                  <Td>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres </Td>
                  <Td>25.4</Td>
                  <Td>inches</Td>
                </Tr>
               
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/*  --------------  */}

      </Box>
    </>
  );
};

export default UserProfile;
