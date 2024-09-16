import React, { useRef } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { WorkProcess } from "../../assets/images";
import { ArrowForwardIos } from "@mui/icons-material";

function WorkMethod() {
  return (
    <Box
      id="work-method"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        // width: "Calc(100vw - 20px)",
        // width: { xs: "100vw", md: "calc(100vw - 20px)" },
        backgroundColor: "primary.background",
      }}
      data-aos="fade-up"
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ py: { xs: "10px", md: "30px" }, px: { xs: "10px", lg: "90px" } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px", flexDirection: { xs: "column", md: "row" } }}>
            {/* LEFT SIDE */}

            <Box sx={{ display: "flex", gap: "10px", textTransform: "uppercase" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "10px" }}>
                {/* Vertical Text */}
                <Box sx={{ width: "1px", height: "70px", backgroundColor: "primary.main" }} />
                <Typography variant="bebus" sx={{ color: "secondary.main", fontSize: { xs: "12px", md: "14px" }, writingMode: "vertical-rl", textOrientation: "sideways-lr", transform: "rotate(180deg)", letterSpacing: "2px", fontWeight: 700 }}>
                  Freelance web designer & developer
                  {/* a vertical green line */}
                </Typography>
              </Box>
              <Box
                component={"img"}
                src={WorkProcess}
                alt="work process"
                sx={{
                  filter: "grayscale(100%)",
                  width: { xs: "100%", lg: "500px" },
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "10px",
                }}
              />
            </Box>

            {/* RIGHT SIDE */}

            <Box sx={{ display: "flex", flexDirection: "column", gap: "40px", px: { xs: "0px", lg: "40px" }, mt: { xs: "20px", lg: "0px" } }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "60px", lg: "80px" },
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  VALUABLE WEBSITES
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "60px", lg: "80px" },
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  MADE WITH{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    PASSION
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "60px", lg: "80px" },
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  AND DEDICATION
                </Typography>
              </Box>
              <Typography
                variant="normal"
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                By working with me you will experience the quality of an agency, combined with personal contact and short lines of communication of a freelancer. I design and develop all my projects fully customized, perfectly tailored to the specific needs of my clients.
              </Typography>
              <Typography
                variant="normal"
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                With 15 years of experience, customers describe me as a true website specialist who has an appropriate solution for every issue. My pragmatic approach and passion for my work often leads to an end product of high quality, without unnecessary high costs.
              </Typography>
              <Button
                onClick={() => document.getElementById("work").scrollIntoView({ behavior: "smooth" })}
                variant="hover-btn"
                sx={{
                  fontSize: { xs: "14px", md: "22px" },
                }}
              >
                SEE MY WORK
                <ArrowForwardIos sx={{ fontSize: { xs: "14px", md: "22px" }, ml: "10px" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default WorkMethod;
