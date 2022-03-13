import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import ProjectShowcase from "../components/ProjectShowcase";
import SelectFilter from "../components/SelectFilter";
import ShowcaseComponent from "../components/ShowcaseComponent";
import TechAndStack from "../components/TechAndStack";

function success(pos) {
  const myStorage = window.localStorage;
  var crd = pos.coords;
  const location = {
    latitude: `${crd.latitude}`,
    longitude: `${crd.longitude}`,
    accuracy: `${crd.accuracy}`,
  };
  myStorage.setItem("userIp", JSON.stringify(location));
}

function error(err) {
  console.log(`ERROR(${err.code}): ${err.message}`);
}

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    });
  }
}

const index = () => {
  const router = useRouter();
  const { error } = router.query;

  React.useEffect(() => {
    getUserLocation();
  });

  return (
    <Box>
      <Head>
        <title>Home | FindCoder</title>
      </Head>
      <Layout>
        {error && <Banner />}
        <About />
        <SelectFilter />
        <TechAndStack />
        <ProjectShowcase />
        <ShowcaseComponent />
      </Layout>
    </Box>
  );
};

export default index;
