import NextLink from "next/link";
import {
  Box,
  Text,
  useColorModeValue,
  Container,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue("#ffffff40", "#20202380")}
        style={{ backdropFilter: "blur(10px)" }}
        zIndex={1000}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.xl"
          wrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="center" mr={5}>
            <Text
              fontSize={22}
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
              fontWeight="bold"
              fontFamily="Quicksand"
            >
              <NextLink href="/">FindCoder</NextLink>
            </Text>
          </Flex>
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <Link href="/user/profile">Profile</Link>
            <Link href="/user/projects">Project</Link>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
            <Link href="/projects">Explore Work</Link>
            <Link href="/talents">Search Talents</Link>
          </Stack>
          <Box flex={1} align="right">
            <ThemeToggleBtn />
            <Box display={{ base: "inline-block", md: "none" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/projects">
                    <MenuItem as={Link}>Explore Work</MenuItem>
                  </NextLink>
                  <NextLink href="/talents">
                    <MenuItem as={Link}>Search Talents</MenuItem>
                  </NextLink>
                  <NextLink href="/auth/login">
                    <MenuItem as={Link}>Login</MenuItem>
                  </NextLink>
                  <NextLink href="/auth/register">
                    <MenuItem as={Link}>Register</MenuItem>
                  </NextLink>
                  <NextLink href="/user/profile">
                    <MenuItem as={Link}>My Profile</MenuItem>
                  </NextLink>
                  <NextLink href="/user/projects">
                    <MenuItem as={Link}>My Project</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}

export default Header;
