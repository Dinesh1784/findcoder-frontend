import { Box, Stack, Text, Button, useColorModeValue } from "@chakra-ui/react";
import SliderComponent from "../components/SliderComponent";
import { techData } from "../data/techData";
import Slider from "react-slick";

function TechAndStack() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box p={5} mt={5} maxW="100%">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
        >
          What are you looking for?
        </Text>
        <Button
          colorScheme={useColorModeValue("purple", "orange")}
          variant="link"
        >
          View all
        </Button>
      </Stack>
      <Box my={5}>
        <Slider {...settings}>
          {techData &&
            techData.map((data) => (
              <SliderComponent key={data.name} data={data} />
            ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default TechAndStack;
