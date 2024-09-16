import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { FAQ1 } from "../../assets/images";
import Accordian from "../global/Accordian";

function Faqs() {
  const items = [
    {
      title: "What is your hourly rate?",
      description: "My hourly rate is $100. I also offer fixed-price packages for specific services. Please contact me for more information.",
    },
    {
      title: "What is your availability?",
      description: "I'm currently available for new projects. My schedule is flexible, and I can adjust it to meet your needs.",
    },
    {
      title: "Do you offer discounts for long-term projects?",
      description: "Yes, I offer discounts for long-term projects. Please contact me to discuss your project requirements and budget.",
    },
    {
      title: "What is your refund policy?",
      description: "I offer a 100% money-back guarantee if you're not satisfied with my work. Your satisfaction is my top priority.",
    },
    {
      title: "Do you provide ongoing support after the project is completed?",
      description: "Yes, I provide ongoing support and maintenance services after the project is completed. I'm here to help you succeed.",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        // width: "calc(100vw - 20px)",
        // width: { xs: "100vw", md: "calc(100vw - 20px)" },
        backgroundColor: "primary.background",
        mt: "100px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ py: { xs: "10px", md: "30px" }, px: { xs: "10px", lg: "90px" } }}>
          <Box
            component={"img"}
            src={FAQ1}
            alt="work process"
            sx={{
              height: { xs: "200px", md: "500px" },
              width: "100%",
              objectFit: "cover",
              objectPosition: "center 100%",
              filter: "grayscale(100%) brightness(0.5)",
              borderRadius: "10px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: "20px", md: "120px" },
              mt: "50px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: { xs: "100%", md: "45%" },
              }}
            >
              <Typography variant="bebus" sx={{ color: "secondary.main", fontSize: { md: "32px", xs: "20px" }, letterSpacing: "-2px", fontWeight: 700 }}>
                FREQUENTLY ASKED QUESTIONS
              </Typography>
              <Typography variant="normal" sx={{ color: "secondary.main", fontSize: { md: "14px", xs: "12px" } }}>
                You're not the only one who wants to know more about my services. Over the past few years, I've collected common questions. Is your question and answer not among them? Please contact me.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", width: { xs: "100%", md: "45%" } }}>
              <Accordian items={items} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Faqs;
