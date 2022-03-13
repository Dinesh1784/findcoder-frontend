import {
  Box,
  Stack,
  useColorModeValue,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import AdminCuta from "../assets/Admin-cuate.png";

function ShowcaseComponent() {
  return (
    <Box p={5}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={3}
        alignItems="center"
      >
        <Box>
          <Stack direction="column">
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              bg={useColorModeValue("blue.200", "blue.700")}
              p={5}
              borderRadius={10}
              minHeight="250px"
            >
              <Center display={{ base: "none", md: "flex" }}>
                <Image
                  src={AdminCuta}
                  alt="admin logo"
                  width="200px"
                  height="200px"
                  loading="lazy"
                />
              </Center>
              <Box ml={{ base: "none", md: "10" }}>
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  color={useColorModeValue("gray.800", "whiteAlpha.900")}
                  fontWeight="bold"
                >
                  Popular Projects
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.800", "whiteAlpha.900")}
                  overflow="auto"
                >
                  An open platform to hire coders based on skills and projects.
                  Showcase your work!
                </Text>
                <Button colorScheme="telegram" variant="solid" my={3}>
                  Explore Works
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              bg={useColorModeValue("red.200", "red.700")}
              p={5}
              borderRadius={10}
              minHeight="250px"
            >
              <Box mr={{ base: "none", md: "10" }}>
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  fontWeight="bold"
                  color={useColorModeValue("gray.800", "whiteAlpha.900")}
                >
                  Singular Focus
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.800", "whiteAlpha.900")}
                  overflow="auto"
                  my={1}
                >
                  We are trying to bring all developers together. Find
                  developers based on skills and cut the middle man.
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.800", "whiteAlpha.900")}
                  overflow="auto"
                  my={1}
                >
                  Hire for full time or part time, remote or at a location or
                  just find a person to code your project. Negotiate directly.
                </Text>
                <Button colorScheme="pink" variant="solid" my={3}>
                  Search Talents
                </Button>
              </Box>
              <Center display={{ base: "none", md: "flex" }}>
                <Image
                  src={AdminCuta}
                  alt="admin logo"
                  width="200px"
                  height="200px"
                  loading="lazy"
                />
              </Center>
            </Box>
          </Stack>
        </Box>
        <Box
          bg={useColorModeValue("green.200", "green.700")}
          p={5}
          borderRadius={10}
          maxW="lg"
        >
          <Box mr={{ base: "none", md: "10" }}>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
              fontWeight="bold"
            >
              Grab the chances to get hired or employed by creating your job
              profile
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
              overflow="auto"
            >
              This is not a job portal, where companies can post their jobs.
              This is reverse of that. HR can come and comb through the
              developers for job or projects and reach them out directly, if HR
              thinks that candidate is a right fit. This is also not a linkedIN
              to get engagement. Find a candidate, reach him out directly and
              discuss directly. NO MIDDLE MAN
            </Text>
            <Button colorScheme="orange" variant="solid" my={3}>
              Create Profile
            </Button>
          </Box>
          <Center display={{ base: "none", md: "flex" }}>
            <Image
              src={AdminCuta}
              alt="admin logo"
              width="200px"
              height="200px"
              loading="lazy"
            />
          </Center>
        </Box>
      </Stack>
    </Box>
  );
}

export default ShowcaseComponent;
