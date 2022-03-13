import { Box, Button, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Coder from "../assets/coder.svg";
import Image from "next/image";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box maxW="500px" p={5}>
        <Text
          fontSize="2xl"
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
        >
          Find A Perfect
        </Text>
        <Text
          fontSize="6xl"
          fontWeight="bold"
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
        >
          Talent
        </Text>
        <Text
          fontSize="sm"
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
        >
          A central location to find coders. Collab or hire coders with no
          middleman. An open platform to hire coders based on skills and
          projects. Showcase your work!
        </Text>
        <Stack direction="row" spacing={4} mt={10} mb={{ base: "20px" }}>
          <Button
            colorScheme="pink"
            variant="solid"
            onClick={() => {
              router.push("/talents");
            }}
          >
            Hire Talents
          </Button>
          <Button
            colorScheme="telegram"
            variant="solid"
            onClick={() => {
              router.push("/projects");
            }}
          >
            Explore Works
          </Button>
        </Stack>
      </Box>
      <Box p={5} boxSize={{ base: "sm", md: "md", lg: "lg" }}>
        <Image src={Coder} loading="lazy" />
      </Box>
    </Stack>
  );
}

export default About;
