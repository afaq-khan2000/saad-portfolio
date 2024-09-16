import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function WorkCard({ work, i }) {
  const [isHovered, setIsHovered] = React.useState({ index: null, flag: false });
  return (
    <Grid
      item
      xs={12}
      md={6}
      key={work.id}
      data-aos="fade-up"
      sx={{
        pt: { xs: "0px !important", md: "80px !important" },
        mt: { xs: "30px", md: (i + 1) % 2 === 0 && i === 1 ? "200px" : i !== 0 && (i + 1) % 2 !== 0 ? "-200px" : "0px" },
      }}
    >
      <Box
        onMouseEnter={() => setIsHovered({ index: i, flag: true })}
        onMouseLeave={() => setIsHovered({ index: null, flag: false })}
        sx={{
          position: "relative", // To position text correctly within the Box
        //   width: "100%",
          height: "400px",
          borderRadius: "10px",
          overflow: "hidden", // To make sure the image and filter stay within bounds
          cursor: "pointer",
        }}
      >
        {/* Background image with filter */}
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1)), url(${work.image})`,
            filter: isHovered.index === i && isHovered.flag ? "grayscale(0%)" : "grayscale(100%)", // Apply the filter here
            transform: isHovered.index === i && isHovered.flag ? "scale(1.1)" : "scale(1)", // Optional zoom effect on hover
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            transition: "all 0.3s", // Optional smooth transition effect
          }}
        />

        {/* Hashtags */}
        {isHovered.index === i && isHovered.flag && (
          <Box sx={{ display: "flex", gap: "10px", position: "absolute", top: "10px", right: "10px" }}>
            {work.hashtags.slice(0, 3).map((hashtag, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "primary.background",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.8,
                  px: "10px",
                  py: "1px",
                  borderRadius: "5px",
                  textTransform: "uppercase",
                }}
              >
                <Typography
                  variant="normal"
                  sx={{
                    color: "secondary.main",
                    textTransform: "uppercase",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  {hashtag}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Text content positioned over the image */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "20px",
          }}
        >
          <Typography
            variant="bebus"
            sx={{
              color: "secondary.main",
              fontSize: "30px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-1px",
            }}
          >
            {work.title}
          </Typography>

          <Typography
            variant="normal"
            sx={{
              color: "primary.main",
              fontSize: "16px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            {work.category}
          </Typography>

          {/* Conditionally render description with smooth transitions */}
          {isHovered.index === i && isHovered.flag && (
            <Typography
              variant="bebus"
              sx={{
                display: { xs: "none", md: "block" }, // Hide on small screens
                color: "secondary.main",
                fontSize: "16px",
                letterSpacing: "1px",
                lineHeight: 1.5,
                opacity: isHovered.index === i && isHovered.flag ? 1 : 0, // Smooth fade-in effect
                transform: isHovered.index === i && isHovered.flag ? "translateY(0)" : "translateY(20px)", // Smooth slide-up effect
                transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out", // Transition for both opacity and transform
              }}
            >
              {work.description} {work.description}
            </Typography>
          )}
        </Box>
      </Box>
    </Grid>
  );
}

export default WorkCard;
