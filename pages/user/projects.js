import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../components/Layout";

function projects() {
  return (
    <>
      <Head>
        <title>My Project's</title>
      </Head>
      <Layout>
        <Box>
          <h2>Iam Project page</h2>
        </Box>
      </Layout>
    </>
  );
}

export default projects;
