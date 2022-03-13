import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../components/Layout";
import LoginComponent from "../../components/LoginComponent";

function login() {
  return (
    <Box>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <Box>
          <LoginComponent />
        </Box>
      </Layout>
    </Box>
  );
}

export default login;
