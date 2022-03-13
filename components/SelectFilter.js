import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  FormLabel,
  Stack,
  Select,
  useColorModeValue,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { CITY_LIST } from "../data/cityList";

function SelectFilter() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={4}
      alignItems="center"
      justifyContent="space-between"
      p={5}
    >
      <Box
        bg={useColorModeValue("white", "#ffffff40")}
        p={5}
        borderRadius={10}
        flex={1}
      >
        <FormLabel>What tech stack are you looking for?</FormLabel>
        <Select variant="filled" placeholder="Nodejs, React, AWS" w="100%">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box
        bg={useColorModeValue("white", "#ffffff40")}
        p={5}
        borderRadius={10}
        flex={1}
      >
        <FormLabel>Location or Place</FormLabel>
        <Select
          variant="filled"
          placeholder="Chennai, Delhi, Banglore"
          w="100%"
        >
          {CITY_LIST &&
            CITY_LIST.map((city, index) => (
              <option key={index} value="city">
                {city}
              </option>
            ))}
        </Select>
      </Box>
      <Box
        bg={useColorModeValue("white", "#ffffff40")}
        p={5}
        borderRadius={10}
        flex={1}
      >
        <FormLabel>Availability </FormLabel>
        <Select
          variant="filled"
          placeholder="FullTime, PartTime or Permanent"
          w="100%"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box>
        <IconButton
          display={{ base: "none", md: "inline-block" }}
          icon={<SearchIcon />}
          colorScheme={useColorModeValue("purple", "orange")}
        />
        <Button
          display={{ base: "inline-block", md: "none" }}
          variant="solid"
          colorScheme={useColorModeValue("purple", "orange")}
          leftIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SelectFilter;
