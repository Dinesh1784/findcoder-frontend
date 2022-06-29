import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
