import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Layout from "../../components/Layout";

function register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box>
      <Head>
        <title>Register</title>
      </Head>
      <Layout>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} pt={10}>
          <Stack align={"center"}>
            <Heading
              fontSize={{ base: "2xl", md: "2xl" }}
              fontWeight="bold"
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
              mb={2}
            >
              Sign up
            </Heading>
            <Text
              fontSize={"xl"}
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
            >
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            boxShadow={"lg"}
            p={8}
            width={{ base: "100%", md: "lg" }}
          >
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  borderColor={useColorModeValue("gray.800", "whiteAlpha.900")}
                />
              </FormControl>
              <FormControl id="firstName" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  borderColor={useColorModeValue("gray.800", "whiteAlpha.900")}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  borderColor={useColorModeValue("gray.800", "whiteAlpha.900")}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    borderColor={useColorModeValue(
                      "gray.800",
                      "whiteAlpha.900"
                    )}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  //isLoading={true}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/auth/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Layout>
    </Box>
  );
}

export default register;
