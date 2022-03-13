import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";

const pageNotFound = () => {
  return (
    <Box>
      <Layout>
        <Flex height={"80vh"} justifyContent={"center"} alignItems={"center"}>
          <Heading as={"h2"}>404 | Page not found</Heading>
        </Flex>
      </Layout>
    </Box>
  );
};

export default pageNotFound;
