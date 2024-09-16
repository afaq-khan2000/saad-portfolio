import { Box, Typography } from "@mui/material";
import React from "react";
import { Banner, Contact, Faqs, Work, WorkMethod } from "../components/home";

function Home() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: { xs: "100vw", md: "calc(100vw - 20px)" },
      }}
    >
      <Banner />
      <WorkMethod />
      <Work />
      <Faqs />
      <Contact />
    </Box>
  );
}

export default Home;
