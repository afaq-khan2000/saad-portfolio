import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";

export default function Accordian({ items }) {
  return (
    <Box>
      {items.map((data, index) => {
        return (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
              "&:before": {
                backgroundColor: "primary.lightGray",
              },
              padding: "0px",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon sx={{ color: "secondary.main" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                padding: "0px",
              }}
            >
              <Typography
                variant="normal"
                sx={{
                  color: "secondary.main",
                  fontSize: { md: "18px", xs: "14px" },
                  letterSpacing: "-1px",
                  fontWeight: 700,
                }}
              >
                {data.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "0px",
              }}
            >
              <Typography
                variant="normal"
                sx={{
                  color: "secondary.main",
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                {data.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
