import { createTheme } from "@mui/material/styles";
// import "../assets/fonts/TuskerGrotesk3800Super.DODskLYx.woff2";
// import "../assets/fonts/TuskerGrotesk4700Bold.vTnXbop9.woff2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#61fc65",
      background: "#202020",
      lightGray: "#505050",
    },
    secondary: {
      main: "#f9f9f9",
      background: "#1A1A1A",
    },
  },

  typography: {
    fontFamily: "Tusker 3800",
    normal: {
      fontFamily: "Inter serif, sans-serif",
      letterSpacing: "1px",
      lineHeight: 1.5,
    },
    bebus: {
      fontFamily: "Bebas Neue Pro, serif",
      letterSpacing: "1px",
      lineHeight: 1.5,
    },
  },

  components: {
    // Global component styles can be added here
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: "bebas-neue-pro, sans-serif",
          mixBlendMode: "normal",
          boxSizing: "border-box",
          boxShadow: "none",
          textTransform: "none",
          height: "40px",
          ...(ownerState.variant === "primary" && {
            backgroundColor: "#61fc65",
            borderRadius: "50px",
            color: "#000000",
            fontSize: "12px",
            fontWeight: 700,
            px: "20px",
            "&:hover": {
              backgroundColor: "#4eeb4f",
            },
            "&:active": {
              backgroundColor: "#4eeb4f",
              border: "none",
              outline: "none",
            },
            "&:focus": {
              backgroundColor: "#4eeb4f",
              border: "none",
              outline: "none",
            },
          }),
          ...(ownerState.variant === "secondary" && {
            backgroundColor: "transparent",
            borderRadius: "50px",
            border: "2px solid #fff",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            px: "20px",
            "&:hover": {
              backgroundColor: "#61fc65",
              color: "#000000",
              border: "2px solid #61fc65",
            },
            "&:active": {
              backgroundColor: "#61fc65",
              color: "#000000",
              border: "none",
              outline: "none",
            },
            "&:focus": {
              backgroundColor: "#61fc65",
              color: "#000000",
              border: "none",
              outline: "none",
            },
          }),
          ...(ownerState.variant === "hover-btn" && {
            fontFamily: "Tusker 3800",
            backgroundColor: "transparent",
            color: "#61fc65",
            letterSpacing: "2px",
            fontWeight: 700,
            borderRadius: "0px",
            width: "max-content",
            padding: "0px",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: 0,
                height: "2px",
                width: "100%",
                backgroundColor: "#61fc65",
                transition: "width 0.3s",
                transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
              },
            },
            "&:active": {
              outline: "none",
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: 0,
                height: "2px",
                width: "100%",
                backgroundColor: "#61fc65",
                transition: "width 0.3s",
                transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                border: "none",
              },
            },
            "&:focus": {
              outline: "none",
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: 0,
                height: "2px",
                width: "100%",
                backgroundColor: "#61fc65",
                transition: "width 0.3s",
                transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                border: "none",
              },
            },
          }),
        }),
      },
    },
  },
});

export default theme;
