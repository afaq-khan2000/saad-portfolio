import { Box, Typography } from "@mui/material";
import React from "react";
import { Banner, Contact, WorkMethod } from "../components/home";

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
      <Contact />
    </Box>
  );
}

export default Home;
