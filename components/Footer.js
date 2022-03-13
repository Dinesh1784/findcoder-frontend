import {
  Box,
  Button,
  Center,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const footerData = [
  "Home",
  "Disclaimer",
  "Cookie Policy",
  "Return Policy",
  "Terms of Service",
  "Privacy Policy",
  "Report Bugs/Enhancement",
];

function Footer() {
  return (
    <Box
      as="footer"
      p={5}
      bg={useColorModeValue("#f0e7db", "#202023")}
      w="100%"
    >
      <Center>
        <Stack>
          <Center>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
            >
              FindCoder Inc.
            </Text>
          </Center>
          <Center>
            <Text
              my={3}
              fontSize="sm"
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
            >
              A platform to bring developers from all stack and recruiters at
              one place.
            </Text>
          </Center>
          <Stack
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "flex-start", md: "center" }}
          >
            {footerData &&
              footerData.map((footer, index) => (
                <Button variant="link" key={index}>
                  {footer}
                </Button>
              ))}
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
}

export default Footer;
