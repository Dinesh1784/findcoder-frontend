import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <Center bg={"red.500"} p={4}>
        <Text>Please login to continue</Text>
      </Center>
    </Box>
  );
};

export default Banner;
