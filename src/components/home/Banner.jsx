import { Box, Button, Container, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { bannerBg, NavLogo } from "../../assets/images";
import { ArrowForwardIos } from "@mui/icons-material";
import useOnScreen from "../../hooks/useOnScreen";

function Banner() {
  const [availableBtnBgColor, setAvailableBtnBgColor] = useState("primary.main");

  const scrollToContact = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        // width: "calc(100vw - 20px)",
        // width: { xs: "100vw", md: "calc(100vw - 20px)" },
        display: "flex",
      }}
      data-aos="fade-up"
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.2)",
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ py: { xs: "10px", md: "30px" }, px: { xs: "10px", md: "30px" } }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: { xs: "center", md: "center" } }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <Box
                component="img"
                src={NavLogo}
                alt="logo"
                sx={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  marginRight: "20px",
                }}
              /> */}
              <Typography
                variant="bebus"
                sx={{
                  color: "secondary.main",
                  fontSize: { md: "36px", xs: "12px" },
                  letterSpacing: { md: "-3px", xs: "-1px" },
                  fontWeight: 700,
                  marginRight: "20px",
                }}
              >
                SAAD KHAN
              </Typography>
              <Typography
                variant="normal"
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                UI/UX, Ecommerce Growth, Creative Direction
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignSelf: { xs: "center", md: "center" },
                mt: { xs: "20px", md: 0 },
              }}
            >
              <Button variant="secondary" onMouseEnter={() => setAvailableBtnBgColor("#000")} onMouseLeave={() => setAvailableBtnBgColor("primary.main")}>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: availableBtnBgColor,
                    marginRight: "10px",
                  }}
                />
                Available
              </Button>
              <Button variant="primary" onClick={() => scrollToContact("contact")}>
                CONTACT
              </Button>
            </Box>
          </Box>

          {/* TEXT */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", lg: "60%" },
              px: { xs: 0, lg: "60px" },
              height: "calc(100vh - 100px)",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: { xs: "60px", md: "100px" },
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                ECOMMERCE GROWTH
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "60px", md: "100px" },
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                DIGITAL DESIGN
              </Typography>
            </Box>
            <Typography
              variant="normal"
              sx={{
                color: "secondary.main",
                fontSize: { xs: "14px", md: "20px" },
                fontWeight: 400,
              }}
            >
              As a conversion-focused UI/UX designer, I help e-commerce businesses thrive by crafting intuitive, high-converting websites. With years of experience working alongside multi-million-dollar brands, I bring a deep understanding of CRO and user-centric design to every project. My passion? Helping businesses not just look good online but drive real results.
            </Typography>
            <Button
              onClick={() => scrollToContact("work-method")}
              variant="hover-btn"
              sx={{
                fontSize: { xs: "14px", md: "22px" },
              }}
            >
              MORE ABOUT ME
              <ArrowForwardIos sx={{ fontSize: { xs: "14px", md: "22px" }, ml: "10px" }} />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
