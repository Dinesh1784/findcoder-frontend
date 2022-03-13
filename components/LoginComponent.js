import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  useColorModeValue,
  Button,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  FormHelperText,
  Stack,
  Input,
  Center,
  useToast,
} from "@chakra-ui/react";
import Router from "next/router";
import React from "react";

function LoginComponent() {
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => setShow(!show);

  const handleSubmit = (e) => {
    setLoading(true);
    if (email === "" || password === "") {
      setLoading(false);
      return toast({
        title: "Error",
        description: "Please check your email or password",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
    e.preventDefault();
    console.log(email);
    console.log(password);
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
    setEmail("");
    setPassword("");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Center>
      <Box boxShadow="xl" p={5} mt={5} width={{ base: "lg", md: "500px" }}>
        <Center flexDirection="column">
          <Text
            fontSize={{ base: "2xl", md: "2xl" }}
            fontWeight="bold"
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            mb={2}
          >
            Sign in to your account
          </Text>
          <Text mb={2} color={useColorModeValue("gray.800", "whiteAlpha.900")}>
            Dont you have an account?{" "}
            <Button
              variant="link"
              colorScheme="telegram"
              onClick={() => {
                Router.push("/auth/register");
              }}
            >
              Register here
            </Button>
          </Text>
        </Center>
        <Stack>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              borderColor={useColorModeValue("gray.800", "whiteAlpha.900")}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <InputGroup size="md" mt={4}>
              <Input
                pr="4.5rem"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderColor={useColorModeValue("gray.800", "whiteAlpha.900")}
                type={show ? "text" : "password"}
                placeholder="Enter password"
                id="password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  colorScheme="whatsapp"
                  onClick={handleClick}
                >
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text
              mt={2}
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
              align="right"
            >
              Forget Password?{" "}
              <Button variant="link" colorScheme="telegram">
                Click here
              </Button>
            </Text>
            <Button
              isLoading={loading}
              loadingText="Submitting"
              isFullWidth
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              mt={2}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Center>
  );
}

export default LoginComponent;
