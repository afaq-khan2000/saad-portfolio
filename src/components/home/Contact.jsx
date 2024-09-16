import React from "react";
import { Behance, ContactImg, DP } from "../../assets/images";
import { Box, Container, Typography } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        // width: "calc(100vw - 20px)",
        // width: { xs: "100vw", md: "calc(100vw - 20px)" },
        backgroundColor: "secondary.background",
        mt: "100px",
        py: "50px",
      }}
    >
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${ContactImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5) grayscale(100%)",
          zIndex: 1,
          width: "100vw",
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ py: { xs: "10px", md: "30px" }, px: { xs: "10px", lg: "90px" } }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", md: "50%" },
                pr: { xs: "0px", lg: "180px" },
              }}
              data-aos="fade-right"
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "60px", lg: "120px" },
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "4px",
                  }}
                >
                  LET'S
                </Typography>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "60px", lg: "120px" },
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "4px",
                  }}
                >
                  COLLABORATE
                </Typography>
                <Typography
                  variant="normal"
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "12px", md: "14px" },
                    mt: "40px",
                  }}
                >
                  Let’s build something great together! Whether you’re ready to start a new project or want to explore how I can help your business grow, feel free to reach out. I’m always excited to connect with innovative brands looking to elevate their online experience
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "primary.background",
                  mt: "40px",
                  height: "150px",
                  //   width: "400px",
                  gap: "20px",
                  //   p: "20px",
                  borderRadius: "10px",
                }}
              >
                <Box
                  component="img"
                  src={DP}
                  alt="dp"
                  sx={{
                    height: "100%",
                    width: "150px",
                    objectFit: "cover",
                    objectPosition: "center 10%",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                  <Typography
                    sx={{
                      cursor: "pointer",
                      color: "secondary.main",
                      fontSize: { md: "24px", xs: "20px" },
                      letterSpacing: "1px",
                      fontWeight: 700,
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    SAAD K.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <Typography
                      variant="normal"
                      sx={{
                        cursor: "pointer",
                        color: "secondary.main",
                        fontSize: { md: "12px", xs: "12px" },
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                      onClick={() => window.open("mailto:m_saadkhan@outlook.com")}
                    >
                      m_saadkhan@outlook.com
                    </Typography>
                    <Typography variant="normal" sx={{ color: "secondary.main", fontSize: { md: "12px", xs: "12px" } }}>
                      +92 323 7507435
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    {/* <Instagram onClick={() => window.open("https://www.instagram.com/afaq_khan2000/")} sx={{ color: "secondary.main", cursor: "pointer", fontSize: "20px" }} />
                    <GitHub onClick={() => window.open("https://github.com/afaq-khan2000")} sx={{ color: "secondary.main", cursor: "pointer", fontSize: "20px" }} /> */}
                    <LinkedIn
                      onClick={() => window.open("https://www.linkedin.com/in/saad-khan5")}
                      sx={{
                        color: "secondary.main",
                        cursor: "pointer",
                        fontSize: "20px",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                    <Box
                      component={"img"}
                      src={Behance}
                      alt="behance"
                      sx={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                      onClick={() => window.open("https://www.behance.net/saad_khan")}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }} data-aos="fade-left">
              <Box
                component="img"
                src={ContactImg}
                alt="contact"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "grayscale(100%) brightness(0.7)",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
