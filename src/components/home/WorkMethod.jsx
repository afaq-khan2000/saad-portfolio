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
                <Box sx={{ width: "5px", height: "70px", backgroundColor: "primary.main" }} />
                <Typography sx={{ color: "secondary.main", fontSize: { xs: "20px", md: "24px" }, writingMode: "vertical-rl", textOrientation: "sideways-lr", transform: "rotate(180deg)", letterSpacing: "1px", fontWeight: 700 }}>
                  UI/UX, Ecommerce Growth, Creative Direction
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
                  I AM YOUR
                </Typography>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "60px", lg: "80px" },
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  ECOMMERCE
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "60px", lg: "80px" },
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  GROWTH PARTNER
                </Typography>
              </Box>
              <Typography
                variant="normal"
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                With over seven years of experience in digital design and e-commerce, I am a creative leader who helps visionary brands enhance their customer journey and increase their conversion rate through user-centered designs.
              </Typography>
              <Typography
                variant="normal"
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                I offer a range of services, from e-commerce design to conversion rate optimization. Whether you’re looking to refresh your website or need a deep-dive into improving your sales funnel, I provide tailored solutions that align with your goals. My approach combines creativity with data-driven insights to ensure every design decision maximizes user engagement and ROI.
              </Typography>
              {/* <Button
                onClick={() => document.getElementById("work").scrollIntoView({ behavior: "smooth" })}
                variant="hover-btn"
                sx={{
                  fontSize: { xs: "14px", md: "22px" },
                }}
              >
                SEE SOME OF MY WORK
                <ArrowForwardIos sx={{ fontSize: { xs: "14px", md: "22px" }, ml: "10px" }} />
              </Button> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default WorkMethod;
