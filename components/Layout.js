import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Box
        as="main"
        pb={8}
        minHeight="100vh"
        bg={useColorModeValue("#f0e7db", "#202023")}
      >
        <Container maxW="container.xl" pt={14}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
