import {
  Box,
  useColorModeValue,
  Text,
  HStack,
  Avatar,
  VStack,
  Button,
  Container,
  Stack,
  Switch,
} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { BsFillPatchCheckFill } from "react-icons/bs";
import React from "react";

function profile() {
  const user = null;

  return (
    <Box>
      <Head>
        <title>My Profile</title>
      </Head>
      <Layout>
        <Container>
          <Box>
            <Text as="h3" fontWeight="bold" fontSize="xl" mt={5}>
              Account Settings
            </Text>
            <Text as="p" mb={5}>
              Change your profile, request your data, and more
            </Text>
            <Box
              bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.900")}
              boxSize={{ base: "100%", md: "100%" }}
              p={5}
              borderRadius={10}
            >
              <Box borderBottomColor="lightgrey" borderBottomWidth="1px">
                <Text color="black" fontWeight="bold">
                  Name & Avatar
                </Text>
                <Text color="black">Change your name and profile picture</Text>
                <HStack mt={5}>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <VStack spacing={0} alignItems="flex-start">
                    <Text color="black" fontWeight="bold">
                      Lisa Turner
                    </Text>
                    <Text color="black">Joined on 10 May</Text>
                  </VStack>
                </HStack>
                <HStack mt={5} mb={5}>
                  <Button size="sm" colorScheme="telegram">
                    Change name
                  </Button>
                  <Button size="sm" colorScheme="telegram">
                    Change avatar
                  </Button>
                </HStack>
              </Box>
              <Box mt={2}>
                <Text color="black" fontWeight="bold">
                  Login details
                </Text>
                <Text color="black">Change your email and password</Text>
                <HStack spacing={2} alignItems={"flex-end"}>
                  <Text mt={3} color="black" fontWeight="bold">
                    lisat09@example.com
                  </Text>
                  <BsFillPatchCheckFill color="green" size={23} />
                </HStack>
                <HStack mt={5} mb={5}>
                  <Button size="sm" colorScheme="telegram">
                    Change Email
                  </Button>
                  <Button size="sm" colorScheme="telegram">
                    Change Password
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>

          <Box>
            <Text as="h3" fontWeight="bold" fontSize="xl" mt={5}>
              Danger zone
            </Text>
            <Text as="p" mb={5}>
              Irreversible and destructive actions
            </Text>
            <Box
              bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.900")}
              boxSize={{ base: "100%", md: "100%" }}
              p={5}
              borderRadius={10}
            >
              <Box mt={2}>
                <Text color="black" fontWeight="bold">
                  Delete account and data
                </Text>
                <Text color="black">
                  Once you delete your user, there is no going back. Please be
                  certain.
                </Text>
                <Button variant="solid" colorScheme="red" my={3}>
                  Delete Account
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Layout>
    </Box>
  );
}

export default profile;
