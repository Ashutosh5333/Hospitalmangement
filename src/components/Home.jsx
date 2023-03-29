import React from "react";
import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BsBarChartSteps } from "react-icons/bs";
import { data } from "./Data/data";



const Home = () => {
  return (
    <>
      <Box>
        <Box
          width={{ base: "80%", md: "95%", lg: "90%" }}
          margin="auto"
          position={"relative"}
          zIndex="-2"
        >
          <Image
            src="https://regencyhealthcare.in/wp-content/uploads/2021/12/NWB_4@72x-100.jpg"
            alt="regencyImage"
          />
        </Box>
        <Box display="flex" width={"90%"} margin="auto">
          <SimpleGrid columns={[2, 2, 4]}>
            {data.length > 0 &&
              data.map((el) => {
                return (
                  <Box
                    key={el.id}
                    background="#DB2637"
                    width={{ base: "90%", md: "95%", lg: "100%" }}
                    margin="auto"
                    mt="6"
                    shadow={"lg"}
                    height="40vh"
                    overflow={"hidden"}
                  >
                    <Box width="95%" margin={"auto"}>
                      <Box mt="4">
                        <Text
                          color="#FFFFFF"
                          fontSize={"1.5rem"}
                          fontWeight="600"
                          textAlign={"start"}
                          borderBottom="3px solid #fff"
                        >
                          {" "}
                          {el.title}{" "}
                        </Text>
                      </Box>
                      <Box mt="4">
                        <Text
                          color="#FFFFFF"
                          lineHeight={"1.5rem"}
                          textAlign={"start"}
                          fontSize={{ base: ".8rem", md: "1rem", lg: "1.2rem" }}
                        >
                          {" "}
                          {el.description}{" "}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </SimpleGrid>
        </Box>

        <Box  width="90%" m="auto" height={"60vh"}>
          <Heading
            textAlign={"start"}
            fontSize={{ base: "2rem", md: "3rem", lg: "5rem" }}
            fontFamily="Playfair"
            color="brown"
            mt="10"
          >
            {" "}
            Why Choose Regency{" "}
          </Heading>

          <Text
            textAlign={"start"}
            fontSize={{ base: ".8rem", md: "1.2rem", lg: "1.5rem" }}
            fontFamily="Playfair"
            color="#444"
            mt="10"
          >
            {" "}
            When it is about providing specialized tertiary medical care
            services, we know Bharose plays an important role. This is why we as
            your Bharose ka Specialist go the extra mile to serve you with the
            best.
          </Text>

          <Box
         
            display="flex"
            justifyContent={"space-between"}
            gap="5" mt="5"
          >
            <Box   width={{ base: "80%", md: "90%", lg: "90%" }} m="auto">
              <Text
                textAlign={"start"}
                fontWeight="600"
                fontFamily="Playfair"
                color="#444"
                mt="2"
              >
                A Stepping Stone
              </Text>
              <Text
                textAlign={"start"}
                fontFamily="Playfair"
                color="#444"
                mt="2"
              >
                {" "}
                One of the initial hospitals in UP to perform cardiac surgeries
                from simple to complex namely, coronary angiography,
                angioplasty, pacemaker implantation, valvuloplasty and more.
              </Text>
            </Box>
            <Box  width={{ base: "80%", md: "90%", lg: "90%" }} m="auto">
              <Text
                textAlign={"start"}
                fontWeight="600"
                fontFamily="Playfair"
                color="#444"
                mt="2"
              >
                All Under One Roof
              </Text>
              <Text
                textAlign={"start"}
                fontFamily="Playfair"
                color="#444"
                mt="2"
              >
                {" "}
                One of the first hospitals providing speciality support for
                scarce treatments such as superior polytrauma care with in-house
                ICU, CT scan, blood bank and more.{" "}
              </Text>
            </Box>
          </Box>

          <Box
          
            display="flex"
            justifyContent={"space-between"}
            gap="5"
            mt="5"
          >
            <Box  width={{ base: "80%", md: "90%", lg: "90%" }} m="auto">
              <Text
                textAlign={"start"}
                fontWeight="600"
                fontFamily="Playfair"
                color="#444"
                mt="2"
              >
                Cancer Specialist
              </Text>
              <Text
                textAlign={"start"}
                fontFamily="Playfair"
                color="#444"
                mt="2"
              >
                {" "}
                Progressively maintain extensive infomediaries via extensible
                niches. Dramatically disseminate metrics.
              </Text>
            </Box>
            <Box  width={{ base: "80%", md: "90%", lg: "90%" }} m="auto">
              <Text
                textAlign={"start"}
                fontWeight="600"
                fontFamily="Playfair"
                color="#444"
                mt="2"
              >
                An All-Hour Support
              </Text>
              <Text
                textAlign={"start"}
                fontFamily="Playfair"
                color="#444"
                mt="2"
              >
                A dedicated and easy to remember emergency access number clubbed
                with 24×7 ambulance service, blood bank, operating rooms, and
                X-ray facilities provide an edge above the rest
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
