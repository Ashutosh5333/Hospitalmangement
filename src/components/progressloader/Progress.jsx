import React from "react";
import { Box, Image,  } from "@chakra-ui/react";

const Progressloader = () => {
  return (
    <>
     <Box  >
     
      <Box width={"100%"}   margin={"auto"} justifyContent="center" justifyItems={"center"} position="relative"  left={{ base: "20%", md: "100%", lg: "200%" }}>
       <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" alt="progressimage"  margin={"auto"} justifyContent="center" />
      </Box>

     </Box>
    </>
  );
};

export default Progressloader;
