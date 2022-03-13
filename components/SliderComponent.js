import { Box, Center, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

function SliderComponent({ data }) {
  return (
    <Box bg={useColorModeValue("white", "#ffffff40")} p={5}>
      <Stack direction="column" alignItems="center">
        <Center>
          <Image
            src={data.image}
            width="100px"
            height="100px"
            loading="lazy"
            alt={data.name}
          />
        </Center>
        <Text
          fontSize={{ base: "sm" }}
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontWeight={{ base: "normal", md: "bold" }}
          overflowX="hidden"
          overflowY="hidden"
        >
          {data.name}
        </Text>
      </Stack>
    </Box>
  );
}

export default SliderComponent;
