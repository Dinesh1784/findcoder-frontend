import {
  Container,
  Image,
  Text,
  Grid,
  GridItem,
  VStack,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";

const projects = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const getProducts = async () => {
    setIsLoading(true);
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setIsLoading(false);
    setProducts(data);
  };
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Flex height={"90vh"} justifyContent={"center"} alignItems={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      ) : (
        <Container maxWidth={"container.xl"}>
          <Grid templateColumns="repeat(5, 1fr)" gap={5} mt={"4"}>
            {products &&
              products.map((prod) => (
                <GridItem key={prod.title} colSpan={{ base: 12, md: "auto" }}>
                  <VStack>
                    <Image
                      loading="eager"
                      height={"200px"}
                      width={"100%"}
                      objectFit={"cover"}
                      src={prod.image}
                      alt={prod.title}
                      onClick={() => {
                        router.push(`/projects/${prod.id}`);
                      }}
                    />
                    <Text>{prod.title}</Text>
                  </VStack>
                </GridItem>
              ))}
          </Grid>
        </Container>
      )}
    </Layout>
  );
};

export default projects;
