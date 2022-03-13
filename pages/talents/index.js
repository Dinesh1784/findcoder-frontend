import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/Layout";
import TalentComponent from "../../components/TalentComponent";
const talents = () => {
  return (
    <Layout>
      <Container maxWidth={"container.md"}>
        <Text>List of Talents</Text>
        <Box>
          <TalentComponent />
        </Box>
      </Container>
    </Layout>
  );
};

export default talents;
