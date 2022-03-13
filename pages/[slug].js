import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { Box, Text } from "@chakra-ui/react";

const CoderDetails = () => {
  const name = "dinesh";
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Box>
      <Layout>
        <Text>Hello {slug}</Text>
      </Layout>
    </Box>
  );
};

export default CoderDetails;
